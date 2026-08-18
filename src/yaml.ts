import type { Configurator, DefaultOptions } from '@zokugun/eslint-toolkit';
import type { Linter } from 'eslint';

import plugin from 'eslint-plugin-yml';

import * as editorConfig from './resolvers/editor-config.js';
import * as embeddedIndent from './resolvers/embedded-indent.js';
import { yamlRules } from './rules/yaml.js';
import { YamlRuleOptions } from './typegens/yaml.js';

export function yaml(options: DefaultOptions<YamlRuleOptions> = {}): Configurator {
	const files = options.overrides?.files ?? [
		'**/*.yml',
		'**/*.yaml',
		...(options.files ?? []),
	];

	const ignores = options.overrides?.ignores ?? options.ignores ?? [];

	return (resolve) => {
		const rules = options.overrides?.rules ?? {
			...yamlRules,
			...editorConfig.yaml(resolve),
			...options.rules,
		};

		const configs: Linter.Config[] = [
			{
				name: 'zokugun/yaml/plugin',
				plugins: {
					yaml: plugin,
				},
			},
			{
				name: 'zokugun/yaml/rules',
				files,
				ignores,
				language: 'yaml/yaml',
				rules,
			},
		];

		const embeddedFiles = options.embedded?.overrides?.files ?? resolve<string>('embedded/sources', []).map((value) => `${value}/*.yaml`);

		if(embeddedFiles.length > 0) {
			const ignores = options.embedded?.overrides?.ignores ?? options.embedded?.ignores ?? [];
			const rules = options.embedded?.overrides?.rules ?? {
				'yaml/file-extension': ['off'],
				...embeddedIndent.yaml(resolve),
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
