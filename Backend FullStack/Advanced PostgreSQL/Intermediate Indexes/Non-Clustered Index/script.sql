CREATE INDEX customers_state_name_idx ON customers(state_name);

SELECT 
  last_name, 
  state_name
FROM customers
WHERE state_name = 'Texas'
ORDER BY last_name;