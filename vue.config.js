const { defineConfig } = require('@vue/cli-service')
const path = require('path')

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
        module: {
            rules: [
                {
                    test: /\.json$/,
                    type: 'asset/resource',
                    generator: {
                        filename: '[name][ext]'
                    }
                }
            ]
        }
    },
    // Copy JSON files to maintain fixed filenames
    chainWebpack: config => {
        config.plugin('copy').tap(options => {
            options[0].patterns.push({
                from: path.resolve(__dirname, 'src/assets'),
                to: path.resolve(__dirname, 'docs/assets'),
                globOptions: {
                    ignore: ['.*'],
                },
            })
            return options
        })
    },
})
