const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './index.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      // title: '自定义title',
      template: './index.html',
    }),
  ],
}
