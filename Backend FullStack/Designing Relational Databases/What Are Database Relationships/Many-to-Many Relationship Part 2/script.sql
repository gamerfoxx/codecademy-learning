SELECT * FROM book;
SELECT * FROM author;


INSERT INTO books_authors VALUES (
  '123457890',
  'jkey@db.com'
);

INSERT INTO books_authors VALUES (
  '123457890',
  'cindex@db.com'
);

INSERT INTO books_authors VALUES (
  '987654321',
  'cindex@db.com'
);

SELECT 
    book.title AS book_title,
    author.name AS author_name,
    book.description AS book_description
FROM 
    book, author, books_authors
WHERE
    book.isbn = books_authors.book_isbn
AND
    author.email = books_authors.author_email;

SELECT
    author.name AS author_name,
    author.email AS author_email,
    book.title AS book_title
FROM
    book
JOIN
    books_authors
ON
    book.isbn = books_authors.book_isbn
JOIN
    author
ON
    author.email = books_authors.author_email;