<template>
  <div class="col-md-6 col-md-offset-3">
    <h2>{{resultado}}</h2>
  </div>
</template>

<script>
  import auth from '../auth'

  export default {

    data() {
      return {
        resultado: ''
      }
    },
    ready() {
      this.$http.get('http://localhost:3000/v1/itens', (data) => {
        this.resultado = data.retorno
        console.log(data.retorno)
      }/*, {
        headers: auth.getAuthHeader()
      }*/).error((err) => console.log(err))
    },
    methods: {
      getItens() {

      }
    },

    /*route: {
      canActivate() {
        return auth.user.authenticated
      }
    }*/

  }
</script>
