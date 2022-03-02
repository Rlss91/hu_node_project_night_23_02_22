const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const moviesRouter = require("./routes/movies");
const apiRouter = require("./routes/api/api");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//http://localhost:3000/
app.use("/", indexRouter);
//http://localhost:3000/users/
app.use("/users", usersRouter);
//http://localhost:3000/login/
app.use("/login", loginRouter);
//http://localhost:3000/movies/
app.use("/movies", moviesRouter);
//http://localhost:3000/api/
app.use("/api", apiRouter);

module.exports = app;
