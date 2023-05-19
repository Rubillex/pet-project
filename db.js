// Настройки сервера
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const finale = require('finale-rest');
const cors = require('cors');
const Sequelize = require('sequelize');
const app = express();
const port = 3000;

//Добавляем возможность получения json
app.use(bodyParser.json());

//инициализируем ORM
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

//описываем модель User, которая привязана к таблице users
//Далее аналогично для продукта, заказа и таблицы связи продукта и заказа
let User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
    },
    surname:{
        type: Sequelize.STRING,
    },
    address:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },
});

let Order = sequelize.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    price: {
        type: Sequelize.FLOAT,
    },
    surname:{
        type: Sequelize.STRING,
    },
});

let Product = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.FLOAT
    }
});

let OrderProducts = sequelize.define('orders_products', {
    orderId: {
        type: Sequelize.INTEGER,
        references: {
            model: Order,
            key: 'id'
        }
    },
    productId: {
        type: Sequelize.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    }
});

//продукт имеет связь многие ко многим с заказами через модель OrderProducts
Product.belongsToMany(Order, { through: OrderProducts });
Order.belongsToMany(Product, { through: OrderProducts });

//инициализируем finale - это библиотека для генерации CRUD ресурсов
finale.initialize({
    app: app,
    sequelize: sequelize
});

//CRUD для моделей с указанием эндпоинтов
let userResource = finale.resource({
    model: User,
    endpoints: ['/users', '/users/:id']
});

let orderResource = finale.resource({
    model: Order,
    endpoints: ['/orders', '/orders/:id']
});

let productResource = finale.resource({
    model: Product,
    endpoints: ['/products', '/products/:id']
});

let orderProductResource = finale.resource({
    model: OrderProducts,
    endpoints: ['/order-products', '/order-products/:id']
});
//Подключение базы данных
sequelize
    .sync({ force: false })
    .then(() => {
        app.listen(port, () => {
            console.log('listening to port localhost:' + port)
        })
    });
