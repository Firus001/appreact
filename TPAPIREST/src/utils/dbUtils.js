const config = require("config");
const mongoose = require("mongoose");
const uri = config.get("mongodbUri");

module.exports.connecToDB = function (){
    return mongoose.connect(uri);
} 
