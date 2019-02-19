const path = require('path');

module.exports = (env, argv) => {
    let config = {
        entry: {

            customEdit: [path.resolve(__dirname, 'src/javascript/index.jsx')]
        },
        output: {
            path: path.resolve(__dirname, 'src/main/resources/javascript/'),
            library: 'customEdit'
        },
        resolve: {
            mainFields: ['module', 'main'],
            extensions: ['.mjs', '.js', '.jsx', 'json']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: [path.join(__dirname, 'src')],
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            ['@babel/preset-env', {modules: false, targets: {safari: '7', ie: '10'}}],
                            '@babel/preset-react'
                        ]
                    }
                }
            ]
        },
        mode: 'development',
        devtool: 'eval-source-map'
    };

    return config;
};
