const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // GET ALL OPPORTUNITIES
  router.get("/", (req, res) => {
    db.query(`SELECT * from opportunities;`, [])
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
      `INSERT INTO opportunities (host_id , name , number_of_volunteers_needed, location, date, time_commitment, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        req.body.host_id,
        req.body.name,
        req.body.number_of_volunteers_needed,
        req.body.location,
        req.body.date,
        req.body.time_commitment,
        req.body.category_id,
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
