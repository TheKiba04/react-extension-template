export const typescriptRule = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
        transpileOnly: true,
    },
    exclude: /node_modules/,
};
export const htmlRule = {
    test: /\.(html)$/,
    use: {
        loader: 'html-loader'
    }
}
export const imagesRules = {
    test: /\.(?:ico|gif|png|jpg|jpeg|webp)/,
    type: 'asset/resource'
};
export const fontRules = {
    test: /\.(woff(2)?eot|ttf|otf|)$/,
    type: 'asset/inline',
}