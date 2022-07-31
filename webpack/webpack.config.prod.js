const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const configBase = require('./webpack.config')

const configProd = {
    mode: 'production',
    plugins: [new CssMinimizerPlugin()]
}

module.exports = merge(configBase, configProd)
