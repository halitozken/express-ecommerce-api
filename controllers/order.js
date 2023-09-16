import asyncErrorWrapper from "express-async-handler";
import OrderModel from "../models/Order.js";
import UserModel from "../models/User.js";

const getAllOrders = asyncErrorWrapper(async (req, res, next) => {});

const createOrder = asyncErrorWrapper(async (req, res) => {
  const { user_id } = req.params;
  const newOrder = req.body;

  const order = await OrderModel.create({
    user: user_id,
    ...newOrder,
  });

  return res.status(201).json({
    success: true,
    order,
  });
});

const deleteOrder = asyncErrorWrapper(async (req, res, next) => {});

const editOrder = asyncErrorWrapper(async (req, res, next) => {});

export { getAllOrders, createOrder, deleteOrder, editOrder };
