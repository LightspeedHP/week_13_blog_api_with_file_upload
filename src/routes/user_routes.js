const express = require("express");
const {validateNewUser, validateUser} = require("../validators/user_validators");
const {registerUser, loginUser} = require("../controllers/user_controllers");
const upload = require("../middlewares/uploads")
const router = express.Router();

router.post('/signup', validateNewUser, registerUser);

router.post('/login', validateUser, loginUser);

router.post('/uploads', upload.array('image', 5), (req, res) => {
    const fileName = req.files.filename;
    const fileURL = req.files.path;

    console.log(`${fileName} saved to ${fileURL} successfully`);
    res.status(201).json({message: "files uploaded successfully"});
})
module.exports = router;