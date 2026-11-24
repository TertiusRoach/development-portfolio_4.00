let pageName = 'index';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// The images the live site serves (FRONT-END.md, Images & Assets): every loadAsset() call with a written-out path,
// plus the files below, whose path is built while the page runs. Each one is copied to public/assets/ at the same path.
const builtAtRuntime = [
  'svg-files/archive-images/my-signature/signature-icon/primary-light.svg', // The tab icon in source/index.html
  'gif-files/signature/1280x720, 15fps/signature-dark.gif', // Article_loading.ts, loadShade()
  'gif-files/signature/1280x720, 15fps/signature-light.gif',
  'gif-files/trinity-apps/1280x720, 15fps/1280x720, 15fps_black.gif',
  'gif-files/trinity-apps/1280x720, 15fps/1280x720, 15fps_white.gif',
  'png-files/character-testing/original/', // Aside.characters.tsx: every profile, so the whole folder
];
class LiveAssets {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('LiveAssets', (compilation) => {
      const stage = compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL;
      compilation.hooks.processAssets.tap({ name: 'LiveAssets', stage }, () => {
        const assets = path.join(__dirname, 'source/assets');
        const files = new Set();
        for (const entry of builtAtRuntime) {
          if (!entry.endsWith('/')) files.add(entry);
          else if (fs.existsSync(path.join(assets, entry))) fs.readdirSync(path.join(assets, entry)).forEach((name) => files.add(entry + name));
          else files.add(entry); // Reported as missing below
        }
        const call = /loadAsset\(\s*'-(\w{3})-'\s*,\s*'([^'`$]+)'\s*\)/g;
        for (const file of sourceFiles(path.join(__dirname, 'source/layouts'))) {
          for (const [, type, name] of fs.readFileSync(file, 'utf8').matchAll(call)) files.add(decodeURIComponent(`${type}-files${name}.${type}`));
        }
        for (const file of files) {
          const from = path.join(assets, file);
          if (!fs.existsSync(from) || fs.statSync(from).isDirectory()) {
            compilation.errors.push(new compiler.webpack.WebpackError(`LiveAssets: source/assets/${file} doesn't exist, so the live site would show nothing there`));
            continue;
          }
          compilation.fileDependencies.add(from);
          compilation.emitAsset(`assets/${file}`, new compiler.webpack.sources.RawSource(fs.readFileSync(from)));
        }
      });
    });
  }
}
const sourceFiles = (folder) =>
  fs.readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(folder, entry.name);
    if (entry.isDirectory()) return sourceFiles(full);
    return /\.tsx?$/.test(entry.name) ? [full] : [];
  });

module.exports = (env, argv) => ({
  entry: `./source/${pageName}.tsx`,
  output: {
    filename: `${pageName}.js`,
    path: path.resolve(__dirname, 'public/'),
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
  devtool: argv.mode === 'production' ? false : 'source-map', // No maps on the live site: they would publish the private source (SECURITY.md, Secrets)
  plugins: [
    new HtmlWebpackPlugin({
      // title: `${pageName} Page`,
      template: `./source/${pageName}.html`,
    }),
    new MiniCssExtractPlugin({
      filename: `${pageName}.css`,
    }),
    new LiveAssets(),
    new Dotenv({
      path: path.resolve(__dirname, 'build/.env'), // Specify the correct path to .env
      systemvars: true, // Load system environment variables as well
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_BASE_URL': JSON.stringify(process.env.REACT_APP_BASE_URL || 'http://localhost:4000'), // Landing's server moved to 4000 (SERVER.md, Ports)
    }),
  ],
  devServer: {
    open: true,
    port: 8080,
    compress: true,
    static: path.join(__dirname, 'public'),
  },
});
