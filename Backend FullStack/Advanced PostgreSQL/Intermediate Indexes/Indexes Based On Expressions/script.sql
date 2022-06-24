CREATE UNIQUE INDEX customers_email_address_lower_unique_idx ON customers(LOWER(email_address));

INSERT INTO customers (first_name, last_name, email_address)
VALUES ('Joseph', 'Ludbrook', 'Admin@josephludbrook.com'),
('jake', 'Ludbrook', 'admifgdgdfn@josephludbrook.com');