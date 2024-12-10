
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