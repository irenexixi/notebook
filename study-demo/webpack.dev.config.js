var path = require("path"),
    webpack = require("webpack");

var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_PATH = path.join(__dirname, 'src'),
    DIST_PATH = path.join(__dirname, 'static');

var config = {
    entry: {
        type: path.join(SRC_PATH, 'type.js'),
        syntax: path.join(SRC_PATH, 'syntax.js'),
        es6Syntax: path.join(SRC_PATH, 'es6-syntax.js'),
        elementUI: path.join(SRC_PATH, 'element-ui-test.js'),
    },

    resolve: {
        extensions: [".less", ".css", ".js", ".vue", ".json"],
        modules: [SRC_PATH, "node_modules"]
    },

    output: {
        path: DIST_PATH,
        publicPath: '',
        filename: "[name].js"
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            '__DEV__': true
        }),

        new HtmlWebpackPlugin({
            inject: false,
            filename: './es6.html',
            template: path.join(SRC_PATH, 'es6.html'),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: SRC_PATH
            }
        ]
    },
};

console.log("initializing webpack developent build....");

module.exports = config;