const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * from users`)
  })
  .then(data => {
    const users = data.rows;
    res.json({ users })
  })
  .catch(e => {
    console.log(e.message);
    res
    .status(500)
      .json({ error: e.message });
  })

  return router;
};