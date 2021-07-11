const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // GET ALL MESSAGES
  router.get("/:id", (req, res) => {
    db.query(
      `SELECT author, receiver, message, time FROM messages WHERE author = $1 OR receiver = $1;`,
      [req.params.id]
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

  router.post("/", (req, res) => {
    const data = req.body;
    db.query(
      `INSERT INTO messages (author, receiver, message, time, seen) VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [data.author, data.receiver, data.message, data.time, data.seen]
    )
      .then((data) => {
        const message = data.rows;
        // console.log("messageFromServer:", message);
        res.json({ message });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });
  router.put("/:id", (req, res) => {
    db.query(
      `UPDATE messages SET seen = true WHERE author = $1 AND receiver = $2`,
      [req.params.id, req.body.id]
    )
      .then((data) => {
        const message = data.rows[0];
        res.json({ message });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });
  return router;
};
