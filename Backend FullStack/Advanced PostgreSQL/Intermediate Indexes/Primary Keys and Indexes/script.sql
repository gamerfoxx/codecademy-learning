ALTER TABLE customers ADD PRIMARY KEY (customer_id);

SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';