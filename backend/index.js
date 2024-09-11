const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 1000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let profileDatas = {};

app.post("/profile-data", (req, res) => {
  const showHTML = `<h1> Doing the do </h1>`;

  const {
    brand,
    headerImage,
    headerTitle,
    headerDescription,
    facebookLink,
    twitterLink,
    linkedinLink,
    githubLink,
  } = req.body;

  res.send(showHTML);

  profileDatas = {
    brand,
    headerImage,
    headerTitle,
    headerDescription,
    facebookLink,
    twitterLink,
    linkedinLink,
    githubLink,
  };
});

app.get("/profile-generated-page", (req, res) => {
  // Send the stored profile data in the response
  res.send(profileDatas);
});

app.listen(port, () => {
  console.log(`you are running on http://localhost:${port}`);
});
