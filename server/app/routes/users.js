'use strict'

module.exports = (app) => {

  let controller = app.controller.users

  app.route('/v1/signup')
    .post(controller.salvaUser)
    
}
