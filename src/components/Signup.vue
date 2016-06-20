<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Sign Up</h2>
    <p>Faça cadastro para poder adicionar locais que você visitou.</p>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="alert alert-success" v-if="sucesso">
      <p>{{ sucesso }}</p>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Entre com um login"
        v-model="credentials.login"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Entre com sua senha"
        v-model="credentials.password"
      >
    </div>
    <button class="btn btn-primary" @click="submit()">Access</button>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  data() {
    return {
      credentials: {
        login: '',
        password: ''
      },
      error: '',
      sucesso: ''
    }
  },
  methods: {
    submit() {
      let self = this
      let users = {
        login: this.credentials.login,
        password: this.credentials.password
      }
      this.$http.post(auth.api.url+'v1/signup', users).then((response) => {
        this.sucesso = 'Usuário criado com sucesso.'
      }, (err) => {
        this.error = 'Erro para criar usuário.'
      })
    }
  }
}
</script>
