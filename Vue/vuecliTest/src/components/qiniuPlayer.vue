<template>

    <div>
      <h3>qiniuplayer</h3>

      <div style="width: 1320px; height: 740px;">
     		<video class="video-js" id="demo-video"></video>
			</div>
    </div>

</template>

<script>
import './js/qiniuplayer.min.css';

export default {

  data () {
    return {

      }
  },
  mounted(){
        var options ={
            width: 1320,
            height: 740,
            stretching:'letterbox',
            engineOrder : ['html5','flash'],
            autoplay    : false,
            preload     : 'auto',
            controls    : true,
            poster      : 'https://player.qiniucc.com/qiniu-620x205.png',
            url: 'http://pili-live-hls.test.dachentech.com.cn/dachen-test-test/539408269987287040.m3u8?sign=21536147abf242316c6ac00e8e573f7e&t=5c516f87',
            type        : 'hls'
        }
        setTimeout(function(){
            var player = new QiniuPlayer('demo-video', options);
            player.ready(() => {

                player.on('timeupdate', () => {
                  console.log('当前时间被更新');
                });
                player.on('play', () => {
                  console.log('播放开始');
                });
                player.on('pause', () => {
                  console.log('暂停');
                });
                player.on('error', () => {
                  console.log('遇到播放错误');
                });
                player.on('waiting', () => {
                  console.log('播放器是等待状态');
                });
                player.on('progress', () => {
                  console.log('播放正在进行');
                });
                player.on('stalled', () => {
                  console.log('浏览器尝试下载数据失败');
                });
                player.on('suspend', () => {
                  console.log('浏览器停止缓冲更多数据');
                });


            });
          },500)

  },
  methods: {


  },
  created() {
    var wxLogin = document.getElementsByTagName('HEAD').item(0);
    var wxLoginScript= document.createElement("script");
    wxLoginScript.type = "text/javascript";
    wxLoginScript.src='http://sdk-release.qnsdk.com/qiniuplayer-0.3.9.min.js';
    wxLogin.appendChild(wxLoginScript);
  }
}
</script>
