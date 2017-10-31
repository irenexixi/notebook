var path = require("path"), // 使用path模块，这个模块包含处理和转换文件路径的实用程序。
	webpack = require("webpack"),
	// 使用webpack，是前端资源模块化管理和打包工具,它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。
	// 还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，
	// 任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。
	proxy = require("./proxy"); //引入当前目录下的proxy模块

var SRC_PATH = path.join(__dirname, 'src'), //加入所有路径参数然后规范化产生路径。
	DIST_PATH = path.join(__dirname, '../static');

// __dirname 获取当前模块文件所在目录的完整绝对路径
// console.log('__dirname', path.join(__dirname, ''));
// e:\qqli\Notes\webpack-vue-vuex-dev-config\webapp\resource

//__filename 表示当前正在执行的脚本的文件名

var HtmlWebpackPlugin = require('html-webpack-plugin');
//https://github.com/ampedandwired/html-webpack-plugin
// The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
// Just add the plugin to your webpack config as follows:
//If you have multiple webpack entry points, they will all be included with script tags in the generated HTML.


var config = {
	entry: {
		apps: path.join(SRC_PATH, 'root.js'),
		vendors: [
			'vue',
			'vuex',
			'vue-router',
			'vuex-router-sync',
            'whatwg-fetch',
			'es6-promise',
			'querystring'
		]
	},
	
	resolve: {
		alias: {},
		extensions: ["", ".less", ".css", ".js", ".vue", ".json"]
	},
	
	output: {
		path: DIST_PATH,
		publicPath: '',
		filename: "js/[name].js"
	},
	
	clearBeforeBuild: false,
	
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(
			'vendors',
			'js/vendors.js', // vendor date
			Infinity
		),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			'__DEV__': true
		}),
		
		new HtmlWebpackPlugin({
			inject: false,
			// true | 'head' | 'body' | false Inject all assets into the given template or templateContent -
			// When passing true or 'body' all javascript resources will be placed at the bottom of the body element.
			// 'head' will place the scripts in the head element.

			//minify: {minifyJS:true, collapseWhitespace: true}, //{...} | false Pass a html-minifier options object to minify the output.

			filename: './index.html', //The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html)
			template: path.join(SRC_PATH, 'index.html') //Webpack require path to the template
		})
	
	],

	
	module: {
		noParse: [],
		
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},

			{
				test: /\.js$/,
				loader: "babel",
				include: SRC_PATH
			},
			
			{
				test: /\.css$/,
				loader: "style!css!autoprefixer"
			},
			
			{
				test: /\.less$/,
				loader: "style!css!autoprefixer!less"
			},
			
			{
				test: /\.(png|jpg|gif)$/,
				loader: "url",
				query: {
					limit: 8192,
					name: 'imgs/[name].[ext]'
				}
			},
			
			{
				test: /\.(eot|woff|woff2|ttf|svg)/,
				loader: "url",
				query: {
					limit: 100,
					name: 'fonts/[name].[ext]'
				}
			}
		]
	},

    vue:{

        loaders:{

            less: 'vue-style!css!autoprefixer!less',


            css: 'vue-style!css!autoprefixer'
        }
    },
    
	
	devServer: {
		proxy: proxy
	}
};


console.log("initializing webpack developent build....");

module.exports = config;
