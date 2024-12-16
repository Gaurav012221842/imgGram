export const CreatePostService = async (createPostObejct) => {
    const caption = createPostObejct.caption?.trim();
    const image = createPostObejct.image;
    const user = createPostObejct.user; 

    const post = await createPost(caption, image, user);

    return post;
}