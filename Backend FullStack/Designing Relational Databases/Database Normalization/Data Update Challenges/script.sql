SELECT 
  advisor_name, 
  advisor_department, 
  advisor_email
FROM
  college 
WHERE 
  advisor_name='Sommer';
  
UPDATE college
SET advisor_email = 'sophie@college.edu'
WHERE advisor_name = 'Sommer' AND advisor_department = 'Statistics';