import { TOKEN_SECRET } from "../config.js"
import jwt from "jsonwebtoken"

export const authRequired = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.status(401).json({ message: ["No token, authorization denied"] })

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: ["Invalid token"] });
        req.user = user;
        next();
    });
};