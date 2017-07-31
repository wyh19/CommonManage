/**
 * Created by 30113 on 2017/7/28.
 */
import axios from 'axios';
 import config from './config';

export var login = (name, password) => axios.post('/user/login',
    {
        name: name,
        password: password
    },config).then(function (response) {
    return response.data;
}).catch(function (err) {
    console.log(err);
});
