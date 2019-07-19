const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const base = require('./webpack.config.js');
const  HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = merge(base, {
plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
        title: 'Output Management',
        template:path.join(__dirname, 'src/templates/index.html'),
        filename:path.join(__dirname, 'dist/templates/index.html'),
    }) 
]
});