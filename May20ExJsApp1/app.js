const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World Ext JS aaaadad");
});

module.exports = app;
