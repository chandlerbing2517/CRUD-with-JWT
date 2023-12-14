import User from '../model/user.model.js'
import brycptjs from 'bcryptjs';
export const SignUp=async(req,res)=>{
    const {username,email,password}=req.body;
    const hashpass=brycptjs.hashSync(password,10);
    const newUser=new User({username,email,password:hashpass});
    try {
        await newUser.save();
        res.status(201).json({message: "User created"});
    } catch (error) {
        res.status(500).json(error.message);
    }
}