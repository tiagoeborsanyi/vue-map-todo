//Arquivo onde ficar as configurações do server do node para rodar a aplicação do node
'use strict'

let express = require('express');
let app = express();
let http = require('http');

app.set('port', '8080', '52.67.73.181');
app.use(express.static('./'));


http.createServer(app).listen(8080, (err) => {
  if (err) throw error
  console.log('server run on port 8080');
});
