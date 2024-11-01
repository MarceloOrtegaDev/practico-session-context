import { Router } from "express";
export const usersRouter = Router()
import { Logout, loginUser, getSession } from "../controllers/auth.controllers.js";
import { validarJwt } from "../middleware/validarJwt.js";

usersRouter.post('/login', loginUser);
usersRouter.post('/logout', validarJwt, Logout);
usersRouter.get("/session", validarJwt, getSession);

