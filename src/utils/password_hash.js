const bcrypt = require("bcrypt");

const passwordHash = async(password) => {
    const salt = await bcrypt.genSalt(12);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
}

module.exports = passwordHash