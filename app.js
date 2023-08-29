var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var angkatanRouter = require("./routes/angkatan");
var jenjang_pendidikanRouter = require("./routes/jenjang_pendidikan");
var program_studiRouter = require("./routes/program_studi");
var kurikulumRouter = require("./routes/kurikulum");
var satuan_pendidikanRouter = require("./routes/satuan_pendidikan");
var mata_kuliahRouter = require("./routes/mata_kuliah");
var neofeederRouter = require("./routes/neofeeder");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//variabel untuk menyimpan token dari neofeeder
app.locals.token_neo = "";

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/angkatan", angkatanRouter);
app.use("/jenjang_pendidikan", jenjang_pendidikanRouter);
app.use("/program_studi", program_studiRouter);
app.use("/kurikulum", kurikulumRouter);
app.use("/satuan_pendidikan", satuan_pendidikanRouter);
app.use("/mata_kuliah", mata_kuliahRouter);
app.use("/neofeeder", neofeederRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
