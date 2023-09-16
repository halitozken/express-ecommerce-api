import asyncErrorWrapper from "express-async-handler";
import CartModel from "../models/Cart.js";

const getCartFromUser = asyncErrorWrapper(async (req, res) => {
  const userId = req.user.id;

  const cart = await CartModel.find({ id: userId });

  return res.status(200).json({
    success: true,
    cart,
  });
});

const addToCart = asyncErrorWrapper(async (req, res) => {
  const productId = req.body;

  const cart = await CartModel.updateOne(
    {
      user: req.user.id,
    },
    { $push: { products: productId } }
  );

  return res.status(201).json({
    success: true,
    cart,
  });
});

export { addToCart, getCartFromUser };
