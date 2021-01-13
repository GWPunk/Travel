const path = require('path');
 
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
      config.resolve.alias
      .set('styles',resolve('src/assets/styles'))
      .set('common',resolve('src/common'))
      // 这里只写了两个，你可以自己再加，按这种格式.set('', resolve(''))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {//重写路径
          "^/api": '/mock'//代理路径
      }
      },
    }
  }
};