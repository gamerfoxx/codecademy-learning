SELECT * FROM customers LIMIT 10;

SELECT * FROM orders LIMIT 10;

SELECT * FROM books LIMIT 10;

SELECT *
FROM pg_Indexes
WHERE tablename = 'customers' OR tablename = 'orders' OR tablename = 'books';

EXPLAIN ANALYZE SELECT
  *
FROM 
  orders 
WHERE 
  quantity > 18;

CREATE INDEX 
  customers_quantity_eighteen_plus_idx 
    ON 
      orders (quantity)
WHERE 
  quantity > 18;

EXPLAIN ANALYZE SELECT
  *
FROM 
  orders 
WHERE 
  quantity > 18;

ALTER TABLE customers
  ADD CONSTRAINT customers_pkey
    PRIMARY KEY (customer_id);

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE customer_id < 100;

CLUSTER customers USING customers_pkey;
CLUSTER customers;



CREATE INDEX 
  orders_customer_id_book_id_idx 
    ON 
      orders (customer_id, book_id);

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE customer_id < 100;

DROP INDEX IF EXISTS orders_customer_id_book_id_idx;

CREATE INDEX 
  orders_customer_id_book_id_quantity_idx 
    ON 
      orders (customer_id, book_id, quantity);

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE customer_id < 100;