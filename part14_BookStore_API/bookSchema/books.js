const mongoose=require("mongoose");
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is Required"],
    trim: true,
    maxlength: [100, "Cannot be morethan 100 words"],
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Year entry required"],
    min: [1000, "Year cannot be less than 1000"],
    max: [new Date().getFullYear(), "future timing not allowed"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports=mongoose.model("Book",BookSchema);