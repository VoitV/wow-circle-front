module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    'color-hex-length': null,
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    'block-no-empty': null,
    'no-descending-specificity': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'value-keyword-case': ['lower', { ignoreKeywords: ['dummyValue'] }],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
