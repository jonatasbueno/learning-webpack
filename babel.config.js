module.exports = {
  presets: [
    '@babel/preset-env',
    // essa config insenta a necessidade import React from 'react' nos files
    ['@babel/preset-react', { 
      runtime: 'automatic'
    }]
  ]
}