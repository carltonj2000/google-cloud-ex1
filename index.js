const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("howdy hay");
});

exports.hey = app;
