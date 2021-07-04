const express = require("express");
const router = express.Router();

module.exports = (db) => {
  
  // BROWSE users
  router.get("/", (req, res) => {
    db.query(`SELECT * from users;`, [])
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });

  // ADD to users
  router.post("/", (req, res) => {
    const data = req.body;
    db.query(
      `INSERT INTO users (name, email, password, phone_number, address, picture_url, bio) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        data.name, 
        data.email, 
        data.password, 
        data.phone_number,
        data.address,
        data.picture_url,
        data.bio
      ]
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