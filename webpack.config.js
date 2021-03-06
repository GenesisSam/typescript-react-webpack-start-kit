const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/App.tsx',
  outpus: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [{
        test: /\.tsx$/, loader: 'awesome-typescript-loader'
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!typed-css-modules-loader'
        }],
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  postcss() {
    return {
      defaults: [autoprefixer],
      cleaner: [autoprefixer({
        browsers: []
      })],
    };
  },
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
