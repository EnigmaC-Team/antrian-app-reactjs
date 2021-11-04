const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '',
    createProxyMiddleware({
      target: 'https://antrian-api.herokuapp.com/',
      changeOrigin: true
    })
  );
};