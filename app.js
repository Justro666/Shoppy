require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);

const userRoute = require('./routes/user');
const postRoute = require('./routes/posts')


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