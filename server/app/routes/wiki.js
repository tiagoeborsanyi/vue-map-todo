'use strict'

module.exports = (app) => {

	let controller = app.controllers.wiki

	app.route('/v1/wikipedia/:id')
		.get(controller.listarArtigos)
}