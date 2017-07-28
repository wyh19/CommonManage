/**
 * Created by 30113 on 2017/7/21.
 */
module.exports = (app) => {
    //设置跨域访问
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });

    app.get('/', (req, res) => {
        res.json({ message: 'hello index!'});
    });
    //---------------注册通用模块-----------------//
    //通用模块 -- 用户，角色，菜单
    app.use('/api', require('./user'));
    app.use('/api',require('./role'));
    app.use('/api',require('./menu'));
    //---------------注册业务模块-----------------//
    //例子模块

    //其它业务模块
};