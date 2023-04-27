(ns sugbi.catalog.db
 (:require
  [camel-snake-kebab.core :as csk]
  [clojure.string :as str]
  [conman.core :as conman]
  [sugbi.db.core :as db] 
  [medley.core :as medley]))

(conman/bind-connection db/*db* "sql/catalog.sql")


(defn matching-books
  [title]
  (map
   #(medley/map-keys csk/->kebab-case %)
   (search {:title (str "%" (str/lower-case title) "%")})))


(defn in-loan
  [book-item-id]
  (if (in-book-loan-table {:book-item-id book-item-id}) 
    true 
    false))

(defn get-available-book
  [isbn]
  (let [total-book-count (get-total-book-count {:isbn isbn})
        book-loans-count (get-book-loans-count {:isbn isbn})]
    (if ((total-book-count - book-loans-count) > 0) 
      true 
      false)))


