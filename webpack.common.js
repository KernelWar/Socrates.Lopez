const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { ProvidePlugin } = require('webpack');

const pages = ['index', 'ocs']

module.exports = {
    entry: pages.reduce((config, page) => {
        config[page] = `./src/js/${page}.js`
        return config
    }, {}),
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        /*
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({          
            template: './src/ocs.html',            
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/img", to: path.resolve(__dirname, 'dist/img') },
                { from: "./src/favicon.png", to: path.resolve(__dirname, 'dist/') }
            ],
        }),
        */
        new MiniCSSExtractPlugin(),
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/img", to: path.resolve(__dirname, 'dist/img') },
                { from: "./src/favicon.png", to: path.resolve(__dirname, 'dist/') }
            ],
        }),
    ].concat(
        pages.map(
            (page) => new HtmlWebpackPlugin({
                inject: true,
                template: `./src/${page}.html`,
                filename: `${page}.html`,
                chunks: [page]
            })
        )
    ),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],

    }
}