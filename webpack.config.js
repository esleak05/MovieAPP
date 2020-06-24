const  path =  require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const  CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        login: './src/js/login/login.js', 
        popular: './src/js/popular/popular.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        contentBase: './dist/',
        openPage: 'Login.html'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/Login.html',
            inject:true,
            chunks:['login'],
            filename:'dist/js/login.bundle.js',
            filename:'Login.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/Popular.html',
            inject:true,
            chunks:['popular'],
            filename: 'dist/js/popular.bundle.js',
            filename: 'Popular.html'
        }),
      
        // new CopyPlugin({
        //     patterns:[
        //         {from: './src/pages/Popular.html', to: 'pages', force:true}
                
        //     ]
        // })
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_moules/,
                use:{
                    loader:'babel-loader'
                }
                
            }
        ]
    }

}