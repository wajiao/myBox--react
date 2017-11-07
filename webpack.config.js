const path = require('path');

module.exports = {
	entry:"./src/bootstrap.js",
	output:{
		//设置路径
		path:path.resolve(__dirname,"dist"),
		//设置文件名
		filename:"bootstrap.js"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/(node_modules|bower_components)/,
				use:{
					loader:"babel-loader",
					options:{
						presets:['react','es2015']
					}
				}
			},
			{
				test:/\.less$/,
				exclude:/(node_modules|bower_components)/,
				use: [
				  'style-loader',
				  {
				    loader: 'css-loader',
				    options: {
				      importLoaders: 1
				    }
				  },
				  {
				    loader: 'less-loader',
				    options: {
				      noIeCompat: true
				    }
				  }
				]
			}
		]
	},
	watch : true
}
