'use strict'

let express = require('express');
let bodyParser = require('body-parser')
let jwt = require('express-jwt')
let cors = require('cors')

let load = require('express-load')

module.exports = () => {

  let app = express()

  app.set('port', 3000, '127.0.0.1')

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(require('method-override')())
  app.use(cors())

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app)

  return app
}
