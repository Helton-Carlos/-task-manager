import { Router } from "express";
import { createTask } from "../controllers/task.controllers";

const router = Router();

router.post("/created-task", createTask);

export default router;
