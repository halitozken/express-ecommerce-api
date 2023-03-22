import UserModel from "../models/User.js";
import asyncErrorWrapper from "express-async-handler";

const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
  const users = await UserModel.find();

  return res.status(200).json({
    success: true,
    data: users,
  });
});

const editUser = asyncErrorWrapper(async (req, res, next) => {
  const id = req.params;
  const updateUser = await UserModel.findByIdAndUpdate(
    id,
    {
      $set: req.body,
    },
    { new: true }
  );

  return res.status(200).json({
    success: true,
    data: updateUser,
  });
});

const deleteUser = asyncErrorWrapper(async (req, res, next) => {
  const id = req.params;
  const user = await UserModel.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});

export { getAllUsers, editUser, deleteUser };
