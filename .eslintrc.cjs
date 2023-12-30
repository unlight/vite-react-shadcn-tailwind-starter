module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: [
    'perfectionist',
    'unicorn',
    'import',
    'wix-editor',
    '@typescript-eslint',
    'prettier',
    'etc',
    'promise',
    'only-warn',
  ],
  extends: [
    'eslint:recommended',
    'plugin:perfectionist/recommended-alphabetical',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:etc/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
    warnOnUnsupportedTypeScriptVersion: false,
  },
  ignorePatterns: ['@generated/**', '*.config.js', '.*rc.js'],
  rules: {
    // core
    'consistent-return': [1, { treatUndefinedAsUnspecified: true }],
    quotes: [1, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    semi: [1, 'always'],
    'max-lines': [1, { max: 300 }],
    'max-params': [1, { max: 5 }],
    'no-unneeded-ternary': [1],
    // wix-editor
    'wix-editor/no-instanceof-array': 1,
    'wix-editor/no-not-not': 1,
    'wix-editor/no-unneeded-match': 1,
    'wix-editor/prefer-filter': 1,
    'wix-editor/prefer-ternary': 1,
    'wix-editor/return-boolean': 1,
    'wix-editor/simplify-boolean-expression': 1,
    // unicorn
    'unicorn/filename-case': 0,
    'unicorn/prefer-spread': 0,
    'unicorn/catch-error-name': 0,
    'unicorn/prefer-node-protocol': 0,
    'unicorn/prevent-abbreviations': [
      1,
      {
        replacements: {
          args: false,
          err: false,
          prod: false,
          ref: false,
          params: false,
        },
      },
    ],
    // import
    'import/max-dependencies': [1, { max: 15 }],
    // typescript-eslint
    '@typescript-eslint/no-floating-promises': 1,
    '@typescript-eslint/no-unnecessary-condition': 1,
    '@typescript-eslint/no-explicit-any': [1, { ignoreRestArgs: true }],
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
  },
  overrides: [
    {
      files: ['*.spec.ts', '**/testing/**/*.ts'],
      rules: {
        'consistent-return': 0,
        'max-lines': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/camelcase': 0,
        'import/max-dependencies': 0,
      },
    },
  ],
};
