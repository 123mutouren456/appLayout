const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
      index:'./src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js/')
  },
  module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test:/\.[s]?[ac]ss$/,
                use:[
                    'style-loader',
                    'css-loader',
                  //  'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(htm[l]?)$/i,
                use: [{
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', ':data-src'],
                        minimize: false
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                     'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/index.html',
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/static',
            to: 'static'
        }]),

    ]
};