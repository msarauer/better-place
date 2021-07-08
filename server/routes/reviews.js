const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // BROWSE all volunteer_reviews
  router.get("/", (req, res) => {
    let query = `SELECT volunteer_reviews.*, users.name as name, users.picture_url as avatar FROM volunteer_reviews JOIN users ON users.id = user_id;`;
    console.log(query);
    console.log("data:", req.body);
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
      `INSERT INTO volunteer_reviews (user_id, opportunity_id, user_feedback, rating) VALUES($1, $2, $3, $4)`,
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
