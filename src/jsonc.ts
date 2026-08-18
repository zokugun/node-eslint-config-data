import type { Configurator, DefaultOptions } from '@zokugun/eslint-toolkit';
import type { Linter } from 'eslint';

import plugin from 'eslint-plugin-jsonc';

import * as editorConfig from './resolvers/editor-config.js';
import * as embeddedIndent from './resolvers/embedded-indent.js';
import { JsoncRuleOptions } from './typegens/jsonc.js';
import { jsoncRules } from './rules/jsonc.js';

export function jsonc(options: DefaultOptions<JsoncRuleOptions> = {}): Configurator {
	const files = options.overrides?.files ?? [
		'**/*.jsonc',
		'**/.vscode/*.json',
		'**/tsconfig.json',
		'**/tsconfig.*.json',
		...(options.files ?? []),
	];

	const ignores = options.overrides?.ignores ?? options.ignores ?? [];

	return (resolve) => {
		const rules = options.overrides?.rules ?? {
			...jsoncRules,
			...editorConfig.jsonc(resolve),
			...options.rules,
		};

		const configs: Linter.Config[] = [
			{
				name: 'zokugun/jsonc/plugin',
				plugins: {
					jsonc: plugin,
				},
			},
			{
				name: 'zokugun/jsonc/rules',
				files,
				ignores,
				language: 'jsonc/x',
				rules,
			},
		];

		const embeddedFiles = options.embedded?.overrides?.files ?? resolve<string>('embedded/sources', []).map((value) => `${value}/*.jsonc`);

		if(embeddedFiles.length > 0) {
			const ignores = options.embedded?.overrides?.ignores ?? options.embedded?.ignores ?? [];
			const rules = options.embedded?.overrides?.rules ?? {
				...embeddedIndent.jsonc(resolve),
				...(options.embedded?.rules ?? []),
			};

			configs.push({
				name: 'zokugun/jsonc/embedded',
				files: embeddedFiles,
				ignores,
				rules,
			});
		}

		return configs;
	};
}
