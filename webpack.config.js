const path = require('path');

module.exports = [
    {
        resolve: {
            fallback: {
                "fs": false,
                "tls": false,
                "net": false,
                "path": false,
                "zlib": false,
                "http": false,
                "https": false,
                "stream": false,
                "crypto": false,
                "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
            }
        },
        mode: 'production',
        entry: {
            main: path.resolve('./src/server', 'utils.js'),
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'Utils.js',
            library: {
                name: 'Utilsjs',
                type: 'var',
            },
        },
    },
    // {
    //     resolve: {
    //         fallback: {
    //             "fs": false,
    //             "tls": false,
    //             "net": false,
    //             "path": false,
    //             "zlib": false,
    //             "http": false,
    //             "https": false,
    //             "stream": false,
    //             "crypto": false,
    //             "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
    //         }
    //     },
    //     mode: 'production',
    //     entry: {
    //         main: path.resolve('./src/server', 'crypto_wrap.js'),
    //     },
    //     output: {
    //         path: path.resolve(__dirname, 'dist'),
    //         filename: 'Crypto.js',
    //         library: {
    //             name: 'Cryptojs',
    //             type: 'var',
    //         },
    //     },
    // },
    // {
    //     mode: 'production',
    //     entry: {
    //         main: path.resolve('./src/server', 'events_wrap.js'),
    //     },
    //     output: {
    //         path: path.resolve(__dirname, 'dist'),
    //         filename: 'Events.js',
    //         library: {
    //             name: 'Eventsjs',
    //             type: 'var',
    //         },
    //     },
    // }
];