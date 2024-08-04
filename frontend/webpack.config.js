const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		inputform: '/public/js/inputform/main.js',
		records: '/public/js/records/main.js',
		statistics: '/public/js/statistics/main.js',
		common: '/public/js/common.js',
	},
	output: {
		filename: '[name].js', // 엔트리 포인트 이름에 따라 파일 이름 생성
		path: path.resolve(__dirname, 'dist'),
	},
};
