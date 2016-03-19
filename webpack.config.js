const TARGET = process.env.npm_lifecycle_event;


const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

entryOutput = {
  entry: PATHS.app,
  output: {
    path:PATHS.build,
    filename:'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      include: PATHS.app,
      loaders: ['style', 'css'],

    }]

  }
}


if(TARGET ==="start" || !TARGET)
  module.exports=Object.assign({
    devtool: 'eval-source-map',

    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT || 8080,


    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]

  },entryOutput)
else if(TARGET ==="build")
  module.exports=Object.assign({},entryOutput)
