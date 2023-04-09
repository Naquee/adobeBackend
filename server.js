const express = require("express");
const { connection } = require("./config/db");
const { userControl } = require("./routes/user.routes");
const { postcontroller } = require("./routes/post.routes");


const app = express();

const PORT = 8080;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Home Page")
})


app.use("/user", userControl)
app.use("/comment", postcontroller)


app.listen(PORT, async () => {
    try{
        await connection;
        console.log("connected to DB")
    }
    catch(err){
        console.log('Error connecting DB')
        console.log(err)
    }
    console.log(`listen on PORT ${PORT}`)
})

