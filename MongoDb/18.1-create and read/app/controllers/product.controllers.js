import {
  getAllProducts,
  createProduct,
  getProductById,
  getAllActive,
  getByPrice,
  deleteById,
  deleteAll,
  updateProductById,
} from "../services/product.services.js";

export const create = async (req, res) => {
  try {
    const product = req.body;
    const savedProduct = createProduct(product);
    res.send("product create");
  } catch (error) {
    res.send(error.message);
  }
};
export const getAll = async (req, res) => {
  try {
    const savedProduct = await getAllProducts();
    res.send(savedProduct);
  } catch (error) {
    res.send(error.message);
  }
};
export const getById = async (req, res) => {
  try {
    const productId = req.params.id;
    const savedProduct = await getProductById(productId);
    res.send(savedProduct);
  } catch (error) {
    res.send(error.message);
  }
};
export const getActiveProducts = async (req, res) => {
  try {
    const savedProduct = await getAllActive();
    res.send(savedProduct);
  } catch (error) {
    res.send(error.message);
  }
};
export const getProductsByPrice = async (req, res) => {
  try {
    const productMinPrice = req.params.minPrice;
    const productMaxPrice = req.params.maxPrice;
    const savedProduct = await getByPrice(productMinPrice, productMaxPrice);
    res.send(savedProduct);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const savedProduct = await deleteById(productId);
    res.send(savedProduct);
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteAllProducts = async (req, res) => {
  try {
    const savedProduct = await deleteAll();
    res.send(savedProduct);
  } catch (error) {
    res.send(error.message);
  }
};
export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const productReq = req.body;
    const savedProduct = await updateProductById(productId, productReq);
    res.send(" Succesfully updated ! New data: " + savedProduct);
  } catch (error) {
    res.send(error.message);
  }
};
