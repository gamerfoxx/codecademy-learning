ALTER TABLE talks 
ADD FOREIGN KEY (speaker_id)
REFERENCES speakers (id);

INSERT INTO talks (id, title, speaker_id, estimated_length, session_timeslot) 
VALUES (21, 'Data Warehousing Best Practices', 101, 30, '2020-08-15 18:00'); 