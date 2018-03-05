<template>
  <div>
      <h2>{{msg}}</h2><hr/>
      <h3>{{$store.state.count}}</h3>
      <h3>{{count}}</h3>
      <h3>{{count1}}</h3>
      <h3>{{count2}}</h3>
      <p>
          <button @click="$store.commit('add',10)">+</button>
          <button @click="reduce">-</button>
      </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState,mapMutations,mapGetters} from 'vuex';
export default {
  data(){
      return{
          msg:'Hello Vuex'
      }
  },
  store,
  computed:{
        count1(){
            return this.$store.state.count;
        },
        ...mapState(["count"]),

        ...mapGetters(["count2"])
  },
  methods:mapMutations([
        'add','reduce'
  ]),

}
</script>
