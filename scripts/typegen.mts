import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import jsonc from 'eslint-plugin-jsonc';
import yaml from 'eslint-plugin-yml';

await buildTypeGen({
	name: 'json',
	plugin: jsonc,
	overwrite: true,
});

await buildTypeGen({
	name: 'jsonc',
	plugin: jsonc,
	overwrite: true,
});

await buildTypeGen({
	name: 'yaml',
	plugin: yaml,
	overwrite: true,
});
