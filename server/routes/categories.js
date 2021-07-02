const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // GET ALL CATEGORIES
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM categories;`, [])
      .then((data) => {
        const categories = data.rows;
        res.json({ categories });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });
  return router;
};
