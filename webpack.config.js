const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {

  return {
    mode: env.WEBPACK_SERVE ? 'development' : 'production',
    entry: './src/client/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.(css|pcss)$/,
          use: ['style-loader','css-loader','postcss-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/client/index.html'
      })
    ]
  }
}
