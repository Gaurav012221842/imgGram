 export const validate =(schema) => {
    return async (req, res, next) => {
        try{
             schema.parse(req.body);
            next();
        }
        catch(err){
            res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: err.errors
            });
        }
    };
};