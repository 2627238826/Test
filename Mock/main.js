// 使用 Mock
//var Mock = require('mockjs');
import $ from 'jquery';
import Mock from 'mockjs';

var Random = Mock.Random;
// 使用 Mock
var data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1,
        'name':'张三111111'
    }]
});


Mock.mock('http://cn', {
    'name'     : '@name',
    'age|1-100': 100,
    'color'    : '@color',
});

$.ajax({
    url: 'http://cn',
    dataType:'json',
    success:function (data) {
        console.log(
            JSON.stringify(data, null, 4)
        )
    }
})

$('<pre>').text(JSON.stringify(data, null, 4))
    .appendTo('body')

