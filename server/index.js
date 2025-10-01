import "dotenv/config"
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import dbConnection from "./db/db.js";
import userRoute from "./routes/user.route.js"


dbConnection();

const app = express();





app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

const PORT = process.env.PORT || 3000; 


app.use("/api/v1/user", userRoute);
app.get("/home", (_, res)=>{
  res.status(200).json({
    success: true,
    message:"Hello i am coming from backend"
  })
})



app.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`);
})

