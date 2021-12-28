const express = require("express");
const path = require("path");
const app = express();
const port = 9000;

const staticPath = path.join(__dirname, "../views/");
// app.use(express.static(staticPath));

app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index.hbs", {
    aviyelNewsletterTitle: "Aviyel Newsletter",
    issueAndDate: "Issue 3 | 06/01/2022",
    gardeningBigImage:
      "https://user-images.githubusercontent.com/37651620/147542872-e3499b05-c33a-484c-952f-c850b361f05f.png",
    readMainTitle: "READ",
    readImageUrl:
      "https://user-images.githubusercontent.com/37651620/147545716-938a14be-47b4-4cc9-8b8c-1502e229e6f4.png",
    readArticleTitle: "Build and Incentivise Strong Communities",
    readArticleDescription:
      "Tools to grow and incentivise a strong community around your open source projects. Aviyel ensures a seamless exchange of knowledge and ideas with the community.",
  });
});

app.get("/", (req, res) => {
  res.spend("Hello there");
});

app.listen(port, () => {
  console.log(`${port}`);
});
