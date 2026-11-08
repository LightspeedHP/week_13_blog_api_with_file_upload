const Joi = require("joi")

const postArticleSchema = Joi.object({
        title: Joi.string().min(5).required(),
        content: Joi.string().min(20).required()
});

const updateArticleSchema = Joi.object({
        title: Joi.string().min(5),
        content: Joi.string().min(20)
});

module.exports = {
    postArticleSchema,
    updateArticleSchema
}