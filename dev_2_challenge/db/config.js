const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://jake:jakepassw0rd@ds119650.mlab.com:19650/product-search"
);

let defaultOptions = {
  type: String,
  // required: true,
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

module.exports = { Product };