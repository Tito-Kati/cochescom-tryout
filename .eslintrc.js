module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'unused-imports',
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },

      { blankLine: 'always', prev: ['let', 'const', 'var'], next: '*' },
      { blankLine: 'any', prev: ['let', 'const', 'var'], next: ['let', 'const', 'var'] },

      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
    }],
    'max-len': ['error', {
      code: 120,
    }],
    'react/jsx-curly-spacing': ['error', {
      when: 'always',
      children: true,
    }],
    'unused-imports/no-unused-imports': 'error',
  },
}
