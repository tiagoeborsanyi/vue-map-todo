'use strict';

let db = require('../../config/database');

module.exports = () => {
	return db.Model.extend({
		tableName: 'users',
		uuid:  true,
		hasTimestamps: true,
		bcrypt: {
			field: 'password'
		},
		hidden: ['password']
	});

};
