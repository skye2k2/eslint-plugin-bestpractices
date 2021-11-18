import test from 'ava';
import avaRuleTester from 'eslint-ava-rule-tester';
import rule from '../rules/no-eslint-disable';

const ruleTester = avaRuleTester(test, {
  env: {
    es6: true,
  },
});

// Define `rules` like how they exist in .eslintrc for testing
[
  'plugin/rule',
  '@scope/plugin/rule-name',
  '@scope/rule-name',
  '@scopewithoutplugin'
].forEach((ruleItem) => {
  ruleTester.linter.defineRule(ruleItem, {});
});

const expectedError = [
  {
    ruleId: 'no-eslint-disable',
    message: 'Found eslint-disable without " -- comment"',
  },
];

ruleTester.run('no-eslint-disable', rule, {
  valid: [
		'eval();',
		'/* eslint-enable */',
		'/* A comment mentioning eslint-disable */',
		// For whatever reason, comments are being interpreted as the ruleId by the tests, which obviously does not work as expected. Check back later to see if the testing framework allows for more precise tokenization.
    // {
		// 	code: '// eslint-disable -- Explanatory comment',
		// }
	],
  invalid: [
    {
      code: 'eval(); // eslint-disable',
      errors: expectedError,
    },
    {
      code: 'foo();\neval(); // eslint-disable',
      errors: expectedError,
    },
    {
      code: '/* eslint-disable */',
      errors: expectedError,
    },
    {
      code: 'foo();\n/* eslint-disable */\neval();',
      errors: expectedError,
    },
    {
      code: '// eslint-disable @scopewithoutplugin\neval();',
      errors: expectedError,
    },
  ],
});
