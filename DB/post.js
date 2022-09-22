const mongoose = require ('mongoose');
const {Schema} = mongoose ;

const postSchema = new Schema({
     user : {type : Schema.Types.ObjectId, required : true , ref : "user"},
     title : {type : String, required : true },
     post : {type : String, required : true},
     time : {type : Date , default : Date.now}
})

const Post = mongoose.model("post" , postSchema);

module.exports = Post ;