const { resolve } = require('path');

module.exports = env => {
    const config = {
        context: resolve("src"),
        entry: "./index.tsx",
        output: {
            filename: "bundle.js",
            path: resolve("dist"),
            publicPath: "/dist/",
        },
        resolve: {

            /*
            * An array of extensions that should be used to resolve modules.
            *
            * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
            */
            extensions: ['.ts', '.tsx', '.js', '.json'],

            // An array of directory names to be resolved to the current directory
            modules: [resolve("src"), 'node_modules'],

        },
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    loaders: [
                        'ts-loader'
                    ]
                }
            ],

        },

    };

  return config;
}