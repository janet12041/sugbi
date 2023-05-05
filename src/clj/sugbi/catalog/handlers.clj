(ns sugbi.catalog.handlers
  (:require
   [ring.util.http-response :as response]
   [sugbi.catalog.db :as catalog.db]
   [sugbi.catalog.core :as catalog.core]
   ;;[ring.util.response :as response]
   [buddy.auth.backends.session :as session]))


(defn search-books
  [request]
  (if-let [criteria (get-in request [:parameters :query :q])]
    (response/ok
     (catalog.core/enriched-search-books-by-title
      criteria
      catalog.core/available-fields))
    (response/ok
     (catalog.core/get-books
      catalog.core/available-fields))))


(defn insert-book!
  [request]
  (let [{:keys [_isbn _title]
         :as book-info} (get-in request [:parameters :body])
        is-librarian?   (get-in request [:session :is-librarian?])]
    (if is-librarian?
      (response/ok
       (select-keys (catalog.db/insert-book! book-info) [:isbn :title]))
      (response/forbidden {:message "Operation restricted to librarians"}))))


(defn delete-book!
  [request]
  (let [isbn          (get-in request [:parameters :path :isbn])
        is-librarian? (get-in request [:session :is-librarian?])]
    (if is-librarian?
      (response/ok
       {:deleted (catalog.db/delete-book! {:isbn isbn})})
      (response/forbidden {:message "Operation restricted to librarians"}))))


(defn get-book
  [request]
  (let [isbn (get-in request [:parameters :path :isbn])]
    (if-let [book-info (catalog.core/get-book
                        isbn
                        catalog.core/available-fields)]
      (response/ok book-info)
      (response/not-found {:isbn isbn}))))

(defn checkout-book!
  [request]
  (let [book-item-id (get-in request [:parameters :path :book-item-id])
        user-id      (get-in request [:session :sub])]
    (if (some? user-id)
      (if-let [book-item-id-exist (catalog.db/find-book-id
                                   {:book-item-id book-item-id})]
        (if-let [loan-info (catalog.core/checkout-book
                            user-id
                            book-item-id)]
          (response/ok loan-info)
          (response/conflict {:message "El ejemplar que deseas ya se encuentra en préstamo."}))
        (response/not-found {:book-item-id book-item-id}))
      (response/forbidden {:message "Necesitas tener una sesión activa."}))))

(defn return-book!
  [request]
  (let [book-item-id (get-in request [:parameters :path :book-item-id])
        user-id      (get-in request [:session :sub])]
    (if (some? user-id)
      (if-let [book-item-id-exist (catalog.db/find-book-id
                                   {:book-item-id book-item-id})]
        (let [delete-status (catalog.core/return-book
                             user-id
                             book-item-id)]
          (if (= delete-status 1)
            (response/ok {:deleted delete-status})
            (response/forbidden {:message "El libro no está prestado al usuario actual"})))
        (response/not-found {:book-item-id book-item-id}))
      (response/forbidden {:message "Necesitas tener una sesión activa."}))))

(defn get-lendings
  [request]
  (let [user-id (get-in request [:session :sub])]
    (if (some? user-id)
      (response/ok (catalog.core/get-book-loans
                 user-id))
      (response/forbidden {:message "Necesitas tener una sesión activa."}))))

(defn get-user-lendings
  [request]
  (let [user-id       (get-in request [:parameters :query :user-id]) 
        is-librarian? (get-in request [:session :is-librarian?])]
    (if is-librarian?
      (if-let [user-loans (catalog.core/get-book-loans
                           user-id)]
        (response/ok user-loans)
        (response/not-found {:user-id user-id}))
      (response/forbidden {:message "Operation restricted to librarians"}))))
