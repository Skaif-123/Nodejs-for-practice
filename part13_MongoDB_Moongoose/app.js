const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://bkaif24mit:ZZyJbaJW0THZwK4W@cluster0.br3bqij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected to mongoose cloud storage[AWS]"))
  .catch((e) => console.log(e));

/**
 * TODO: Creating userSchema
 */

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

/**
 * TODO: Creating user Model; i.e interface for interacting with mongoDB Database;
 */

const User = mongoose.model("User", userSchema);

async function runQueryExample() {
  try {
    /** */
    const newUser = new User({
      name: "John Lee",
      email: "john.lee@domain.net",
      age: "45",
      isActive: false,
      tags: ["tester", "project manager"],
    });

    await newUser.save();
    console.log("created new User in database");

    /**
     * ? trying out all different methods
     *
     * *find method
     *  TODO: const allUsers= await User.find({});
     *  TODO: const getUserofActiveFalse = await User.find({ isActive: false });
     *  TODO: const getOnlyone= await User.findOne({name:"Fatima Aziz"});
     */

    /**
     * *different methods used in mongoDB along with find()
     * TODO: const seletedData=await User.find().select("name email age -_id");
     * TODO: const skipped_Data=await User.find().limit(5).skip(1);
     * TODO: const sorted_Data=await User.find().sort({age:1});
     * TODO: const numberDocs=await User.countDocuments({isActive:true});
     *
     */

    /**
     * TODO: const deletedDocs=await User.findByIdAndDelete(newUser._id);
     */

    /**
     * * Updating user information
     * TODO:
     */

    const updateUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      {
        new: true,
      }
    );
  } catch (e) {
    console.log("kuch toh gadabad hai Daya");
  } finally {
    await mongoose.connection.close();
  }
}

/**
 * * running query function
 */
runQueryExample();
