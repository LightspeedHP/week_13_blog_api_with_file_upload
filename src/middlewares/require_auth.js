const jwt = require("jsonwebtoken");
const UserModel = require("../models/user_model");
const authHeaderCheck = require("../utils/authHeader_check");

const requireAuth = async (req, res, next) => {
    try {
        const token = authHeaderCheck(req, res);
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(payload.userId)
        if(!user){
            return res.status(404).json({message: "User does not exist"});
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({error: "Invalid credetials"});
    }
};

module.exports = requireAuth;