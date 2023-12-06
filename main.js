const http = require('http');
var express = require('express');
var app =express();
var routes = require('./routes.js');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "NodeDB"

})

//L'oggetto connessione creato nell'esempio precedente dispone di un metodo per eseguire
// query sul database
connection.connect(function(err){
    if(err) throw err;
    console.log('Connection created');
    connection.query(sql, function(err, result){
        if(err) throw err;
        console.log("Result: " +  result)
    })
})

connection.connect(function(err){
    if(err) throw err;
    connection.query("CREATE DATABASE NodeDB", function(err,result){
        if(err) throw err;
        console.log("DATABASE CREATO");
    });
});
connection.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var sql = "CREATE TABLE contatti (nome VARCHAR(255), telefono VARCHAR(255), email VARCHAR(255))";
    connection.query(sql, function(err, result){
        if(err) throw err;
        console.log("Tabella creata");
    })
})

connection.connect(function(err){

})

app.use('/contatti', routes)
const router = express.Router();
// const server = http.createServer(router);
app.listen(3000)