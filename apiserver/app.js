/**
 * Created by 30113 on 2017/7/19.
 */
var express = require('express'),
    app=express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan  = require('morgan'),
    routes = require('./routes'),
    config = require('./config'),
    passport = require('passport'),
    strategy = require('passport-http-bearer'),
    port = config.port;

    app.use(passport.initialize());
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

    routes(app);

    mongoose.Promise = require('bluebird');
    mongoose.connect(config.database);

    app.listen(port,()=>{
        console.log('服务启动，监听端口号：'+port);
    })


