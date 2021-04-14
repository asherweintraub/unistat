module.exports = (env,) => {

  return {
    mode: env.WEBPACK_SERVE ? 'development' : 'production',
    entry: './index.js',
    output: {
      filename: 'bundle.js',
    },
  }
}
