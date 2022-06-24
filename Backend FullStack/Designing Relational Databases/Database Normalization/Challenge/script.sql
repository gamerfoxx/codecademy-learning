SELECT * FROM store
LIMIT 10;

SELECT COUNT(DISTINCT(order_id)) 
FROM store;

SELECT COUNT(DISTINCT(customer_id)) 
FROM store;

SELECT customer_id, customer_email, customer_phone 
FROM store
WHERE customer_id = 1;

SELECT item_1_id, item_1_name, item_1_price 
FROM store
WHERE item_1_id = 4;

CREATE TABLE customers AS
SELECT DISTINCT customer_id, customer_phone, customer_email
FROM store;

ALTER TABLE customers
ADD PRIMARY KEY (customer_id);

CREATE TABLE items AS
SELECT DISTINCT item_1_id as item_id, item_1_name as name, item_1_price as price 
FROM store
UNION
SELECT DISTINCT item_2_id as item_id, item_2_name as name, item_2_price as price
FROM store
WHERE item_2_id IS NOT NULL
UNION
SELECT DISTINCT item_3_id as item_id, item_3_name as name, item_3_price as price
FROM store
WHERE item_3_id IS NOT NULL;

ALTER TABLE items
ADD PRIMARY KEY (item_id);