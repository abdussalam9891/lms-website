import "dotenv/config"
import express from "express";
import dbConnection from "./db/db.js";


dbConnection();

const app = express();




app.use(express.json());



app.get("/about", (req, res)=>{
  res.json({
    "name": "abdus"
  })
})


app.listen(5000, ()=>{
  console.log("server running on port 5000");
})

