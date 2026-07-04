import express from "express";
import cors from "cors";  
import auth from "./routes/authRoutes.js"  
import student from "./routes/studRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());    

app.get("/", (req, res) => {
    res.send("api runnig...");
});

app.use("/auth", auth)
app.use("/students", student)
export default app ; 

