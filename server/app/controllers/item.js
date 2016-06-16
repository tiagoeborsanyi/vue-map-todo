'use strict'

module.exports = (app) => {

  //let Item = app.models.Item
  let controller = {}

  controller.listarItens = (req, res) => {
    res.status(200).send({retorno: 'retournou com sucesso!!!!!'})
  }

  return controller

}
