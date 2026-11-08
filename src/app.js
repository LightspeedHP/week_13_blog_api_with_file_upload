const express = require("express");
const userRoutes = require("./routes/user_routes");
const articleRoutes = require("./routes/article_routes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/error_handler");

const app = express();
app.use(express.json());

app.use(logger);
app.use('/api/auth', userRoutes);
app.use('/api', articleRoutes);
app.use(errorHandler);

module.exports = app;