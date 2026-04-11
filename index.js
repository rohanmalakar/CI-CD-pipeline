import express from "express";


const app=express()


app.get("/",(req,res)=>{
    console.log("hello world");
    res.send("Hello World")
})


app.listen(5000,()=>{
    console.log("App is listening to port 5000");
})


