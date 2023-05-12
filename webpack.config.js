const path = require('path');

module.exports = {
  entry: './src/index.ts', // The entry point of your application
  output: {
    filename: 'bundle.js', // The name of the output bundle
    path: path.resolve(__dirname, 'dist') // The output directory
  },
  resolve: {
    extensions: ['.ts', '.js'] // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Match TypeScript files
        use: 'ts-loader', // Use ts-loader to transpile TypeScript
        exclude: /node_modules/
      }
    ]
  }
};
