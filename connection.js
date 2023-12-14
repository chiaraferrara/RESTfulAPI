
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin:password1234@NodeDB.9ctukqq.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  // useUnifiedTopology: true
});

(async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error(error);
  }
})();

module.exports = client;