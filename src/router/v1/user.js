import express  from 'express';
import { getProfile,signUp } from '../../controllers/userController.js';
import { validate } from '../../validation/zodValidator.js';
import {zodSignUpSchema} from '../../validation/zodSignUpSchema.js';
const router =express.Router();
router.get('/profile',getProfile);
router.post('/signup',validate(zodSignUpSchema),signUp);
export default router;