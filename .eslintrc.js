module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  // 规则扩展
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/unicorn',
  ],
  parser: '@typescript-eslint/parser', // 支持检查 typescript 代码
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11, // ECMAScript 版本
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  // "off" 或 0，表示关闭规则；"warn" 或 1，开启规则，使用警告级别；"error" 或 2，开启规则，使用错误级别
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.ts'] }],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never',
      },
    ],
    '@typescript-eslint/no-var-requires': [0],
    'import/no-extraneous-dependencies': [0],
    'no-console': [1],
    'unicorn/consistent-function-scoping': [0], // 关闭函数内不能写函数的检查，适应函数式编程，hook
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    },
  },
};
