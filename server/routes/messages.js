const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // GET ALL MESSAGES
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM messages;`)
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
