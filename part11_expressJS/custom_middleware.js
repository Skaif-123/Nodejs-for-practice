const express = require("express");
const app = express();

function setTimeStampLogger(req, res, next) {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} for ${req.method} to ${req.url}`);

  next();
}

app.use(setTimeStampLogger)
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(3000, () => {
  console.log(`we are listening at 3000`);
});
