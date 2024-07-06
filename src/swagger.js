import  swaggerUi  from "swagger-ui-express"
import  swaggerJsdoc from "swagger-jsdoc"

// Metadata info about our API
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Doc Task - TODO",
            version: "1.0.0",
            description: "API Documentation for use",
            contact: {
                name: "Norluis Galvez Sanchez",
                url: "https://www.norly96.com"
            },
            servers: ["http:localhost:3002"]
        }
    },
    apis: ["src/routes/auth.routes.js","src/routes/tasks.routes.js"]
}

// Docs JSON format
const swaggerSpec = swaggerJsdoc(options)

/// Function to setup our docs
const swaggerDocs = (app, port) => {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    // Documentation in JSON format
    app.get('/api/docs.json', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(swaggerSpec)
    })
    console.log(
        `Version 1 Docs are available at http://localhost:${port}/api/docs`
    )
}

export default swaggerDocs
