
const mongoose= require("mongoose");

const ConnectToMongoDB= async (req,res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
        

    } catch (error) {
        console.error("You error is ",error)
        process.exit(1);
    }
}

module.exports=ConnectToMongoDB;