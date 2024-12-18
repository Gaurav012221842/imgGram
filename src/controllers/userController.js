import { signUpUserServices } from "../service/userService.js";
export async function getProfile(req,res){
    return res.status(210).json({
        success: false,
        message: "Profile retrieved successfully"
    });

};
export async function signUp(req,res){
    try{
        const user = await signUpUserServices(req.body);
        return res.status(201).json({
            success: true,
            message: "User signed up successfully",
            data: user
        });
    }
    catch(error){
       console.log(error);
       if(error.status){
        return res.status(error.status).json({
            success: false,
            message: error.message
        });
       }
       return res.status(501).json({
        success: false,
        message: "Internal Server Error"
       });
    }
};