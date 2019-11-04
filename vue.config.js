const webpack = require('webpack');
const path = require('path');

module.exports = {
  chainWebpack: chainableConfig => {
    // modify config with webpack-chain
    // https://github.com/mozilla-neutrino/webpack-chain
    chainableConfig.resolve.alias
      .set('@assets', path.resolve(__dirname, './src/assets'));
  },
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Vue Argon Design',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};