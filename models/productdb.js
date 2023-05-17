const mongoose = require("mongoose");
       
mongoose.set('strictQuery', false)     
const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  image: String,
  images: Array,
  colors: Array,
  description: String,
  category: String,
  shipping: Boolean,
  reviews: Number,
  stars: Number,
  stock: Number
  
  })

mongoose.set('strictQuery', false)
const allproducts = mongoose.model('allproduct', productSchema)

module.exports = allproducts

