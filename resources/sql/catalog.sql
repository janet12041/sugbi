-- :name insert-book! :! :1
insert into catalog.book (title, isbn) values (:title, :isbn)
returning *;

-- :name delete-book! :! :n
delete from catalog.book where isbn = :isbn;

-- :name insert-book-item! :! :1
insert into catalog.book_item (book_id) values (:book-id)
returning *;

-- :name get-book-item-loans! :? :*
select *
from catalog.book_loan
where book_item_id = :book-item-id;

-- :name insert-librarian! :1
insert into user_management.librarian (sub) values (:sub)
returning *;

-- :name search :? :*
select isbn, true as "available"
from catalog.book
where lower(title) like :title;

-- :name get-book :? :1
select isbn, true as "available"
from catalog.book
where isbn = :isbn;

-- :name get-books :? :*
select isbn, true as "available"
from catalog.book;

-- :name find-book-id :? :1
select book_id
from catalog.book_item
where book_item_id = :book-item-id;

-- :name is-book-item-loan :? :1
select book_item_id = :book-item-id as "available"
from catalog.book_loan
where book_item_id = :book-item-id;

-- :name insert-loan! :! :1
insert into catalog.book_loan
(user_id, book_item_id, loan_date, due_date)
values (:user-id, :book-item-id, current_date, current_date - interval '2 week')
returning *;

-- :name delete-loan! :! :n
delete from catalog.book_loan 
where user_id = :user-id and book_item_id = :book-item-id;

-- :name user-book-loans :? :*
select book_loan_id, user_id, book_item_id, loan_date, due_date
from catalog.book_loan 
where user_id = :user-id;
