const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: ['vuetify'],
    outputDir: './docs',
    assetsDir: './',
    publicPath: './',
    devServer: {
        allowedHosts: ['hogehost', 'hogehost.foo.local'],
        compress: true,
    },
    configureWebpack: {
        // removed Vue 2 compatibility alias to use Vue 3 native runtime
    },
})
