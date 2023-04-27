-- :name insert-book! :! :1
insert into catalog.book (title, isbn) values (:title, :isbn)
returning *;

-- :name delete-book! :! :n
delete from catalog.book where isbn = :isbn;

-- :name search :? :*
select isbn
from catalog.book
where lower(title) like :title;

-- :name get-book :? :1
select isbn
from catalog.book
where isbn = :isbn

-- :name get-books :? :*
select isbn
from catalog.book;

-- :name in-book-loan-table :? :1
select book_loan_id
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

-- :name get-book-loans :? :*
select title, isbn, loan_date, due_date  
from catalog.book_loans
join catalog.book_item using (book_item_id)
join catalog.book using (book_id)
where user_id = :user-id;

-- :name get-total-book-count :? :1
select count(*)
from catalog.book
join catalog.book_item using (book_id)
where isbn = :isbn

-- :name get-book-loans-count :? :1
select count(*)
from catalog.book
join catalog.book_item using (book_id)
join catalog.book_loan using (book_item_id)
where isbn = :isbn


