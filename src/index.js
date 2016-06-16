import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Create from './components/Create.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

import auth from './auth'
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/create': {
    component: Create
  },
  '/login': {
    component: Login
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
