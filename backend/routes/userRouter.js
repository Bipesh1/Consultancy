const express = require("express");
const router = express.Router();
const User=require("../model/user")

// Define Course Routes
router.get("/", async (req, res) => {
 try{
  const users= await User.find()
  res.status(200).json(users)
 }catch(error){
  res.status(500).json("Error fetching users")
 }
});



router.post("/", async (req, res) => {
  try {
    const userData = req.body;

    // Create a new course instance
    const newUser = new User(userData);

    // Save the course to the database
    await newUser.save();

    // Send a response
    res.status(201).json({
      message: "User created successfully",
      course: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error posting inquiry", error });
  }
});



router.delete("/:id", (req, res) => {
  res.send(`Course with ID: ${req.params.id} deleted`);
});

module.exports = router;
