import express from 'express';
import connectDB from './config/dbConfig.js';
import apiRouter from './router/apiRouter.js' 
const app=express(); 
 
app.use(express.json());   //for uploading image in post request'));  //for uploading image in post request
app.use('/api',apiRouter);  //for using api routes
 
 
app.listen(3000, () =>{ console.log('Server running on port 3000')
        connectDB();
});