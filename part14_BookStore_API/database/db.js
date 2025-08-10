const mongoose= require("mongoose");
const connectToDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection established");
    }
    catch(e){
        console.error(" Kuch toh Gadabard hai");
        process.exit();
    }
}

module.exports =connectToDB;''