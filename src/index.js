import app from "./app.js"
import { connectDB } from "./db.js"
import swaggerDocs from "./swagger.js"
import "dotenv/config"

const port = process.env.PORT || 3002
const V1SwaggerDocs = swaggerDocs

connectDB();
app.get("/", (req, res) => {
    const htmlResponse = `
      <html>
        <head> 
           <title>MERN-TASK-BACKEND</title>
        </head>
        <body>
           <h1>MERN-TASK-BACKEND</h1>
        </body>
      </html>
    `;
    res.send(htmlResponse)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    V1SwaggerDocs(app, port)
})