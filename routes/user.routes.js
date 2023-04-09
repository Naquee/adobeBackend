const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { userModel } = require("../model/user.model");

require("dotenv").config

const userControl = Router();

userControl.post("/create", async (req,res) => {
    const {name,email,bio} = req.body;
    // console.log(req.body)

    const user = new userModel({
        name,
        email,
        bio
    })
    // console.log(user)
    try{
        await user.save()
        res.send("user created successfully")

    }
    catch(err){
        res.send("something Went Wrong")
    }
})

module.exports = {userControl}