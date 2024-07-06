import app from "./app.js"
import { connectDB } from "./db.js"

const port = 3002

connectDB();
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})