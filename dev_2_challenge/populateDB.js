const mongoose = require("mongoose");
const fs = require("fs");
const axios = require("axios");
const { Product } = require("./db/config.js");

fs.readFile("product.csv", "utf-8", function(err, data) {
  let dataArray = data.split("\n");
  let headers = dataArray[0].split(",");
  let productsArray = [];

  for (let i = 1; i < dataArray.length; i++) {
    let row = dataArray[i].split(",");
    let product = {};
    for (let k = 0; k < row.length; k++) {
      product[headers[k].trim()] = row[k].trim();
    }
    productsArray.push(product);
  }

  productsArray.map(productObj => {
    let product = new Product(productObj);
    product
      .save()
      .then(doc => {
        console.log(doc);
      })
      .catch(e => {
        console.log(e);
      });
  });
});