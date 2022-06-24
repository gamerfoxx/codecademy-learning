CREATE INDEX customers_city_idx ON customers (city);

CREATE INDEX customers_last_name_email_address_first_name_idx ON customers (last_name, email_address, first_name);