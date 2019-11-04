# 前端使用 `Node` 部署

## 1. 目录结构

```
.
├── node_modules/                  // 依赖包
├── public/                        // 前端静态资源目录
├── app.js                         // Node服务入口脚本
└── package.json                   // npm包配置文件，定义项目的npm脚本，依赖包等信息
```

## 2. 脚本说明
见 `app.js` 注释。

## 3. 发版步骤

### 3.1 Nginx部署

1. 将前端打包后的静态资源，上传到服务器。
2. 可使用 `Nginx` 进行代理配置。

### 3.2 PaaS环境Node部署
1. 克隆项目到本地，并执行 `npm install` 安装依赖。
2. 将前端打包后的静态资源，复制到 `/public` 文件夹。
3. 对应修改 `app.js` 的环境变量。
4. 选择`node_modules`、`public` 和 `app.js` 3个文件进行**ZIP压缩**，并重命名为 `app.zip`。
5. 通过Node服务，选择 `app.zip` 文件进行部署。

#### 相关文档

1. 单页面应用`history`模式下`404`问题解决方案：[connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback)
2. 解决跨域的代理中间件：[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)
