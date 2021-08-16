/**
 * path é uma lib que trata diferentes maneiras de representação de diretótios
 * nos diversos SOs
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  /**
   * devTool permite que você configure um source map (para facilitar o debug)
   * eval-source-map é uma das maneiras, existem outras + ou - detalhadas 
   * que afetam + ou - no desempenho do reload
   */
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  /**
   * essa config permiti subir o projeto num server local gerando um reload a 
   * cada save
   */
  devServer: {
    contentBase: path.resolve(__dirname, 'public', 'índex.html')
  },
  plugins: [
    /**
     * Inserir bundle no index.html de forma auto 
     */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}