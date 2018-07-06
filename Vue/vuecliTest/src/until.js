import Config from '@/../config.js'

const PROJECT_NAME = Config.data.name;

// 设置localstorage
export function setLocalStorage(key, value) {
    return localStorage.setItem(PROJECT_NAME + '-' + key, JSON.stringify(value))
}

// 获取localstorage
export function getLocalStorage(key) {
    let json = localStorage.getItem(PROJECT_NAME + '-' + key)
    if (!json || json == 'undefined') {
        return '';
    }
    return JSON.parse(json)
}

// 删除localstorage
export function removeLocalStorage(key) {
    return localStorage.removeItem(PROJECT_NAME + '-' + key)
}

// 获取参数
export function getParmas(url) {
    var theRequest = {},
        strs;
    if (url.indexOf('?') != -1) {
        var str = url.split('?')[1];
        strs = str.split("&");
        for (var i = strs.length - 1; i >= 0; i--) {
            theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
        }
    }
    return theRequest;
}

// 获取设备
export function getDevice() {
    var agent = navigator.userAgent.toLowerCase();
    var device = {};
    if (agent.match(/MicroMessenger/i) == "micromessenger") {
        device.app = 'weixin'; //在微信中打开
    } else if (agent.match(/QQ\//i) == "qq/") {
        device.app = 'qq'; //在QQ打开
    } else if (agent.match(/WeiBo/i) == "weibo") {
        device.app = 'weibo'; //在新浪微博客户端打开
    }

    if (agent.indexOf('android') != -1) {
        device.platform = 'Android';
    } else if (agent.indexOf('iphone') != -1) {
        device.platform = 'iOS';
    }

    return device;
}

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * @param {number} dt 
 * @param {string} fmt 
 */
export function dateformatFilter(dt, fmt = 'yyyy-MM-dd hh:mm:ss') {
    if (!dt || dt == '' || dt == 0) {
        return '';
    }

    dt = new Date(+dt);

    var o = {
        "M+": dt.getMonth() + 1,
        "d+": dt.getDate(),
        "h+": dt.getHours() % 12 == 0 ? 12 : dt.getHours() % 12,
        "H+": dt.getHours(),
        "m+": dt.getMinutes(),
        "s+": dt.getSeconds(),
        "q+": Math.floor((dt.getMonth() + 3) / 3),
        "S": dt.getMilliseconds()
    };

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (dt.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }

    return fmt;
} 

//js 时间戳转换成几分钟前，几小时前，几天前
export function formatMsgTime (timespan) {

    var dateTime = new Date(timespan);

    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    var now = new Date();
    var now_new = Date.parse(now.toDateString());  //typescript转换写法

    var milliseconds = 0;
    var timeSpanStr;

    milliseconds = now_new - timespan;

    if (milliseconds <= 1000 * 60 * 1) {
        timeSpanStr = '刚刚';
    }
    else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
        timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
    }
    else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
    }
    else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
    }
    else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
        timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute;
    } else {
        timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    }
    return timeSpanStr;
};

//微信浏览器禁止页面下拉查看网址（不影响页面内部scroll）
export function overScroll (className) {
    var overscroll = function(el) {
        el.addEventListener('touchstart', function() {
        var top = el.scrollTop
        , totalScroll = el.scrollHeight
        , currentScroll = top + el.offsetHeight;
        //If we're at the top or the bottom of the containers
        //scroll, push up or down one pixel.
        //
        //this prevents the scroll from "passing through" to
        //the body.
        if(top === 0) {
            el.scrollTop = 1;
            } else if(currentScroll === totalScroll) {
                el.scrollTop = top - 1;
            }
        });
        el.addEventListener('touchmove', function(evt) {
        //if the content is actually scrollable, i.e. the content is long enough
        //that scrolling can occur
        if(el.offsetHeight < el.scrollHeight)
            evt._isScroller = true;
            });
        }
        overscroll(document.querySelector(className));
        document.body.addEventListener('touchmove', function(evt) {
        //In this case, the default behavior is scrolling the body, which
        //would result in an overflow.  Since we don't want that, we preventDefault.
        if(!evt._isScroller) {
            evt.preventDefault();
        }
    })
}