import express from "express";
import { connectToDb, getDb } from "./db.js";

const app = express();
const port = 5050;

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`You'r listeing on http://localhost:${port}`);
    });

    db = getDb();
  }
});

app.get("/books", (req, res) => {
  let books = [];

  db.collection("books")
    .find()
    .sort({ author: 1 })
    .forEach((book) => books.push(book))
    .then(() => {
      res.json(books);
    })
    .catch((err) => {
      res.status(500).json({ msg: "couldn't fetch the documents" });
    });

  // res.json({ msg: "Welcome to the api" });
});
