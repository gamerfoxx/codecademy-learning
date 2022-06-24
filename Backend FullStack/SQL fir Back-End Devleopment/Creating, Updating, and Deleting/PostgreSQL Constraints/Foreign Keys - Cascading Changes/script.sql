ALTER TABLE talks
ADD FOREIGN KEY (speaker_id)
REFERENCES speakers (id) ON DELETE CASCADE;

DELETE FROM speakers  
WHERE id = 2;
-- deletes the item from speakers, and talks