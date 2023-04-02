// Настройки сервера
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

//Добавляем возможность получения json
app.use(bodyParser.json());

//Инициализация SQLite базы данных
const db = new sqlite3.Database('./data.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    //Создаем таблицу orders, если её нет.
    db.run('CREATE TABLE IF NOT EXISTS orders(\n' +
        '\tname data_type TEXT NOT NULL,\n' +
        '\tsurname TEXT NOT NULL,\n' +
        '\taddress TEXT NOT NULL,\n' +
        '\temail TEXT NOT NULL,\n' +
        '\ttable_constraints\n' +
        ')');

    console.log('Connected to the database.');
});

//функция сохранения данных в таблицу
app.post('/api/export', (req, res, next) => {
    const { data } = req.body;
    db.run('INSERT INTO orders (name, surname, address, email) VALUES (?, ?, ?, ?)',
        [ data.name, data.surname, data.address, data.email ]);
    res.send('Data exported to SQLite.');
});

//функция вывода данных из таблицы
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