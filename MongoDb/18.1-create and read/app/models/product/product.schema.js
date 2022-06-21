import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  active: { type: Boolean },
  price: { type: Number, require: true },
  discount: { type: Number },
});

export { productSchema };
