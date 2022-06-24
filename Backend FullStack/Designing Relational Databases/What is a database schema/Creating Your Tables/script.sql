CREATE TABLE book (
  title varchar(100),
  isbn varchar(50),
  pages integer,
  price money,
  description varchar(256),
  publisher varchar(100)
);

CREATE TABLE chapter (
  id integer,
  number integer,
  title varchar(50),
  content varchar(1024)
);

CREATE TABLE author (
  name varchar(50),
  bio varchar(100),
  email varchar(20)
);