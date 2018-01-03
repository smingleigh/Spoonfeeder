console.log('Initializing...');
const dotenv = require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const routes = require('./api/routes/routes');

app.use(express.static(path.join(__dirname, '../client')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(app);
console.log('Starting Spoonful server...');

console.log('Serving client from', path.join(__dirname, '../client'));
app.listen(process.env.PORT || 5000);
console.log('Spoonful started on http://localhost:' + process.env.PORT, 'at', new Date());