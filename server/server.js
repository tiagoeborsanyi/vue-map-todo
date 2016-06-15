'use strict'

let http = require('http')
let app = require('./config/express')()

http.createServer(app).listen(app.get('port'), () => {
  console.log('server run on 3000')
})
