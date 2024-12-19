import express from 'express';
import connectDB from './config/dbConfig.js';
import apiRouter from './router/apiRouter.js' 
import { isAuthenticated } from './middleware/authMiddleware.js';
const app=express(); 
app.use(express.json());
app.use(express.text());
 app.use(express.urlencoded({ extended: true }));  //for uploading image in post request
   //for uploading image in post request'));  //for uploading image in post request
app.use('/api',apiRouter);  //for using api routes
app.get('/ping',isAuthenticated,(req,res)=>{
        console.log(req.query);
        console.log(req.body);
        console.log(req.user);
        return res.json({message: 'Pong'});
});
app.listen(3000, () =>{ console.log('Server running on port 3000')
        connectDB();
});