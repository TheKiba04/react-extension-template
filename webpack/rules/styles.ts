import { arrayFilterEmpty } from '../utils/helpers'
import {
    cssLoader,
    cssLoaderItems,
    cssModulesSupportLoaderItems,
    miniCssExtractorLoader,
    postCssLoader,
    resolveUrlLoader,
    sassLoaderItems,
} from './useLoaderRuleItems'

export const cssRule = {
    test: /\.css$/,
    use: [miniCssExtractorLoader, cssLoader, postCssLoader]
}

export const sassModulesRule = {
    test: /\.module\.s([ca])ss$/,
    use: arrayFilterEmpty([
        ...cssModulesSupportLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        ...sassLoaderItems
    ])
}
export const sassRule = {
    test: /\.s([ca])ss$/,
    exclude: /\.module.scss$/,
    use: arrayFilterEmpty([
        ...cssLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        ...sassLoaderItems
    ])
}
export const sassRules = [sassModulesRule, sassRule]