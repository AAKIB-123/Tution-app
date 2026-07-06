import express from "express";
import authMiddlewere from "../middlewere/authMiddlewere.js";
import roleMiddlewere from "../middlewere/roleMiddlewere.js";
import {
        addStudent, 
        getStudent , 
        getstudentByid, 
        updateStudent , 
        deleteStudent,
        studentProfile} from "../controllers/studentController.js";



const studRoutes = express.Router();

studRoutes.post("/add", addStudent, authMiddlewere, roleMiddlewere('admin'));
studRoutes.get("/get", getStudent, authMiddlewere, roleMiddlewere('admin')); 
studRoutes.get("/get/:id", getstudentByid, authMiddlewere, roleMiddlewere('admin') ); 
studRoutes.put("/update/:id", authMiddlewere, roleMiddlewere('admin') ,updateStudent);
studRoutes.delete("/delete/:id", authMiddlewere, roleMiddlewere('admin') ,deleteStudent);
studRoutes.get("/profile", authMiddlewere, studentProfile);


export default studRoutes   

