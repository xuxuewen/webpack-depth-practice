const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry:'./src/index.js',
  context:__dirname,
  output:{
    filename:'[name]-[contenthash].js',
    chunkFilename:'[name]-[contenthash].js',
    path:path.resolve(__dirname,'./dist'),
    hashDigestLength:5,
    devtoolModuleFilenameTemplate:'source-maps://[namespace]/[resource-path]?[loaders]'
  },
  plugins:[
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  module:{
    noParse:/lodash/
  },
  optimization:{
    // runtimeChunk:{
    //   name: 'runtime'
    //   // name: entrypoint => `runtimechunk~${entrypoint.name}`
    // },
    splitChunks:{
      chunks: 'all',
      minSize: 30*1024, // 这是每个chunk的最小 KiB
      // maxSize: 200*1024,
      minChunks: 1,
      // maxAsyncRequests: 50,
      // maxInitialRequests: 5,
      // automaticNameDelimiter: '~',
      name: true,
      cacheGroups:{
        // 分离出 react、react-dom
        reactlib:{
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'reactlib',
          chunks: 'all',
          priority:20,
          enforce: true
        },
        // 分离出其他的 node_module 包
        nodemou:{
          test: /[\\/]node_modules[\\/]/,
          name: 'nodemou',
          chunks: 'all',
          priority:10,
          enforce: true
        },
        // 抽离公用包,最小chunk，是1，超过大小 1.6KB
        commons:{
          name: 'commons',
          chunks: 'all',
          // minChunks: 1,
          priority:5,
          // enforce: true
        }
      }
    }
  },
  devtool:'source-map'
}