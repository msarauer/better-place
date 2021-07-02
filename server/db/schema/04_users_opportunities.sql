SET TIMEZONE = 'SystemV/PST8PDT';

DROP TABLE IF EXISTS users_opportunities;

CREATE TABLE users_opportunities (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER references users(id) ON DELETE CASCADE,
  opportunity_id INTEGER references opportunities(id) ON DELETE CASCADE
);