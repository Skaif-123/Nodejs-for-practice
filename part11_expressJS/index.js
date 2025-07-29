const express = require("express");
const app = express();



app.get("/",(req,res)=>{
    res.send("Home_Page")
})


const port = 3000;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
