const express = require("express");
const router = express.Router();

module.exports = (db) => {

  // READ user
  router.get("/:id", (req, res) => {
    db.query(`SELECT * from users WHERE id = $1;`, [req.params.id])
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
  router.put("/:id", (req, res) => {
    const data = req.body;
    db.query(
      `UPDATE users SET (name, email, password, phone_number, address) = ($1, $2, $3, $4, $5) WHERE id = $6 RETURNING *;`,
      [
        data.name,
        data.email,
        data.password,
        data.phone_number,
        data.address,
        req.params.id,
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
