import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import jsonc from 'eslint-plugin-jsonc';
import yaml from 'eslint-plugin-yml';

await buildTypeGen('json', jsonc, null, { overwrite: true });
await buildTypeGen('jsonc', jsonc, null, { overwrite: true });
await buildTypeGen('yaml', yaml, null, { overwrite: true });
