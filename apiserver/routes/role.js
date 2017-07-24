/**
 * Created by 30113 on 2017/7/24.
 */
const express = require('express');
const router = express.Router();
const passport = require('../passport');
const Role = require('../models/role');

//获取角色列表，无需分页
router.get('/role',
    passport.authenticate('bearer', {session: false}),
    function (req, res) {
        Role.find({})
            .then(function (data) {
                res.json({success: true, message: '获取角色成功', data: data});
            })
            .catch(function (err) {
                res.json({success: false, message: '获取角色失败', data: err.message})
            });
    });
//添加角色
router.post('/role/add',
    passport.authenticate('bearer', {session: false}),
    function (req, res) {
        var data = req.body;
        var role = new Role({
            name: data.name,
            code: data.code
        });
        role.save()
            .then(function (data) {
                res.json({success: true, message: '新增角色成功', data: data})
            })
            .catch(function (err) {
                res.json({success: false, message: '新增角色失败', data: err.message})
            });
    }
);
//修改角色
router.post('/role/edit',
    passport.authenticate('bearer', {session: false}),
    function (req, res) {
        Role.update({_id: req.body.id}, {$set: {name: req.body.name, code: req.body.code}})
            .then(function (data) {
                res.json({success: true, message: '修改角色成功',data:data})
            })
            .catch(function (err) {
                res.json({success: false, message: '修改角色失败', data: err.message})
            });
    }
);

//删除角色
router.delete('/role/:id',
    passport.authenticate('bearer', {session: false}),
    function (req, res) {
        //todo:这里只是简单的删除记录，如果角色关联了用户和权限，需要做出详细判定
        Role.remove({_id: req.params.id})
            .then(function () {
                res.json({success: true, message: '删除角色成功'})
            })
            .catch(function (err) {
                res.json({success: false, message: '删除角色失败', data: err.message})
            });
    }
);

//查看改角色下的用户

//查看改角色授权的菜单

module.exports = router;