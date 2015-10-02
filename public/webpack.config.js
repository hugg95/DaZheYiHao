module.exports = {
    entry: './js/app.js',
    output: {
        path: './dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.js|\.jsx$/, loader: 'jsx-loader?harmony'}
        ]
    }
};
