module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true
	},
	"extends": "plugin:react/recommended",
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"ecmaVersion": 2017,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"strict": [
			0,
			"global"
		],
		"indent": [
			2,
			"tab"
		],
		"quotes": [
			2,
			"single"
		],
		"linebreak-style": [
			2,
			"unix"
		],
		"semi": [
			2,
			"never"
		],
		"comma-dangle": [
			0,
			"always-multiline"
		],
		"no-console": 0,
		"no-var": [
			2
		],
		"no-empty": [
			1,
			{
				"allowEmptyCatch": true,
			}
		],
		"no-unused-vars": 1,
		"no-constant-condition": 0,
	}
};
