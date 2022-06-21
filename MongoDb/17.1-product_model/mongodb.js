const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = require("mongodb").ObjectId;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "ProductModel";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("Connected correctly!");
    const db = client.db(databaseName);
  }
);
