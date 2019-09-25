const express = require('express');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback');
const proxyMiddleWare = require('http-proxy-middleware');

// 环境变量：development | product
const ENV = 'development';

var PORT = 80; // 端口
var PROXY = ''; // 代理地址

if (ENV === 'development') {
  PROXY = 'https://test.yiger.com';
} else if (ENV === 'product') {
  PROXY = "https://www.yiger.com";
}

// 前端资源目录
app.use(express.static(path.join(__dirname, 'public')));

// 代理
app.use(
  '/api',
  proxyMiddleWare({
    target: PROXY,
    changeOrigin: true
  })
);

// 解决前端路由history模式下404
// 默认加载index.html
app.use(history({
  index: '/index.html'
}));

// 启动服务
app.listen(PORT, () => { });
