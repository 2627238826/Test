<template>
  <div class="hello">
    <h1>{{ msgs }}</h1>
    <router-link to="/Word">点击我跳转到Word</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msgs: 'Vue单页面项目Demo!'
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
