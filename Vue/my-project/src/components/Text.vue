<template>
  <div class="Text">
    <h1>{{ msg }}</h1>
    <router-link to="/">点击我跳转到首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Text',
  data () {
    return {
      msg: '哈哈我又跳转了！'
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
