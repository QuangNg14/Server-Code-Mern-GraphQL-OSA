const mongoose = require("mongoose"); //node-js way

const CarSchema = new mongoose.Schema({
  name: String,
  model: Number,
  company: String,
});

export const Car = mongoose.model("Car", CarSchema);
//Car, car -> cars
