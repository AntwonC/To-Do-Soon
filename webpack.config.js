const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i, 
        use: ["style-loader", "css-loader", "sass-loader"],

      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],

      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, 
        type: 'asset/resource',
      },
    ],
  },
};