import mongoose from "mongoose";
import { productSchema } from "./product.schema.js";

productSchema.statics.findAllProduct = function () {
  return this.find({});
};

productSchema.statics.findProductById = function (productId) {
  return this.findById({ _id: productId });
};
productSchema.statics.findActiveProducts = function () {
  return this.find({ active: true });
};
productSchema.statics.findProductsByPrice = function (minPrice, maxPrice) {
  return this.find({ price: { $lte: maxPrice, $gte: minPrice } });
};
productSchema.statics.findProductToUpdate = function (productId, productReq) {
  let update = {};
  if (productReq.active) update.active = productReq.active;
  if (productReq.discount) update.discount = productReq.discount;
  return this.findByIdAndUpdate(productId, update, { new: true });
};

const Product = mongoose.model("product", productSchema);

export { Product };
