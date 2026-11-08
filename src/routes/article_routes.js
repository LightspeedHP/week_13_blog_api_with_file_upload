const express = require("express");
const router = express.Router();
const {
    postArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle
} = require("../controllers/article_controllers");

const {
    validateArticleUpdate,
    validateArticleCreate
} = require("../validators/article_validators");

const requireAuth = require("../middlewares/require_auth");

const requireOwnership = require("../middlewares/require_ownership");

router.use(requireAuth);

router.post('/articles', validateArticleCreate, postArticle);

router.get('/articles', getAllArticles);

router.get('/articles/:id', getArticleById);

router.put('/articles/:id', requireOwnership, validateArticleUpdate, updateArticle);

router.delete('/articles/:id', requireOwnership, deleteArticle);

module.exports = router;