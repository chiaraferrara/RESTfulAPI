const http = require('http');
var express = require('express');
var app =express();
var routes = require('./routes.js');
app.use('/contatti', routes)
const router = express.Router();
// const server = http.createServer(router);
app.listen(3000)