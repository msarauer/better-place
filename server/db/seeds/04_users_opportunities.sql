-- SET TIMEZONE = 'SystemV/PST8PDT';

-- DROP TABLE IF EXISTS users_opportunities;

-- CREATE TABLE users_opportunities (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER references users(id) ON DELETE CASCADE,
--   opportunity_id INTEGER references opportunities(id) ON DELETE CASCADE
-- );

INSERT INTO users_opportunities (user_id, opportunity_id) VALUES 
(1,1),
(2,3),
(3,1),
(1,3),
(2,4),
(2,5),
(2,6),
(2,7),
(2,8),
(2,9),
(2,10),
(2,11),
