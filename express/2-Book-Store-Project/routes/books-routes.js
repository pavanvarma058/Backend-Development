const express = require("express");
const { BOOKS } = require("../db/book");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(BOOKS);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Id must be a type of number" });
  }
  const book = BOOKS.find((b) => b.id == id);
  if (book) {
    res.json(book);
  } else {
    res.sendStatus(404).json({ message: "Book Not Found" });
  }
});

router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and Author are required" });
  }
  const newBook = {
    id: BOOKS.length + 1,
    title,
    author,
  };
  BOOKS.push(newBook);
  res.status(201).json({ message: "Book added successfully", book: newBook });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = BOOKS.findIndex((b) => b.id === id);
  if (bookIndex < 0) {
    return res.status(404).json({ message: "Book Not Found" });
  }
  BOOKS.splice(bookIndex, 1);
  return res.status(200).json({ message: "Book deleted successfully" });
});

module.exports = router;
