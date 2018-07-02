var webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    // add multiple files dynamically
    app: [
      "./components/app.js",
      "./components/MovieList.js",
      "./components/MovieListItem.js",
      "./components/Search.js"
    ],
    vendors: ["react"]
  },
  output: {
    // Make sure to use [name] or [id] in output.filename
    //  when using multiple entry points
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js"
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
  node: {
    fs: "empty"
  },
  watch: true
};
