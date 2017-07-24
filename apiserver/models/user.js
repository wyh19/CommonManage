/**
 * Created by 30113 on 2017/7/19.
 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,//名字必须唯一
        require: true
    },
    password: {
        type: String,
        require: true
    },
    token: {
        type: String
    }
});

//保存用户前，对用户注册的密码进行加密
userSchema.pre('save',function(next){
    var user = this;
    if(user.isModified('password') || user.isNew){
        bcrypt.genSalt(10,function(err,salt){
            if(err){
                return next(err);
            }
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err){
                    return next(err);
                }
                user.password = hash;
                next();
            });
        })
    }else{
        return next();
    }
});

//检验用户输入的密码是否正确
userSchema.methods.comparePassword = function(passw,callback){
    bcrypt.compare(passw,this.password,function(err,isMatch){
        if(err){
            callback(err);
        }
        callback(null,isMatch);
    })
}
var User = mongoose.model('User',userSchema);
module.exports = User;