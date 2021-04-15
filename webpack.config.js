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
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Unistat',
        template: './src/client/index.html'
      })
    ]
  }
}
