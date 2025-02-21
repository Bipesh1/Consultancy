const express = require("express");
const router = express.Router();
const Class=require("../model/classes")


router.get("/", async (req, res) => {
 try{
  const classes= await Class.find()
  res.status(200).json(classes)
 }catch(error){
  res.status(500).json("Error fetching classes")
 }
});

router.get("/:id", async (req, res) => {
  try{
    const classData= await Class.findById(req.params.id)
    if(!classData){
      res.status(404).json({message:"Class Not Found"})
    }
    res.status(200).json(classData)
  }catch(error){
    console.log(error)
    res.status(500).json({error:"Server Error",error})
  }
});

router.post("/", async (req, res) => {
  try {
    const classData = req.body;
    console.log(classData)

    // Create a new course instance
    const newClass = new Class({
      name: classData.className,
      tutor: classData.tutor,
      tutorthumbnail:classData.tutorthumbnail,
      thumbnail: classData.thumbnail,
      duration:classData.duration,
      description: classData.description
    });

    // Save the course to the database
    await newClass.save();

    // Send a response
    res.status(201).json({
      message: "Course created successfully",
      class: newClass,
    });
  } catch (error) {
    
    res.status(500).json({ message: "Error creating course", error });
  }
});

router.put("/:id", async(req, res) => {
  try{
    const classData= req.body
    const updateData = {
      name: classData.className,
      tutor: classData.tutor,
      tutorthumbnail: classData.tutorthumbnail,
      thumbnail: classData.thumbnail,
      duration: classData.duration,
      description: classData.description
    };
    const updatedClass= await Class.findOneAndUpdate({_id:req.params.id},{$set:updateData},{new:true}) 
    res.status(200).json({message:"Succesfully Updated"})
  }catch(err){
    console.error(err);
    res.status(500).json({message:"Server Error"})
  }
});

router.delete("/:id", (req, res) => {
  res.send(`Course with ID: ${req.params.id} deleted`);
});

module.exports = router;
