import asyncErrorWrapper from "express-async-handler";
import ProductModel from "../models/Product.js";

const addSingleProduct = asyncErrorWrapper(async (req, res, next) => {
  const productInfo = req.body;
  const product = await ProductModel.create({ ...productInfo });
  console.log(productInfo);
  return res.status(200).json({
    success: true,
    data: product,
  });
});

const addProductList = asyncErrorWrapper(async (req, res, next) => {
  const information = req.body;
  const product = await ProductModel.insertMany(information);

  return res.status(200).json({
    success: true,
    data: product,
  });
});

export { addSingleProduct, addProductList };
