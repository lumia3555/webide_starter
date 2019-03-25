/**
 * 开发环境配置
 */

'use strict';

/**
 * 配置样例：
 *
 *   // 调用 tr 目标服务器配置
 *   exports['xxxcore.tr.service.url'] = 'swiftcore-d3131.alipay.net:12200';
 *
 *   // 调用 tr 服务方式配置
 *   //
 *   // runMode - 配置 tr 服务调用方式
 *   //   - 1 默认配置, 软负载, 走配置中心,随机分配一台当前环境存在该tr服务的服务器响应请求
 *   //   - 0 直连配置的tr目标服务器, 一般用于开发阶段指定服务器联调
 *   exports.runMode = 0;
 */
module.exports = {
  apiMock: {
    glob: '**/*.js',
  },
};
