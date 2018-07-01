var webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: "development",
  entry: "./app.js",
  output: {
    // path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  watch: true
};
