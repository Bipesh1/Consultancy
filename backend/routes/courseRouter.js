const express = require("express");
const router = express.Router();
const Course=require("../model/courses")

// Define Course Routes
router.get("/", async (req, res) => {
 try{
  const courses= await Course.find()
  res.status(200).json(courses)
 }catch(error){
  res.status(500).json("Error fetching courses")
 }
});

router.get("/:id", (req, res) => {
  res.send(`Course details for ID: ${req.params.id}`);
});

router.post("/", async (req, res) => {
  try {
    const courseData = req.body;

    // Create a new course instance
    const newCourse = new Course({
      name: courseData.courseName,
      college: courseData.associated_college,
      thumbnail:courseData.thumbnail,
      duration: courseData.duration,
      academic_requirement:courseData.academic_requirement,
      ielts_requirement:courseData.ielts_requirement,
      intake: courseData.intake,
      description:courseData.description,
      
    });

    // Save the course to the database
    await newCourse.save();

    // Send a response
    res.status(201).json({
      message: "Course created successfully",
      course: newCourse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating course", error });
  }
});

router.put("/:id", (req, res) => {
  res.send(`Course with ID: ${req.params.id} updated`);
});

router.delete("/:id", (req, res) => {
  res.send(`Course with ID: ${req.params.id} deleted`);
});

module.exports = router;
