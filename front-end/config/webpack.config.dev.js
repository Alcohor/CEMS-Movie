 const path = require('path');
 const htmlWebPackPlugin = require('html-webpack-plugin');
 const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode : 'development',
    //入口 
    entry : './src/javascripts/app',
    //出口文件
    output  :{
        filename : 'main.js',
        path : path.resolve(__dirname,'../dev')
    },
    plugins: [
        new htmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to:  path.resolve(__dirname, '../dev/static')
        }])
    ],
    devServer : {
        // contentBase: path.join(__dirname, "../dev"),
        contentBase: [path.join(__dirname, "../dev")],
        compress: true,
        port: 9000
    },
    module : {// 可以设置模块的规则来为这些模块使用loader
        rules : [
            {
                test: /\.(css|scss)$/,
                use: [ // loader从后向前使用
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },                    
                    { loader: 'sass-loader' }                    
                ]
            },
            {
                test: /\.html$/,
                use: [ // loader从后向前使用
                    { loader: 'string-loader' }                
                ]
            },
            {//图片
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                  }
                }
            }
        ]
    }
        
    
}