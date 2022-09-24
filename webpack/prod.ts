import TerserJSPlugin from 'terser-webpack-plugin';

import baseConfig from './base'
import * as plugins from './plugins'

export default {
    ...baseConfig,
    optimization:{
        ...baseConfig.optimization,
        minimize:true,
        minimizer:[new TerserJSPlugin({})]
    },
    plugins:[...baseConfig.plugins,plugins.cleanWebpackPlugin,plugins.miniCssExtractPlugin]
}