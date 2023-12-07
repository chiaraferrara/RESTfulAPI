const express = require('express');
const app = express();
const routes = require('./routes.js');
const mysql = require('mysql2');
app.use(express.json()); //middleware che viene eseguito ogni volta che viene fatta una request e una response.

const connection = mysql.createConnection({
    host: "localhost",    
    user: "root",
    password: "",    
    database: "nodedb",
    port:"3306",
});


connection.connect(function(err) {
    if (err) {
        console.error('Errore: ', err);
        return;
    }

    console.log('Connesso al database');


    connection.query("CREATE DATABASE IF NOT EXISTS NodeDB", function(err, result) {
        if (err) {
            console.error('Errore: ', err);
            return;
        }
        console.log("Database creato o già esistente");
        
 
        connection.query("USE NodeDB", function(err, result) {
            if (err) {
                console.error('Errore: ', err);
                return;
            }
            
 
            const sql = "CREATE TABLE IF NOT EXISTS contatti (id INT(100),nome VARCHAR(255), telefono VARCHAR(255), email VARCHAR(255))";
            connection.query(sql, function(err, result) {
                if (err) {
                    console.error('Errore: ', err);
                    return;
                }
                console.log("Tabella 'contatti' creata o già esistente");
            });
        });
    });
});

// Use routes for '/contatti'
app.use('/contatti', routes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Porta: ${PORT}`);
});
