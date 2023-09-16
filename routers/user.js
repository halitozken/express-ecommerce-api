import express from "express";
import {
  getAllUsers,
  editUser,
  deleteUser,
  getOneUser,
} from "../controllers/user.js";
import order from "./order.js";
const router = express.Router();

router.get("/all", getAllUsers);
router.get("/:id", getOneUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

// router.use("/:user_id/order", order);

export default router;
