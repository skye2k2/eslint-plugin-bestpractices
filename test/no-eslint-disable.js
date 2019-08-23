import test from 'ava';
import avaRuleTester from 'eslint-ava-rule-tester';
import rule from '../rules/no-eslint-disable';

const ruleTester = avaRuleTester(test, {
	env: {
		es6: true
	}
});

// Define rules for test
[
	'plugin/rule',
	'@scope/plugin/rule-name',
	'@scope/rule-name',
	'@scopewithoutplugin'
].forEach(rule => {
	ruleTester.linter.defineRule(rule, {});
});

const error = [{
	ruleId: 'no-eslint-disable',
	message: 'Inline eslint-disable found'
}];

ruleTester.run('no-eslint-disable', rule, {
	valid: [
		'eval();',
		'/* eslint-enable */',
		'/* A comment mentioning eslint-disable */'
	],
	invalid: [
		{
			code: 'eval(); // eslint-disable',
			errors: error
		},
		{
			code: 'foo();\neval(); // eslint-disable',
			errors: error
		},
		{
			code: '/* eslint-disable */',
			errors: error
		},
		{
			code: 'foo();\n/* eslint-disable */\neval();',
			errors: error
		},
		{
			code: '// eslint-disable @scopewithoutplugin\neval();',
			errors: error
		}
	]
});
