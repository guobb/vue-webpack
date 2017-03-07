/**
 * Created by apple on 17/3/7.
 */
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'../app/index/index.js'),

    output: {
        path: path.resolve(__dirname, '../output/static'),
        publicPath: 'static/',
        filename:'[name].[hash].js',
        chunkFilename:'[id].[chunkhash].js'
    },

    resolve: {
        extensions:['','.js','.vue']
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue'
            },
            {
                text:/\.js$/,
                loader:'babel?presets=es2015',
                exclude: /node_modules/
            }
        ]
    }
}