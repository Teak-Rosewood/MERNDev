// Middleware for handling auth
const {Admin, User, Course} = require("../db/index");
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let username = req.headers.username;
    let password = req.headers['password'];
    const person = await  Admin.find({username: username, password: password});
    if (person.length !== 1)
        res.status(404).send("Invalid username or password");
    else 
        next();
}   

module.exports = adminMiddleware;