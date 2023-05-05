(ns sugbi.catalog.routes
  (:require
   [clojure.spec.alpha :as s]
   [reitit.ring.middleware.multipart :as multipart]
   [spec-tools.data-spec :as ds]
   [sugbi.catalog.handlers :as catalog.handlers]
   [clojure.string :as string])
  (:import java.io.BufferedInputStream
           java.time.LocalDate))


(def basic-book-info-spec
  {:isbn  string?
   :title string?})


(def book-info-spec
  {:isbn                         string?
   :available                    boolean?
   (ds/opt :title)               string?
   (ds/opt :full-title)          string?
   (ds/opt :subtitle)            string?
   (ds/opt :publishers)          [string?]
   (ds/opt :publish-date)        string?
   (ds/opt :weight)              string?
   (ds/opt :physical-dimensions) string?
   (ds/opt :genre)               string?
   (ds/opt :subjects)            [string?]
   (ds/opt :number-of-pages)     int?})

(defn date?
  [o]
  (instance? java.time.LocalDate o))

(def loan-info 
  {:book_loan_id int? 
   :user_id      string? 
   :book_item_id int? 
   :loan_date    date?
   :due_date     date?})
  
(def routes 
  ["" 
   ["/catalog" {:swagger {:tags ["Catalog"]}}
    ["/books"
     ["" {:get  {:summary    "gets the catalog. Optionally, accepts a search criteria"
                 :parameters {:query {(ds/opt :q) string?}}
                 :responses  {200 {:body [book-info-spec]}}
                 :handler    catalog.handlers/search-books}
          :post {:summary    "add a book title to the catalog"
                 :parameters {:header {:cookie string?}
                              :body   basic-book-info-spec}
                 :responses  {200 {:body basic-book-info-spec}
                              405 {:body {:message string?}}}
                 :handler    catalog.handlers/insert-book!}}]
     ["/:isbn"
      ["" {:get    {:summary    "get a book info by its isbn"
                    :parameters {:path {:isbn string?}}
                    :responses  {200 {:body book-info-spec}
                                 404 {:body {:isbn string?}}}
                    :handler    catalog.handlers/get-book}
           :delete {:summary    "delete a book title of the catalog"
                    :parameters {:header {:cookie string?}
                                 :path   {:isbn string?}}
                    :responses  {200 {:body {:deleted int?}}
                                 405 {:body {:message string?}}}
                    :handler    catalog.handlers/delete-book!}}]
      ["/item"
       ["/:book-item-id"
        ["/checkout" {:post {:summary    "makes a book loan"
                             :parameters {:header {:cookie string?}
                                          :path {:book-item-id int?}}
                             :responses  {200 {:body loan-info}
                                          404 {:body {:book-item-id int?}}
                                          403 {:body {:message string?}}
                                          409 {:body {:message string?}}}
                             :handler    catalog.handlers/checkout-book!}}]
        ["/return" {:delete {:summary    "delete a book loan"
                             :parameters {:header {:cookie string?}
                                          :path {:book-item-id int?}}
                             :responses  {200 {:body {:deleted int?}}
                                          404 {:body {:book-item-id int?}}
                                          403 {:body {:message string?}}}
                             :handler     catalog.handlers/return-book!}}]]]]]]
   ["" {:swagger {:tags ["Lendings"]}}
    ["/user" 
     ["/lendings" {:get {:summary    "get book loans of the user"
                         :parameters {:header {:cookie string?}}
                         :responses  {200 {:body [loan-info]}
                                      403 {:body {:message string?}}}
                         :handler    catalog.handlers/get-lendings}}]]
    ["/lendings"
     {:get {:summary    "get book loans of a user" 
            :parameters {:query {:user-id string?}} 
            :responses  {200 {:body [loan-info]} 
                         404 {:body {:user-id string?}} 
                         403 {:body {:message string?}}} 
            :handler    catalog.handlers/get-user-lendings}}]]])