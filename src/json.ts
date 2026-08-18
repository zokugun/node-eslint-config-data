import type { Configurator, DefaultOptions } from '@zokugun/eslint-toolkit';
import type { Linter } from 'eslint';

import plugin from 'eslint-plugin-jsonc';

import * as editorConfig from './resolvers/editor-config.js';
import * as embeddedIndent from './resolvers/embedded-indent.js';
import { JsonRuleOptions } from './typegens/json.js';
import { jsonRules } from './rules/json.js';

export function json(options: DefaultOptions<JsonRuleOptions> = {}): Configurator {
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
		const rules = options.overrides?.rules ?? {
			...jsonRules,
			...editorConfig.json(resolve),
			...options.rules,
		};

		const configs: Linter.Config[] = [
			{
				name: 'zokugun/json/plugin',
				plugins: {
					json: plugin,
				},
			},
			{
				name: 'zokugun/json/rules',
				files,
				ignores,
				language: 'json/x',
				rules,
			},
		];

		const embeddedFiles = options.embedded?.overrides?.files ?? resolve<string>('embedded/sources', []).map((value) => `${value}/*.json`);

		if(embeddedFiles.length > 0) {
			const ignores = options.embedded?.overrides?.ignores ?? options.embedded?.ignores ?? [];
			const rules = options.embedded?.overrides?.rules ?? {
				...embeddedIndent.json(resolve),
				...(options.embedded?.rules ?? []),
			};

			configs.push({
				name: 'zokugun/json/embedded',
				files: embeddedFiles,
				ignores,
				rules,
			});
		}

		return configs;
	};
}

