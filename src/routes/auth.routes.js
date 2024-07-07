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
 *   description: API for authentication the users
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
 *           description: Username
 *         password:
 *           type: string
 *           description: Password
 *         email:
 *           type: string
 *           description: Email
 *       example:
 *         username: juanperez
 *         password: Passw0rd!
 *         email: juan.perez@example.com
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: Email 
 *         password:
 *           type: string
 *           description: Password
 *       example:
 *         email: juan.perez@example.com
 *         password: Passw0rd! 
 *     UserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: User ID
 *         username:
 *           type: string
 *           description: Username
 *         email:
 *           type: string
 *           description: Email
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: User creation date
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: User last updated date
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
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: Successfully registered user
 *         headers:
 *           Set-Cookie:
 *             description: Authentication JWT Token
 *             schema:
 *               type: string
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Error 
 */

router.post('/register', validateSchema(registerSchema) ,register)

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login with an existing user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Successful login
 *         headers:
 *           Set-Cookie:
 *             description: Authentication JWT Token
 *             schema:
 *               type: string
 *               example: "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Error 
 *       401:
 *         description: Incorrect Credentials
 */
router.post('/login', validateSchema(loginSchema) ,login)

/**
 * @swagger
* /api/logout:
*   post:
*     summary: Logout
*     tags: [Auth]
*     responses:
*       200:
*         description: Successful Logout
*         headers:
*           Set-Cookie:
*             description: Deleted JWT Token
*             schema:
*               type: string
*               example: "token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
*       400:
*         description: Error
*/

router.post('/logout', logout)

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Gets the profile of the authenticated user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: User profile successfully obtained
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: User not Found
 */


router.get('/profile', authRequired ,profile)

export default router