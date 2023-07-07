import asyncErrorWrapper from "express-async-handler";
import OrderModel from "../models/Order.js";
import UserModel from "../models/User.js";

const getAllOrders = asyncErrorWrapper(async (req, res, next) => {
  const orders = await OrderModel.find();

  return res.status(200).json({
    orders: orders,
  });
});

const createOrder = asyncErrorWrapper(async (req, res, next) => {
  const { user_id } = req.params;
  const { products, status, amount } = req.body;
  const order = await OrderModel.create({
    owner: user_id,
    products,
    status,
    amount,
  });

  return res.status(200).json({
    success: true,
    data: order,
  });
});

const deleteOrder = asyncErrorWrapper(async (req, res, next) => {
  const { user_id } = req.params;
  const order = await OrderModel.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: "Order deleted successfully",
  });
});

const editOrder = asyncErrorWrapper(async (req, res, next) => {
  const { user_id } = req.params;
  const order = await OrderModel.findByIdAndUpdate(id);

  return res.status(200).json({
    success: true,
    data: order,
  });
});

export { getAllOrders, createOrder, deleteOrder, editOrder };
