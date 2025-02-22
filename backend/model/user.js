const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    number:{type:String, required: true},
    age:{type: String, required:true},
    inquiry:{type:String,required:true},
  });
  
  
  const User = mongoose.models.Admin || mongoose.model('User', UserSchema);
  
module.exports= User