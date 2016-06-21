
<template>
  <div class="col-md-6 col-md-offset-3">


    <h4 @click="map()">Cadastre um lugar que você já foi e deixe um comentário</h4>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="alert alert-success" v-if="sucesso">
      <p>{{ sucesso }}</p>
    </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Entre com o titulo" v-model="lugares.titulo">
      </div>
      <input id="pac-input" class="" type="text" placeholder="Busque um lugar" v-model="lugares.endereco">
      <div id="map" style="height:200px;margin-bottom:20px;"></div>
      <div class="form-group">
        <textarea class="form-control" rows="3" placeholder="Entre com a descrição" v-model="lugares.descricao"></textarea>
      </div>
      <button class="btn btn-primary" @click="submit()">Salvar</button>
  </div>
</template>

<script lang="babel">
import { router } from '../index'
import auth from '../auth'

export default {
  data() {
    return {
      lugares: {
        titulo: '',
        descricao: '',
        endereco: ''
      },
      error: '',
      sucesso: ''
    }
  },
  ready() {
          var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13
        });
        var input = /** @type {!HTMLInputElement} */(
            document.getElementById('pac-input'));

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
          //infowindow.close();
          //marker.setVisible(true);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
          marker.setIcon(/** @type {google.maps.Icon} */({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
          }));
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          infowindow.setContent('<div><strong>' + place.name + '</strong><br>');
          infowindow.open(map, marker);
          marker.addListener('click', function () {
            infowindow.open(map, marker);
          });
        });
  },
  methods: {

    submit() {
      var self = this;
      var item = {
        titulo: this.lugares.titulo,
        descricao: this.lugares.descricao,
        endereco: document.getElementById('pac-input').value
      }
      //var temp;
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        'address': item.endereco
      }, function (result, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          item.local = result[0];
          //item.author_id = auth.user.id;
          localforage.getItem('id_user', (err, result) => {
            item.author_id = result
            self.$http.post(auth.api.url+'v1/create/item', item).then((response) => {
              console.log(response)
              self.sucesso = 'Sucesso para incluir item'
              self.lugares.titulo = ''
              self.lugares.descricao = ''
              self.lugares.endereco = ''
            }, (err) => {
              console.log(err)
              self.error = 'Erro para incluir item'
            })
          })

        }else{
          console.log('erro geocode.');
        }
      });
      //console.log(item);
    }
  },
  route: {
    canActivate() {
      return auth.user.authenticated
    }
  }
}
</script>
