module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': ['always', { ignore: ['after-comment', 'first-nested'] }], // 忽略注释后的空行和嵌套的规则及其父节点的第一个孩子。
  },
  ignoreFiles: ['node_modules/**/*', 'dist/**/*'],
};
