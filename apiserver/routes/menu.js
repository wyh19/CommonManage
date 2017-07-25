/**
 * Created by 30113 on 2017/7/24.
 */
const express = require('express');
const router = express.Router();
const passport = require('../passport');
const Menu = require('../models/menu');

//获取菜单列表
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
router.post('/menu',
    passport.authenticate('bearer', {session: false}),
    function (req, res) {
        var data = req.body;
        var menu = new Menu({
            name: data.name,
            icon: data.icon,
            url: data.url
        });
        if (data.parentid) {
            menu.parentid = data.parentid;
        }
        menu.save()
            .then(function () {
                res.json({success: true, message: '添加菜单失败.', data: menu});
            })
            .catch(function (err) {
                res.json({success: false, message: '添加菜单失败.', data: err.message});
            });
    }
);
//修改菜单
router.put('/menu/:id',
    passport.authenticate('bearer', {session: false}),
    function (req, res) {
        Menu.update({_id: req.params.id}, {
            $set: {
                name: req.body.name,
                icon: req.body.icon,
                url: req.body.url,
                parentid:req.body.parentid
            }
        })
            .then(function () {
                res.json({success: true, message: '修改菜单成功.'});
            })
            .catch(function (err) {
                res.json({success: false, message: '修改菜单失败.', data: err.message});
            });
    }
);
//删除菜单
router.delete('/menu/:id',
    passport.authenticate('bearer', {session: false}),
    function (req, res) {
        Menu.remove({_id: req.params.id})
            .then(function () {
                res.json({success: true, message: '删除菜单成功.'});
            })
            .catch(function (err) {
                res.json({success: false, message: '删除菜单失败.', data: err.message});
            });
    }
);

module.exports = router;