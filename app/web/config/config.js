// https://bigfish.alipay.com/doc/app-config
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import pageRoutes from './router.config';
import defaultSettings from '../defaultSettings';

const path = require('path');

export default {
  // 应用类型
  appType: 'console',
  // 部署模式
  deployMode: 'chair',
  proxy: {
    // 按照你的项目参考下面链接添加配置
    // https://bigfish.alipay.com/doc/wuiaag#%E5%89%8D%E5%90%8E%E7%AB%AF%E8%81%94%E8%B0%83
  },
  chainWebpack(config, { webpack }) {
    config.plugin('monaco').use(MonacoWebpackPlugin, [
      {
        languages: ['python']
      }
    ])
  },
  deer: {
    useSpmFromBasement: true,
  },
  // 关于 treeShaking: https://bigfish.alipay.com/doc/gagklc#e3211d43
  treeShaking: true,
  // 路由配置
  routes: pageRoutes,
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  locale: {
    enable: true,
  },
  favicon: 'https://gw.alipayobjects.com/zos/rmsportal/uLsFenYjfFtKMzBaUpeS.png',
  ctoken: true,
  // 通过 script 和 externals 配置提高构建速度和减小构建产物的体积
  // 如果你没有用到图表中的 data-set 可以去掉下面相关代码
  // 原 assets 应用因为没有引入 bigfish 的 html，所以需要手动添加 script 到 vm 中（推荐升级 assets 到新版直接引入 bigfish 的方案解决）
  script: ['https://gw.alipayobjects.com/os/antv/assets/data-set/0.8.7/data-set.min.js'],
  externals: {
    '@antv/data-set': 'DataSet',
  },
  plugins: [
    // [
    //   '@ali/umi-plugin-xmas',
    //   {
    //     hd: {
    //       mode: '750',
    //     },
    //     deer: {
    //       spma: 'a95',
    //       bizType: 'MYBANKAPP',
    //       mutationExpoConfig: {
    //         autoExpoCheck: true,
    //       }
    //     },
    //     clue: {
    //       pid: '66666883',
    //     },
    //   }]
    // ],
    // [
    //   'monaco-editor-webpack-plugin',
    //   {
    //     features: ['coreCommands', 'find'],
    //   }
    // ]
  ],
};
