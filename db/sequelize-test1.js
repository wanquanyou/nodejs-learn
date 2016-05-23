var Sequelize = require('Sequelize');

var sequelize = new Sequelize('hades', 'canal', 'canal', {
	host: '10.1.1.68',
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

