"use strict";

var webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./app.js",
  output: {
    // path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }]
  },
  watch: true
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmpzIl0sIm5hbWVzIjpbIndlYnBhY2siLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGUiLCJlbnRyeSIsIm91dHB1dCIsImZpbGVuYW1lIiwicnVsZXMiLCJ0ZXN0IiwibG9hZGVyIiwiZXhjbHVkZSIsInVzZSIsIndhdGNoIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU0sYUFEUztBQUVmQyxTQUFPLFVBRlE7QUFHZkMsVUFBUTtBQUNOO0FBQ0FDLGNBQVU7QUFGSixHQUhPO0FBT2ZMLFVBQVE7QUFDTk0sV0FBTyxDQUNMO0FBQ0VDLFlBQU0sT0FEUjtBQUVFQyxjQUFRLGNBRlY7QUFHRUMsZUFBUztBQUhYLEtBREssRUFNTDtBQUNFRixZQUFNLFFBRFI7QUFFRUcsV0FBSyxDQUFDLGNBQUQsRUFBaUIsWUFBakI7QUFGUCxLQU5LO0FBREQsR0FQTztBQW9CZkMsU0FBTztBQXBCUSxDQUFqQiIsImZpbGUiOiJ3ZWJwYWNrLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB3ZWJwYWNrID0gcmVxdWlyZShcIndlYnBhY2tcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtb2RlOiBcImRldmVsb3BtZW50XCIsXG4gIGVudHJ5OiBcIi4vYXBwLmpzXCIsXG4gIG91dHB1dDoge1xuICAgIC8vIHBhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiZGlzdFwiKSxcbiAgICBmaWxlbmFtZTogXCJhcHAuYnVuZGxlLmpzXCJcbiAgfSxcbiAgbW9kdWxlOiB7XG4gICAgcnVsZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGVzdDogL1xcLmpzJC8sXG4gICAgICAgIGxvYWRlcjogXCJiYWJlbC1sb2FkZXJcIixcbiAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC5jc3MkLyxcbiAgICAgICAgdXNlOiBbXCJzdHlsZS1sb2FkZXJcIiwgXCJjc3MtbG9hZGVyXCJdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB3YXRjaDogdHJ1ZVxufTtcbiJdfQ==