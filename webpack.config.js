var FileLoader = require('file-loader');

module.exports = {
    entry: ["./entry.js"],
    output: {
        path: __dirname + "/build",
        filename: "main.js",
        publicPath: "/build"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: 'html' },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
        ]
    },
};
