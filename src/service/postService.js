import { createPost,findAllPosts,countAllPosts,findPostById,deletePostById,updatePostById } from "../repository/postRepository.js";
export const createPostService= async (createPostObejct) => {
    const caption = createPostObejct.caption?.trim();
    const image = createPostObejct.image;
    const user = createPostObejct.user; 

    const post = await createPost(caption, image, user);

    return post;
}
export const getAllPostServices=async(offset,limit)=>{
    const posts=await findAllPosts(offset,limit);
    const totalDocuments=await countAllPosts();
    const totalPages=Math.ceil(totalDocuments/limit);
    return {posts,totalPages,totalDocuments};
}
export const findPostByIdService=async (id)=>{
    const post=await findPostById(id);
    if(!post) throw new Error('Post not found');
    return post;
}
export const deletePostByIdService=async (id)=>{
    const post=await deletePostById(id); 
    return post;
}
export const updatedPostByIdService=async (id,updateObject)=>{
    const post=await updatePostById(id,updateObject);
    return post;
    }