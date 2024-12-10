import Post from '../schema/post.js';
export const createPost = async (caption,image,user)=>{
    try {
        const newPost = new Post.create({ caption, image, user });
        // const newPost = new Post({ caption, image, user });
        //await newPost.save();
        return newPost;
    } catch (error) {
        console.error(error);
    }   
}
export const getAllPosts = async ()=>{
    try {
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.error(error);
    }
}
export const findPostById = async (id)=>{
    try {
        const post = await Post.findById(id);
        return post;
    } catch (error) {
        console.error(error);
    }
}
export const deletePostById = async (id)=>{
    try {
       const post= await Post.findByIdAndDelete(id);
        return post;
    } catch (error) {
        console.error(error);
    }
}
export const updatePostById = async (id,caption, image)=>{
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, { caption, image }, { new: true });
        return updatedPost;
    } catch (error) {
        console.error(error);
    }
}