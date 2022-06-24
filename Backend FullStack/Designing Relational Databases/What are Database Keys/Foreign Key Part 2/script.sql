SELECT * FROM book;
SELECT * FROM chapter;

SELECT book.title as book, chapter.title as chapters 
FROM book
JOIN chapter
ON book.isbn = chapter.book_isbn;
