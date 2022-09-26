
const DB = require('../Model/cat');
const helper = require('../Utils/help')

const all = async (req,res,next) => {
    let cats = await DB.find();
    helper.fMsg(res,"All files",cats);
}

const add = async (req,res,next) => {
    let result = await new DB(req.body).save();
    helper.fMsg(res,"Image Uploaded",result);
    // res.json(result);
    // console.log(req.body);
}

module.exports = {
    all,
    add
}