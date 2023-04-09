const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    bio: {
      type: String,
      maxlength: 200
    }
   
  },{timestamps:true});

const userModel = mongoose.model("data", userSchema)

module.exports = {
    userModel

}