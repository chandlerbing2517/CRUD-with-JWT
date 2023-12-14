import express from 'express';
import mongoose from 'mongoose';
import dotenv from'dotenv';
import userRoutes from './Routes/user.route.js'
import authRoutes from './Routes/auth.route.js'
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Db");
}).catch((err)=>{
    console.log(err);
})

const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("OK!");
})
app.use('/Backend/user',userRoutes);
app.use('/Backend/auth',authRoutes);