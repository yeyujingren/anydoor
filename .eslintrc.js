module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
			"indent": [
				"error",
				2
			],
			"linebreak-style": [
				"warn",
				"unix"
			],
			"quotes": [
				"error",
				"single"
			],
			"semi": [
				"error",
				"always"
			]
    }
};
