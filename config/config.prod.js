/**
 * 生产环境配置
 */

'use strict';

/**
 * 插件配置示例
 * bucLogin 插件配置
 * 会覆盖 default 里的 bucLogin 配置
 */
exports.bucLogin = {
  appname: 'your prod appname',
};

/**
 * 插件配置示例
 * bucClient 插件配置
 * 会覆盖 default 里的 bucClient 配置
 */
exports.bucClient = {
  apiKey: 'your prod apiKey',
  secretKey: 'your prod secretKey',
};
