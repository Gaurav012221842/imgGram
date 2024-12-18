import express  from 'express';
import { getProfile,login,signUp } from '../../controllers/userController.js';
import { validate } from '../../validation/zodValidator.js';
import {zodSignUpSchema} from '../../validation/zodSignUpSchema.js';
import {zodSignInSchema} from '../../validation/zodSignInSchema.js';
const router =express.Router();
router.get('/profile',getProfile);
router.post('/signup',validate(zodSignUpSchema),signUp);
router.post('/login',validate(zodSignInSchema) ,login)
export default router;