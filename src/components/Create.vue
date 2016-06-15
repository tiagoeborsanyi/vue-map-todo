<template>
  <div class="col-md-6 col-md-offset-3">
    <h4>Cadastre um lugar que você já foi e deixe um comentário</h4>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <form class="" @submit.prevent="salva()">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Entre com o titulo" v-model="lugares.titulo">
      </div>
      <div class="form-group">
        <textarea class="form-control" rows="3" placeholder="Entre com a descrição" v-model="lugares.descricao"></textarea>
      </div>
      <button class="btn btn-primary" type="submit">Salvar</button>
    </form>
  </div>
<template>

<script lang="babel">
import auth from '../auth'

export default {
  data() {
    return {
      lugares: {
        titulo: '',
        descricao: ''
      },
      error: ''
    }
  },

  methods: {

    salva() {
      var place = {
        titulo = this.lugares.titulo,
        descricao: this.lugares.descricao
      }
      console.log(place)
    }
  }


}
</script>
