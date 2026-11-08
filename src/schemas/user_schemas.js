const Joi = require("joi");

const createUserSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
});

const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
});

module.exports = {
    createUserSchema,
    userLoginSchema
}