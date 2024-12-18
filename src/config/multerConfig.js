import multer from 'multer';
import multerS3 from 'multer-s3';
import { s3 } from './awsConfig.js';
import { AWS_BUCKET_NAME } from './serverConfig.js';
export const s3uploader=multer({
    storage: multerS3({
        s3: s3,
        bucket:AWS_BUCKET_NAME,
       
        key: function (req,file,cb){
            console.log(file);
            console.log(req.body);
            //Check mimetype
            if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
                cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split("/")[1]);
            }else{
                cb(new Error('Only image files are allowed!'), false);
                }
            const uniqueSuffix=Date.now()+'-'+Math.round(Math.random()*1e9);
            cb(null, file.fieldname+ '-' + uniqueSuffix + '.' + file.mimetype.split("/")[1]);

        }

    })
});
