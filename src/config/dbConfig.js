import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";
export default async function connectDB(){
    try{
        await mongoose.connect(DB_URL);
        console.log(DB_URL);
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }

}