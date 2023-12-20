const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:HelloWorld%402003@cluster0.9nj1urn.mongodb.net/')

// Define schemas
const AdminSchema = new mongoose.Schema({
   username: String,
   password: String 
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String, // Schema definition here
    coursesPurchased: Array
});

const CourseSchema = new mongoose.Schema({
    courseId: Number,
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}