import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name:{
    type: string,
    required: true
  },
  email:{
     type: string,
    required: true,
    unique: true,
    lowercase: true
  },
  password:{
     type: string,
    required: true
  },
  role:{
     type: string,
    required: true,
    enum:["instructor", "student"],
    default: "student"
  },
  photoUrl:{
     type: string,
     default:""   
  },
  enrolledCourses:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }
});

export const User = mongoose.model("User", userSchema);