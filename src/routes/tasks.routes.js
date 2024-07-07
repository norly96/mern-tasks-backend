import { Router } from "express";
import { getTask, getTasks, createTask, updateTasks, deleteTask} from "../controllers/tasks.controller.js"
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API for the tasks
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID 
 *         title:
 *           type: string
 *           description: Title
 *         description:
 *           type: string
 *           description: Description
 *         status:
 *           type: boolean
 *           description: Status
 *         user:
 *           type: string
 *           description: User ID
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Task creation date
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Task last updated date
 *       example:
 *         id: 60d21b4667d0d8992e610c85
 *         title: "First Task"
 *         description: "This is the description the my first task"
 *         status: false
 *         user: 60d21b4667d0d8992e610c85
 *         createdAt: 2023-07-06T12:34:56Z
 *         updatedAt: 2023-07-06T12:34:56Z
 *     NewTask:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         title:
 *           type: string
 *           description: Title
 *         description:
 *           type: string
 *           description: Description
 *         date:
 *           type: string
 *           format: date-time
 *           description: Date
 *         status:
 *           type: boolean
 *           description: Status
 *       example:
 *         title: "Nueva tarea"
 *         description: "Descripción de la nueva tarea"
 *         date: 2023-07-07T12:34:56Z
 *         status: false
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Gets the authenticated user's tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: All tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       401:
 *         description: Not authorized
 *       500:
 *         description: Server Error 
 */

router.get('/tasks', authRequired, getTasks)

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Gets a specific task from the authenticated user
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Task ID 
 *     responses:
 *       200:
 *         description: Task successfully obtained
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not Found
 *       401:
 *         description: Not authorized
 *       500:
 *         description: Server Error
 */
router.get('/tasks/:id', authRequired, getTask)

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create the new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewTask'
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Error 
 *       401:
 *         description: Not authorized
 *       500:
 *         description: Server Error
 */
router.post('/tasks', authRequired, createTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete the task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Task ID
 *     responses:
 *       204:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not Found
 *       401:
 *         description: Not authorized
 *       500:
 *         description: Server Error
 */

router.delete('/tasks/:id', authRequired, deleteTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Updates a specific task for the authenticated user
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewTask'
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not Found
 *       401:
 *         description: Not authorized
 *       500:
 *         description: Server Error
 */

router.put('/tasks/:id', authRequired, updateTasks)

export default router