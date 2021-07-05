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

  //   router.get("/:email", (req, res) => {
  //   db.query(`SELECT * from users WHERE email = $1;`, [req.params.email])
  //     .then((data) => {
  //       const users = data.rows;
  //       res.json({ users });
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //       res.status(500).json({ error: e.message });
  //     });
  // });

  router.get("/:email", (req, res) => {
    db.query(
      `SELECT host_table.picture_url as avatar, opportunities.id as opportunity_id, host_table.name as UserName, opportunities.name as opportunity_name, description, date FROM opportunities
      JOIN users_opportunities on opportunities.id = opportunity_id
      JOIN users AS user_table ON user_table.id = user_id JOIN users AS host_table ON host_table.id = host_id WHERE user_table.email = $1;`,
      [req.params.email]
    )
      .then((data) => {
        console.log("WE IN THE ROUTER BB-----", data);
        const opportunities = data.rows;
        res.json({ opportunities });
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  });

  return router;
};