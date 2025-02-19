const express = require("express");
const { connect } = require("./config/db");
const mongoose = require("mongoose");
const Course=require("./model/courses")

const PORT = process.env.PORT || 3001;

const app = express();

connect()


app.use(express.json());

app.get("/api", async (req, res) => {
  const newCourse = new Course({
    name: "Bachelor In Information Technology",
    college:"Orchid Internation College",
    duration: 3,
    academic_requirement: "Bachelor",
    ielts_requirement: "7+",
    intake: "february",
    description:"This is good"



  });
  await newCourse.save();
  res.send("Hello, this is the backend!");
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});