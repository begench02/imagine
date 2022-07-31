const path = require('path')

const resolve = dir => path.resolve(__dirname, `../${dir}`)

module.exports = {
    root: resolve('src'),
    outputPath: resolve('dist'),
    entryPath: resolve('src/index.tsx'),
    templatePath: resolve('public/index.html'),
    assets: resolve('assets/[name].[contenthash].[ext]')
}
