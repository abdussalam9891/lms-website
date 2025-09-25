import "dotenv/config"
import express from "express";
import mongoose from "mongoose";
import dbConnection from "./db/db.js"

dbConnection();



const app = express();

app.use(express.json());

app.get("/about", (req,res)=>{
  res.json({
    "name": "salam"
  })
})

app.listen(7000, ()=>{
  console.log("server is running on port 7000");
})