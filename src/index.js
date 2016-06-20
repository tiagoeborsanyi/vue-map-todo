import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Create from './components/Create.vue'
import Signup from './components/Signup.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

import auth from './auth'
localforage.getItem('id_token', (err, result) => {
  Vue.http.headers.common['Authorization'] = 'Bearer ' + result
  console.log(result);
})

Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

//verificar se o usuario esta autenticado para determinada rota ou não
auth.checkAuth()

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/create': {
    component: Create
  },
  '/signup': {
    component: Signup
  },
  '/login': {
    component: Login
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
