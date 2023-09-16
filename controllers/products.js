import asyncErrorWrapper from "express-async-handler";
import ProductModel from "../models/Product.js";

const getAllProducts = asyncErrorWrapper(async (req, res) => {
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

const editProduct = asyncErrorWrapper(async (req, res) => {
  const { product_id } = req.params;
  const productInfo = req.body;

  const product = await ProductModel.findByIdAndUpdate(
    product_id,
    productInfo,
    { new: true }
  );

  return res.status(200).json({
    product,
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

const deleteAllProduct = asyncErrorWrapper(async (req, res) => {
  await ProductModel.deleteMany();

  return res.status(204).json({
    success: true,
    message: "All products has been deleted.",
  });
});

export {
  addProduct,
  getAllProducts,
  deleteProduct,
  editProduct,
  getOneProduct,
  deleteAllProduct,
};
