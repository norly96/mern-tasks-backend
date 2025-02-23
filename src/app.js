import express from "express"
import morgan from "morgan"
import authRoutes from "./routes/auth.routes.js"
import tasksRoutes from "./routes/tasks.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use(cors({
    origin: 'https://todo-tasks-sigma.vercel.app',
    /* methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], */
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json()) //Read the objects JSON
app.use(cookieParser())

app.use("/api",authRoutes)
app.use("/api",tasksRoutes)

export default app