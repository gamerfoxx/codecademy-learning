CREATE TABLE books_authors (
  book_isbn varchar(50) REFERENCES book(isbn),
  author_email varchar(20) REFERENCES author(email),
  PRIMARY KEY (book_isbn, author_email)
);

SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'books_authors';