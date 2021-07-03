-- CREATE TABLE opportunities (
--   id SERIAL PRIMARY KEY NOT NULL,
--   host_id INTEGER NOT NULL references users(id) ON DELETE CASCADE,
--   name VARCHAR(255) NOT NULL, 
--   number_of_volunteers_needed INTEGER,
--   number_of_volunteers_added INTEGER,
--   description VARCHAR(255),
--   location VARCHAR(255) NOT NULL,
--   date DATE NOT NULL,
--   time_commitment VARCHAR(255) NOT NULL,
--   category_id INTEGER NOT NULL references categories(id) ON DELETE CASCADE
-- );


INSERT INTO opportunities (host_id ,name , number_of_volunteers_needed, number_of_volunteers_added, description, location, date, time_commitment, category_id) VALUES (
  1, 'Clown Around', 8, 4, 'Just want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 4
), 
(
  2, 'Moving', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Calgary', '2021-02-16', 'Long time', 3
), 
(
  2, 'Electrical Work', 3, 2, 'Doing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 3
), 
(
  1, 'Picking garbage', 8, 4, 'Just want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 4
), 
(
  2, 'Take Grandma to the clinic', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Calgary', '2021-02-16', 'Long time', 3
), 
(
  2, 'Help feed residents at Lodge', 3, 2, 'Doing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 3
)