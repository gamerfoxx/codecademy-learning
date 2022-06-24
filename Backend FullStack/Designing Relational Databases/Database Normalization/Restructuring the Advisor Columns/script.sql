CREATE TABLE advisors AS
SELECT DISTINCT advisor_email, advisor_name, advisor_department
FROM college;

ALTER TABLE college
DROP COLUMN advisor_name, 
DROP COLUMN advisor_department;

SELECT *
FROM advisors
WHERE advisor_name = 'Brunson';