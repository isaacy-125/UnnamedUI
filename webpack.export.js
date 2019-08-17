const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
      index: './src/exports.tsx',
      UnButton: "./src/components/UnButton/index.tsx",
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/lib/components"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(js|vue|ts|tsx|jsx)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: false,
                    extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
                    cache: false,
                    emitWarning: true,
                    emitError: false
                }
            }
        ]
    },
    plugins: [

    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
};
