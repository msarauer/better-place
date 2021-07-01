SET TIMEZONE = 'SystemV/PST8PDT';
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE opportunities (
  id SERIAL PRIMARY KEY NOT NULL,
  location VARCHAR(255) NOT NULL,
  date VARCHAR(255) NOT NULL,
  time_commitment VARCHAR(255) NOT NULL,
  category_id INTEGER NOT NULL references categories(id) ON DELETE CASCADE
);