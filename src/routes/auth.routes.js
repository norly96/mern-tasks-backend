import { Router } from "express";
import { register, login, logout, profile} from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router()

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API for auth the users
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Register:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - email
 *       properties:
 *         username:
 *           type: string
 *           description: Nombre de usuario
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *         email:
 *           type: string
 *           description: Email del usuario
 *       example:
 *         username: juanperez
 *         password: Passw0rd!
 *         email: juan.perez@example.com
 *     UserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del usuario
 *         username:
 *           type: string
 *           description: Nombre de usuario
 *         email:
 *           type: string
 *           description: Email del usuario
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del usuario
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización del usuario
 *       example:
 *         id: d5fE_asz
 *         username: juanperez
 *         email: juan.perez@example.com
 *         createdAt: 2023-07-06T12:34:56Z
 *         updatedAt: 2023-07-06T12:34:56Z
 */

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente
 *         headers:
 *           Set-Cookie:
 *             description: Token JWT de autenticación
 *             schema:
 *               type: string
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Error en la solicitud
 */

router.post('/register', validateSchema(registerSchema) ,register)
router.post('/login', validateSchema(loginSchema) ,login)
router.post('/logout', logout)
router.get('/profile', authRequired ,profile)

export default router