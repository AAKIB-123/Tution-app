import express from "express";
import addStudent from "../controllers/studentController.js";
const studRoutes = express.Router();

studRoutes.post("/add", addStudent);    

export default studRoutes   

