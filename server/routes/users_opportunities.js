// const express = require('express');
// const router = express.Router();

// module.exports = (db) => {
//   router.get("/:id", (req, res) =>{
//     db.query(`SELECT * FROM users_opportunities WHERE opportunity_id = $1;`, [req.params.id])
//     .then((data)=>{
//       console.log(data)
//       const list = data.rows;
//       res.json({ list })
//     }).catch((e) => {
//       res.status(500).json({ error: e.message });
//     })
//   })
//   router.post("/", (req, res) => {
//     db.
//   })

//   return router;
// }

