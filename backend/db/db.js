import mongoose from "mongoose";

const dbConnection = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("db connected successfully");
    
  } catch (error) {
    console.log("db connection error", error);   
    
  }

}

export default dbConnection;