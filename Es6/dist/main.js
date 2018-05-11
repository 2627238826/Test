/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return firstName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return lastName; });
/* harmony export (immutable) */ __webpack_exports__["a"] = area;
/* harmony export (immutable) */ __webpack_exports__["b"] = circumference;
var firstName = 'Michael';
var lastName = 'Jackson';



function area(radius) {
    return Math.PI * radius * radius;
}
function circumference(radius) {
    return 2 * Math.PI * radius;
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_js__ = __webpack_require__(0);
//基础变量&数据解耦--------------------------------
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

let birth = '2000/01/01';
let Person ={
    name:'张三',
    birth,
    hello(){
        console.log(this.name +','+this.birth);
    }
}
Person.hello();

//箭头函数-----------------------------------------
let fun = v => v;
console.log(fun(555));
let sum = (num1, num2) => num1 + num2;
console.log(sum(10, 10));
var getTempItem = id => ({ id: id, name: "Temp" });
console.log(getTempItem(10));
[1, 2, 3].map(x => console.log(x * x));


//模板字符串-------------------------------------
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

function setName() {
    console.log(__WEBPACK_IMPORTED_MODULE_0__user_js__["c" /* firstName */]+ ' ' +__WEBPACK_IMPORTED_MODULE_0__user_js__["d" /* lastName */]);
}
setName();


console.log('圆面积：' + Object(__WEBPACK_IMPORTED_MODULE_0__user_js__["a" /* area */])(4));
console.log('圆周长：' + Object(__WEBPACK_IMPORTED_MODULE_0__user_js__["b" /* circumference */])(14));


console.log('圆面积：' + __WEBPACK_IMPORTED_MODULE_0__user_js__["a" /* area */](4));
console.log('圆周长：' + __WEBPACK_IMPORTED_MODULE_0__user_js__["b" /* circumference */](14));







/***/ })
/******/ ]);