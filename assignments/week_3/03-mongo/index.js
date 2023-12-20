const express = require('express');
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:HelloWorld%402003@cluster0.9nj1urn.mongodb.net/')
const {Admin, User, Course} = require("./db/index");
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const PORT = 3000;
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter) 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
