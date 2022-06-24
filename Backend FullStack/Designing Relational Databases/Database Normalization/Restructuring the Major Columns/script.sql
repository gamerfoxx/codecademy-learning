CREATE TABLE majors AS
SELECT DISTINCT major_1, major_1_credits_reqd
FROM college;

CREATE TABLE students_majors AS
SELECT major_1 as major, student_id 
FROM college
UNION ALL
SELECT major_2 as major, student_id
FROM college
WHERE major_2 IS NOT NULL;

ALTER TABLE college
DROP COLUMN major_1, 
DROP COLUMN major_1_credits_reqd,
DROP COLUMN major_2, 
DROP COLUMN major_2_credits_reqd;

SELECT *
FROM students_majors
ORDER BY student_id
LIMIT 10;