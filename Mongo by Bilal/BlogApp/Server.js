const exprees = require("express");
const app = exprees();
const mongoose = require("mongoose");
const DBConfig = require("./configure/DBConfig.js");
const Blog = require("./Model/Blog.js");
const Comments = require("./Model/Comment.js");

app.use(exprees.json());

DBConfig.MyConection();

app.get("/blog", async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const result = await Blog.find().populate("comments");

    res.send(result);
  } catch (e) {
    res.send("Error" + e.message);
  }
});


app.post("/blog", async (req, res) => {
  const body = req.body;
  console.log(body)
  try {
    const result = await Blog.insertMany([body]);
    res.send(result);
  } catch (e) {
    res.send("Blog Not Added " + e.message);
  }
});



app.post("/addcomment", async (req, res) => {

    const {BlogId,Comment}  = req.body


     console.log(BlogId+"   "+Comment)   

    const result = await Comments.create({comment:Comment})

    console.log(result["_id"])


     const blog = await Blog.updateOne({_id:BlogId},{$push:{comments:result["_id"]}}) 
  
    res.send("Comment Added")

});
















app.use("/*", (req, res) => {
  res.status(400).send("Kuch Nhi Ha Yaha Par");
});

app.listen(5000, () => console.log("Server Running"));
