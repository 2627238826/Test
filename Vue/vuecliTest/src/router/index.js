import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Count from '@/components/ComponentVuex'
import qiniuPlayer from '@/components/qiniuPlayer.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },{
    path: '/count',
    component: Count
   },{
    path: '/qiniuplayer',
    component: qiniuPlayer
   }
]
})
