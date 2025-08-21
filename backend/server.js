import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/authRoutes.js'
import connectToDB from './config/db.js';



const app=express()
connectToDB()

//middleware
app.use(cors({origin:process.env.ORIGIN,credentials:true,exposedHeaders:['X-Total-Count'],methods:['GET','POST','PATCH','DELETE']}))

app.use(express.json())
app.use(cookieParser())

// routes
app.use("/auth",authRoutes)



const port = process.env.PORT ||5000
app.listen(port,()=>{
    console.log(`server [STARTED] ~ http://localhost:${port}`);
})




