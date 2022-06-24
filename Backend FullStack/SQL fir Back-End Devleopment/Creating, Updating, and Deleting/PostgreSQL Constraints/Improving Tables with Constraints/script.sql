ALTER TABLE speakers 
ALTER COLUMN name SET NOT NULL;

UPDATE speakers 
SET organization = 'value' 
WHERE organization IS NULL; 

ALTER TABLE speakers 
ALTER COLUMN organization SET NOT NULL; 