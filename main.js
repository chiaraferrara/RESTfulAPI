
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:password1234@NodeDB.9ctukqq.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    console.log("Connesso?");

    await client.connect();
    console.log("Connesso")
    const database = client.db("NodeDB");
    const collection = database.collection("contatti");


    var myobj = {
      nome: "Mario Rossi",
      telefono: "232141221",
      email: "ewrewrwe@gmail.com"
    };

    const result = await collection.insertOne(myobj);
    console.log("Contatto inserito");

    await client.db("admin").command({ ping: 1 });

  } catch (err) {
    console.log(err)
  }
  finally {
   await client.close();
  }
}
run();
