-- SET TIMEZONE = 'SystemV/PST8PDT';

-- DROP TABLE IF EXISTS users_opportunities;

-- CREATE TABLE users_opportunities (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER references users(id) ON DELETE CASCADE,
--   opportunity_id INTEGER references opportunities(id) ON DELETE CASCADE
-- );

INSERT INTO users_opportunities (user_id, opportunity_id) VALUES 
(1,1),
(1,2),
(4,1),
(2,2),
(1,4),
(2,4),
(3,4),
(1,5),
(2,5),
(3,5),
(4,5),
(1,6),
(2,6),
(1,7),
(2,7),
(2,9),
(1,11),
(2,11),
(3,11),
(4,11),
(5,11),
(6,11),
(7,11),
(8,11),
(9,11),
(4,53),
(4,54),
(4,55)

