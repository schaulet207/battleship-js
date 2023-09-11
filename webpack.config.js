const path = require('path');

module.exports = {
  target: 'node', // Set the target to 'node' for CommonJS
  mode: 'development',
  entry: './src/main.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};