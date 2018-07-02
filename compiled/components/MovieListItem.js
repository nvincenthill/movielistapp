"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieListItem = function (_React$Component) {
  _inherits(MovieListItem, _React$Component);

  function MovieListItem(props) {
    _classCallCheck(this, MovieListItem);

    return _possibleConstructorReturn(this, (MovieListItem.__proto__ || Object.getPrototypeOf(MovieListItem)).call(this, props));
  }

  _createClass(MovieListItem, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "li",
        { className: "movie-list-item" },
        this.props.movie.title
      );
    }
  }]);

  return MovieListItem;
}(_react2.default.Component);

exports.default = MovieListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvTW92aWVMaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RJdGVtIiwicHJvcHMiLCJtb3ZpZSIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlIQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBSSxXQUFVLGlCQUFkO0FBQWlDLGFBQUtBLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkM7QUFBbEQsT0FBUDtBQUNEOzs7O0VBUHlCQyxnQkFBTUMsUzs7a0JBVW5CTCxhIiwiZmlsZSI6Ik1vdmllTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIE1vdmllTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cIm1vdmllLWxpc3QtaXRlbVwiPnt0aGlzLnByb3BzLm1vdmllLnRpdGxlfTwvbGk+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdEl0ZW07XG4iXX0=