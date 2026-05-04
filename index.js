import express from "express";
const app=express()


app.get("/",(req,res)=>{
    console.log("hello world");
    res.send("Hello World")
})


app.listen(5000,()=>{
    console.log("app is up and running on port 5000");
})


