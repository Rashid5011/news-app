import mongoose from "mongoose";

const PollSchema = mongoose.Schema({
  question:{
    type:String,
    required:true
  },
  options:{
    type:Array,
    required:true
  }
});

const Poll = mongoose.model("poll", PollSchema);
export { Poll };
