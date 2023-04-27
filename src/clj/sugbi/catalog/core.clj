(ns sugbi.catalog.core
 (:require
  [clojure.set :as set]
  [sugbi.catalog.db :as db] 
  [sugbi.db.utils :as db.utils]
  [sugbi.catalog.open-library-books :as olb]))


(defn merge-on-key
  [k x y]
  (->> (concat x y)
       (group-by k)
       (map val)
       (mapv (fn [[x y]] (merge x y)))))


(def available-fields olb/relevant-fields)


(defn get-book
  [isbn fields]
  (when-let [db-book (db/get-book {:isbn isbn})]
    (when-let [available (db/get-available-book isbn)]
      (let [open-library-book-info (olb/book-info isbn fields)]
        (merge db-book open-library-book-info {:available available})))))


(defn get-books
  [fields]
  (let [db-books                (db/get-books {})
        isbns                   (map :isbn db-books)
        availables              (db/get-available-books isbns)
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
  (if (db/in-loan book-item-id)
    (db/insert-loan! {:user-id user-id :book-item-id book-item-id})
    "El ejemplar que deseas no se encuentra disponible"))

(defn return-book
  [user-id book-item-id]
  (db/delete-loan {:user-id user-id :book-item-id book-item-id}))

(defn get-book-lendings
  [user-id]
  (->> (db/get-book-loans {:user-id user-id})
       (group-by :title)
       vals
       (map #(db.utils/aggregate-field % :title :isbn :loan_date :due_date))))
