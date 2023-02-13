const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:"development",
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',

    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/assets/img/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '../',
                            name: `assets/image/[name].[ext]`,
                        }
                    },
                ],
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.exec\.js$/,
                use: [ 'script-loader' ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false,
        }),
    ],
}