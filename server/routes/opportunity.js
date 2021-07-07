const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // GET ONE OPPORTUNITY BY ID
  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM opportunities WHERE id = $1`, [req.params.id])

      .then((data) => {
        const opportunitiesByID = data.rows[0];
        res.json({ opportunitiesByID });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });

  // UPDATE OPPORTUNITY
  router.put("/:id", (req, res) => {
    db.query(
      `UPDATE opportunities SET name=$1, number_of_volunteers_needed=$2, location=$3, date=$4, time_commitment=$5, category_id=$6 WHERE id = $7 RETURNING *`,
      [
        req.body.name,
        req.body.number_of_volunteers_needed,
        req.body.location,
        req.body.date,
        req.body.time_commitment,
        req.body.category_id,
        req.params.id,
      ]
    )
      .then((data) => {
        const createNewOpportunities = data.rows[0];
        res.json({ createNewOpportunities });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });

  // Add Opp from user
  // router.post("/:id", (req, res) => {
  //   db.query(`DELETE FROM opportunities WHERE id = $1`, [req.params.id])
  //     .then((data) => {
  //       res.json({
  //         status: "Success",
  //       });
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //       res.status(500).json({ error: e.message });
  //     });
  // });

  // DELETE OPPORTUNITY
  router.delete("/:id", (req, res) => {
    db.query(`DELETE FROM opportunities WHERE id = $1`, [req.params.id])
      .then((data) => {
        res.json({
          status: "Success",
        });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ error: e.message });
      });
  });

  return router;
};
