'use strict'

let jwt = require('jsonwebtoken')
let Boom = require('boom')

module.exports = (app) => {

  let User = app.models.users
  let controller = {}
  const JWT_KEY = 'vue and jwt'

  controller.salvaUser = (req, res) => {
    User.forge(req.body)
      .save()
      .then((user) => res.json(user), (err) => res.json(err))
  }

  controller.loginUser = (req, res) => {
    let user
    User.forge({ login: req.body.login })
      .fetch({ require: true })
      .then((result) => {
        user = result
        return result.compare(req.body.password)
      })
      .then((isValid) => {
        if (isValid) {
          res.json({
            token: jwt.sign({ id: user.id }, JWT_KEY),
            id: user.id
          })
        } else {
          res.json(Boom.unauthorized())
        }
      })
  }

  return controller

}
