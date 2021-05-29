// GET /comments - list all comments .            INDEX
// POST /comments - Create a new comment          CREATE
// GET /comments/:id - Get one comment (using ID) SHOW
// PATCH /comments/:id - Update one comment (using ID) UPDATE
// DELETE /comments/:id - Destroy one comment (using ID) DESTROY

// THIS IS THE PATTERN WE WILL USE BUT IT IS NOT THE ONLY ONE!!!

const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const { read } = require("fs");
const methodOveride = require("method-override");
app.use(methodOveride("_method"));
app.use(
  express.urlencoded({
    extended: true,
  })
); // this one only works with form data!
app.use(
  express.json({
    extended: true,
  })
); // this one parses json
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "todd",
    comment: "wow so cool",
  },
  {
    id: uuid(),
    username: "todd",
    comment: "wow so cool",
  },
  {
    id: uuid(),
    username: "todd",
    comment: "wow so cool",
  },
];
// CRUD -> the R in CRUD is read which is the functions below.
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});
// THIS IS THE NEW FUNCTION WHICH IS A GET REQUEST TO THE NEW PAGE
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});
// THIS IS THE CREATE FUNCTION OF THE C IN CRUD
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  console.log(req.body);
  comments.push({ username, comment, id: uuid() });
  //   res.send("New Comment Pushed!");
  res.redirect("/comments");
});
// THIS IS THE SHOW FUNCTION
// WHEN YOU MAKE A SHOW REQUEST TO THE SAEM ID IT SHOULD ALWAYS RETURN THE SAME INFO
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});
// THIS IS THE UPDATE FUNCTION OR THE U OF CRUD
// PATCH PARTIALLY MODIFYS A RESOURCE WHILE PUT OVERHAULS THE WHOLE PUT.
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});
// GET REQUEST FOR OUR UPDATE FORM
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

// DELETE REQUEST WILL REQUIRE METHOD OVERRIDE
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK, here are your ${qty} ${meat} Tacos`);
});
// req.body contains all of the post request data
app.listen(3000, () => {
  console.log("ON PORT 3000");
});
