const {Router} = require("express");
const { postModel } = require("../model/post.model");


const postcontroller = Router();

postcontroller.get("/", async(req,res) => {
    const {name} = req.query;
    const post = await postModel.find({userId:req.body.userId, name})
    res.send(post)
})

postcontroller.post("/create", async(req,res) => {
    const {content} = req.body;
    // console.log(req.body)
    const posting = new postModel({
        content
       
    })
    try{
        await posting.save();
        res.send("Comment posted successfully")


    }
    catch(err){
        res.send("something went wrong")
        console.log(err)
    }
})

postcontroller.delete("/delete/:postId", async (req,res) => {
    const {postId} = req.params
    // console.log(userId)
    const deletedUser = await postModel.findOneAndDelete({_id : postId, userId: req.body.userId})
    if(deletedUser){
        res.status(200).send("Deleted")
    }
    else{
        res.send("somrthing wen't wrong")
    }
})

postcontroller.patch("/edit/:postId", async(req,res) => {
    const {postId} = req.params;
    const editedUser = await postModel.findOneAndUpdate({_id : postId, userId:req.body.userId}, req.body)
    if(editedUser){
        res.send("Edited successfully")
    }
    else{
        res.send("someting wen't wrong")
    }
})

module.exports = {
    postcontroller
}