module.exports = {
  entry: ["./src/calc"],
  output: {
    filename : 'bundle.js'
  },
  
  module: {
    preLoaders: [
      { test: /\.js$/, exclude: 'node_modules', loader: 'jshint-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  
  resolve: {
    extensions: ['', '.js']
  }
  
};

//webpack-dev-server --inline