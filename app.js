require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(express.json());
app.use(fileUpload());

const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);

const userRoute = require('./routes/user');
const postRoute = require('./routes/posts');
const {saveFile,saveFiles,deleteFile} = require('./Utils/gallery');

app.post('/gallery', deleteFile ,(req,res,next) =>{
    res.status(200).json({ msg : "File Deleted"});
})

app.use("/users" , userRoute );
app.use("/posts" , postRoute)

app.use((err,req,res,next)=>{
    err.status = err.status || 200
    res.status(err.status).json({
        con : false,
        msg : err.message
    })
})

app.listen(process.env.PORT, console.log(`App start at ${process.env.PORT}`))