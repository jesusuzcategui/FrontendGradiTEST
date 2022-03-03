const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'assets/resource'
            }
        ]
    },
    devServer: {
        port: 3002,
        hot: true,
        open: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './src/assets/faviconapp.png',
            template: './src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'assets'),
                    to: 'assets/'
                }
            ]
        }),
        new Webpack.HotModuleReplacementPlugin()
    ]
};