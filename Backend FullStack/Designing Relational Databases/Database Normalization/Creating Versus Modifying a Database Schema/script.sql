CREATE TABLE advisors (
  id integer PRIMARY KEY,
  email varchar(100) UNIQUE,
  name varchar(100),
  department varchar(100)
);

CREATE TABLE students (
  id integer PRIMARY KEY,
  name varchar(100),
  year varchar(50),
  email varchar(100) UNIQUE,
  advisor_id integer REFERENCES advisors(id)
);

CREATE TABLE majors (
  id integer PRIMARY KEY,
  major varchar(100),
  credits_reqd int
);

CREATE TABLE students_majors (
  student_id integer REFERENCES students(id),
  major_id integer REFERENCES majors(id)
);