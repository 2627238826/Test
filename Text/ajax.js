/**
 * Created by cyl on 2017/5/16.
 */
/**
 * ajax封装
 * url 发送请求的地址
 * data 发送到服务器的数据，数组存储，如：{"username": "张三", "password": 123456}
 * succCallback 成功回调函数
 * errorCallback 失败回调函数
 * print 每次请求可选择 打印 或 不打印   url，传入参数和结果
 */
//插入loading（替换成用layer插件弹框）
var html = "";
html +=     '<div class="loading">';
html +=         '<span><img src="lodding.gif"></span>';
html +=     '</div>';


function $ajax(url, postData, print, succCallback, errorCallback){
    var parameter ='';
    $.ajax({
        type: "get",
        url: url,
        data: postData,
        dataType: "json",
        timeout:10000, //10秒超时

        beforeSend: function(){  //开始loading
            $("body").append(html);
        },

        success: function(res,textStatus){
            if(res.success){
                if(succCallback){
                    succCallback(res);
                }
            }else{
                if(errorCallback){
                    errorCallback(res);
                }
            }
            parameter =res;
        },

        complete: function(XMLHttpRequest, textStatus){
            $(".loading").remove();//结束loading
            if(textStatus=='timeout'){
                alert("网络超时，请重试！");//替换成用layer插件弹框
            }
            //打印url，传入参数和结果
            if(print==true){
                console.log(textStatus + " 请求路径："+url+" 传入参数："+JSON.stringify(postData)+" 返回数据："+JSON.stringify(parameter));
            }

        }
    });
}
