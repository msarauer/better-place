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


INSERT INTO opportunities (host_id ,name , number_of_volunteers_needed, number_of_volunteers_added, description, location, date, time_commitment, category_id, lat, lng) VALUES (
  1, 'Clown Around', 8, 4, 'Just want a couple friends to clown around with really.', 'Canada', '2016-02-16', 'Five Hours', 1, 49.2396913, -123.0466543
), 
(
  3, 'Moving', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Calgary', '2021-02-16', 'Long time', 2, 49.228365, -123.131529
), 
(
  2, 'Electrical Work', 3, 2, 'Doing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 3, 49.221170, -123.000289
), 
(
  1, 'Picking garbage', 8, 4, 'Just want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 4, 49.322334, -123.087797
), 
(
  2, 'Take Grandma to the clinic', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Calgary', '2021-02-16', 'Long time', 5, 49.260583, -122.860811
), 
(
  3, 'Help feed residents at Lodge', 3, 2, 'aoing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 6, 49.151079, -123.134397
),
(
  1, 'Around', 8, 4, 'Just want a couple friends to clown around with really.', 'Cochrane', '2001-02-16', 'Five Hours', 7, 49.292942, -122.813896
), 
(
  2, 'Boving', 3, 1, 'got to move at the end of the month and I need some help because my foot is broken', 'Cochrane', '2021-02-16', 'Long time', 8, 49.221528, -122.945362
), 
(
  3, 'Clectrical Work', 3, 2, 'boing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 1, 49.283888, -123.130314
), 
(
  1, 'Dicking garbage', 8, 4, 'kust want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 2, 49.265508, -123.251982
), 
(
  3, 'Eake Grandma to the clinic', 3, 1, 'iot to move at the end of the month and I need some help because my foot is broken', 'Cochrane', '2021-02-16', 'Long time', 3, 49.180178, -122.866156
),
(
  2, 'Kelp feed residents at Lodge', 3, 2, 'poing some electrical work for a friend.. and I do not know what I am doing!', 'Cochrane', '2021-03-05', 'Short', 4, 49.251652, -122.867381
),
(
  1, 'Jlown Around', 8, 4, 'nust want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 5, 49.817966, -123.111125
), 
(
  3, 'Koving', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Calgary', '2021-02-16', 'Long time', 6, 49.223892, -122.966906
), 
(
  2, 'Llectrical Work', 3, 2, 'loing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-08-05', 'Short', 7, 49.270801, -123.204492
), 
(
  1, 'Micking garbage', 8, 4, 'lust want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 8, 49.309910, -122.954443
), 
(
  3, 'Nake Grandma to the clinic', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Calgary', '2021-02-16', 'Long time', 1, 49.338708, -123.178273
), 
(
  2, 'Oelp feed residents at Lodge', 3, 2, 'woing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 2, 49.152835, -123.140479
),
(
  1, 'Plown Around', 8, 4, 'Just want a couple friends to clown around with really.', 'Cochrane', '2001-02-16', 'Five Hours', 3, 49.212080, -122.913543
), 
(
  3, 'Qoving', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Cochrane', '2021-02-16', 'Long time', 4, 49.172591, -122.876464
), 
(
  2, 'Rlectrical Work', 3, 2, 'woing some electrical work for a friend.. and I do not know what I am doing!', 'Vancouver', '2021-03-05', 'Short', 5, 49.248848, -123.035422
), 
(
  1, 'Sicking garbage', 8, 4, 'Just want a couple friends to clown around with really.', 'Canada', '2001-02-16', 'Five Hours', 6, 49.261621, -122.909766
), 
(
  3, 'Take Grandma to the clinic', 3, 1, 'Got to move at the end of the month and I need some help because my foot is broken', 'Cochrane', '2021-02-16', 'Long time', 7, 49.172815, -123.116447
), 
(
  2, 'Uelp feed residents at Lodge', 3, 2, 'loing some electrical work for a friend.. and I do not know what I am doing!', 'Cochrane', '2021-03-05', 'Short', 8, 49.260052, -123.148032
)