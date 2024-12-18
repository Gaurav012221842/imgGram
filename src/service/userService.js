import {createUser} from "../repository/userRepository.js"
export const signUpUserServices = async (user) => {
    try {
        const createdUser = await createUser(user);
        console.log(createdUser);
        return createdUser;
    } catch (error) {
        if(error.name == "MongoServerError" && error.code==11000) {
            throw{
                status: 400,
                message: "Email OR User already exists"
            }
        }
        throw error;
    }
};
