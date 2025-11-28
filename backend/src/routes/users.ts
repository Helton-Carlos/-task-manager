import { Router } from "express";
import { getUsers } from "../controllers/user.controllers";

const userRouter = Router();

userRouter.post("/get-users", getUsers);

export default userRouter;
