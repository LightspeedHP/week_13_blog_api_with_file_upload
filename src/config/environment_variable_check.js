const variableCheck = () => {
    const required = [
        'PORT',
        'MONGODB_URI',
        'JWT_SECRET',
        'CLOUDINARY_NAME',
        'CLOUDINARY_API_KEY',
        'CLOUDINARY_API_SECRET'
    ];
    const missing = required.filter((key) => !process.env[key]);
    if(missing.length > 0){
        console.error(`Missing required environment variables: ${missing.join(', ')}`);
        process.exit(1);
    }
};

module.exports = variableCheck