const express = require("express");
const path = require("path");
const app = express();
const redditData = require('./data.json')
app.use(express.static(path.join(__dirname, 'public')))
// this app.use queries for a local directory which will allow us to use it.
// When you go to use the files in the directory you serve you do not need to include the directory name, check subreddit.html
// for an example
//Also path.join makes an absolute reference wherever the index.js is so it's making the absolute path to the public folder.

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  res.render("home");
});
// what's happening in the bellow get is that we are sendign a get request to a user defined webpage,
// with the templated layout of some subreddit /r/blank and it is throwing the value of subreddit,
// which is secure from req.params.
app.get("/cats", (req, res) => {
  const cats = [
    'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
  ]
  res.render('cats', {
    cats
  });
})

app.get("/r/:subreddit", (req, res) => {
  const {
    subreddit
  } = req.params;
  const data = redditData[subreddit];
  console.log(data);
  if (data) {
    res.render("subreddit", {
      ...data
    });
  } else {
    res.render('notfound', {
      subreddit
    })
  }

});
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", {
    num
  });
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});