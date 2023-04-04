const path = require('path');
module.exports = {
    devtool: 'cheap-module-evel-source-map',  // cheap 会忽略列信息，module 表示可以定位到 ts 的源码
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    }
}