const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = new sqlite3.Database('./data.db', (err) => {
    if (err) {
        console.error(err.message);
    }

    db.run('CREATE TABLE IF NOT EXISTS orders(\n' +
        '\tname data_type TEXT NOT NULL,\n' +
        '   \tsurname TEXT NOT NULL,\n' +
        '\taddress TEXT NOT NULL,\n' +
        '\ttable_constraints\n' +
        ')');

    console.log('Connected to the database.');
});
app.post('/api/export', (req, res, next) => {
    const { data } = req.body;
    db.run('INSERT INTO orders (name, surname, address) VALUES (?, ?, ?)',
        [ data.name, data.surname, data.address ]);
    res.send('Data exported to SQLite.');
});

app.get("/api/get", (req, res, next) => {
    db.all("SELECT * FROM orders", [], (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.status(200).json({rows});
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});