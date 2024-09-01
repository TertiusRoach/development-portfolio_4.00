let pageName = 'landing';

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: `./source/${pageName}.tsx`,
  output: {
    filename: `${pageName}.js`,
    path: path.resolve(__dirname, `public/${pageName}`),
    clean: true, // Clean the output directory before emit
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // Preserve original file names
              context: 'source/assets', // Adjust the context if needed
              outputPath: 'assets', // Output to 'public/assets' folder
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      // title: `${pageName} Page`,
      template: `./source/pages/${pageName}.html`,
    }),
    new MiniCssExtractPlugin({
      filename: `${pageName}.css`,
    }),
  ],
  devServer: {
    open: true,
    port: 8080,
    compress: true,
    static: path.join(__dirname, 'public'),
  },
};
