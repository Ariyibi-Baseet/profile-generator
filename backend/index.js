const express = require("express");
const cors = require("cors");

const app = express();
const port = 1000;

app.use(cors());

app.get("/details", (req, res) => {
  const showHTML = `<h1> Doing the do </h1>`;
  res.send(showHTML);
});

app.listen(port, () => {
  console.log(`you are running on http://localhost:${port}`);
});
