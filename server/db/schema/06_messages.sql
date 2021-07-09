SET TIMEZONE = 'SystemV/PST8PDT';
DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  sentTime TIMESTAMP,
  message TEXT,
  sender INTEGER,
  reciever
);

