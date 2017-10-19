let [x, y, z] = ['hell', 'word', '111'];
console.log(x, y, z);
let { fo, ba } = { fo: "aaa", ba: "bbb" };
console.log(fo); // "aaa"
console.log(ba); // "bbb

function fn(x = 'hi', y = 'word') {
    console.log(x + ' ' + y);
}
fn();

var ara = { 'data2': [{ name: '张三', age: '25' }] };
var aa = ara.data && ara.data[0].age || '';
console.log(aa);

var tmp = new Date();
function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}
f(); // undefined

var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); // 5

function foo(x = 5) {
    //let x =1; //error
    console.log(x);
}
foo();

function foo2({ x, y = 5 }) {
    console.log(x, y);
}
foo2({}); //undefined,5
foo2({ x: 1 });//1,5
foo2({ x: 1, y: 2 });//1,2
//foo2();// TypeError: Cannot read property 'x' of undefined

function m1({ x = 0, y = 0 } = {}) {
    return [x, y];
}
function m2({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(m1());// [0, 0]
console.log(m2());// [0, 0]

let fun = v => v;
console.log(fun(555));
let sum = (num1, num2) => num1 + num2;
console.log(sum(10, 10));
var getTempItem = id => ({ id: id, name: "Temp" });
console.log(getTempItem(10));
[1, 2, 3].map(x => console.log(x * x));

function sum2(x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1);
    } else {
        return x;
    }
}
sum2(1, 100000);

function abc(num) {
    return num;
}
var cdf = {
    abc // fun:abc
}
console.log(cdf.abc(123));

//模板字符串
const name = "Nick";
console.log(`Hello ${name}, the following expression is equal to four : ${2+2}`);


//回调------------------------------------------
function adc(obj) {
    if (obj.num > 0) {
        obj.success('成功');
    } else {
        obj.error('失败');
    }
}
adc({
    num: 10,
    success: function (e) {
        console.log(e);
    },
    error: function (e) {
        console.log(e);
    }
})

function cdfg(x) {
    var promise = new Promise(function (resolve, reject) {
        if (x > 0) {
            resolve('成功');

        } else {
            reject('失败');
        }
    });
    return promise;
}
cdfg(10).then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});

// export (uesr.js) import---------------------------------------------
import {firstName,lastName} from './user.js';
function setName() {
    console.log(firstName+ ' ' +lastName);
}
setName();

import {area,circumference} from './user.js';
console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
import * as circle from './user.js';
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));





