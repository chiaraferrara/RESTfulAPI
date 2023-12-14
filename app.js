const express = require('express');
const router = require('./routes');
const { MongoClient } = require('mongodb');
const app = express();
const { ServerApiVersion } = require('mongodb');


const hostname = '127.0.0.1';
const port = 3000;

const uri = 'mongodb+srv://admin:password1234@NodeDB.9ctukqq.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
client.connect()
  .then(() => {
    console.log('Connessione a MongoDB Atlas avvenuta con successo');
  })
  .catch((error) => {
    console.error('Errore durante la connessione a MongoDB Atlas:', error);
  });

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(router);

app.listen(port, hostname, () => {
    console.log(`Server in esecuzione su http://${hostname}:${port}`);
});
