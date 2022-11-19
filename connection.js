import { MongoClient } from "mongodb";

// connection URL
const url = "mongodb://localhost:27017/bookstore";
const client = new MongoClient(url);

const dbConnection = async () => {
  await client.connect();
  console.log("Connected successfully to db");

  const db = await client.db();

  return db;
};

dbConnection()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
