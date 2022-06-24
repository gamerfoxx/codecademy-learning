INSERT INTO book VALUES (
  'Postgres for Beginners',
  '0-5980-6249-1',
  25,
  4.99,
  'Learn Postgres the Easy Way',
  'Codecademy Publishing'
);

SELECT * FROM book WHERE title = 'Postgres for Beginners';

SELECT * FROM book WHERE isbn = '0-5980-6249-1';