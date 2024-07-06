import app from "./app.js"
import { connectDB } from "./db.js"
import swaggerDocs from "./swagger.js"

const port = 3002
const V1SwaggerDocs = swaggerDocs

connectDB();
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    V1SwaggerDocs(app, port)
})