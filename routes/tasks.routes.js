import { Router } from "express";
import Task from "../models/Tasks.js";
import TaskController from "../controllers/tasks.controller.js";
import { isAdmin, requireAuth } from "../middelware/auth.js";

const router = Router();

router.get("/", requireAuth, isAdmin, TaskController.getalltasks);
router.get("/:id", TaskController.gettaskbyid);
router.post("/", TaskController.inserttask);
router.patch("/:id", TaskController.updatetask);
router.delete("/:id", TaskController.deletetask);

export default router;
