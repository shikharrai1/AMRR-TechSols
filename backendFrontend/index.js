if(process.env.NODE_ENV != "production"){
        require('dotenv').config();
}
console.log(process.env.SECRET)
const connectDB = require('./config/db.js');
connectDB();
const express = require("express");
const app = express();
const port = 8080;
app.set("view engine", "ejs");

app.get("/home",(req,res)=>{
    res.status(260).json({message : "response received"});
})
const addRouter = require("./routes/additem.js");
const viewRouter = require("./routes/viewItems.js");


app.use("/add",addRouter);
app.use("/view",viewRouter);
app.listen((port), () =>{
    console.log(`server is listening on port ${port}`);
});