ALTER TABLE speakers  
ADD CHECK (years_in_role < 100 AND years_in_role > 0);

ALTER TABLE attendees  
ADD CHECK (standard_tickets_reserved + vip_tickets_reserved = total_tickets_reserved);