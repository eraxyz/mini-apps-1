const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const _ = require('underscore');
const password = require('./password');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('miniapp3', 'root', password, {
    host: 'localhost',
    dialect: 'mysql'
});

const userData = {};
let userId;

const Users = sequelize.define('users', {
    "'name'": Sequelize.STRING,
    "'email'": Sequelize.STRING,
    "'password'": Sequelize.STRING,
    "'address'": Sequelize.STRING,
    "'address2'": Sequelize.STRING,
    "'city'": Sequelize.STRING,
    "'state'": Sequelize.STRING,
    "'zip'": Sequelize.STRING,
    "'phone'": Sequelize.STRING,
    "'creditcard'": Sequelize.STRING,
    "'expiration'": Sequelize.STRING,
    "'cvv'": Sequelize.STRING,
    "'billingZip'": Sequelize.STRING
});

Users.sync({force: true});

app.use(express.static('public'));
app.use(bodyParser.json());
app.listen(port);

app.post('/start', (req, res) => {
    Users.create().then(newUser => userId = newUser.id);
    res.end();
});

app.post('/form1', (req, res) => {
    _.extend(userData, req.body);
    updateDB(req.body);
    res.end();
});

app.post('/form2', (req, res) => {
    _.extend(userData, req.body);
    updateDB(req.body);
    res.end();
});

app.post('/form3', (req, res) => {
    _.extend(userData, req.body);
    updateDB(req.body);
    res.send(summarize());
});

const updateDB = (obj) => {
    // Promise.all(
    Object.keys(obj).forEach((key) => {
        sequelize.query('UPDATE users SET \`?\` = ? WHERE id = ?',
            { replacements: [key, obj[key], userId], type: sequelize.QueryTypes.UPDATE }
        )
    })
    // ).then(result => console.log(result));
}

const summarize = () => {
    let summary = "";
    for (let prop in userData) 
        summary += `\n${prop}: ${userData[prop]}`;
    return summary;
}