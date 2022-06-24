CREATE TABLE attendees (
   id integer, 
   name varchar, 
   total_tickets_reserved integer,
   standard_tickets_reserved integer,
   vip_tickets_reserved integer
); 

INSERT INTO attendees (id, name, total_tickets_reserved, standard_tickets_reserved, vip_tickets_reserved) 
VALUES (1, 'John Smith', 2, 1, 1); 