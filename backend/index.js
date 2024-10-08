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
  const profilePage = `
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#" style="font-size:30px">${profileDatas.brand}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <section id="header">
      <div class="container">
        <div class="row profile-wrapper" style="margin-top: 100px">
          <div class="col-12 col-md-6 mb-3 d-flex align-items-center">
            <div class="profile-left">
              <h1>Your Name here</h1>
              <p class="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                minima sit numquam quisquam necessitatibus obcaecati ducimus
                nulla! Impedit aperiam doloremque perspiciatis dolore tempora
                natus maxime earum obcaecati cum excepturi dicta, et hic nihil
                eius l
              </p>
              <div class="button-wrapper mt-3">
                <button class="btn btn-secondary position-relative">
                  Share <i class="bi bi-share"></i>
                  <span
                    class="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger"
                  >
                    soon
                    <span class="visually-hidden">soon</span>
                  </span>
                </button>
                <button class="btn btn-secondary ms-3">Download</button>
              </div>

              <div
                class="socials-wrapper mt-3 gap-2 d-flex align-items-center justify-content-start"
              >
                <a href="">
                  <i
                    class="bi bi-facebook text-secondary fs-3"
                    style="width: max-content"
                  ></i>
                </a>
                <a href="">
                  <i class="bi bi-twitter-x text-secondary"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin text-secondary fs-3"></i>
                </a>
                <a href="">
                  <i class="bi bi-github text-secondary fs-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <div
              class="image-right d-flex justify-content-start justify-content-md-end"
            >
              <img
                src="https://th.bing.com/th/id/OIP.fAf2S9tnbWpEpmp18BDdHwHaIR?w=169&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
                style="width: 350px"
                class="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer id="footer" class="mt-5">
      <div class="container">
        <div
          class="footer-content d-block d-md-flex align-items-sm-center justify-content-sm-between py-3"
        >
          <p>&copy; copyright reserved <span>2024</span></p>
          <p>Created by <a href="#" style="text-decoration:none">Ariyibi Baseet</a></p>
        </div>
      </div>
    </footer>
  `;
  res.send(profilePage);
});

app.listen(port, () => {
  console.log(`you are running on http://localhost:${port}`);
});
