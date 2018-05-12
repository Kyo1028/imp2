import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome'
import Example from '../components/Example'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})
