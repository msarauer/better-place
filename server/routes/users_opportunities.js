const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //   router.get("/:id", (req, res) =>{
  //     db.query(`SELECT * FROM users_opportunities WHERE opportunity_id = $1;`, [req.params.id])
  //     .then((data)=>{
  //       console.log(data)
  //       const list = data.rows;
  //       res.json({ list })
  //     }).catch((e) => {
  //       res.status(500).json({ error: e.message });
  //     })
  //   })
  //   router.post("/", (req, res) => {
  //     db.
  //   })

  // USED to join tables together to grab all opportunites that a volunteer has done. This is for the profile page

  router.get("/:id", (req, res) => {
    db.query(
      `SELECT * FROM users_opportunities JOIN opportunities ON opportunities.id = opportunity_id WHERE user_id = $1;`,
      [req.params.id]
    )
      .then((data) => {
        console.log("WE IN THE ROUTER BB-----", data.rows);
        const opportunities = data.rows;
        res.json({ opportunities });
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  });

  return router;
};
