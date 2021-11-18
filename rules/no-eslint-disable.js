'use strict';
const getDocsUrl = require('./utils/get-docs-url');

const eslintDisabledRegex = /^eslint-disable(?!.*(--)+\s+\w+)/; // Discover any place that eslint-disable is used WITHOUT a comment

const create = (context) => ({
	Program: (node) => {
		for (const comment of node.comments) {
			const value = comment.value.trim();
			const match = eslintDisabledRegex.exec(value);

			if (match) { // The discovered matching eslint-disable infraction
				context.report({
					loc: {
						start: {
							...comment.loc.start,
							column: -1
						},
						end: comment.loc.end
					},
					message: 'Found eslint-disable without " -- comment"',
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
