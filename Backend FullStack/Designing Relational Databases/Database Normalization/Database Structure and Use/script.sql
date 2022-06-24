SELECT major, count(*)
FROM students_majors, majors
WHERE major_id = id
GROUP BY major
ORDER BY count DESC;

UPDATE advisors 
SET email = 'sophie@college.edu'
WHERE name = 'Sommer';