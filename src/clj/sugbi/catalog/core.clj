(ns sugbi.catalog.core
  (:require
   [clojure.set :as set]
   [sugbi.catalog.db :as db]
   [sugbi.catalog.open-library-books :as olb]))


(defn merge-on-key
  [k x y]
  (->> (concat x y)
       (group-by k)
       (map val)
       (mapv (fn [[x y]] (merge x y)))))


(def available-fields olb/relevant-fields)

(comment 
  (db/insert-book! {:title "¿Sufren las piedras?. Pequeño manual filosófico" :isbn "978-6073828345"})
  (db/insert-book! {:title "El hombre que cayó a la Tierra" :isbn "978-6073828673"})
  (db/insert-book! {:title "Mil Veces Hasta Siempre" :isbn "978-6073161145"})
  (db/get-books {})
  (db/insert-book-item! {:book-id 1})
  (db/insert-book-item! {:book-id 1})
  (db/insert-book-item! {:book-id 2})
  (db/insert-book-item! {:book-id 2})
  (db/insert-book-item! {:book-id 3})
  (checkout-book 1 2)
  (checkout-book 1 2)
  (checkout-book 2 3)
  (checkout-book 1 5)
  (db/get-book-item-loans! {:book-item-id 3})
  (return-book 2 3)
  (return-book 4 5)
  (get-book-loans 1)
  (get-book "1234")
  )


(defn get-book
  [isbn fields]
  (when-let [db-book (db/get-book {:isbn isbn})]
    (let [open-library-book-info (olb/book-info isbn fields)]
      (merge db-book open-library-book-info))))


(defn get-books
  [fields]
  (let [db-books                (db/get-books {})
        isbns                   (map :isbn db-books)
        open-library-book-infos (olb/multiple-book-info isbns fields)]
    (merge-on-key
     :isbn
     db-books
     open-library-book-infos)))


(defn enriched-search-books-by-title
  [title fields]
  (let [db-book-infos           (db/matching-books title)
        isbns                   (map :isbn db-book-infos)
        open-library-book-infos (olb/multiple-book-info isbns fields)]
    (merge-on-key
     :isbn
     db-book-infos
     open-library-book-infos)))

(defn checkout-book 
  [user-id book-item-id] 
  (let [book-id (db/find-book-id {:book-item-id book-item-id})] 
    (if (db/is-book-item-loan {:book-item-id book-item-id, :book-id book-id}) 
      false
      (db/insert-loan! {:user-id user-id, :book-item-id book-item-id}))))

(defn return-book
  [user-id book-item-id]
  (comment
    (let [correct-data (db/delete-loan! {:user-id user-id, :book-item-id book-item-id})]
      (if (= correct-data 1)
        correct-data
        false))
    )
  (db/delete-loan! {:user-id user-id, :book-item-id book-item-id})
  )

(defn get-book-loans 
  [user-id]
  (db/user-book-loans {:user-id user-id}))

