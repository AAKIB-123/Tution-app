import express from "express";
import cors from "cors";  
import auth from "./routes/authRoutes.js"  

const app = express();

app.use(cors());
app.use(express.json());    

app.get("/", (req, res) => {
    res.send("api runnig...");
});

app.use("/api/auth", auth)
export default app ; 

