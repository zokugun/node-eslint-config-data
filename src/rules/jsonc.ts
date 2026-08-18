import { JsoncRuleOptions} from '../typegens/jsonc.js';

export const jsoncRules: Partial<JsoncRuleOptions> = {
	'jsonc/array-bracket-newline': [
		'error',
		{
			multiline: true,
			minItems: 1,
		},
	],
	'jsonc/array-bracket-spacing': [
		'error',
		'never',
	],
	'jsonc/array-element-newline': [
		'error',
		'always',
	],
	'jsonc/comma-dangle': [
		'error',
		'always-multiline',
	],
	'jsonc/comma-style': [
		'error',
		'last',
	],
	'jsonc/key-name-casing': [
		'off',
	],
	'jsonc/key-spacing': [
		'error',
		{
			beforeColon: false,
			afterColon: true,
			mode: 'strict',
		}
	],
	'jsonc/no-bigint-literals': [
		'error',
	],
	'jsonc/no-binary-expression': [
		'error',
	],
	'jsonc/no-binary-numeric-literals': [
		'error',
	],
	'jsonc/no-comments': [
		'off',
	],
	'jsonc/no-dupe-keys': [
		'error',
	],
	'jsonc/no-escape-sequence-in-identifier': [
		'error',
	],
	'jsonc/no-floating-decimal': [
		'error',
	],
	'jsonc/no-hexadecimal-numeric-literals': [
		'error',
	],
	'jsonc/no-infinity': [
		'error',
	],
	'jsonc/no-irregular-whitespace': [
		'error',
	],
	'jsonc/no-multi-str': [
		'error',
	],
	'jsonc/no-nan': [
		'error',
	],
	'jsonc/no-number-props': [
		'error',
	],
	'jsonc/no-numeric-separators': [
		'error',
	],
	'jsonc/no-octal': [
		'error',
	],
	'jsonc/no-octal-escape': [
		'error',
	],
	'jsonc/no-octal-numeric-literals': [
		'error',
	],
	'jsonc/no-parenthesized': [
		'error',
	],
	'jsonc/no-plus-sign': [
		'error',
	],
	'jsonc/no-regexp-literals': [
		'error',
	],
	'jsonc/no-sparse-arrays': [
		'error',
	],
	'jsonc/no-template-literals': [
		'error',
	],
	'jsonc/no-undefined-value': [
		'error',
	],
	'jsonc/no-unicode-codepoint-escapes': [
		'error',
	],
	'jsonc/no-useless-escape': [
		'error',
	],
	'jsonc/sort-array-values': [
		'off',
	],
	'jsonc/object-curly-newline': [
		'error',
		{
			multiline: true,
			minProperties: 1,
		},
	],
	'jsonc/object-curly-spacing': [
		'error',
		'always',
	],
	'jsonc/object-property-newline': [
		'error',
		{
			allowAllPropertiesOnSameLine: false,
			allowMultiplePropertiesPerLine: false,
		},
	],
	'jsonc/quote-props': [
		'error',
		'always',
	],
	'jsonc/quotes': [
		'error',
		'double',
	],
	'jsonc/sort-keys': [
		'off',
	],
	// 'jsonc/sort-keys': [
	// 	'error',
	// 	'asc',
    //     {
    //         caseSensitive: false,
    //         natural: true,
    //         allowLineSeparatedGroups: true
    //     }
	// ],
	'jsonc/space-unary-ops': [
		'error',
	],
	'jsonc/valid-json-number': [
		'error',
	],
};
