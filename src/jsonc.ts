import type { Configurator, EditorConfigOptions, OptionFiles, OptionIgnores, OptionOverridesFiles, OptionOverridesIgnores, OptionRules } from '@zokugun/eslint-toolkit';

import plugin from 'eslint-plugin-jsonc';

import { RuleOptions } from './typegens/json.js';
import { rules } from './rules/jsonc.js';

type Options = OptionRules<RuleOptions> & OptionFiles & OptionIgnores & OptionOverridesFiles & OptionOverridesIgnores;

export function jsonc(options: Options = {}): Configurator {
	const files = options.overrides?.files ?? [
		'**/*.jsonc',
		'**/.vscode/*.json',
		'**/tsconfig.json',
		'**/tsconfig.*.json',
		...(options.files ?? []),
	];

	const ignores = options.overrides?.ignores ?? options.ignores ?? [];

	return (resolve) => {
		const ecRules: Partial<RuleOptions> = {};
		const ecConfig = resolve<EditorConfigOptions>('editorconfig/json');

		if(ecConfig) {
			const {
				indent_size,
				indent_style,
			} = ecConfig;

			if(indent_style === 'space') {
				ecRules['jsonc/indent'] = ['error', Number(indent_size)];
			}
			else if(indent_style === 'tab') {
				ecRules['jsonc/indent'] = ['error', 'tab'];
			}
		}

		return {
			name: 'zokugun/jsonc/rules',
			files,
			ignores,
			plugins: {
				jsonc: plugin,
			},
			language: "jsonc/x",
			rules: {
				...rules,
				...ecRules,
				...options.rules,
			},
		};
	};
}
