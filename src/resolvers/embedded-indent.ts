import type { Resolver } from '@zokugun/eslint-toolkit';

import { JsonRuleOptions } from '../typegens/json.js';
import { JsoncRuleOptions } from '../typegens/jsonc.js';
import { YamlRuleOptions } from '../typegens/yaml.js';

export function json(resolve: Resolver): Partial<JsonRuleOptions> {
	const indent = resolve<number | 'tab'>('embedded/indent');

	return {
		'json/indent': ['error', indent],
	};
}

export function jsonc(resolve: Resolver): Partial<JsoncRuleOptions> {
	const indent = resolve<number | 'tab'>('embedded/indent');

	return {
		'jsonc/indent': ['error', indent],
	};
}

export function yaml(resolve: Resolver): Partial<YamlRuleOptions> {
	const indent = resolve<number | 'tab'>('embedded/indent');

	if(indent === 'tab') {
		return {}
	}

	return {
		'yaml/indent': ['error', indent],
	};
}
