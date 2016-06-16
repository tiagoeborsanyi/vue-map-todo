'use strict'

module.exports = (app) => {

  let controller = app.controllers.users

  app.route('/v1/signup')
    .post(controller.salvaUser)

  app.route('/v1/sessions')
    .post(controller.loginUser)

}
