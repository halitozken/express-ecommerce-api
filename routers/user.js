import express from "express";
import { getAllUsers, editUser, deleteUser } from "../controllers/user.js";
import order from "./order.js";
const router = express.Router();

router.get("/all", getAllUsers);
router.put("/edit/:id", editUser);
router.delete("/delete/:id", deleteUser);

router.use("/:user_id/order", order);

export default router;
