// Middleware for handling auth
const password = "jwtpass"
const jwt = require('jsonwebtoken');
const { Admin } = require('../db');

async function adminMiddleware(req, res, next) {
    let token = await req.headers.authorization;
    jwt.verify(token, password, async (err, token) =>{
        if (err){
        res.status(411).json({message: "Token verification failed"});
        }
        else {
        const person = await Admin.find({username: token.username});
        if(person.length !== 1)
            res.status(411).json({message: "Admin not in database"});
        else 
            next();
        }
    });
}

module.exports = adminMiddleware;