<template>

    <div>
      <h3>sewisePlayer</h3>
          <div id="player" style="width: 640px; height: 352px; "></div>
    </div>

</template>

<script>
import qiniuplayer from '../components/js';

export default {
  name: 'qiniuplayer',
  data () {
    return {

      }
  },
  mounted(){
        SewisePlayer.setup({
				server: "vod",
				type: "m3u8",
				autostart: "true",
				poster: "http://jackzhang1204.github.io/materials/poster.png",
				videourl: "http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8",
		        skin: "vodWhite",
		        title: "Live M3U8",
		        claritybutton: "disable",
		        lang: "zh_CN"
			}, "player");
  },
  methods: {

  },
  created() {





  }
}
</script>
