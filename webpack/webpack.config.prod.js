const { merge } = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const config = require('./webpack.config')

module.exports = merge(config, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new OptimizeCssAssetsPlugin()]
    }
})
