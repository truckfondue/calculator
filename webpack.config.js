module.exports = {
  entry: ["./utils.js", "./app.js"],
  output: {
    filename : 'bundle.js'
  },
  
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'jshint-loader'
      }
    ]
  },
  
  resolve: {
    extensions: ['', '.js']
  }
  
};

//webpack-dev-server --inline