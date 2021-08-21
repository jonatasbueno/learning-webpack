/**
 * path é uma lib que trata diferentes maneiras de representação de diretótios
 * nos diversos SOs
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  /**
   * devTool permite que você configure um source map (para facilitar o debug)
   * eval-source-map é uma das maneiras, existem outras + ou - detalhadas 
   * que afetam + ou - no desempenho do reload
   */
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  /**
   * essa config permiti subir o projeto num server local gerando um reload a 
   * cada save
   */
  devServer: {
    contentBase: path.resolve(__dirname, 'public', 'índex.html'),
    hot: true
  },
  plugins: [
    /**
     * 'react-refresh-webpack-plugin' permite reload sem perder o estado atual
     */
    isDevelopment && new ReactRefreshWebpackPlugin(),
    /**
     * Inserir bundle no index.html de forma auto 
     */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
}