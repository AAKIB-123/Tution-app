import router from "express";
import { login, register } from "../controllers/authControllers.js";


const authRoutes = router.Router();    

authRoutes.post("/login", login);
authRoutes.post("/register", register); 

export default authRoutes

