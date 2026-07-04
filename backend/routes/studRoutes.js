import express from "express";
import {addStudent,  getStudent} from "../controllers/studentController.js";


const studRoutes = express.Router();

studRoutes.post("/add", addStudent);
studRoutes.get("/get", getStudent);    

export default studRoutes   

