const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Id must be a type of number" });
  }
  const book = books.find((b) => b.id == id);
  if (book) {
    res.json(book);
  } else {
    res.sendStatus(404).json({ message: "Book Not Found" });
  }
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and Author are required" });
  }
  const newBook = {
    id: books.length + 1,
    title,
    author,
  };
  books.push(newBook);
  res.status(201).json({ message: "Book added successfully", book: newBook });
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex((b) => b.id === id);
  if (bookIndex < 0) {
    return res.status(404).json({ message: "Book Not Found" });
  }
  books.splice(bookIndex, 1);
  return res.status(200).json({ message: "Book deleted successfully" });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
