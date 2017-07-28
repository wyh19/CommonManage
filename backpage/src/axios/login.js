/**
 * Created by 30113 on 2017/7/28.
 */
import axios from 'axios';
import qs from 'qs'

export const login = (name, password) => axios.post('http://localhost:3721/api/user/login', qs.stringify({
    name: name,
    password: password
})).then(function (response) {
    return response.data;
}).catch(function (err) {
    console.log(err);
});