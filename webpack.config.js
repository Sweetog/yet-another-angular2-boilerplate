var webpack = require('webpack'),
    htmlPlugin = require('html-webpack-plugin'),
    revPlugin = require('webpack-rev-replace-plugin'),
    config = require('./build.config.json'),
    path = require('path'),
    extendedDefinePlugin = require('extended-define-webpack-plugin'),
    webpackDelPlugin = require('webpack-del-plugin');

module.exports = function (env) {
    const ROOT_DIR = path.resolve(__dirname);
    const DIST_DIR = path.join(ROOT_DIR, config.dist);

    if (!env) {
        env = {};
        env.env = config.envDev;
    }

    console.log('env configuration', env.env);

    var appConfigPath = config.envs + config.appConfig.replace('{env}', env.env);

    return {
        entry: config.src + config.entry,
        output: {
            path: path.join(__dirname, config.dist),
            filename: config.buildjs
        },
        module: {
            loaders: [
                { test: /\.html$/, use: 'raw-loader' },
                { test: /\.css$/, use: 'raw-loader' },
                { test: /\.ts$/, loaders: [ 'ts-loader' ,'angular2-template-loader'] },
                { test: /\.scss$/,
                  exclude: /node_modules/,
                  use: [{
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["absolute/path/a", "absolute/path/b"]
                    }
                 }]
                }//end scss
                
            ]
        },
        resolve: {
            extensions: ['.js', '.ts','.scss','.css']
        },
        plugins: [
            new htmlPlugin({
                template: config.src + config.index
            }),
            new revPlugin({
                cwd: config.src,
                files: '**/*.html',
                outputPageName: function (filename) {
                    return filename;
                },
                modifyReved: function (filename) {
                    return filename.replace(/(\/style\/|\/script\/)/, '')
                }
            }),
            new extendedDefinePlugin({
                AppConfig: require(appConfigPath)
            }),
            new webpackDelPlugin({match: path.join(DIST_DIR, '*.*')})
        ]
    }
}
