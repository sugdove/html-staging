const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 清除dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: './index.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            // 定义加载器
            loader: 'babel-loader',
            options: {
              // 指定预定义的环境
              presets: [
                [
                  // 指定环境插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      // chrome: '58',
                      ie: '11',
                    },
                    // 指定corejs版本
                    corejs: '3',
                    // 使用corejs的方式 "usage" 表示按需加载
                    useBuiltIns: 'usage',
                  },
                ],
              ],
            },
          },
          'ts-loader',
        ], // ts-loader 将ts 转化为js babel-loader转换js版本
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      // title: '自定义title',
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    // 设置哪些文件可以被当作模块使用
    extensions: ['.js', '.ts'],
  },
}
