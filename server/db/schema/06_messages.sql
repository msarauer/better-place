SET TIMEZONE = 'SystemV/PST8PDT';
DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  sender INTEGER NOT NULL,
  receiver INTEGER NOT NULL,
  message TEXT,
  time TIMESTAMP
);

