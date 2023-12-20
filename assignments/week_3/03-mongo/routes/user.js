const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {Admin, User, Course} = require("../db/index");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    let username = req.headers['username'];
    let password = req.headers['password'];
    User.create({
        username: username,
        password: password,
        coursesPurchased: []
    });
    res.json({
        message: "User created successflly"
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((courses) => {res.json(courses)});
});

router.post('/courses/:courseid', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers['username'];
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
    const username = req.headers['username'];

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