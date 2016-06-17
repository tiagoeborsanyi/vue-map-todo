'use strict'

let jwt = require('express-jwt')

module.exports = (app) => {

  let controller = app.controllers.item
  let token = app.controllers.users

  //app.use('/v1/itens', expressjwt({secret: 'vue and jwt'}))

  app.route('/v1/itens')
    .get(controller.listarItens)

  app.use('/v1/create', jwt({secret: 'vue and jwt'}))

  app.route('/v1/create/item')
    .post(controller.criarItem)

}
