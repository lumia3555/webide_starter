# 基于 buc 的应用示例

## 申请开通 buc

开始应用之前，需要申请 buc 的权限，到这里申请：[BUC应用申请接入](https://login.alibaba-inc.com/apply.htm)

注意：为了能在本地环境测试，申请 buc 的时候，白名单域名需要添加 `localhost` 和 `127.0.0.1`

## 初始化

```bash
$ tnpm install
$ tnpm run init
```

## 启动本地服务

```bash
$ tnpm run dev
```

浏览器打开: http://localhost:7001

```bash
$ open http://localhost:7001
```

## 运行单元测试

```bash
$ tnpm run test
```

## 运行覆盖率

```bash
$ tnpm run cov
```

## 其他

* antd 暂不支持服务端渲染；
* BUC Rest API 接入需自行申请 apiKey 和 secretKey。

