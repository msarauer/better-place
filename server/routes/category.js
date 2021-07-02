const express = require("express");
const router = express.Router();

module.exports = (db) => {

  // GET CATEGORY BY ID
  router.get("/:id", (req, res) => {
    let query = `SELECT * FROM opportunities JOIN categories ON categories.id = category_id WHERE category_id = $1;`;
    console.log(query);
    db.query(query, [req.params.id])
      .then((data) => {
        const category = data.rows;
        res.json({ category });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
