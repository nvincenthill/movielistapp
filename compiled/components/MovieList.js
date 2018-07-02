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
        "div",
        null,
        _react2.default.createElement(
          "ul",
          { className: "movie-list" },
          items
        ),
        this.props.movies.length === 0 ? _react2.default.createElement(
          "p",
          null,
          " No movies found "
        ) : null
      );
    }
  }]);

  return MovieList;
}(_react2.default.Component);

exports.default = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvTW92aWVMaXN0LmpzIl0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwiaXRlbXMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsImluZGV4IiwidGl0bGUiLCJsZW5ndGgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSEFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUlDLFFBQVEsS0FBS0QsS0FBTCxDQUFXRSxNQUFYLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDbEQsZUFBUUQsUUFDTiw4QkFBQyx1QkFBRCxJQUFlLEtBQUtBLE1BQU1FLEtBQTFCLEVBQWlDLE9BQU8sT0FBS04sS0FBTCxDQUFXRSxNQUFYLENBQWtCRyxLQUFsQixDQUF4QyxHQURGO0FBR0QsT0FKVyxDQUFaO0FBS0EsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLFlBQWQ7QUFBNEJKO0FBQTVCLFNBREY7QUFFRyxhQUFLRCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JLLE1BQWxCLEtBQTZCLENBQTdCLEdBQWlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBakMsR0FBNEQ7QUFGL0QsT0FERjtBQU1EOzs7O0VBakJxQkMsZ0JBQU1DLFM7O2tCQW9CZlYsUyIsImZpbGUiOiJNb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW92aWVMaXN0SXRlbSBmcm9tIFwiLi9Nb3ZpZUxpc3RJdGVtXCI7XG5cbmNsYXNzIE1vdmllTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMucHJvcHMubW92aWVzLm1hcCgobW92aWUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKG1vdmllID0gKFxuICAgICAgICA8TW92aWVMaXN0SXRlbSBrZXk9e21vdmllLnRpdGxlfSBtb3ZpZT17dGhpcy5wcm9wcy5tb3ZpZXNbaW5kZXhdfSAvPlxuICAgICAgKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtb3ZpZS1saXN0XCI+e2l0ZW1zfTwvdWw+XG4gICAgICAgIHt0aGlzLnByb3BzLm1vdmllcy5sZW5ndGggPT09IDAgPyA8cD4gTm8gbW92aWVzIGZvdW5kIDwvcD4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iXX0=