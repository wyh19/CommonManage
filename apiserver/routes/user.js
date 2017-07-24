const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config');
const passport = require('../passport');
const router = express.Router();

// 注册账户
router.post('/user', (req, res) => {
    if (!req.body.name || !req.body.password) {
        res.json({success: false, message: '请输入您的账号密码.'});
    } else {
        var newUser = new User({
            name: req.body.name,
            password: req.body.password
        });
        newUser.save().then(function () {
            res.json({success: true, message: '成功创建新用户!',data:newUser});
        }).catch(function (err) {
            return res.json({success: false, message: '注册失败!',data:err.message});
        });
    }
});

// 检查用户名与密码并生成一个accesstoken如果验证通过
router.post('/user/login', (req, res) => {
    User.findOne({
        name: req.body.name
    }, (err, user) => {
        if (err) {
            throw err;
        }
        if (!user) {
            res.json({success: false, message: '认证失败,用户不存在!'});
        } else if (user) {
            // 检查密码是否正确
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    var token = jwt.sign({name: user.name}, config.secret, {
                        expiresIn: 10080
                    });
                    user.token = token;
                    user.save(function (err) {
                        if (err) {
                            res.send(err);
                        }
                    });
                    res.json({
                        success: true,
                        message: '验证成功!',
                        token: 'Bearer ' + token,
                        name: user.name
                    });
                } else {
                    res.send({success: false, message: '认证失败,密码错误!'});
                }
            });
        }
    });
});

// passport-http-bearer token 中间件验证
// 通过 header 发送 Authorization -> Bearer  + token
// 或者通过 ?access_token = token
router.get('/user/userinfo',
    passport.authenticate('bearer', {session: false}),
    function (req, res) {
        res.json({username: req.user.name});
    });

//退出登录
router.get('/user/logout', function (req,res) {
    //todo:token模式退出登录
});

module.exports = router;
