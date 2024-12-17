import express from 'express';
import { s3uploader } from '../../config/multerConfig.js';
import { createPost, deletePostById, getAllPost,updatePostById } from '../../controllers/postController.js';
import { validate } from '../../validation/zodValidator.js';
import {zodSchema} from '../../validation/zodPostSchema.js';
const router=express.Router();
router.post('/',s3uploader.single('image'),validate(zodSchema),createPost);
 
router.get('/', getAllPost);
router.delete('/:id', deletePostById);
router.put('/:id',s3uploader.single('image'),updatePostById);
export default router;