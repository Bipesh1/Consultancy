const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    college: { type: String, required: true },
    thumbnail: {type: String, required: true},
    duration:{type: Number, required:true},
    academic_requirement:{type: String},
    ielts_requirement:{type: String},
    intake: {type: String, required:true},
    description:{type: String, required:true},
  });
  
  
  const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);
  
module.exports= Course