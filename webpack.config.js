const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


const cssLoaders = extra => {
    const loaders = [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      'css-loader'
    ]
  
    if (extra) {
      loaders.push(extra)
    }
  
    return loaders
  }
  

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
                 test: /\.css$/,
                 use: cssLoaders()
             },
             {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
             },
             {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
         ]
     }, 
     plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new HtmlWebpackPlugin({template: './dist/index.html'}),
        new ESLintPlugin()
    ],  
 }