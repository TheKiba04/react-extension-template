import { arrayFilterEmpty } from '../utils/helpers'

module.exports = () => {
    const plugins =[
        [
          "postcss-preset-env",
          {
            // Options
          },
        ],
      ]
    return {
        plugins
    }
}