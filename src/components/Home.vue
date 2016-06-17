<template>
  <div class="col-md-6 col-md-offset-3">
    <div class="row">
      <div v-for="item in itens">
        <div v-if="user.id == item.author_id">
          <div class="col-md-4">
            <div class="thumbnail">
              <img src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location={{item.local.geometry.location}}&key=AIzaSyCh0etpX30AJEq9ln7cEnuAkVJ6ka-blNY" alt="">
              <div class="caption">
                <a href="">
                  <h3>{{item.titulo}}</h3>
                  <p>{{item.endereco}}</p>
                </a>
                <button type="button" class="btn btn-danger btn-xs" @click="deletar(item.id)">Deletar</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!user.authenticated">
          <div class="col-md-4">
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
        user: auth.user
      }
    },
    ready() {
      this.itens = []
      let self = this
      this.$http.get('http://localhost:3000/v1/itens').then((data) => {
        this.itens = data.data
        console.log(data.data[0].local.geometry.location)
      }, (err) => console.log(err))
      console.log('READY');
    },
    beforeCompile() {
      this.itens = []
      console.log(this.itens.length);
    },
    methods: {
      deletar(id) {
        console.log(id);
      }
    }

  }
</script>
