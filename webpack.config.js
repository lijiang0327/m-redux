const path = require('path');

module.exports = {
  entry: './test/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  target: 'node12.18',
  devServer: {
    writeToDisk: true,
  }
};