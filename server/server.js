console.log('Initializing...');
const dotenv = require('dotenv').load();
const express = require('express');
const twit = require('twit');
const firebase = require('firebase');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const routes = require('./api/routes/routes');
routes(app);

app.use(express.static(path.join(__dirname, '../client')));

console.log('Starting Spoonful server...');
// app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
// app.use(bodyParser.json());                                     // parse application/json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// app.use(methodOverride());

console.log('Serving client from', path.join(__dirname, '../client'));
app.listen(process.env.PORT || 5000);
console.log('Spoonful started on http://localhost:' + process.env.PORT);

app.get('/', (req, res) => {
    res.send(thing);
    console.log("Delivering client to", req.ip);
});