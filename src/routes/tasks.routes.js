import { Router } from "express";
import { getTask, getTasks, createTask, updateTasks, deleteTask} from "../controllers/tasks.controller.js"
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', authRequired, createTask)
router.delete('/tasks/:id', authRequired, deleteTask)
router.put('/tasks/:id', authRequired, updateTasks)

export default router