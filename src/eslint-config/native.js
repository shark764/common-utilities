const base = require('./base');

module.exports = function getNativeConfig (dirname) {
  const baseConfig = base(dirname);

  baseConfig.env = {
    ...baseConfig.env,
    'react-native/react-native': true,
  };
  baseConfig.extends = [
    '@react-native-community',
    'airbnb',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier',
    'standard-with-typescript',
  ];
  baseConfig.plugins = [
    ...baseConfig.plugins,
    'react',
    'react-hooks',
    'react-native',
  ];
  baseConfig.rules = {
    ...baseConfig.rules,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
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
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'warn',
    'react/no-deprecated': 'warn',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/state-in-constructor': ['error', 'always'],
  };
  baseConfig.settings = {
    ...baseConfig.settings,
    react: {
      version: 'detect',
    },
  };

  return baseConfig;
};
