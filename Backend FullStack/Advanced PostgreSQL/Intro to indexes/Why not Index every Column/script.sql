

SELECT NOW();

\COPY customers FROM 'customers.txt' DELIMITER ',' CSV HEADER;

SELECT NOW();
DROP INDEX IF EXISTS customers_bad_idx;