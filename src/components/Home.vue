<template>
  <div class="col-md-6 col-md-offset-3">
    <div class="row">
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="alert alert-success" v-if="sucesso">
        <p>{{ sucesso }}</p>
      </div>
    </div>
    <div class="row">
      <div v-for="item in itens">
        <div v-if="user.authenticated && user_id == item.author_id">
          <div class="col-md-4" style="height:300px">
            <div class="thumbnail">
              <img src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location={{item.local.geometry.location}}&key=AIzaSyCh0etpX30AJEq9ln7cEnuAkVJ6ka-blNY" alt="">
              <div class="caption">
                <a href="">
                  <h3>{{item.titulo}}</h3>
                  <p>{{item.endereco}}</p>
                </a>
                <button type="button" class="btn btn-danger btn-xs" @click="deletar(item.author_id)">Deletar</button>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="col-md-4" style="height:300px">
            <div class="thumbnail">
              <img src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location={{item.local.geometry.location}}&key=AIzaSyCh0etpX30AJEq9ln7cEnuAkVJ6ka-blNY" alt="">
              <div class="caption">
                <h3>{{item.titulo}}</h3>
                <p>{{item.endereco}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from '../auth'

  export default {

    data() {
      return {
        itens: '',
        photo: '',
        user: auth.user,
        error: '',
        sucesso: '',
        user_id: ''
      }
    },
    ready() {
      this.itens = []
      let self = this
      localforage.getItem('id_user', (err, result) => {
        if (err) throw console.log(err)
        self.user_id = result
        this.$http.get(auth.api.url+'v1/itens').then((data) => {
          this.itens = data.data
          console.log(data.data[0].local.geometry.location)
        }, (err) => console.log(err))
        console.log('READY');
      })
    },
    beforeCompile() {
      this.itens = []
      console.log(this.itens.length);
    },
    methods: {
      deletar(id) {
        //alert(id);
        this.$http.delete(auth.api.url+'v1/delete/'+id).then((result) => {
          this.sucesso = 'Item deletado com sucesso.'
          console.log(result);
        }, (err) => {
          this.error = 'Erro ao deletar item.'
          console.log(err);
        })
      }
    }

  }
</script>
