# 前端使用 `Node` 部署

## 1. 目录结构

```
.
├── node_modules/                  // 依赖包
├── public/                        // 前端静态资源
├── app.js                         // Node服务入口脚本
└── package.json                   // npm包配置文件，定义项目的npm脚本，依赖包等信息
```

## 2. 部署说明

1. 前端打包后的静态资源，复制到 `/public` 文件夹。
2. 选择文件ZIP压缩并重命名为 `app.zip`，至少选择`node_modules`、`public` 和 `app.js` 3个文件。
3. 通过Node服务，选择 `app.zip` 文件进行部署。 
