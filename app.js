"use strict";
let a = 5;
let b = a.toString();
let c = 'asdasd';
let d = parseInt(c);
let e = new String(a).valueOf();
const user = {
    name: 'Vasya',
    email: 'vasiliy@yandex.ru',
    login: 'vasia'
};
const admin = Object.assign(Object.assign({}, user), { role: 1 });
console.log(admin);
