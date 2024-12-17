import {z} from 'zod';
const ACCPTED_IMAGE=["image/jpg", "image/jpeg", "image/png","image/webp"];
export const zodSchema=z.object({
    caption: z.string({message:"Caption is Required"}).min(5).max(255),
     
});