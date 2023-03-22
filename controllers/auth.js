import UserModel from "../models/User.js";
import asyncErrorWrapper from "express-async-handler";
import { sendJwtToClient } from "../helpers/authorization/tokenHelpers.js";
import {
  validateUserInput,
  comparePassword,
} from "../helpers/input/inputHelpers.js";

const register = asyncErrorWrapper(async (req, res, next) => {
  const information = req.body;
  const user = await UserModel.create({ ...information });

  sendJwtToClient(user, res);
});

const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  if (!validateUserInput) {
    return next(new CustomError("Please check your inputs", 400));
  }

  const user = await UserModel.findOne({ email }).select("+password");

  if (!comparePassword(password, user.password)) {
    return next(new CustomError("Please check your credentials", 400));
  }

  sendJwtToClient(user, res);
});

const logout = asyncErrorWrapper(async (req, res, next) => {
  const { NODE_ENV } = process.env;

  res
    .status(200)
    .cookie({
      httpOnly: true,
      expires: new Date(Date.now()),
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      message: "You have been logged out",
    });
});

const getUser = asyncErrorWrapper(async (req, res, next) => {
  return res.status(200).json({
    success: true,
    data: {
      name: req.user.name,
      lastName: req.user.lastName,
      email: req.user.email,
    },
  });
});

export { register, login, logout, getUser };
