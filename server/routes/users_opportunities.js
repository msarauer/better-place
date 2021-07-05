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
      `SELECT host_table.picture_url as avatar, host_table.name as UserName, opportunities.name as opportunity_name, description, date FROM opportunities
      JOIN users_opportunities on opportunities.id = opportunity_id
      JOIN users AS user_table ON user_table.id = user_id JOIN users AS host_table ON host_table.id = host_id WHERE user_id = $1`,
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

// Needs to link user to opportunities and host
// host name
// Avatar for host
// opportunity name
// opportunity description

//

//      opportunities,     host_avatar,       user_info

// `SELECT host_table.picture_url as avatar, host_table.name as UserName, opportunities.name as opportunity_name, description, date FROM opportunities
//  JOIN users_opportunities on opportunities.id = opportunity_id
//  JOIN users AS user_table ON user_table.id = user_id JOIN users AS host_table ON host_table.id = host_id WHERE user_id = 1`;

// CREATE TABLE users (
//   id SERIAL PRIMARY KEY NOT NULL,
//   name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   phone_number VARCHAR(255),
//   address VARCHAR(255),
//   picture_url VARCHAR(255),
//   bio VARCHAR(255)
// );

// CREATE TABLE opportunities (
//   id SERIAL PRIMARY KEY NOT NULL,
//   host_id INTEGER NOT NULL references users(id) ON DELETE CASCADE,
//   name VARCHAR(255) NOT NULL,
//   number_of_volunteers_needed INTEGER,
//   number_of_volunteers_added INTEGER,
//   description VARCHAR(255),
//   location VARCHAR(255) NOT NULL,
//   date DATE NOT NULL,
//   time_commitment VARCHAR(255) NOT NULL,
//   category_id INTEGER NOT NULL references categories(id) ON DELETE CASCADE
// );

// CREATE TABLE users_opportunities (
//   id SERIAL PRIMARY KEY NOT NULL,
//   user_id INTEGER references users(id) ON DELETE CASCADE,
//   opportunity_id INTEGER references opportunities(id) ON DELETE CASCADE
// );
