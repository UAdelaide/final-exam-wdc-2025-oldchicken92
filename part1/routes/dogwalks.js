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
SELECT wr.request_id, d.name, wr.requested_time, wr.location, u.username
FROM WalkRequests wr JOIN Dogs d ON wr.dog_id = d.dog_id
JOIN Users u ON d.owner_id = u.user_id WHERE wr.status = 'open';
    `);
res.json(rows);
    }catch(error){
res.status(500).send('walkRequests open error');
    }
});

router.get('/walkers/summary', async (req, res) => {
    try {
 const [rows] = await db.query(`
SELECT u.username,
COUNT(wr.rating) AS total_ratings,
AVG(wr.rating) AS average_rating,
COUNT(wa.request_id) AS completed_walks

    `);
res.json(rows);
    }catch(error){
res.status(500).send('walkers summary error');
    }
});






module.exports = router;
