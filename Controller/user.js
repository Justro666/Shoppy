const DB = require("../DB/user");
const helper = require("../Utils/help");

const all = async(req,res,next) =>{
    let users = await DB.find();
    helper.fMsg(res,"All users", users);

}

const get = async(req,res,next) =>{
    let id = req.params.id;
    let user = await DB.findById(id);
    helper.fMsg(res,"Single User",user);
}

const add = async(req,res,next) =>{
        let saveUser = new DB (req.body);
        let result = await saveUser.save();
        helper.fMsg(res,"User Added", result);
}

const patch =async(req,res,next) => {
    let user = await DB.findById(req.params.id);
    if (user) {
        await DB.findByIdAndUpdate(user._id,req.body);
        let updateUser = await DB.findById(user._id);
        helper.fMsg(res,"User Updated", updateUser);
    } else {
        next(new Error ("User is not Available with that id"));
    }
}

const drop = async(req,res,next) =>{aw
    let user = await DB.findByIdAndDelete(req.params.id);
    helper.fMsg(res,"User Deleted");
}

module.exports = {
    all,
    get,
    add,
    patch,
    drop
}