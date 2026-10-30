import { Router } from "express";
import { login, signup } from "../controllers/auth.controllers.js";
import { validateLogin, validateSignup } from "../validators/user.validator.js";

const router = Router();

router.post("/signup", validateSignup, signup);
router.post("/login", validateLogin, login);

export default router;
