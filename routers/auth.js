import express from "express";
import { register, login, logout, getUser } from "../controllers/auth.js";
import getAccessToRoute from "../middlewares/authorization/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", getAccessToRoute, logout);
router.get("/profile", getAccessToRoute, getUser);

export default router;
