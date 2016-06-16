'use strict'

module.exports = (app) => {

  //let Item = app.models.Item
  let controller = {}

  controller.listarItens = (req, res) => {
    res.json({retorno: 'retournou com sucesso!!!!!'})
  }

  return controller

}
