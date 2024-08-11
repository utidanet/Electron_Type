const path = require('path');

module.exports = [
  {
    entry: './src/main.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    target: 'electron-main',
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
      extensions: ['.ts', '.tsx', '.js'],
    },
  },
  {
    entry: './src/renderer.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
    },
    target: 'electron-renderer',
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
      extensions: ['.ts', '.tsx', '.js'],
    },
  },
];