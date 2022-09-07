module.exports = function getBaseConfig (dirname) {
  return {
    root: true,
    env: {
      es6: true,
      node: true,
      jest: true,
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb-base',
      'eslint-config-prettier',
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:import/typescript',
      'prettier',
      'standard-with-typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: dirname,
      project: ['tsconfig.eslint.json'],
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['**/*.test.*'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/indent': ['error', 2],
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: true,
          },
          multilineDetection: 'brackets',
          overrides: {
            interface: {
              multiline: {
                delimiter: 'semi',
                requireLast: true,
              },
            },
          },
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variableLike',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'all',
        },
      ],
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/semi': ['error', 'always'],
      '@typescript-eslint/strict-boolean-expressions': 'warn',
      'array-callback-return': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'comma-dangle': 'off',
      'default-case': 'error',
      eqeqeq: [2, 'smart'],
      'import/default': 'error',
      'import/export': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/first': 'error',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-named-as-default': 'warn',
      'import/no-unresolved': [
        2,
        {
          commonjs: true,
          amd: true,
        },
      ],
      'import/no-unused-modules': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@**/**',
              group: 'parent',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/prefer-default-export': 'off',
      indent: 'off',
      'linebreak-style': ['error', 'unix'],
      'max-len': [
        'warn',
        {
          code: 80,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignorePattern: 'd="([\\s\\S]*?)"',
        },
      ],
      'no-console': 'off',
      'no-empty-function': 'off',
      'no-mixed-spaces-and-tabs': 'warn',
      'no-param-reassign': [
        'warn',
        {
          props: false,
        },
      ],
      'no-plusplus': 'warn',
      'no-self-compare': 'error',
      'no-shadow': 'off',
      'no-template-curly-in-string': 'warn',
      'no-underscore-dangle': 'warn',
      // ? Note: you must disable the base rule as it can report incorrect errors
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-concat': 'error',
      'no-var': 'error',
      'object-shorthand': 'warn',
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: true,
        },
      ],
      'prefer-const': 'error',
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'prettier/prettier': 'off',
      quotes: ['error', 'single'],
      'require-await': 'error',
      semi: 'off',
      'valid-typeof': 'error',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  };
};
