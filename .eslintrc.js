module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    files: ['*.ts', '*.tsx'],
    ecmaFeatures: {
      jsx: true,
    },
    project: `${__dirname}/tsconfig.json`,
    sourceType: 'module',
    ecmaVersion: 12,
  },

  plugins: ['react', '@typescript-eslint', 'react-hooks', 'import'],
  rules: {
    'no-param-reassign': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['tsx'] }],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
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
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        project: `${__dirname}/tsconfig.json`,
        extensions: ['.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@ui-kit', './src/ui-kit'],
          ['@entities/*', './src/entities/*'],
          ['@helpers/*', './src/helpers/*'],
          ['@common-features/*', './src/common-features/*'],
        ],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },

  overrides: [
    // Allow extraneous dependencies for jest files to use jest with cypress see https://stackoverflow.com/questions/58999086/cypress-causing-type-errors-in-jest-assertions
    {
      files: ['*.test.ts'],
      rules: {
        'import/no-extraneous-dependencies': ['off'],
        'no-console': 'off',
      },
    },
  ],
};
