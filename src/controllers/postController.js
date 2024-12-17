 import { createPostService,getAllPostServices,deletePostByIdService,updatedPostByIdService } from "../service/postService.js";
export async function createPost(req,res) { 
     if(!req.file||!req.file.location){
        return res.status(400).json({success:false,message:"Please upload a file Gaurav"});
     }
    const post =await createPostService({
        caption: req.body.caption,
        image: req.file.location, // replace with your image upload service
        // image: req.file.location
         
    });
    return res.status(201).json({
        success: true,
        message: "Post created successfully",
        data : post
    });
}
export async function getAllPost(req, res){
    try {
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0;

        const paginatedPosts = await getAllPostServices(offset, limit);

        return res.status(200).json({
            success: true,
            message: "All posts fetched successfully",
            data: paginatedPosts
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
    
}
export async function deletePostById(req,res){
    try {
        const post = await deletePostByIdService(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Post deleted successfully",
            data: post
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
export async function updatePostById(req,res){
    try {
         
        const updateObject=req.body;

        if(req.file){
            updateObject.image=req.file.location; 
        }
        const post = await updatedPostByIdService(req.params.id, updateObject);

        return res.status(200).json({
            success: true,
            message: "Post updated successfully",
            data: post
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}