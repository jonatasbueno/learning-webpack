module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    /**
     * Essa config isenta a necessidade de importar React nos .jsx files
     */
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
}