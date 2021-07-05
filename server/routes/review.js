const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // GET ALL REVIEWS FOR ONE USER
  router.get("/:id", (req, res) => {
    let query = `SELECT users.name as user_name, users.picture_url as avatar, volunteer_reviews.id ,user_feedback, rating, (SELECT name FROM users WHERE opportunities.host_id = id) as host_name
    FROM volunteer_reviews
    JOIN users ON users.id = user_id
    JOIN opportunities ON opportunity_id = opportunities.id
    WHERE opportunities.host_id = $1;`;
    console.log(query);
    db.query(query, [req.params.id])
      .then((data) => {
        const reviews = data.rows;
        res.json({ reviews });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // READ volunteer_review
  router.get("/:user/:reviewid", (req, res) => {
    let query = `SELECT user_feedback, rating FROM volunteer_reviews JOIN users ON users.id = user_id WHERE user_id = $1 AND volunteer_reviews.id = $2;`;
    console.log(query);
    db.query(query, [req.params.user, req.params.reviewid])
      .then((data) => {
        const reviews = data.rows;
        res.json({ reviews });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // EDIT review
  router.put("/:user/:reviewid", (req, res) => {
    const data = req.body;
    db.query(
      `UPDATE volunteer_reviews SET (user_feedback, rating) = ($1, $2) WHERE user_id = $3 AND volunteer_reviews.id = $4 RETURNING *`,
      [data.user_feedback, data.rating, req.params.user, req.params.reviewid]
    )
      .then((data) => {
        const review = data.rows;
        res.json({ review });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });

  // DELETE volunteer_review
  router.delete("/:id", (req, res) => {
    db.query(
      `DELETE FROM volunteer_reviews WHERE volunteer_reviews = $1 RETURNING *`,
      [req.params.id]
    )
      .then((data) => {
        const review = data.rows;
        res.json({ review });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });
  return router;
};
