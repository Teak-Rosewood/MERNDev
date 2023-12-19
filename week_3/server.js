const express = require('express');
const bcrypt = require('bcrypt');
//`const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const rounds = 10;
const passowrd = 'testing123';

const app = express();
const port = 3000;
app.use(bodyParser.json());

const users = [
    {
        username: "admin",
        password: "admin"
    }
]

function searchUsername(username){
    let numUsers = users.filter(user => user.username === username)
    if (numUsers.length > 0)
        return numUsers[0]['password'];
    else 
        return false;
}

async function registerUser(username, password){
    let hashedPassword = await bcrypt.hash(password, rounds);
    let user = {
        username: username,
        password: hashedPassword
    }
    console.log(user);
    users.push(user);
    return hashedPassword;
}

app.use('/signup', async (req, res) =>{
    let username = req.body.username;
    let password = req.body.password;
    if(searchUsername(username) !== false)
        res.status(411).send("Username already exists");
    else{
        let val = await registerUser(username, password);
        if(val === false)
            res.status(411).send("User not registered");
        else
            res.status(200).send("hashed password: "+ val);
           
    }
});

app.use('/login', async (req, res) =>{
    let username = req.body.username;
    let password = req.body.password;
    let hashedPassword = searchUsername(username);
    if(hashedPassword === false)
        res.status(411).send("User not registered");
    else{
        let val = await bcrypt.compare(password, hashedPassword);
        if(val === false)
            res.status(411).send("Incorrect password");
        else
            res.status(200).send("Logged in");
    }

});

app.listen(port);