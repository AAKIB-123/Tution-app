import router from "express";
import { login, register } from "../controllers/authControllers.js";
import authMiddlewere from "../middlewere/authMiddlewere.js";
import profile from "../controllers/profileControllers.js";
import roleMiddlewere from "../middlewere/roleMiddlewere.js";
import adminDeshboard from "../controllers/adminDeshboardController.js";
import studentDeshboard from "../controllers/studentDeshboardController.js";


const authRoutes = router.Router();    

authRoutes.post("/login", login);
authRoutes.post("/register", register); 
authRoutes.get("/profile", authMiddlewere, profile); 
authRoutes.get("/admin/deshboard", authMiddlewere, roleMiddlewere('admin'),adminDeshboard);
authRoutes.get("/student/deshboard", authMiddlewere, roleMiddlewere('student'),studentDeshboard);
authRoutes.get("/student/deshboard", authMiddlewere, roleMiddlewere('admin'),studentDeshboard);

export default authRoutes

