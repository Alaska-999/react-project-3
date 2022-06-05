//позволяет указать путь к папке
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //указывает на то что приложение в разработоке и выходные файлы js
    //не надо сжимать
    mode: 'development',
    // путь к входному файлу с которого будет начинатся запуск приложения
    entry: './src/index.js',
    //путь к тому куда вебпак будет собирать файлы
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js"
    },
    //порт на котором будет запускатся сервер
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    //настройка импорта стилей
    module: {
        rules: [
            {
               test: /\.(css|less)$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                //настройка импорта файлов с разными расширениями
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader']
            }

        ]
    }


}