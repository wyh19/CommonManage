/**
 * Created by 30113 on 2017/7/24.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//这里设计菜单就两级
// 如果需要的话，也可以考虑无限级，需要尝试调整代码
var childMenuSchema = new Schema({
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
    }
});

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
    children:[childMenuSchema]
});

exports.Menu = mongoose.model('Menu',menuSchema);
exports.ChildMenu = mongoose.model('ChildMenu',childMenuSchema);

