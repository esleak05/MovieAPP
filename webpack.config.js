const  path =  require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const  CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index.html'
        }),
      
        new CopyPlugin({
            patterns:[
                {from: './src/pages/Popular.html', to: 'pages', force:true}
                
            ]
        })
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