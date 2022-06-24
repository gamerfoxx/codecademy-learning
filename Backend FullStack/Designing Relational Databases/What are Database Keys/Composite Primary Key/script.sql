
CREATE TABLE popular_books (
  book_title varchar(100),
  author_name varchar(50),
  number_sold integer,
  number_previewed integer,
  PRIMARY KEY (book_title, author_name)
);

SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'popular_books';