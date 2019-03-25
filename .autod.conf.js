'use strict';

module.exports = {
  write: true,
  prefix: '^',
  plugin: 'autod-egg',
  exclude: [
    'test/fixtures',
    'coverage',
    'run',
    'app/web/pages/.umi',
  ],
  devdep: [
    'autod',
    'autod-egg',
    '@ali/ci',
    '@alipay/chair-bin',
    'eslint',
    'eslint-config-egg',
  ],
  test: [
    'mock',
  ],
  keep: [
    'chair',
  ],
  semver: [
  ],
};
