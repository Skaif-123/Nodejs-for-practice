const express = require("express");
const app = express();

// application level setting
app.set("view engine", "ejs");

// routing
app.get("/", (req, res) => {
  res.send("Home_Page");
});

// using post method
app.post("/api/data", (req, res) => {
  res.send(json({ message: "data is received", data: "good" }));
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
