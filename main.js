var mongo = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;

  console.log("Database creato!");
  var dbo = db.db("NodeDB");

  dbo.createCollection("contatti", function (err, res) {
    if (err) throw err;

    console.log("Collection creata!");

    var myobj = {
      nome: "Mario Rossi",
      telefono: "232141221",
      email: "ewrewrwe@gmail.com"
    };

    dbo.collection("contatti").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("Documento inserito");
      db.close(); // Close the connection here after all operations are done
    });
  });
});
