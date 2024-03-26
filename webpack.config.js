const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    "entry": "./src/index.js",
    "output": {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}