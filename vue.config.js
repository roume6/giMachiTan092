const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/github.io', //リポジトリ名
  outputDir: './docs',
  assetsDir: './',
  publicPath: './',
  devServer: {
    allowedHosts: ['hogehost','hogehost.foo.local'],
    compress: true,
  },
})
