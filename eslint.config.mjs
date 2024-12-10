import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from 'eslint-plugin-import';
import * as parser from '@typescript-eslint/parser';

;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      parser
    },
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.node,
      "parser": "@typescript-eslint/parser",
      parserOptions: {
        "project": ["./tsconfig.json"]
      }
    },
    rules: {
      "comma-dangle": 0,
      "no-underscore-dangle": 0,
      "no-param-reassign": 0,
      "no-return-assign": 0,
      "camelcase": 0,
      "import/extensions": 0,
      "@typescript-eslint/no-redeclare": 0
    }, settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts"]
      },
      "import/resolver": {
        "typescript": {}
      }
    }
  },
  importPlugin.flatConfigs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
