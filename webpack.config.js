// позволяет указать путь к папке
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // указывает на то что приложение в разработоке и выходные файлы js
  // не надо сжимать
  mode: 'development',
  // путь к входному файлу с которого будет начинатся запуск приложения
  // полифил вторая входная точка приложения
  entry: ['@babel/polyfill', './src/index.jsx'],
  // путь к тому куда вебпак будет собирать файлы
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: "/"
  },
  // порт на котором будет запускатся сервер
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin()
  ],
  // настройка импорта стилей
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // настройка импорта файлов с разными расширениями
        test: /\.(jpg|jpeg|png|svg)/,
        use: ['file-loader']
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }

}
