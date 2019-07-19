const merge = require('webpack-merge');
const base = require('./webpack.config.js');
const  HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = merge(base, {
    devtool: 'source-map',
    devServer: {
        contentBase: './dist/templates',
        host: '0.0.0.0',
        port: '4000',
        proxy: {
            '/data': {
                target: 'http://www.weather.com.cn/',
                changeOrigin: true,
                disableHostCheck: true,
                noInfo: true
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template:path.join(__dirname, 'src/templates/index.html')
        }) 
    ],
    resolve: {
        extensions: ['.js']
    }

})