SELECT * FROM customers LIMIT 10;

SELECT * FROM orders LIMIT 10;

SELECT * FROM books LIMIT 10;

SELECT pg_size_pretty (pg_total_relation_size('customers'));

CREATE INDEX orders_customer_id_book_id_idx ON orders  (customer_id, book_id);

EXPLAIN ANALYZE SELECT
  original_language, 
  title, 
  sales_in_millions
FROM books
WHERE original_language = 'French';

SELECT pg_size_pretty (pg_total_relation_size('books'));


CREATE INDEX orders_original_language_idx ON books  (original_language);

EXPLAIN ANALYZE SELECT
  original_language, 
  title, 
  sales_in_millions
FROM books
WHERE original_language = 'French';

SELECT NOW();
 
\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;
 
SELECT NOW();