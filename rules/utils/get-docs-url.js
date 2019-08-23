'use strict';
const path = require('path');
const packageJson = require('../../package');

const repoUrl = 'https://github.com/skye2k2/eslint-plugin-bestpractices';

module.exports = filename => {
	const ruleName = path.basename(filename, '.js');
	return `${repoUrl}/blob/v${packageJson.version}/docs/rules/${ruleName}.md`;
};
