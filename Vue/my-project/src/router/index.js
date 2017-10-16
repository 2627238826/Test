import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Word from '@/components/Word'
import Text from '@/components/Text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Word',
      name: 'Hello',
      component: Word
    },
    {
      path: '/Text',
      name: 'Text',
      component: Text
    }
  ]
})
