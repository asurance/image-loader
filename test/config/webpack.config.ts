import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import { Configuration } from 'webpack'

const config = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        index: resolve(__dirname, '../src/index.ts')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: resolve(__dirname, '../tsconfig.json')
                },
                exclude: /[\\/]node_modules[\\/]/,
            },
            {
                test: /\.png$/,
                loader: 'image-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
} as Configuration

export default config