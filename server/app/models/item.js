'use strict';

let db = require('../../config/database');

module.exports = () => {
	return db.Model.extend({
		tableName: 'item',
		uuid:  true,
		hasTimestamps: true
	});

};
