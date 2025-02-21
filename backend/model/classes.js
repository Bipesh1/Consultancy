const mongoose = require('mongoose')

const ClassSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    tutor: { type: String, required: true },
    tutorthumbnail:{type: String, required: true},
    thumbnail: {type: String, required: true},
    duration:{type: Number, required:true},
    description:{type: String, required: true}
  });

 
const Class = mongoose.models.Class || mongoose.model('Class', ClassSchema);
  
module.exports= Class