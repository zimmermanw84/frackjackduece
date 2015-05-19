// Add WebPack to use the included CommonsChunkPlugin
var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';

var config = {
   addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
  },
  
  entry: {
    app: ['./app/main.jsx'],
    vendors: ['react', 'bootstrap', 'jquery']
  },
  resolve: { alias: {} },
  
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
//			{ test: /\.js$/, loader: 'script-loader' },
			{ test: /\.woff2$/,   loader: "url-loader?limit=10000&minetype=application/font-woff2" },
			{ test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
};

config.addVendor('react', bower_dir + '/react/react.min.js');
config.addVendor('bootstrap', bower_dir + '/bootstrap/dist/css/bootstrap.min.css');
config.addVendor('jquery', bower_dir + '/jquery/dist/jquery.min.js');

module.exports = config;
