const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname),
        filename: 'index.js',
        libraryTarget: 'this'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ["transform-runtime", "transform-object-rest-spread"],
                        presets: [
                            ["env", {
                                "targets": {
                                    "browsers": [
                                        "last 2 versions",
                                        "safari >= 9"
                                    ],
                                    "node": "current"
                                }
                            }]
                        ]
                    }
                }
            }
        ]
    }
};
