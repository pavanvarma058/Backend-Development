const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/contact-us", (req, res) => {
  res.send("You can contact me through my email address");
});

app.get("/tweet", (req, res) => {
  res.send("Tweet1 \n Tweet2 \n Tweet3");
});

app.post("/tweet", (req, res) => {
  res.send("tweet has been created");
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
