import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        minLength:5,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: (email) => {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: 'Please enter a valid email address'
        }
    },
    password:{
        type: String,
        required: true,
        minLength:8,
        validate:{
            validator: (password) => {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
            },
            message: 'Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers and special characters'
        }
    }
},{timestamps:true});
const user=mongoose.model('User', userSchema);
export default user;