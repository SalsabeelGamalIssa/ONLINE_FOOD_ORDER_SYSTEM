const mongoose = require("mongoose");
delete mongoose.connection.models['Product'];
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please include the product name"],
  },
  description: {
    type: String,
    required: [true, "Please include the product description"],
  },
  price: {
    type: String,
    required: [true, "Please include the product price"],
  },
 image: {
    type: String,
    required: true,
  },
  
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;