/**
 * Created by 30113 on 2017/7/24.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var menuSchema = new Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    icon:{
        type:String
    },
    url:{
        type:String,
        require:true
    },
    parentid:{
        type:String,
        default:'root'
    }
});

module.exports = mongoose.model('Menu',menuSchema);


