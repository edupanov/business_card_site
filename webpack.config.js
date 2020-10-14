const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPligin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPligin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}

const jsLoaders = () => {
  const loaders = [{
    loader: "babel-loader",
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    },
  }]

  if (isDev) {
    loaders.push('eslint-loader')
  }
  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.ts']
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.png', '.jpg', '.gif'],
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev
  },
  devtool: isDev ? 'source-map' : '',
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      // minify: {
      //   collapseWhitespace: isProd
      // }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/assets/img'),
        to: path.resolve(__dirname, '/dist/img')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: isDev,
            reloadAll: true
          },
        },
          'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: isDev,
            reloadAll: true
          },
        },
          'css-loader',
          'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.m?ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          },
        }
      }
    ]
  }
}
