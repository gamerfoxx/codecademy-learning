SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';

DROP INDEX IF EXISTS customers_last_name_idx;

SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';