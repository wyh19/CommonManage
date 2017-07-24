/**
 * Created by 30113 on 2017/7/24.
 */
const express = require('express');
const router = express.Router();
const passport = require('../passport');
const Menu = require('../models/menu');

//注册具体的路由
router.get('/menu',
    passport.authenticate('bearer', {session: false}),
    function (req, res) {
        Menu.find({})
            .then(function (data) {
                res.json({success: true, message: '获取菜单成功', data: data});
            })
            .catch(function (err) {
                res.json({success: false, message: '获取菜单失败', data: err.message});
            });
    });

//添加菜单
router.post('/menu/add',
    passport.authenticate('bearer', {session: false}),
    function (req, res) {
        var data = req.body;

    }
);


module.exports = router;