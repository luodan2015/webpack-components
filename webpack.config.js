/*
 * @Author: luodan
 * @Date: 2021-10-12 17:23:38
 * @LastEditTime: 2021-10-13 11:59:24
 * @LastEditors: luodan
 * @Description: webpack打包配置文件
 * @FilePath: /webpack-demo/webpack.config.js
 */
const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    'add-number.development': './src/index.js',
    'add-number.production.min': './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'umd'),
    library: 'addNumber',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  mode: 'none',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        test: /\.min\.js$/
      })
    ]
  }
};
