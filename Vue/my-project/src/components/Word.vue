<template>
  <div class="Word">
    <h1>{{ msg }}</h1>
    <router-link to="/Text">点击我跳转到Text</router-link>
  </div>
</template>

<script>
export default {
  name: 'Word',
  data () {
    return {
      msg: '哈哈我跳转了！'
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
