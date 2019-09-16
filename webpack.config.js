const path = require('path');
//const VueLoaderPlugin = require('vue-loader');
module.exports = {
    entry: {
        app:'./src/index.js'
    },
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: '/dist' //for devserver
    },
    module:{
     rules: [
         {
        test: /\.vue$/,
        loader: 'vue-loader',
        options:{
            loader:{
                scss: 'vue-style-loader!css-loader!sass-loader'
            }
        }
         }
     ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    },
    plugins:[
        //new VueLoaderPlugin()
    ],
    devServer:{
        overlay:true
    }
}