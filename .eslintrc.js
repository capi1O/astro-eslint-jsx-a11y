module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},
	settings: {
		// allows ESLint to resolve aliases defined is tsconfig.json
		'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
		'import/resolver': { typescript: { alwaysTryTypes: true } },
	},
	extends: [
		'plugin:astro/recommended',
		'plugin:astro/jsx-a11y-recommended',
	],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			rules: {
				// allows to declare Astro components props without warning from rule no-unused-vars
				'no-unused-vars': ['warn', { varsIgnorePattern: 'Props' }], 
			},
		},
	],
}