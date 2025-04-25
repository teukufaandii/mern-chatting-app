import express from "express";
import {
  loginHandler,
  logoutHandler,
  signupHandler,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signupHandler);
router.post("/login", loginHandler);
router.post("/logout", logoutHandler);

export default router;
