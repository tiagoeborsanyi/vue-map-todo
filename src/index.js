import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Create from './components/Create.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/create': {
    component: Create
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
