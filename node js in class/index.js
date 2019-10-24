const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'stockmarket'
});

db.connect();

app.get('/', (_req, res) => {
    const sql = 'SELECT * FROM users';

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
})

app.listen(5000, () => console.log('Server started'));