import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config()



const authMiddlewere = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
}

const token = authHeader.split(" ")[1];

const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }

};  


export default authMiddlewere   