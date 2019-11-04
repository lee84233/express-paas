const express = require('express');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback');
const proxyMiddleWare = require('http-proxy-middleware');

/**
 * 环境变量：development | product
 */
const ENV = 'development';
// 端口
const PORT = 8000;

// 代理地址
var proxy_url = '';
if (ENV === 'development') {
  // 开发环境
  proxy_url = 'https://test.yiger.com';
} else if (ENV === 'product') {
  // 生产环境
  proxy_url = "https://www.yiger.com";
}

/**
 * 解决前端路由history模式404问题
 * 默认加载index.html
 */
app.use(history({
  index: '/index.html'
}));

/**
 * 前端资源目录
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * 代理
 */
app.use(
  '/api',
  proxyMiddleWare({
    target: proxy_url,
    changeOrigin: true
  })
);

// 启动服务
app.listen(PORT, () => { });
