import express from "express";
import { ObjectId } from "mongodb";
import { connectToDb, getDb } from "./db.js";

const app = express();
const port = 5050;

app.use(express.json());

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`You're listeing on http://localhost:${port}`);
    });

    db = getDb();
  }
});

app.get("/books", (req, res) => {
  const page = req.query.p || 0;
  const booksPerPage = 3;
  let books = [];

  db.collection("books")
    .find()
    .sort({ author: 1 })
    .skip(page * booksPerPage)
    .limit(booksPerPage)
    .forEach((book) => books.push(book))
    .then(() => {
      res.json(books);
    })
    .catch((err) => {
      res.status(500).json({ msg: "couldn't fetch the documents" });
    });
});

app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;

  if (ObjectId.isValid) {
    db.collection("books")
      .findOne({ _id: ObjectId(bookId) })
      .then((col) => {
        res.json(col);
      })
      .catch((err) => {
        res.status(500).json({ msg: "couldn't fetch the documents" });
      });
  } else {
    res.status(400).json({ msg: "Wrong Id!" });
  }
});

app.post("/books", async (req, res) => {
  const book = req.body;

  try {
    const result = await db.collection("books").insertOne(book);
    res.status(201).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Could not create a new document" });
  }
});

app.delete("/books/:id", async (req, res) => {
  const bookId = req.params.id;

  if (ObjectId.isValid(bookId)) {
    try {
      const result = await db
        .collection("books")
        .deleteOne({ _id: ObjectId(bookId) });
      res.json(result);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Could not delete the document" });
    }
  } else {
    res.status(400).json({ msg: "Wrong Id!" });
  }
});

app.patch("/books/:id", async (req, res) => {
  const bookId = req.params.id;
  const updates = req.body;

  if (ObjectId.isValid(bookId)) {
    try {
      const result = await db
        .collection("books")
        .updateOne({ _id: ObjectId(bookId) }, { $set: updates });

      res.json(result);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Could not update the document" });
    }
  } else {
    res.status(400).json({ msg: "Wrong Id!" });
  }
});
