import { UserModal } from "../models/userModel.js";
import bcrypt from "bcryptjs"

export const signup= async(req,res)=>{
  try{
    const {fullname,username,password,email} = req.body

    //Check if email is valid using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailRegex.test(email)){
return res.status(400).json({error:"Invalid email format"})
}

//Check if user name already exists
const existingUser = await UserModal.findOne({username});
if(isUser){
    return res.status(400).json({
        error:"User name is already Taken!!"
    })
}

//Check if email already exists
const existingEmail = await UserModal.findOne({email});
if(existingEmail){
    return res.status(400).json({
        error:"email is already Taken!!"
    })
}

//Hash the password
const salt=await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password,salt)

const newUser = new UserModal({username,fullname,email,password:hashedPassword})

if(newUser){
generateTokenAndSetCookie(newUSer._id,res)
await newUser.save()
 res.status(201).json({
    _id:newUSer._id,
    fullname:newUser.fullname,
    username:newUser.username,
    email:newUser.email,
    followers:newUser.followers,
    following:newUser.following,
    profileImg:newUser.profileImg,
    coverImg:newUser.coverImg
 })

}else{
    res.status(400).json({
        error:"Invalid User data!!"
    })
}

  }catch(error){
    res.status(500).json({
        error:"Internal server error"
    })
  }
}

export const login= async(req,res)=>{
    res.json({
        data:"login up controller"
    })
}


export const logout= async(req,res)=>{
    res.json({
        data:"logout up controller"
    })
}