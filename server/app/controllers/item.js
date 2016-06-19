'use strict'

module.exports = (app) => {

  let Item = app.models.item
  let controller = {}

  controller.listarItens = (req, res) => {
    //res.status(200).send({retorno: 'retournou com sucesso!!!!!'})
    Item.forge()
      .fetchAll()
      .then((itens) => {
        res.json(itens)
      }, (err) => {
        res.json(err)
      })
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

  controller.removeItem = (req, res) => {
    console.log(req.params.id);
    Item.forge({id: req.params.id})
      .destroy()
      .then((response) => {
        res.json(response)
      }, (err) => {
        res.json(err)
      })
  }


  return controller

}
