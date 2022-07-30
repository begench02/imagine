const { merge } = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const configBase = require('./webpack.config')

const configProd = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new OptimizeCssAssetsPlugin()]
    }
}

module.exports = merge(configBase, configProd)
