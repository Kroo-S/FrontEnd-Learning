const path = require('path');   //node提供的path
const HtmlWebpackPlugin = require('html-webpack-plugin');   //实例化  或者 类

//CSS用单独的文件引入，link引入
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //mode默认压缩生产模式：
    //mode:'production'

    mode:'development',
    entry:'./src/index.js',   //入口
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },

    module:{      //loader识别css
        rules:[
            {
                test:/\.css$/,     //  \是.的转义字符，$是以.css结尾
                //loader:'css-loader'     //识别了css模块，但没处理

                //多个loader就要使用use

                //1. style形式导入css样式
                //从css-loader中识别文件，再交给style-loader
                //use:['style-loader','css-loader']
                
                //2. link形式导入css样式
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].css'   //跟着entry走，entry的默认是main
        }),
    ],
    
};