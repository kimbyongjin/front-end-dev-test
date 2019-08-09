const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
        test: /\.js?/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
			},
			{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
							limit: 8192,
							name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
			{
				test: /\.(scss|css)$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}, {
					loader: 'postcss-loader',
					options: {
						plugins: function () {
							return [ require('autoprefixer')]
						}
					}
				}]
			}
		]
	}
};
