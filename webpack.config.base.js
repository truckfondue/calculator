module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(bower_components|node_modules)/,
      loaders: ['babel'],
    }],
  },
  output: {
    libraryTarget: 'umd',
    library: 'demo'
  },
  resolve: {
    extensions: [
      '',
      '.js',
    ],
  },
};
