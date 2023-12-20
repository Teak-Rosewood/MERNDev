const password = "jwtpass"
const jwt = require('jsonwebtoken');
const { User } = require('../db');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let token = req.headers.authorization;
    jwt.verify(token, password, async (err, token) =>{
        if (err){
        res.status(411).json({message: "Token verification failed"});
        }
        else {
        const person = await User.find({username: token.username});
        if(person.length !== 1)
            res.status(411).json({message: "Admin not in database"});
        else 
            next();
        }
    });
}

module.exports = userMiddleware;