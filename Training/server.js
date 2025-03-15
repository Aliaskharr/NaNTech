// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());


// const courses = [
//     { courseId: 1, courseName: "JavaScript Basics", courseDescription: "Learn the fundamentals of JavaScript." },
//     { courseId: 2, courseName: "React for Beginners", courseDescription: "Introduction to React and its core concepts." },
//     { courseId: 3, courseName: "Node.js Essentials", courseDescription: "Understand the basics of Node.js and backend development." },
//     { courseId: 4, courseName: "HTML & CSS Mastery", courseDescription: "Deep dive into HTML and CSS for web design." },
//     { courseId: 5, courseName: "Python for Data Science", courseDescription: "Start working with Python and data analysis." },
//     { courseId: 6, courseName: "SQL for Beginners", courseDescription: "Learn how to work with databases using SQL." },
//     { courseId: 7, courseName: "C# and .NET Core", courseDescription: "Get started with C# and .NET development." },
//     { courseId: 8, courseName: "Django Web Development", courseDescription: "Build web applications using Django." },
//     { courseId: 9, courseName: "Machine Learning Basics", courseDescription: "Introduction to machine learning and AI." },
//     { courseId: 10, courseName: "Cybersecurity Fundamentals", courseDescription: "Learn the basics of cybersecurity and ethical hacking." }
// ];

// app.get('/courses', (req, res) => {
//     res.json(courses);
// });

// app.post('/courses', (req, res) => {
//     console.log('Received Body:', req.body); // Debugging

//     const { name } = req.body;
//     if (!name) {
//         return res.status(400).json({ error: 'Course name is required' });
//     }

//     const newCourse = { id: courses.length + 1, name };
//     courses.push(newCourse);
    
//     res.status(201).json(newCourse);
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });










const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from other localhost
app.use(express.json());

const DATA_FILE = "courses.json";

// Read courses from file
const readData = () => {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
};

// Write courses to file
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Get all courses
app.get("/courses", (req, res) => {
    res.json(readData());
});

// Get a single course by ID
app.get("/courses/:id", (req, res) => {
    const courses = readData();
    const course = courses.find(c => c.courseId == req.params.id);
    course ? res.json(course) : res.status(404).json({ message: "Course not found" });
});

// Add a new course
app.post("/courses", (req, res) => {
    const courses = readData();
    const newCourse = {
        courseId: Date.now().toString(),
        courseName: req.body.courseName,
        courseDescription: req.body.courseDescription,
        duration: req.body.duration,
        price: req.body.price,
        instructor: req.body.instructor,
        level: req.body.level,
        language: req.body.language,
        category: req.body.category,
        rating: req.body.rating,
        enrollmentCount: req.body.enrollmentCount
    };
    courses.push(newCourse);
    writeData(courses);
    res.status(201).json(newCourse);
});

// Update a course
app.put("/courses/:id", (req, res) => {
    let courses = readData();
    const index = courses.findIndex(c => c.courseId == req.params.id);
    if (index === -1) return res.status(404).json({ message: "Course not found" });
    courses[index] = { ...courses[index], ...req.body };
    writeData(courses);
    res.json(courses[index]);
});

// Delete a course
app.delete("/courses/:id", (req, res) => {
    let courses = readData();
    const filteredCourses = courses.filter(c => c.courseId != req.params.id);
    if (courses.length === filteredCourses.length) return res.status(404).json({ message: "Course not found" });
    writeData(filteredCourses);
    res.json({ message: "Course deleted" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
