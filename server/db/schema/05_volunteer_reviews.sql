SET TIMEZONE = 'SystemV/PST8PDT';

DROP TABLE IF EXISTS volunteer_reviews CASCADE;

CREATE TABLE volunteer_reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL references users(id) ON DELETE CASCADE,
  opportunity_id INTEGER NOT NULL references opportunities(id) ON DELETE CASCADE,
  user_feedback TEXT,
  rating INTEGER NOT NULL 
)