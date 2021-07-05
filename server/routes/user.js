const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // READ user

  router.get("/:email", (req, res) => {
    db.query(`SELECT * from users WHERE email = $1;`, [req.params.email])
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });

  // EDIT user
  router.put("/:email", (req, res) => {
    const data = req.body;
    db.query(
      `UPDATE users SET (name , email, password, phone_number, address, bio) = ($1, $2, $3, $4, $5, $6) WHERE email = $7 RETURNING *;`,
      [
        data.name,
        data.email,
        data.password,
        data.phone_number,
        data.address,
        data.bio,
        req.params.email,
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

  // DELETE user
  router.delete("/:id", (req, res) => {
    db.query(`DELETE FROM users WHERE id = $1;`, [req.params.id])
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
