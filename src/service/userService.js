import {createUser,findUserByEmail,signedIn} from "../repository/userRepository.js"
import bcrypt from "bcrypt";
import { generateJWTToken } from "../utils/jwt.js";
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
export const signInUserServices = async (userDetails) => {
    try {
        const user = await findUserByEmail(userDetails.email);
        if(!user){
            throw{
                status: 404,
                message: "User not found"
            }
        }
        const isPasswordValid = await bcrypt.compareSync(userDetails.password, user.password);
        if(!isPasswordValid){
            throw{
                status: 401,
                message: "Invalid password"
            }
        }
        const token=generateJWTToken({email : user.password,_id: user.password,username: user.username})
        return token;
    } catch (error) {
        throw error;
    }
};

export const checkIfUserExists = (email) => { 
    try{
        const user = findUserByEmail(email);
        return user? true : false;
    }
    catch(error){ 
        return false;
    }
};