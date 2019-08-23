'use strict';
const path = require('path');
const importModules = require('import-modules');

module.exports = {
	rules: importModules(path.resolve(__dirname, 'rules'), {camelize: false}),
	configs: {
		recommended: {
			plugins: [
				'bestpractices'
			],
			rules: {
				'bestpractices/no-eslint-disable': 'warn'
			}
		}
	}
};
