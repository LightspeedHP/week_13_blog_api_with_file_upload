const {
    postArticleSchema,
    updateArticleSchema
} = require("../schemas/article_schemas");

const validateArticleCreate = (req, res, next) => {
    const {error} = postArticleSchema.validate(req.body)
    if (error){
        return res.status(400).json({error: error.details[0].message})
    }
    next()
};

const validateArticleUpdate = (req, res, next) => {
    const {error} = updateArticleSchema.validate(req.body)
    if (error){
        return res.status(400).json({error: error.details[0].message})
    }
    next()
};

module.exports = {validateArticleUpdate, validateArticleCreate}