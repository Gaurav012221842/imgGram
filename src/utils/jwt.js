import jwt from 'jsonwebtoken';
export const generateJWTToken=(payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1d"});
};