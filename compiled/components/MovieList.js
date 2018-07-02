"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _MovieListItem = require("./MovieListItem");

var _MovieListItem2 = _interopRequireDefault(_MovieListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieList = function (_React$Component) {
  _inherits(MovieList, _React$Component);

  function MovieList(props) {
    _classCallCheck(this, MovieList);

    return _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).call(this, props));
  }

  _createClass(MovieList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.props.movies.map(function (movie, index) {
        return movie = _react2.default.createElement(_MovieListItem2.default, { key: movie.title, movie: _this2.props.movies[index] });
      });
      return _react2.default.createElement(
        "ul",
        { className: "movie-list" },
        items
      );
    }
  }]);

  return MovieList;
}(_react2.default.Component);

exports.default = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvTW92aWVMaXN0LmpzIl0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwiaXRlbXMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsImluZGV4IiwidGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSEFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUlDLFFBQVEsS0FBS0QsS0FBTCxDQUFXRSxNQUFYLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDbEQsZUFBUUQsUUFDTiw4QkFBQyx1QkFBRCxJQUFlLEtBQUtBLE1BQU1FLEtBQTFCLEVBQWlDLE9BQU8sT0FBS04sS0FBTCxDQUFXRSxNQUFYLENBQWtCRyxLQUFsQixDQUF4QyxHQURGO0FBR0QsT0FKVyxDQUFaO0FBS0EsYUFBTztBQUFBO0FBQUEsVUFBSSxXQUFVLFlBQWQ7QUFBNEJKO0FBQTVCLE9BQVA7QUFDRDs7OztFQVpxQk0sZ0JBQU1DLFM7O2tCQWVmVCxTIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb3ZpZUxpc3RJdGVtIGZyb20gXCIuL01vdmllTGlzdEl0ZW1cIjtcblxuY2xhc3MgTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5wcm9wcy5tb3ZpZXMubWFwKChtb3ZpZSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiAobW92aWUgPSAoXG4gICAgICAgIDxNb3ZpZUxpc3RJdGVtIGtleT17bW92aWUudGl0bGV9IG1vdmllPXt0aGlzLnByb3BzLm1vdmllc1tpbmRleF19IC8+XG4gICAgICApKTtcbiAgICB9KTtcbiAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cIm1vdmllLWxpc3RcIj57aXRlbXN9PC91bD47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuIl19