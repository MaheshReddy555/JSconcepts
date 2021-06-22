//This file is to serve build index.html under dist directory
const express = require("express");
const app = express();
const path = require("path");
// app.use("/", express.static("index.html"));

// app.use("*", (req, res) => {
//   res.sendFile("index.html");
// });

app.use("/", express.static(path.join(__dirname, "css")));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "css/transition.html"));
});

app.listen(4200, () => {
  console.log("App listening at 4200");
  console.log("Running in http://localhost:4200");
});
