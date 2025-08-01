import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
    entry: {
        index: "./src/js/index.js",
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js',
        assetModuleFilename: 'imgs/[hash][ext][query]',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset/resource', // emits a separate file and exports the URL
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 5500,        // you can change this port
        open: true,        // auto-opens the browser
        hot: true,         // enables hot module replacement
        liveReload: true,  // fallback auto-reload if HMR fails
        // historyApiFallback: {
        //     rewrites: [
        //         {
        //             from: /^\/course\/[^\/]+$/, // matches /course/anything
        //             to: '/course/index.html',   // serve course/index.html
        //         },
        //         {
        //             from: /^\/lesson\/[^\/]+$/, // matches /course/anything
        //             to: '/lesson/index.html',   // serve course/index.html
        //         },
        //     ],
        // },
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: "css/sample.css",
        // }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: 'src/somefile', // where you put the file
        //             to: '',                 // output it at the root of /public
        //         },
        //     ]
        // }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ['index'],
            favicon: './src/imgs/logo.png'
        }),
        
    ]
};