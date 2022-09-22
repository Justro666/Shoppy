const fs = require("fs");

const saveFile = async (req,res,next) => {
    let file = req.files.file;
    let fileName = new Date().valueOf() + "_" + file.name;
    file.mv(`./Gallery/${fileName}`)
    req.imageName = fileName ; 
    next();
}

const saveFiles = async (req,res,next) => {
    let fileNames = []; 
    let files = req.files.files;
    files.forEach(file => {
        let fileName = new Date().valueOf() + "_" + file.name ;
        fileNames.push(fileName);
        file.mv(`./Gallery/${fileName}`);
    });
    req.imageName = fileNames.join(",");
    next();
}

const deleteFile = async (req,res,next ) => {
    fs.unlinkSync(`./Gallery/${req.body.name}`);
}

module.exports = {
    saveFile,
    saveFiles,
    deleteFile
}