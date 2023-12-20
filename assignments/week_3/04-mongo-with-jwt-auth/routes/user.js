const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const password = 'jwtpass'
const {Admin, User, Course} = require("../db/index");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logi
    User.create({
        username: req.headers.username,
        password: req.headers.password,
        coursesPurchased: []
    });
    res.json({
        message: "User created successflly"
    })
});

router.post('/signin', async (req, res) => {
     const person = await User.find({username: req.headers.username, password: req.headers.password});
    if(person.length !== 1)
        res.status(404).json({message: "Invalid username or password"});
    else{
        let token = jwt.sign({username: req.headers.username}, password);
        res.status(200).json({token: token});
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((courses) => {res.json(courses)});
});

router.post('/courses/:courseid', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    let a = await jwt.verify(req.headers.authorization, password);
    const username = a.username;
    const courseid = req.params['courseid'];
    try{
        const result = await User.updateOne(
            { username: username }, 
            { $push: {coursesPurchased: courseid } }
        );
        res.json({
            message: "Course purchased successfully"
        });
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    let a = await jwt.verify(req.headers.authorization, password);
    const username = a.username;
    try {
        const user = await User.findOne({ username: username });
        if (user) {
            //res.json(user.coursesPurchased);
            Course.find({courseId: { $in: user.coursesPurchased }}).then((courses) => {res.json(courses)});
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        res.status(500).send('Error retrieving courses');
    }
});
module.exports = router;
