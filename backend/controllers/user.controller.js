import User from "../models/user.model.js";
import bcrypt from "bcrypt";


export const register = async(req,res)=>{
  try {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
      return res.status(400).json({
        success: false,
        message: "all field required"
      })
    }

    const user = await User.findOne({email});
    if(user){
      return res.status(400).json({
        success: false,
        message: "user with this email already exist"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await user.create({
      name,
      email,
      password: hashedPassword
    })

    return res.status(200).json({
      success: true,
      message: "Account created successfully"
    })
    
  } catch (error) {
    console.log("registration error", error);
    return res.status(400).json({
      success:false,
      message: "user registration failed"
    })
    
  }
}


export const login = async(req, res)=>{
  try {
    const {email, password} = req.body;

    if(!email || !password){
      return res.status(400).json({
        success:false,
        message:"all field are required"
      })
    }

    const user = await User.findOne({email});

    if(!user){
      return res.status(400).json({
        success: false,
        message:"Incorrect email or password"
      })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
      return res.status(400).json({
        success: false,
        message:"Incorrect email or password"
      })
    }

    generateToken(res, user, `Welcome back ${user.name}`);
    
  } catch (error) {
    console.log("registration error", error);
    return res.status(400).json({
      success:false,
      message: "user registration failed"
    })    
  }
}