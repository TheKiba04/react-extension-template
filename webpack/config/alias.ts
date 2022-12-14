import { join } from 'path'

import { rootDir } from "../utils/env";

export const aliasItems = {
    "@src": join(rootDir, '/src'),
    "@images": join(rootDir, '/src/images'),
    "@components": join(rootDir, '/src/components'),
}