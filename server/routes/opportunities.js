const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // GET ALL OPPORTUNITIES
  router.get("/", (req, res) => {
    db.query(
      `SELECT opportunities.*, categories.name as category_name, users.name as host_name, users.picture_url as avatar, host_id FROM opportunities JOIN categories ON categories.id = category_id JOIN users ON users.id = host_id`,
      []
    )
      .then((data) => {
        const opportunities = data.rows;
        res.json({ opportunities });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });

  router.get("/location/:location", (req, res) => {
    db.query(
      `SELECT opportunities.*, categories.name as category_name FROM opportunities JOIN categories ON categories.id = category_id WHERE location = $1`,
      [req.params.location]
    )
      .then((data) => {
        const opportunities = data.rows;
        res.json({ opportunities });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });

  router.get("/location/:location/category/:category", (req, res) => {
    db.query(
      `SELECT * FROM opportunities WHERE location = $1 AND category = $2`,
      [req.params.location, req.params.category]
    )
      .then((data) => {
        const opportunities = data.rows;
        res.json({ opportunities });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });

  // POST NEW OPPORTUNITIES
  router.post("/", (req, res) => {
    db.query(
      `INSERT INTO opportunities (host_id , name , number_of_volunteers_needed, location, date, time_commitment, category_id, description, lat, lng) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        req.body.host_id,
        req.body.name,
        req.body.number_of_volunteers_needed,
        req.body.location,
        req.body.date,
        req.body.time_commitment,
        req.body.category_id,
        req.body.description,
        req.body.lat,
        req.body.lng
      ]
    )

      .then((data) => {
        const createNewOpportunities = data.rows[0];
        res.json({ createNewOpportunities });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });

  return router;
};
