import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mock from "../components/mock";
import mock2 from "../components/mock2";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/mock',
      name: 'Mock',
      component: mock
    },{
      path: '/mock2',
      name: 'Mock2',
      component: mock2
    }
  ]
})
