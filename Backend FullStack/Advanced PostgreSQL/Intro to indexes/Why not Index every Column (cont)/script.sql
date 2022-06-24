SELECT pg_size_pretty (pg_total_relation_size('customers'));

CREATE INDEX customers_last_name_idx ON customers (last_name);

SELECT pg_size_pretty (pg_total_relation_size('customers'));