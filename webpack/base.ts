import { join } from 'path'

import { aliasItems } from './config'
import entry from './entry'
import optimization from './optimization'
import * as plugins from './plugins'
import * as rules from './rules'
import { isDevServer, isProd } from './utils/env'
import { arrayFilterEmpty } from './utils/helpers'
const ErrorLoggerPlugin = require('error-logger-webpack-plugin');

export default {
    target: isDevServer ? 'web' : ['web', 'es5'],
    mode: isProd ? 'production' : 'development',
    entry,
    output: {
        path: join(__dirname, '../build'),
        // publicPath: isDevServer? undefined : '../',
        filename: isDevServer ? '[name].js' : '[name].js',
        // filename:isDevServer?'[name].[fullhash].js':'[name].[contenthash].js',
    },
    module: {
        rules: arrayFilterEmpty([
            rules.typescriptRule,
            rules.htmlRule,
            rules.imagesRules,
            rules.fontRules,
            rules.cssRule,
            ...rules.sassRules,
            ...rules.svgRules,
        ])
    },
    plugins: arrayFilterEmpty([
        plugins.htmlWebpackPlugin,
        plugins.definePlugin,
        plugins.copyPlugin,
        new ErrorLoggerPlugin({verbose: false})
    ]),
    resolve:{
        alias:aliasItems,
        extensions:['.js','.tsx','.ts',]
    },
    optimization
}