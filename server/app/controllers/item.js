'use strict'

module.exports = (app) => {

  let Item = app.models.item
  let controller = {}

  controller.listarItens = (req, res) => {
    res.status(200).send({retorno: 'retournou com sucesso!!!!!'})
  }

  controller.criarItem = (req, res) => {
    //console.log(req.body);
    Item.forge(req.body)
      .save()
      .then((item) => {
        res.json(item)

      }, (err) => {
        res.json(err)
        console.log(err)
      })
  }

  return controller

}
