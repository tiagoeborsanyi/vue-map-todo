import { router } from '../index'

const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'v1/sessions'
const SIGNUP_URL = API_URL + 'v1/signup'

export default {

  api:{
    url: 'http://localhost:3000/'
  },

  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {
      //localStorage.setItem('id_token', data.token)
      localforage.setItem('id_token', data.token).then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err);
      })

      localforage.setItem('id_user', data.id).then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      })

      this.user.authenticated = true
      //this.user.id = data.id

      if (redirect) {
        router.go(redirect)
      }
    }).error((err) => {
      context.error = err
    })
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      //localStorage.setItem('id_token', data.token)
      localforage.setItem('id_token', data.token).then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err);
      })

      this.user.authenticated = true

      if (redirect) {
        router.go(redirect)
      }
    }).error((err) => {
      context.error = err
    })
  },

  logout() {
    //localStorage.removeItem('id_token')
    localforage.removeItem('id_token').then((result) => {
      console.log('token removido')
    }).catch((err) => {
      console.log(err);
    })
    this.user.authenticated = false
  },

  checkAuth() {
    /*var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }*/
    localforage.getItem('id_token', (err, result) => {
      if(result){
        this.user.authenticated = true
      }else{
        this.user.authenticated = false
      }
    })
  },

  getAuthHeader() {
    //return {
      //'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    //}
    localforage.getItem('id_token', (err, result) => {
      //return 'Authorization': 'Bearer '+result
    })
  }

}
