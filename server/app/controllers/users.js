'use strict'

module.exports = (app) => {

  let User = app.models.users
  let controller = {}

  controller.salvaUser = (req, res) => {
    User.forge(req.body)
      .save()
      .then((user) => res.json(user))
  }

  return controller
  
}
