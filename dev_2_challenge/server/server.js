const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://jake:jakepassw0rd@ds119650.mlab.com:19650/product-search"
);

let defaultOptions = {
  type: String,
  required: true,
  minLength: 1,
  trim: true
};

let productSchema = new mongoose.Schema({
  ID: defaultOptions,
  Description: defaultOptions,
  lastSold: defaultOptions,
  ShelfLife: defaultOptions,
  Department: defaultOptions,
  Price: defaultOptions,
  Unit: defaultOptions,
  xFor: defaultOptions,
  Cost: defaultOptions
});

productSchema.index({ "$**": "text" });

var Product = mongoose.model("Product", productSchema);

// 753542,banana,9/5/2017,4d,Produce, $2.99 ,lb,1, $0.44
app.get("/add", function(req, res) {
  let product = new Product({
    ID: "123123",
    Description: "apples",
    lastSold: "9/3/2017",
    ShelfLife: "4d",
    Department: "Produce",
    Price: "$2.99",
    Unit: "lb",
    xFor: "1",
    Cost: "$0.44"
  });
  product
    .save()
    .then(doc => {
      res.send({
        returnedMessage: doc
      });
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.get("/search", function(req, res) {
  let { term } = req.query;

  Product.find({ $text: { $search: term } }).then(data => {
    res.send(data);
  }).catch(e => {
    console.log(e);
    // res.send(e);
    res.send("something went wrong")
  })
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
