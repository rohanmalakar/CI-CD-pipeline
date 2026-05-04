import express from "express";
const app=express()


app.get("/",(req,res)=>{
    console.log("hello world");
    res.send("This is my first app")
})


app.listen(5000,()=>{
    console.log("app is up and running on port 5000");
})


