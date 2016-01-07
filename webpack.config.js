module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    filename : 'bundle.js'
  },

  module: {
    preLoaders: [
      // { test: /\.js$/, exclude: 'node_modules', loader: 'jshint-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loaders: ['babel']
    }]
  },

  resolve: {
    extensions: ['', '.js']
  }

};
