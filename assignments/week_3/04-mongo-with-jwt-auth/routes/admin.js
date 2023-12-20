const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, User, Course} = require("../db/index");
const jwt = require('jsonwebtoken');
const password = 'jwtpass'
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username: req.headers['username'],
        password: req.headers['password']
    })
    res.json({
        message: "Admin created successflly"
    })
});

router.post('/signin', async (req, res) => {
    const person = await Admin.find({username: req.headers.username, password: req.headers.password});
    if(person.length !== 1)
        res.status(404).json({message: "Invalid admin user or password"});
    else{
        let token = jwt.sign({username: req.headers.username}, password);
        res.status(200).json({token: token});
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    let id = Math.floor(Math.random() * 1001);
    Course.create({
        courseId: id,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
        published: req.body.published
    })
    res.json({
        message: 'Course created successfully',
        courseId: id
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((courses) => {res.json(courses)});
}); 

module.exports = router;