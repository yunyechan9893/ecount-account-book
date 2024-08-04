const path = require('path');

module.exports = {
	mode: 'development',
	entry: [
		'/public/js/inputform/main.js',
		'/public/js/records/main.js',
		'/public/js/statistics/main.js',
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
