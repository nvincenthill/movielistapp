"use strict";

var webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    // add multiple files dynamically
    app: ["./components/app.js", "./components/MovieList.js", "./components/MovieListItem.js", "./components/Search.js"],
    vendors: ["react"]
  },
  output: {
    // Make sure to use [name] or [id] in output.filename
    //  when using multiple entry points
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js"
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
  node: {
    fs: "empty"
  },
  watch: true
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmpzIl0sIm5hbWVzIjpbIndlYnBhY2siLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGUiLCJlbnRyeSIsImFwcCIsInZlbmRvcnMiLCJvdXRwdXQiLCJmaWxlbmFtZSIsImNodW5rRmlsZW5hbWUiLCJydWxlcyIsInRlc3QiLCJsb2FkZXIiLCJleGNsdWRlIiwidXNlIiwibm9kZSIsImZzIiwid2F0Y2giXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVUMsUUFBUSxTQUFSLENBQWQ7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTSxhQURTO0FBRWZDLFNBQU87QUFDTDtBQUNBQyxTQUFLLENBQ0gscUJBREcsRUFFSCwyQkFGRyxFQUdILCtCQUhHLEVBSUgsd0JBSkcsQ0FGQTtBQVFMQyxhQUFTLENBQUMsT0FBRDtBQVJKLEdBRlE7QUFZZkMsVUFBUTtBQUNOO0FBQ0E7QUFDQUMsY0FBVSxrQkFISjtBQUlOQyxtQkFBZTtBQUpULEdBWk87QUFrQmZSLFVBQVE7QUFDTlMsV0FBTyxDQUNMO0FBQ0VDLFlBQU0sT0FEUjtBQUVFQyxjQUFRLGNBRlY7QUFHRUMsZUFBUztBQUhYLEtBREssRUFNTDtBQUNFRixZQUFNLFFBRFI7QUFFRUcsV0FBSyxDQUFDLGNBQUQsRUFBaUIsWUFBakI7QUFGUCxLQU5LO0FBREQsR0FsQk87QUErQmZDLFFBQU07QUFDSkMsUUFBSTtBQURBLEdBL0JTO0FBa0NmQyxTQUFPO0FBbENRLENBQWpCIiwiZmlsZSI6IndlYnBhY2suY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHdlYnBhY2sgPSByZXF1aXJlKFwid2VicGFja1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1vZGU6IFwiZGV2ZWxvcG1lbnRcIixcbiAgZW50cnk6IHtcbiAgICAvLyBhZGQgbXVsdGlwbGUgZmlsZXMgZHluYW1pY2FsbHlcbiAgICBhcHA6IFtcbiAgICAgIFwiLi9jb21wb25lbnRzL2FwcC5qc1wiLFxuICAgICAgXCIuL2NvbXBvbmVudHMvTW92aWVMaXN0LmpzXCIsXG4gICAgICBcIi4vY29tcG9uZW50cy9Nb3ZpZUxpc3RJdGVtLmpzXCIsXG4gICAgICBcIi4vY29tcG9uZW50cy9TZWFyY2guanNcIlxuICAgIF0sXG4gICAgdmVuZG9yczogW1wicmVhY3RcIl1cbiAgfSxcbiAgb3V0cHV0OiB7XG4gICAgLy8gTWFrZSBzdXJlIHRvIHVzZSBbbmFtZV0gb3IgW2lkXSBpbiBvdXRwdXQuZmlsZW5hbWVcbiAgICAvLyAgd2hlbiB1c2luZyBtdWx0aXBsZSBlbnRyeSBwb2ludHNcbiAgICBmaWxlbmFtZTogXCJbbmFtZV0uYnVuZGxlLmpzXCIsXG4gICAgY2h1bmtGaWxlbmFtZTogXCJbaWRdLmJ1bmRsZS5qc1wiXG4gIH0sXG4gIG1vZHVsZToge1xuICAgIHJ1bGVzOiBbXG4gICAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC5qcyQvLFxuICAgICAgICBsb2FkZXI6IFwiYmFiZWwtbG9hZGVyXCIsXG4gICAgICAgIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXN0OiAvXFwuY3NzJC8sXG4gICAgICAgIHVzZTogW1wic3R5bGUtbG9hZGVyXCIsIFwiY3NzLWxvYWRlclwiXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgbm9kZToge1xuICAgIGZzOiBcImVtcHR5XCJcbiAgfSxcbiAgd2F0Y2g6IHRydWVcbn07XG4iXX0=