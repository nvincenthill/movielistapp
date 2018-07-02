"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("../main.css");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MovieList = require("./MovieList");

var _MovieList2 = _interopRequireDefault(_MovieList);

var _Search = require("./Search");

var _Search2 = _interopRequireDefault(_Search);

var _fs = require("fs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      movies: [{ title: "Mean Girls" }, { title: "Hackers" }, { title: "The Grey" }, { title: "Sunshine" }, { title: "Ex Machina" }],
      oldMovies: [{ title: "Mean Girls" }, { title: "Hackers" }, { title: "The Grey" }, { title: "Sunshine" }, { title: "Ex Machina" }],
      input: ""
    };

    _this.handleInput = _this.handleInput.bind(_this);
    _this.search = _this.search.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleInput",
    value: function handleInput(event) {
      console.log(event);
      this.setState({ input: event.target.value });
    }
  }, {
    key: "search",
    value: function search() {
      var _this2 = this;

      var filtered = this.state.oldMovies.map(function (movie) {
        if (movie.title.toLowerCase().includes(_this2.state.input.toLowerCase())) {
          return movie;
        }
      });
      console.log(filtered);
      var cleaned = [];
      filtered.forEach(function (movie) {
        if (movie != undefined) {
          cleaned.push(movie);
        }
      });
      this.setState({ movies: cleaned });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          null,
          "Movie List"
        ),
        _react2.default.createElement(_Search2.default, { handleInput: this.handleInput, search: this.search }),
        _react2.default.createElement(_MovieList2.default, { movies: this.state.movies })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsIm9sZE1vdmllcyIsImlucHV0IiwiaGFuZGxlSW5wdXQiLCJiaW5kIiwic2VhcmNoIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlcmVkIiwibWFwIiwibW92aWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY2xlYW5lZCIsImZvckVhY2giLCJ1bmRlZmluZWQiLCJwdXNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsQ0FDTixFQUFFQyxPQUFPLFlBQVQsRUFETSxFQUVOLEVBQUVBLE9BQU8sU0FBVCxFQUZNLEVBR04sRUFBRUEsT0FBTyxVQUFULEVBSE0sRUFJTixFQUFFQSxPQUFPLFVBQVQsRUFKTSxFQUtOLEVBQUVBLE9BQU8sWUFBVCxFQUxNLENBREc7QUFRWEMsaUJBQVcsQ0FDVCxFQUFFRCxPQUFPLFlBQVQsRUFEUyxFQUVULEVBQUVBLE9BQU8sU0FBVCxFQUZTLEVBR1QsRUFBRUEsT0FBTyxVQUFULEVBSFMsRUFJVCxFQUFFQSxPQUFPLFVBQVQsRUFKUyxFQUtULEVBQUVBLE9BQU8sWUFBVCxFQUxTLENBUkE7QUFlWEUsYUFBTztBQWZJLEtBQWI7O0FBa0JBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZRCxJQUFaLE9BQWQ7QUFyQmlCO0FBc0JsQjs7OztnQ0FFV0UsSyxFQUFPO0FBQ2pCQyxjQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxXQUFLRyxRQUFMLENBQWMsRUFBRVAsT0FBT0ksTUFBTUksTUFBTixDQUFhQyxLQUF0QixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUlDLFdBQVcsS0FBS2QsS0FBTCxDQUFXRyxTQUFYLENBQXFCWSxHQUFyQixDQUF5QixpQkFBUztBQUMvQyxZQUFJQyxNQUFNZCxLQUFOLENBQVllLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DLE9BQUtsQixLQUFMLENBQVdJLEtBQVgsQ0FBaUJhLFdBQWpCLEVBQW5DLENBQUosRUFBd0U7QUFDdEUsaUJBQU9ELEtBQVA7QUFDRDtBQUNGLE9BSmMsQ0FBZjtBQUtBUCxjQUFRQyxHQUFSLENBQVlJLFFBQVo7QUFDQSxVQUFJSyxVQUFVLEVBQWQ7QUFDQUwsZUFBU00sT0FBVCxDQUFpQixpQkFBUztBQUN4QixZQUFJSixTQUFTSyxTQUFiLEVBQXdCO0FBQ3RCRixrQkFBUUcsSUFBUixDQUFhTixLQUFiO0FBQ0Q7QUFDRixPQUpEO0FBS0EsV0FBS0wsUUFBTCxDQUFjLEVBQUVWLFFBQVFrQixPQUFWLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSxzQ0FBQyxnQkFBRCxJQUFRLGFBQWEsS0FBS2QsV0FBMUIsRUFBdUMsUUFBUSxLQUFLRSxNQUFwRCxHQUZGO0FBR0Usc0NBQUMsbUJBQUQsSUFBVyxRQUFRLEtBQUtQLEtBQUwsQ0FBV0MsTUFBOUI7QUFIRixPQURGO0FBT0Q7Ozs7RUF0RGVzQixnQkFBTUMsUzs7QUF5RHhCQyxtQkFBU0MsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL21haW4uY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IE1vdmllTGlzdCBmcm9tIFwiLi9Nb3ZpZUxpc3RcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XG5pbXBvcnQgeyB1bndhdGNoRmlsZSB9IGZyb20gXCJmc1wiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiBbXG4gICAgICAgIHsgdGl0bGU6IFwiTWVhbiBHaXJsc1wiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiSGFja2Vyc1wiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiVGhlIEdyZXlcIiB9LFxuICAgICAgICB7IHRpdGxlOiBcIlN1bnNoaW5lXCIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJFeCBNYWNoaW5hXCIgfVxuICAgICAgXSxcbiAgICAgIG9sZE1vdmllczogW1xuICAgICAgICB7IHRpdGxlOiBcIk1lYW4gR2lybHNcIiB9LFxuICAgICAgICB7IHRpdGxlOiBcIkhhY2tlcnNcIiB9LFxuICAgICAgICB7IHRpdGxlOiBcIlRoZSBHcmV5XCIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJTdW5zaGluZVwiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiRXggTWFjaGluYVwiIH1cbiAgICAgIF0sXG4gICAgICBpbnB1dDogXCJcIlxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2guYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgc2VhcmNoKCkge1xuICAgIGxldCBmaWx0ZXJlZCA9IHRoaXMuc3RhdGUub2xkTW92aWVzLm1hcChtb3ZpZSA9PiB7XG4gICAgICBpZiAobW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLmlucHV0LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIHJldHVybiBtb3ZpZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZCk7XG4gICAgbGV0IGNsZWFuZWQgPSBbXTtcbiAgICBmaWx0ZXJlZC5mb3JFYWNoKG1vdmllID0+IHtcbiAgICAgIGlmIChtb3ZpZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xlYW5lZC5wdXNoKG1vdmllKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW92aWVzOiBjbGVhbmVkIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+TW92aWUgTGlzdDwvaDE+XG4gICAgICAgIDxTZWFyY2ggaGFuZGxlSW5wdXQ9e3RoaXMuaGFuZGxlSW5wdXR9IHNlYXJjaD17dGhpcy5zZWFyY2h9IC8+XG4gICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbiJdfQ==