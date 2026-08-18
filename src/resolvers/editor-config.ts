import type { EditorConfigOptions, Resolver } from '@zokugun/eslint-toolkit';

import { JsonRuleOptions } from '../typegens/json.js';
import { JsoncRuleOptions } from '../typegens/jsonc.js';
import { YamlRuleOptions } from '../typegens/yaml.js';

export function json(resolve: Resolver): Partial<JsonRuleOptions> {
	const rules: Partial<JsonRuleOptions> = {};
	const config = resolve<EditorConfigOptions>('editorconfig/json');

	if(config) {
		const {
			indent_size,
			indent_style,
		} = config;

		if(indent_style === 'space') {
			rules['json/indent'] = ['error', Number(indent_size)];
		}
		else if(indent_style === 'tab') {
			rules['json/indent'] = ['error', 'tab'];
		}
	}

	return rules;
}

export function jsonc(resolve: Resolver): Partial<JsoncRuleOptions> {
	const rules: Partial<JsoncRuleOptions> = {};
	const config = resolve<EditorConfigOptions>('editorconfig/json');

	if(config) {
		const {
			indent_size,
			indent_style,
		} = config;

		if(indent_style === 'space') {
			rules['jsonc/indent'] = ['error', Number(indent_size)];
		}
		else if(indent_style === 'tab') {
			rules['jsonc/indent'] = ['error', 'tab'];
		}
	}

	return rules;
}

export function yaml(resolve: Resolver): Partial<YamlRuleOptions> {
	const rules: Partial<YamlRuleOptions> = {};
	const config = resolve<EditorConfigOptions>('editorconfig/yaml');

	if(config) {
		const {
			indent_size,
			indent_style,
		} = config;

		let indentSize = 2;

		if(indent_style === 'space') {
			indentSize = Number(indent_size);
		}

		rules['yaml/indent'] = [
			'error',
			indentSize,
			{
				indentBlockSequences: true,
				indicatorValueIndent: indentSize,
				alignMultilineFlowScalars: true,
			},
		];
	}

	return rules;
}
