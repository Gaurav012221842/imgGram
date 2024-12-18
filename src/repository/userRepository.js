
import User from '../schema/user.js';
export const findUserByEmail=async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        console.error(error);
        
    }
}
export const findAllUser=async () => {
    try {
        const users = await User.find();
         
        return users;
    } catch (error) {
        console.error(error);
        
    }
};
export const createUser=async (user) => {
    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (error) {
        console.error(error);
        throw error;
        
    }
};
export const signedIn = async(user) => {
    try {
        const foundUser = await User.findOne({ email: user.email });
        if (!foundUser) {
            throw new Error('User not found');
        }
        const isPasswordValid = await foundUser.isPasswordValid(user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        return foundUser;
    } catch (error) {
        console.error(error);
        throw error;
    }
};