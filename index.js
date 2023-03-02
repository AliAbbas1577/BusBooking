import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import busRoute from './routes/bus.js';

const app = express();
dotenv.config()

const connect=async ()=>{
try {
    await mongoose.connect('mongodb+srv://admin:1234@cluster0.g6idydk.mongodb.net/Booking?retryWrites=true&w=majority');
    console.log('Connected to MONGODB!');
} catch (error) {
    throw error;
}
}

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/bus",busRoute);

app.use("/api/user",userRoute);

app.listen(8800,()=>{
    connect();
    console.log('Connected to server!');
});