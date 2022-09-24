import { join } from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import { rootDir } from '../utils/env';

const config = {
    filename: 'popup.html',
    template: join(rootDir, './src/pages/Popup/index.html'),
    inject: true,
    minify: {
        collapseWhitespace: true,
        concervativeCollapse: true,
        preserveLineBreaks: true,
        useShortDoctype: true,
        html5: true
    },
    chunks: ['popup']
}

export const htmlWebpackPlugin = new HtmlWebpackPlugin(config) 