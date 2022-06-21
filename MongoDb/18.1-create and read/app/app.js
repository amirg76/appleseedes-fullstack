import express from "express";
import {
  getAll,
  create,
  getById,
  getActiveProducts,
  getProductsByPrice,
  deleteProduct,
  deleteAllProducts,
  updateProduct,
} from "./controllers/product.controllers.js";

import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.post("/product/create", create);
app.get("/product/all-products", getAll);
app.get("/product/specific-product/:id", getById);
app.get("/product/active-products", getActiveProducts);
app.get(
  "/product/specific-products-by-price/:minPrice/:maxPrice",
  getProductsByPrice
);
app.delete("/product/delete/:id", deleteProduct);
app.delete("/product/delete-all", deleteAllProducts);
export { app };
app.put("/product/update/:id", updateProduct);
