SELECT student_id, SUM(credits_reqd), MIN(email) as student_email
FROM students, students_majors, majors
WHERE students.id = students_majors.student_id
AND students_majors.major_id = majors.id
GROUP BY student_id;