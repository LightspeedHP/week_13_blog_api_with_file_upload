const ArticleModel = require("../models/article_model");

const requireOwnership =  async(req, res, next) => {
    try {
        const item = await ArticleModel.findById(req.params.id);
        if(!item){
            return res.status(404).json({error: "Not found"})
        }
        if(item.author.toString() !== req.user._id.toString()){
            return res.status(403).json({error: "Forbidden"});
        }
        next();
    } catch (error) {
        next(error)
    }
};

module.exports = requireOwnership;