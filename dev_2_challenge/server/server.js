const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Product } = require("../db/config.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/search", function(req, res) {
  let { term, category } = req.query;
  // search all fields for terms
  if (!category) {
    Product.find({ $text: { $search: term } })
      .then(data => {
        res.send(data);
      })
      .catch(e => {
        console.log(e);
        res.send("Error");
      });
  // specific category passed - more accurate
  } else {
    // use RegExp to make case insensitive
    // use ^ character to optimize searching
    let searchObj = {};
    searchObj[category] = new RegExp(`^${term}`, 'i');

    Product.find(searchObj)
      .then(data => {
        res.send(data);
      })
      .catch(e => {
        console.log(e);
        res.send("Error");
      });
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
