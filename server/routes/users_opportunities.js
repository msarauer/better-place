const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.put("/:email", (req, res) => {
    db.query(
      `SELECT host_table.picture_url as avatar, opportunities.id as opportunity_id, host_table.name as UserName, opportunities.name as opportunity_name, description, date FROM opportunities
      JOIN users_opportunities on opportunities.id = opportunity_id
      JOIN users AS user_table ON user_table.id = user_id JOIN users AS host_table ON host_table.id = host_id WHERE user_table.email = $1;`,
      [req.params.email]
    )
      .then((data) => {
        const opportunities = data.rows;
        res.json({ opportunities });
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  });

  router.get("/", (req, res) => {
    db.query("SELECT * from users_opportunities;").then((data) => {
      const usersOpportunities = data.rows;
      res.json({ usersOpportunities });
    });
  });

  // complex custom post will rename/reroute too follow restful api convention
  router.post("/", (req, res) => {
    console.log("req.body:", req.body);
    db.query(
      `INSERT INTO users_opportunities (user_id , opportunity_id) VALUES ($1, $2) RETURNING *`,
      [req.body.user_id, Number(req.body.opportunity_id)]
    )
      .then((data) => {
        res.json({ data });
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  });

  router.delete("/:id", (req, res) => {
    db.query(
      `DELETE from users_opportunities WHERE user_id = $1 AND opportunity_id = $2;`,
      [req.body.user_id, req.params.id]
    ).then((data) => {
      res.json({ data });
    });
  });

  return router;
};
