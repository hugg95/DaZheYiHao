module.exports = {
    entry: './js/dazhe_entry.js',
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
