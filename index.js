/*
 * @Author: luodan
 * @Date: 2021-10-13 11:52:43
 * @LastEditTime: 2021-10-13 11:55:58
 * @LastEditors: luodan
 * @Description: 通过用户的环境变量，导出相应的版本文件
 * @FilePath: /webpack-demo/index.js
 */
'use strict';

if (process.env.NODE_EVN === 'production') {
  module.exports = require('./umd/add-number.production.min.js');
} else {
  module.exports = require('./umd/add-number.development.js');
}
