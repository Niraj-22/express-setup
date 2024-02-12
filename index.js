const express = require("express");
const cookieParser = require("cookie-parser");

let app = express();
app.use(cookieParser());

const admin = express.Router();
const student = express.Router();

app.set("view engine", "ejs");
app.use("/admin", admin);
app.use("/student", student);

app.use(express.text());

const middleware1 = (req, res, next) => {
  console.log("Middleware 1");
  next();
};
const middleware2 = (req, res, next) => {
  console.log("Middleware 2");
  next();
};
const middleware3 = (req, res, next) => {
  console.log("Middleware 3");
  next();
};
const middleware4 = (req, res, next) => {
  console.log("Middleware 4");
  next();
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.use(middleware4);

admin.get("/home", (req, res, next) => {
  // console.log(req.baseUrl);
  // console.log(req.originalUrl);
  // console.log(req.path);
  // const { email } = req.cookies;
  // console.log(email);
  // res.cookie("name", "Nc");
  // res.cookie("age", "21");
  // res.clearCookie("age");
  // res.cookie('age', '', {maxAge: 1});
  res.send("Admin Dashboard");
});

student.get("/home", (req, res, next) => {
  // res.format({
  //   "text/plain": () => {
  //     res.send("Plain Text");
  //   },
  //   "application/json": () => {
  //     res.json({ name: "Jj", email: "jj@xyz" });
  //   },
  //   "text/html": () => {
  //     res.render("pages/home.ejs");
  //   },
  //   default: () => {
  //     res.send("Not found");
  //   },
  // });
});

app.get("/home", (req, res, next) => {
  // res.set("title", "Hi");
  // // res.status(200).send("<h1>Hi</h1>");
  // res.sendStatus(500);
  res.send("Hi");
});

app.get("/login", (req, res) => {
  res.send("Login Here");
});
app.get("/user/:id", (req, res) => {
  let { id } = req.params;
  let { name, email } = req.query;
  res.send("User " + id + " details\n" + name + " " + email);
});
app.post("/", (req, res) => {
  let data = req.body;
  console.log(data);
  res.send("post");
});
app.put("/", (req, res) => {
  res.send("put");
});
app.delete("/", (req, res) => {
  res.send("delete");
});
app.patch("/", (req, res) => {
  res.send("patch");
});

app.listen(8000, () => {
  console.log("Server running");
});
