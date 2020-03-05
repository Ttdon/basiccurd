require("./database/db");
const express=require("express");
const bodyparse=require("body-parser");
const route=require("./routes/route");

const app=express();//use express function  
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));

app.use("/user",route);//goes to router or urls

app.listen(3000,()=>{
    console.log("server running on port 3000");//server is running
})
