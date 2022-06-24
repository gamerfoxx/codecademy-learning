EXPLAIN ANALYZE SELECT
  *
FROM 
  customers 
WHERE 
  years_old 
    BETWEEN 13 AND 19;

CREATE INDEX 
  customers_years_old_teen_idx 
    ON 
      customers (years_old)
WHERE 
  years_old 
    BETWEEN 13 AND 19;

EXPLAIN ANALYZE SELECT
  *
FROM 
  customers 
WHERE 
  years_old 
    BETWEEN 13 AND 19;