const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

 module.exports = {
     mode: 'development',
     entry: {
         main: path.resolve(__dirname, './src/index.ts'),
     },
     devtool: 'source-map',
     output: {
         path: path.resolve(__dirname, './dist'),
         filename: '[name].bindle.js',
     },
     devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
          },
        open: true,
        compress: true,
        hot: true,
        port: 9000,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
     module: {
         rules: [
             {
                 test: /\.(scss|.css)$/,
                 use: ['style-loader', 'css-loader', 'sass-loader']
             },
             {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
         ]
     }, 
     plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({template: './dist/index.html'})
    ],  
 }