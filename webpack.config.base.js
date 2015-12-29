
module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loaders: ['babel']
    }],
  },
  output: {
    filename: 'dist/bundle.js'
  },

  resolve: {
    extensions: [
      '',
      '.js'
    ],
  },
};
