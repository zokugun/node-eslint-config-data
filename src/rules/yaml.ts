import { YamlRuleOptions } from '../typegens/yaml.js';

export const yamlRules: Partial<YamlRuleOptions> = {
	'yaml/block-mapping-colon-indicator-newline': [
		'error',
	],
	'yaml/block-mapping-question-indicator-newline': [
		'error',
	],
	'yaml/block-mapping': [
		'error',
	],
	'yaml/block-sequence-hyphen-indicator-newline': [
		'error',
	],
	'yaml/block-sequence': [
		'error',
	],
	'yaml/file-extension': [
		'error',
		{
			extension: 'yml',
			caseSensitive: true,
		},
	],
	'yaml/flow-mapping-curly-newline': [
		'error',
		{
			multiline: true,
			minProperties: 5,
		},
	],
	'yaml/flow-mapping-curly-spacing': [
		'error',
		'always',
	],
	'yaml/flow-sequence-bracket-newline': [
		'error',
		{
			multiline: true,
			minItems: 5,
		},
	],
	'yaml/flow-sequence-bracket-spacing': [
		'error',
		'always',
	],
	'yaml/key-name-casing': [
		'off',
	],
	'yaml/key-spacing': [
		'error',
		{
			beforeColon: false,
			afterColon: true,
			mode: 'strict',
		},
	],
	'yaml/no-boolean-key': [
		'error',
	],
	'yaml/no-empty-document': [
		'error',
	],
	'yaml/no-empty-key': [
		'error',
	],
	'yaml/no-empty-mapping-value': [
		'error',
	],
	'yaml/no-empty-sequence-entry': [
		'error',
	],
	'yaml/no-irregular-whitespace': [
		'error',
	],
	'yaml/no-multiple-empty-lines': [
		'error',
	],
	'yaml/no-tab-indent': [
		'error',
	],
	'yaml/no-trailing-spaces': [
		'error',
	],
	'yaml/no-trailing-zeros': [
		'error',
	],
	'yaml/plain-scalar': [
		'error',
	],
	'yaml/quotes': [
		'error',
		{
			prefer: 'double',
			avoidEscape: true,
		}
	],
	'yaml/require-string-key': [
		'error',
	],
	'yaml/sort-keys': [
		'off',
	],
	// 'yaml/sort-keys': [
	// 	'error',
	// 	'asc',
    //     {
    //         caseSensitive: false,
    //         natural: true,
    //         allowLineSeparatedGroups: true
    //     }
	// ],
	'yaml/sort-sequence-values': [
		'off',
	],
	'yaml/spaced-comment': [
		'error',
	],
};
