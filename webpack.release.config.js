/**
 * 公共配置
 */
var path = require('path');
module.exports = {
    entry: {
        main: './index'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader', exclude: /node_modules/
        }]
    }
}