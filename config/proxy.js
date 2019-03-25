/**
 * TR 服务调用解析配置
 * @see http://chair.alibaba-inc.com/manual/proxy/#在-sofa-mvc-中的服务调用方式
 */

'use strict';

/**
 * 配置样例：
 *
 *   module.exports = {
 *     group: 'SOFA',
 *     mavenType: 'alipay', // 可选值有 alipay, mayibank, taobao
 *     mavenName: 'dev',    // 可选值有 dev, test, mayibank_dev, mayibank_test
 *     services: [{
 *       appname: 'rmsdeploy',
 *       api: {
 *         rmsDeploy: 'com.alipay.rmsdeploy.common.service.facade.OSSFacade',
 *       },
 *       dependency: {
 *         groupId: 'com.alipay.rmsdeploy',
 *         artifactId: 'rmsdeploy-common-service-facade',
 *         version: '1.0.0.20150924',
 *       },
 *     }],
 *   };
 */
module.exports = {};
