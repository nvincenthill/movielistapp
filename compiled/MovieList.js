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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL01vdmllTGlzdC5qcyJdLCJuYW1lcyI6WyJNb3ZpZUxpc3QiLCJwcm9wcyIsIml0ZW1zIiwibW92aWVzIiwibWFwIiwibW92aWUiLCJpbmRleCIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJQyxRQUFRLEtBQUtELEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ2xELGVBQVFELFFBQ04sOEJBQUMsdUJBQUQsSUFBZSxLQUFLQSxNQUFNRSxLQUExQixFQUFpQyxPQUFPLE9BQUtOLEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkcsS0FBbEIsQ0FBeEMsR0FERjtBQUdELE9BSlcsQ0FBWjtBQUtBLGFBQU87QUFBQTtBQUFBLFVBQUksV0FBVSxZQUFkO0FBQTRCSjtBQUE1QixPQUFQO0FBQ0Q7Ozs7RUFacUJNLGdCQUFNQyxTOztrQkFlZlQsUyIsImZpbGUiOiJNb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW92aWVMaXN0SXRlbSBmcm9tIFwiLi9Nb3ZpZUxpc3RJdGVtXCI7XG5cbmNsYXNzIE1vdmllTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMucHJvcHMubW92aWVzLm1hcCgobW92aWUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKG1vdmllID0gKFxuICAgICAgICA8TW92aWVMaXN0SXRlbSBrZXk9e21vdmllLnRpdGxlfSBtb3ZpZT17dGhpcy5wcm9wcy5tb3ZpZXNbaW5kZXhdfSAvPlxuICAgICAgKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJtb3ZpZS1saXN0XCI+e2l0ZW1zfTwvdWw+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiJdfQ==