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

router.get("/:id",async (req, res) => {
  try{
    const courseData= await Course.findById(req.params.id)
    if(!courseData){
      res.status(404).json({message:"Class Not Found"})
    }
    res.status(200).json(courseData)
  }catch(error){
    console.log(error)
    res.status(500).json({error:"Server Error",error})
  }
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

router.put("/:id", async (req, res) => {
  try{
    const courseData= req.body
    const updateData = {
      name: courseData.courseName,
      college: courseData.associated_college,
      thumbnail:courseData.thumbnail,
      duration: courseData.duration,
      academic_requirement:courseData.academic_requirement,
      ielts_requirement:courseData.ielts_requirement,
      intake: courseData.intake,
      description:courseData.description,
    };
    const updatedClass= await Course.findOneAndUpdate({_id:req.params.id},{$set:updateData},{new:true}) 
    res.status(200).json({message:"Succesfully Updated"})
  }catch(err){
    console.error(err);
    res.status(500).json({message:"Server Error"})
  }
});

router.delete("/:id", async(req, res) => {
  try{
    const id= req.params.id
    const deletedCourse= await Course.findOneAndDelete({_id:id})
    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: `Course with ID: ${id} deleted successfully`, deletedCourse });
  }catch(error){
    res.status(500).json({ message: "Error deleting course", error });
  }
});

module.exports = router;
