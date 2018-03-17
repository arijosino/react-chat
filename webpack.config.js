/*eslint no-undef: "error"*/
/*eslint-env node*/

module.exports = {
  entry: "./client/src/components/index.js",
  output: {
    path: __dirname + "/",
    filename: "./client/bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};