<template>
  <div class="col-md-6 col-md-offset-3">
    <div class="row">
      <div v-for="item in itens">
        <div class="col-md-4">
          <a href="">
            <div class="thumbnail">
              <img src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location={{item.local.geometry.location}}&key=AIzaSyCh0etpX30AJEq9ln7cEnuAkVJ6ka-blNY" alt="">
              <div class="caption">
                <h3>{{item.titulo}}</h3>
                <p>{{item.endereco}}</p>
              </div>
            </div>
          </a>
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
        photo: ''
      }
    },
    ready() {
      let self = this
      this.$http.get('http://localhost:3000/v1/itens').then((data) => {
        this.itens = data.data
        console.log(data.data[0].local.geometry.location)
      }, (err) => console.log(err))
    },
    methods: {
      getItens() {

      }
    }

  }
</script>
