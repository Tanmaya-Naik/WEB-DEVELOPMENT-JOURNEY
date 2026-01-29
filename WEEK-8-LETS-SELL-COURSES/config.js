const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD;

//to avoid the circular dependency we create a config.js and remember circular dependency is hard to debug


module.exports={
    JWT_ADMIN_PASSWORD,
    JWT_USER_PASSWORD
}