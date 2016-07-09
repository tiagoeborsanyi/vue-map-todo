'use strict'

let wiki = require('wtf_wikipedia')

module.exports = (app) => {

	let controller = {}

	controller.listarArtigos = (req, res) => {
		console.log(req.params)
		wiki.from_api(req.params.id, "pt", function(markup){
		  //var obj= wiki.parse(markup)
		  res.json(wiki.plaintext(markup))
		})

	}

	return controller

}