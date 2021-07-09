const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // GET ALL MESSAGES
  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM messages WHERE author = $1 OR receiver = $1;`, [
      req.params.id,
    ])
      .then((data) => {
        const messages = data.rows;
        res.json({ messages });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });

  router.post("/", (req, res) => {
    const data = req.body;
    db.query(
      `INSERT INTO messages (author, receiver, message, time) VALUES($1, $2, $3, $4)`,
      [data.author, data.receiver, data.message, data.time]
    )
      .then((data) => {
        const messages = data.rows;
        res.json({ messages });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });
  return router;
};
