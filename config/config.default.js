'use strict';

/**
 * 默认配置，所有环境都会加载此配置
 * @see http://chair.alibaba-inc.com/manual/config/
 *
 * antx 相关配置, 建议都迁移到 config 配置管理
 * @see http://gitlab.alipay-inc.com/chair/chair/issues/1612
 *
 * - config.default.js - 默认配置，所有环境都会加载此配置
 * - config.unittest.js - gitlab 上执行 ci 环境配置
 * - config.local.js - 开发环境配置
 * - config.test.js - 测试环境配置
 * - config.prod.js - 生产环境配置
 */

const API_RE = /^\/api\//;

/**
 * 插件配置项示例
 * bucLogin 插件配置
 * 需自行申请 appname
 * @see http://chair.alibaba-inc.com/manual/get-started-buc/#buc-oss-统一登录接入申请
 */
exports.bucLogin = {
  appname: 'tcif-dev',
  ignore: API_RE,
};


/**
 * 插件配置项示例
 * bucClient 插件配置
 * 需请自行申请 apiKey 和 secretKey
 * @see http://chair.alibaba-inc.com/manual/get-started-buc/#调用-buc-restful-api
 */
exports.bucClient = {
  apiKey: 'xxx',
  secretKey: 'xxx',
};

exports.security = {
  csrf: {
    ignore: API_RE,
    ignoreJSON: false,
  },
};

exports.assets = {
  bigfish: true,
};
