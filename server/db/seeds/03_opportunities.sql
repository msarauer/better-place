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
  1, 'Clown Around', 8, 4, 'Just want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 1
), 
(
  3, 'Moving', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Calgary', '2021-02-16', 'Long time', 2
), 
(
  2, 'Electrical Work', 3, 2, 'Doing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 3
), 
(
  1, 'Picking garbage', 8, 4, 'Just want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 4
), 
(
  2, 'Take Grandma to the clinic', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Calgary', '2021-02-16', 'Long time', 5
), 
(
  3, 'Help feed residents at Lodge', 3, 2, 'aoing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 6
),
(
  1, 'Around', 8, 4, 'Just want a couple friends to clown around with really.', 'Cochrane', '2001-02-16', 'Five Hours', 7
), 
(
  2, 'Boving', 3, 1, 'got to move at the end of the month and I need some help because my foot is broken', 'Cochrane', '2021-02-16', 'Long time', 8
), 
(
  3, 'Clectrical Work', 3, 2, 'boing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 1
), 
(
  1, 'Dicking garbage', 8, 4, 'kust want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 2
), 
(
  3, 'Eake Grandma to the clinic', 3, 1, 'iot to move at the end of the month and I need some help because my foot is broken', 'Cochrane', '2021-02-16', 'Long time', 3
),
(
  2, 'Kelp feed residents at Lodge', 3, 2, 'poing some electrical work for a friend.. and I do not know what I am doing!', 'Cochrane', '2021-03-05', 'Short', 4
),
(
  1, 'Jlown Around', 8, 4, 'nust want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 5
), 
(
  3, 'Koving', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Calgary', '2021-02-16', 'Long time', 6
), 
(
  2, 'Llectrical Work', 3, 2, 'loing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 7
), 
(
  1, 'Micking garbage', 8, 4, 'lust want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 8
), 
(
  3, 'Nake Grandma to the clinic', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Calgary', '2021-02-16', 'Long time', 1
), 
(
  2, 'Oelp feed residents at Lodge', 3, 2, 'woing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 2
),
(
  1, 'Plown Around', 8, 4, 'Just want a couple friends to clown around with really.', 'Cochrane', '2001-02-16', 'Five Hours', 3
), 
(
  3, 'Qoving', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Cochrane', '2021-02-16', 'Long time', 4
), 
(
  2, 'Rlectrical Work', 3, 2, 'woing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 5
), 
(
  1, 'Sicking garbage', 8, 4, 'Just want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 6
), 
(
  3, 'Take Grandma to the clinic', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Cochrane', '2021-02-16', 'Long time', 7
), 
(
  2, 'Uelp feed residents at Lodge', 3, 2, 'loing some electrical work for a friend.. and I do not know what I am doing!', 'Cochrane', '2021-03-05', 'Short', 8
)