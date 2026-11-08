const {
    createUserSchema,
    userLoginSchema
} = require("../schemas/user_schemas");

const validateNewUser = (req, res, next) => {
    const {error} = createUserSchema.validate(req.body)
    if (error){
        return res.status(400).json({error: error.details[0].message});
    }
    next();
};

const validateUser = (req, res, next) => {
    const {error} = userLoginSchema.validate(req.body);
    if (error){
        return res.status(400).json({error: error.details[0].message})
    }
    next();
};

module.exports = {validateNewUser, validateUser}