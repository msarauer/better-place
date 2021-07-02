const express = require("express");
const router = express.Router();

module.exports = (db) => {

  // BROWSE all volunteer_reviews
  router.get("/", (req, res) => {
    let query = `SELECT * FROM volunteer_reviews;`;
    console.log(query);
    db.query(query)
      .then((data) => {
        const reviews = data.rows;
        res.json({ reviews });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // ADD volunteer_review
  router.post("/", (req, res) => {
    const data = req.body;
    db.query(
      `INSERT INTO users (user_id, opportunity_id, user_feeback, rating) VALUES($1, $2, $3, $4)`,
      [data.user_id, data.opportunity_id, data.user_feedback, data.rating]
    )
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });
  return router;
};
