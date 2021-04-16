const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {

  return {
    mode: env.NODE_ENV,
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
    devServer: {
      port: 8080,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          pathRewrite: { '^/api': '' }
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Unistat',
        template: './src/client/index.html'
      })
    ]
  }
}
