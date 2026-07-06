import router from "express";
import { login, register } from "../controllers/authControllers.js";
import authMiddlewere from "../middlewere/authMiddlewere.js";
import roleMiddlewere from "../middlewere/roleMiddlewere.js";
import adminDeshboard from "../controllers/adminDeshboardController.js";
import studentDeshboard from "../controllers/studentDeshboardController.js";


const authRoutes = router.Router();    

// auth routes

authRoutes.post("/login", login);
authRoutes.post("/register", register); 
authRoutes.get("/admin/deshboard", authMiddlewere, roleMiddlewere('admin'),adminDeshboard);
authRoutes.get("/student/deshboard", authMiddlewere, roleMiddlewere('admin','student'),studentDeshboard);




export default authRoutes

