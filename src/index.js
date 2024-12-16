import express from 'express';
import connectDB from './config/dbConfig.js';
import {createPost} from './controllers/postController.js'; 
import { s3uploader } from './config/multerConfig.js';

const app=express();
 
 
app.use(express.json());
app.post('/posts',s3uploader.single('image'), createPost);
 
app.listen(3000, () =>{ console.log('Server running on port 3000')
        connectDB();
});