const path = require('path');

module.exports = {
    // inserir o modo de desenvolvimento
  mode: 'development',
  entry: './src/A0018-webpack/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { configFile: 'tsconfig.frontend.json' }
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  // mapear os arquivos javascript criados
  devtool: 'source-map',

};
