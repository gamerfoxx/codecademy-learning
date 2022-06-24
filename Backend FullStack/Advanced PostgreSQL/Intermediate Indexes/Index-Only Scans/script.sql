EXPLAIN ANALYZE SELECT 
  first_name, last_name, email_address
FROM customers
WHERE last_name = 'Smith';

CREATE INDEX customers_last_name_first_name_email_address_idx ON customers (last_name, first_name, email_address);

EXPLAIN ANALYZE SELECT 
  first_name, last_name, email_address
FROM customers
WHERE last_name = 'Smith';