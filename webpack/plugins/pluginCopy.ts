import { join } from 'path'

import CopyPlugin from 'copy-webpack-plugin';

import { rootDir } from '../utils/env';
import { compileManifest } from '../utils/helpers'

const manifestConfig = {
    patterns: [{
        from: join(rootDir, 'manifest.json'),
        to: join(rootDir, 'build'),
        transform: function (content: any, path: string) {
            return compileManifest(content)
        }
    }]
}
export const copyPlugin = new CopyPlugin(manifestConfig)