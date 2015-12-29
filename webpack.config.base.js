
module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loaders: ['babel']
    }],
  },
  output: {
    // path: __dirname,
    // public: 'index.html',
    filename: './dist/bundle.js'
  },

  resolve: {
    extensions: [
      '',
      '.js'
    ],
  },
};
