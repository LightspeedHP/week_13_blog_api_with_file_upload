const authHeaderCheck = (req, res) => {
    const authHeader = req.header('Authorization');
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({error: "Access denied, no token"});
    };

    const token = authHeader.replace('Bearer ', '');
    return token;
}

module.exports = authHeaderCheck;