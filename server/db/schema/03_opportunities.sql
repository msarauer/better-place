SET TIMEZONE = 'SystemV/PST8PDT';
DROP TABLE IF EXISTS opportunities CASCADE;

CREATE TABLE opportunities (
  id SERIAL PRIMARY KEY NOT NULL,
  host_id INTEGER NOT NULL references users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL, 
  number_of_volunteers_needed INTEGER,
  number_of_volunteers_added INTEGER,
  description VARCHAR(255),
  location VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  time_commitment VARCHAR(255) NOT NULL,
  category_id INTEGER NOT NULL references categories(id) ON DELETE CASCADE
);