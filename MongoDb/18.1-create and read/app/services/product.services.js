import { Product } from "../models/product/product.model.js";

export const getAllProducts = async () => {
  return await Product.findAllProduct();
};
export const createProduct = async (product) => {
  const newProduct = new Product(product);
  return await newProduct.save();
};
export const getProductById = async (productId) => {
  return await Product.findProductById(productId);
};
export const getAllActive = async (productId) => {
  return await Product.findActiveProducts();
};
export const getByPrice = async (min, max) => {
  return await Product.findProductsByPrice(min, max);
};
export const deleteById = async (productId) => {
  return await Product.findProductById(productId).remove();
};
export const deleteAll = async (productId) => {
  return await Product.remove();
};
export const updateProductById = async (productId, productReq) => {
  return await Product.findProductToUpdate(productId, productReq);
};
