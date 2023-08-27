module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/anchor-has-content': 'off',
  },
};
