const DB = require ('../DB/post');
const {fMsg} = require('../Utils/help')

const all = async(req,res,next)=>{
    let posts = await DB.find();
    fMsg(res,"All Post" , posts);
}

const get =  async(req,res,next)=>{
    res.json({msg : "This is single post "})
}

const post = async(req,res,next)=>{
    let savePost = new DB(req.body);
    let result =  await savePost.save();
    fMsg(res,"Post Added" , result);
} 

const patch = async(req,res,next)=>{
    let findPost = await DB.findById(req.id);
    if (findPost) {
        await DB.findByIdAndUpdate(findPost._id,req.body);
        let updatedPost = await DB.findById(findPost._id);
        fMsg(res,"Post Updated" , updatedPost)
    } else {
        next (new Error("There is no post with that ID"))
    }
}

const drop =  async(req,res,next)=>{
    let deltePost = await DB.findByIdAndDelete(req.id);
    fMsg(res,"Post Deleted");
}

module.exports = {
    all,
    get,
    post,
    patch,
    drop
}
