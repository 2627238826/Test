<template>
  <div class="hello">
    <plyr>
    <video>
        <source src="http://community.test.file.dachentech.com.cn/lhCzZQTFSWkmRpfGKjwS_k87FRVN_mp4" type="video/mp4" />
        <source src="http://community.test.file.dachentech.com.cn/lhCzZQTFSWkmRpfGKjwS_k87FRVN_mp4" type="video/ogg" />
    </video>
</plyr>
<!-- audio element -->
<plyr>
    <audio>
        <source src="http://community.test.file.dachentech.com.cn/lhCzZQTFSWkmRpfGKjwS_k87FRVN_mp4" type="audio/mp3" />
        <source src="audio.ogg" type="audio/ogg" />
    </audio>
</plyr>
<plyr>
    <audio>
        <source src="http://community.test.file.dachentech.com.cn/lhCzZQTFSWkmRpfGKjwS_k87FRVN_mp4" type="audio/mp3" />
        <source src="audio.ogg" type="audio/ogg" />
    </audio>
</plyr>


    <hr>
    <div>
      <a href="#/count">点击进入vuex状态管理demo</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // Array of objects with path to video files and format.
            videos: [
                { src: 'path/to/video.mp4', format: 'mp4' },
                { src: 'path/to/video.webm', format: 'webm' }
            ],

            // Object with subtitles label, source, and language.
            subtitles: {
                label: "English Captions",
                src: "path/to/captions.vtt",
                srclang: "en"
            },

            // Array of objects with path to audio files and format.
            tracks: [
                { src: 'path/to/audio.mp3', format: 'mp3' },
                { src: 'path/to/audio.ogg', format: 'ogg' }
            ],

            // YouTube video ID or video URL.
            // https://www.youtube.com/watch?v=bTqVqk7FSmY & https://youtu.be/bTqVqk7FSmY would have the same effect.
            youtubeID: 'bTqVqk7FSmY',

            // Vimeo video ID or video URL.
            // https://vimeo.com/147865858 would have the same effect.
            vimeoID: '147865858'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>



