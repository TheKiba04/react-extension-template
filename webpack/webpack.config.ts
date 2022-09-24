import devConfig from './dev'
import prodConfig from './prod'
import { isProd } from './utils/env'

export default () => (isProd ? prodConfig : devConfig)
    