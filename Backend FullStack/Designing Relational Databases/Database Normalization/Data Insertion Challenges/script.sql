INSERT INTO college (advisor_name, advisor_department, advisor_email, student_id)
VALUES ('Stern', 'Biology', 'stern111@college.edu', -1);

SELECT *
FROM college
WHERE student_id = -1;