const path = require('path');

module.exports = {
    // inserir o modo de desenvolvimento
  mode: 'development',
  entry: './src/A0018-webpack/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
  },
  // mapear os arquivos javascript criados
  devtool: 'source-map',

};
