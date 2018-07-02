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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL01vdmllTGlzdEl0ZW0uanMiXSwibmFtZXMiOlsiTW92aWVMaXN0SXRlbSIsInByb3BzIiwibW92aWUiLCJ0aXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsYTs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5SEFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLGFBQU87QUFBQTtBQUFBLFVBQUksV0FBVSxpQkFBZDtBQUFpQyxhQUFLQSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDO0FBQWxELE9BQVA7QUFDRDs7OztFQVB5QkMsZ0JBQU1DLFM7O2tCQVVuQkwsYSIsImZpbGUiOiJNb3ZpZUxpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBNb3ZpZUxpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJtb3ZpZS1saXN0LWl0ZW1cIj57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08L2xpPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3RJdGVtO1xuIl19