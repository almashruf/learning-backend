const express = require("express");
const app = express();

app.get("/profile", function (req, res, next) {
  return next(new Error("somthing went wrong"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("somthing went wrong, we dont know what to do");
});

app.listen(3000);
