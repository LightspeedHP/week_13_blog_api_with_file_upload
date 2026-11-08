require("dotenv").config();
const variableCheck = require("./src/config/environment_variable_check")
const app = require("./src/app");
const connectDB = require("./src/config/db");

variableCheck();
connectDB();
const PORT = process.env.PORT || 3000;

app.listen(PORT, async() => {
    console.log(`Server running on port ${PORT}`)
})