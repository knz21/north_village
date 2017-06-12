const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../app/assets/javascripts/webpack'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        modules: ['node_modules']
    }
};