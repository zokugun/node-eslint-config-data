import { JsonRuleOptions} from '../typegens/json.js';

export const jsonRules: Partial<JsonRuleOptions> = {
	'json/array-bracket-newline': [
		'error',
		{
			multiline: true,
			minItems: 1,
		},
	],
	'json/array-bracket-spacing': [
		'error',
		'never',
	],
	'json/array-element-newline': [
		'error',
		'always',
	],
	'json/comma-dangle': [
		'error',
		'never',
	],
	'json/comma-style': [
		'error',
		'last',
	],
	// 'json/key-name-casing': [
	// 	'error',
	// 	{
	// 		camelCase: true,
	// 		'kebab-case': true,
	// 		PascalCase: false,
	// 		SCREAMING_SNAKE_CASE: false,
	// 		snake_case: false,
	// 	}
	// ],
	'json/key-name-casing': [
		'off',
	],
	'json/key-spacing': [
		'error',
		{
			beforeColon: false,
			afterColon: true,
			mode: 'strict',
		}
	],
	'json/no-bigint-literals': [
		'error',
	],
	'json/no-binary-expression': [
		'error',
	],
	'json/no-binary-numeric-literals': [
		'error',
	],
	'json/no-comments': [
		'error',
	],
	'json/no-dupe-keys': [
		'error',
	],
	'json/no-escape-sequence-in-identifier': [
		'error',
	],
	'json/no-floating-decimal': [
		'error',
	],
	'json/no-hexadecimal-numeric-literals': [
		'error',
	],
	'json/no-infinity': [
		'error',
	],
	'json/no-irregular-whitespace': [
		'error',
	],
	'json/no-multi-str': [
		'error',
	],
	'json/no-nan': [
		'error',
	],
	'json/no-number-props': [
		'error',
	],
	'json/no-numeric-separators': [
		'error',
	],
	'json/no-octal': [
		'error',
	],
	'json/no-octal-escape': [
		'error',
	],
	'json/no-octal-numeric-literals': [
		'error',
	],
	'json/no-parenthesized': [
		'error',
	],
	'json/no-plus-sign': [
		'error',
	],
	'json/no-regexp-literals': [
		'error',
	],
	'json/no-sparse-arrays': [
		'error',
	],
	'json/no-template-literals': [
		'error',
	],
	'json/no-undefined-value': [
		'error',
	],
	'json/no-unicode-codepoint-escapes': [
		'error',
	],
	'json/no-useless-escape': [
		'error',
	],
	'json/sort-array-values': [
		'off',
	],
	'json/object-curly-newline': [
		'error',
		{
			multiline: true,
			minProperties: 1,
		},
	],
	'json/object-curly-spacing': [
		'error',
		'always',
	],
	'json/object-property-newline': [
		'error',
		{
			allowAllPropertiesOnSameLine: false,
			allowMultiplePropertiesPerLine: false,
		},
	],
	'json/quote-props': [
		'error',
		'always',
	],
	'json/quotes': [
		'error',
		'double',
	],
	'json/sort-keys': [
		'off',
	],
	// 'json/sort-keys': [
	// 	'error',
	// 	'asc',
    //     {
    //         caseSensitive: false,
    //         natural: true,
    //         allowLineSeparatedGroups: true
    //     }
	// ],
	'json/space-unary-ops': [
		'error',
	],
	'json/valid-json-number': [
		'error',
	],
};
