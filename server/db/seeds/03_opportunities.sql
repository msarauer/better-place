-- CREATE TABLE opportunities (
--   id SERIAL PRIMARY KEY NOT NULL,
--   host_id INTEGER NOT NULL references users(id) ON DELETE CASCADE,
--   name VARCHAR(255) NOT NULL, 
--   number_of_volunteers_needed INTEGER,
--   location VARCHAR(255) NOT NULL,
--   date DATE NOT NULL,
--   time_commitment VARCHAR(255) NOT NULL,
--   category_id INTEGER NOT NULL references categories(id) ON DELETE CASCADE
-- );

INSERT INTO opportunities (host_id ,name , number_of_volunteers_needed, location, date, time_commitment, category_id) VALUES (
  1, 'Clown Around', 8, 'Canada', '2001-02-16', 'Five Hours', 4
), (
  2, 'Moving', 3, 'Calgary', '2021-02-16', 'Long time', 3
), (
  2, 'Electrical Work', 3, 'Vancouver', '2021-03-05', 'Short', 3
)