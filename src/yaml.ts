import type { Configurator, EditorConfigOptions, OptionFiles, OptionIgnores, OptionOverridesFiles, OptionOverridesIgnores, OptionRules } from '@zokugun/eslint-toolkit';

import plugin from 'eslint-plugin-yml';

import { RuleOptions } from './typegens/yaml.js';
import { rules } from './rules/yaml.js';

type Options = OptionRules<RuleOptions> & OptionFiles & OptionIgnores & OptionOverridesFiles & OptionOverridesIgnores;

export function yaml(options: Options = {}): Configurator {
	const files = options.overrides?.files ?? [
		'**/*.yml',
		'**/*.yaml',
		...(options.files ?? []),
	];

	const ignores = options.overrides?.ignores ?? options.ignores ?? [];

	return (resolve) => {
		const ecRules: Partial<RuleOptions> = {};
		const ecConfig = resolve<EditorConfigOptions>('editorconfig/yaml');

		if(ecConfig) {
			const {
				indent_size,
				indent_style,
			} = ecConfig;

			let indentSize = 2;

			if(indent_style === 'space') {
				indentSize = Number(indent_size);
			}

			ecRules['yaml/indent'] = [
				'error',
				indentSize,
				{
					indentBlockSequences: true,
					indicatorValueIndent: indentSize,
					alignMultilineFlowScalars: true,
				},
			];
		}

		return {
			name: 'zokugun/yaml/rules',
			files,
			ignores,
			plugins: {
				yaml: plugin,
			},
			language: 'yaml/yaml',
			rules: {
				...rules,
				...ecRules,
				...options.rules,
			},
		};
	}
}
