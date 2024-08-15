const express = require('express')
const app = express();
const path = require('path')
const session = require('express-session');
const dotenv = require('dotenv').config()

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views')));
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Đặt true nếu sử dụng HTTPS
}));


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))