const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  res.render("home");
});
// what's happening in the bellow get is that we are sendign a get request to a user defined webpage,
// with the templated layout of some subreddit /r/blank and it is throwing the value of subreddit,
// which is secure from req.params.
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
});
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
