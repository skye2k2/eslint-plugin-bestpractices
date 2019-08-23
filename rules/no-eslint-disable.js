'use strict';
const getDocsUrl = require('./utils/get-docs-url');

const eslintDisabledRegex = /^eslint-disable/; // Discover any place that eslint-disable is used

const create = context => ({
	Program: node => {
		for (const comment of node.comments) {
			const value = comment.value.trim();
			const res = eslintDisabledRegex.exec(value);

			if (res) { // The discovered eslint-disable comment
				context.report({
					loc: {
						start: {
							...comment.loc.start,
							column: -1
						},
						end: comment.loc.end
					},
					message: 'Inline eslint-disable found'
				});
			}
		}
	}
});

module.exports = {
	create,
	meta: {
		type: 'suggestion',
		docs: {
			url: getDocsUrl(__filename)
		}
	}
};
