export async function getProfile(req,res){
    return res.status(210).json({
        success: false,
        message: "Profile retrieved successfully"
    });

}