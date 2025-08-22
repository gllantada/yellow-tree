const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3030;
app.use(bodyParser.json());

var data = [];
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

  res.send(data);
});
app.post("/data", (req, res) => {
  let newValue = req.query.data;
  data.push(newValue);
  console.log(newValue);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
