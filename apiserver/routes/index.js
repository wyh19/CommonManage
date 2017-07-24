/**
 * Created by 30113 on 2017/7/21.
 */
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.json({ message: 'hello index!'});
    });
    //---------------注册通用模块-----------------//
    //通用模块 -- 用户
    app.use('/api', require('./users'));
    //通用模块 -- 菜单

    //---------------注册业务模块-----------------//
    //例子模块

    //其它业务模块
};