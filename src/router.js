import Vue from 'vue'
import Router from 'vue-router'
import Head  from './components/Head'
import HelloWorld from './components/HelloWorld'
import Hello from './components/Body'
import  PART from './components/home'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      component:Head,
      redirect:'/Part',
      children:[
        {
          path: 'hello',
          component:Hello,
          name:Hello,

        },
        {
          path: 'part',
          component:PART,
          name:PART,
        },
        {
          path: 'helloworld',
          component: HelloWorld,
          name:HelloWorld,
        },
      ]
    },


  ]
})
