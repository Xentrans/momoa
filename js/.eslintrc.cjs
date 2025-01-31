
"use strict";

/* global module */

module.exports = {
    "env": {
        "es6": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4,
            { SwitchCase: 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    overrides: [
        {
            files: ["tests/*.js"],
            env: {
                mocha: true,
                node: true
            }
        }
    ]
};
