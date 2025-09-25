import mongoose from "mongoose";

const dbConnection = async()=>{

 try {
   await mongoose.connect(process.env.MONGODB_URI);
   console.log("DB connected successfully");
  
 } catch (error) {
  console.error("dbConnection error", error);  
 }

}


export default dbConnection;