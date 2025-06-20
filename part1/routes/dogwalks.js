var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/dogs', async (req, res) => {
    try {
 const [rows] = await db.query(`
         = u.user_id;
    `);
res.json(rows);
    }catch(error){
res.status(500).send('Dogs database error');
    }

});










module.exports = router;
