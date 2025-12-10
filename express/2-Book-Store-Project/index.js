const express = require("express");
const app = express();
const port = 3000;

const booksRouter = require("./routes/books-routes");
const { loggerMiddleware } = require("./middlewares/logger");

// Middlewares
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
