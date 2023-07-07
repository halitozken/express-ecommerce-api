import asyncErrorWrapper from "express-async-handler";
import ProductModel from "../models/Product.js";

const getAllProducts = asyncErrorWrapper(async (req, res) => {
  const products = await ProductModel.find();

  res.status(200).json({
    size: products.length,
    products: products,
  });
});

const addProduct = asyncErrorWrapper(async (req, res, next) => {
  const productInfo = req.body;
  const product = await ProductModel.create({ ...productInfo });
  console.log(productInfo);
  return res.status(200).json({
    success: true,
    data: product,
  });
});

const deleteProduct = asyncErrorWrapper(async (req, res) => {
  const { product_id } = req.params;

  await ProductModel.findByIdAndDelete(product_id);

  return res.status(204).json({
    message: "Product deleted successfully.",
  });
});

const updateProduct = asyncErrorWrapper(async (req, res) => {
  const { product_id } = req.params;
  const productInfo = req.body;

  const product = await ProductModel.findByIdAndUpdate(product_id, productInfo);

  await product.save();
  const updateProduct = await ProductModel.findById(product_id);

  return res.status(200).json({
    data: updateProduct,
  });
});

const getOneProduct = asyncErrorWrapper(async (req, res) => {
  const { product_id } = req.params;
  const product = await ProductModel.findById(product_id);

  return res.status(200).json({
    success: true,
    product: product,
  });
});

export {
  addProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getOneProduct,
};
