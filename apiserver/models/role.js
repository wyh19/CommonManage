/**
 * Created by 30113 on 2017/7/24.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var roleSchema = new Schema({
    name:{
        type:String,
        unique:true,
        require:true
    },
    code:{
        type:String,
        unique:true,
        require:true
    }
});

module.exports = mongoose.model('Role',roleSchema);