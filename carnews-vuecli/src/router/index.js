import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import desc from '@/components/desc'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: index },
  	{ path: '/desc', component: desc }
  ]
})
