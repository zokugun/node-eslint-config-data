import type { Configurator, EditorConfigOptions, OptionFiles, OptionIgnores, OptionOverridesFiles, OptionOverridesIgnores, OptionRules } from '@zokugun/eslint-toolkit';

import plugin from 'eslint-plugin-jsonc';

import { RuleOptions } from './typegens/json.js';
import { rules } from './rules/json.js';

type Options = OptionRules<RuleOptions> & OptionFiles & OptionIgnores & OptionOverridesFiles & OptionOverridesIgnores;

export function json(options: Options = {}): Configurator {
	const files = options.overrides?.files ?? [
		'**/*.json',
		...(options.files ?? []),
	];

	const ignores = options.overrides?.ignores ?? [
		'**/.vscode/*.json',
		'**/tsconfig.json',
		'**/tsconfig.*.json',
		'**/package-lock.json',
		'**/package.json',
		...(options.ignores ?? []),
	];

	return (resolve) => {
		const ecRules: Partial<RuleOptions> = {};
		const ecConfig = resolve<EditorConfigOptions>('editorconfig/json');

		if(ecConfig) {
			const {
				indent_size,
				indent_style,
			} = ecConfig;

			if(indent_style === 'space') {
				ecRules['json/indent'] = ['error', Number(indent_size)];
			}
			else if(indent_style === 'tab') {
				ecRules['json/indent'] = ['error', 'tab'];
			}
		}

		return {
			name: 'zokugun/json/rules',
			files,
			ignores,
			plugins: {
				json: plugin,
			},
			language: "json/x",
			rules: {
				...rules,
				...ecRules,
				...options.rules,
			},
		};
	};
}
