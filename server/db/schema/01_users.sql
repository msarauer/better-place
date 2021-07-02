SET TIMEZONE = 'SystemV/PST8PDT';
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255),
  address VARCHAR(255),
  picture_url VARCHAR(255)
);

