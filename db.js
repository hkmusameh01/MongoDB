import { MongoClient } from "mongodb";

let dbConnection;

// cb => function we want to run after the connect is establised
const connectToDb = (cb) => {
  MongoClient.connect("mongodb://localhost:27017/bookstore")
    .then((client) => {
      dbConnection = client.db();
      return cb();
    })
    .catch((err) => {
      console.log(err);
      cb(err);
    });
};

const getDb = () => dbConnection;

export { connectToDb, getDb };

// conncectToDb => connect to a database
// getDb => to retrive database function once we already have connected to it
