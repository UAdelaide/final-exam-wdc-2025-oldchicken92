var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/dogs', async (req, res) => {
    try {
 const [rows] = await db.query(`
        SELECT d.name, d.size, u.username
        FROM Dogs d Join Users u ON d.owner_id = u.user_id;
    `);
res.json(rows);
    }catch(error){
res.status(500).send('Dogs database error');
    }

});

router.get('/walkrequests/open', async (req, res) => {
    try {
 const [rows] = await db.query(`

    `);
res.json(rows);
    }catch(error){
res.status(500).send('walkRequests open error');
    }

});








module.exports = router;
