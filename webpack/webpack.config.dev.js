const { merge } = require('webpack-merge')
const configBase = require('./webpack.config')

const configDev = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 3000
    }
}

module.exports = merge(configBase, configDev)
