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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsIm9sZE1vdmllcyIsImlucHV0IiwiaGFuZGxlSW5wdXQiLCJiaW5kIiwic2VhcmNoIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlcmVkIiwibWFwIiwibW92aWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY2xlYW5lZCIsImZvckVhY2giLCJ1bmRlZmluZWQiLCJwdXNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsQ0FDTixFQUFFQyxPQUFPLFlBQVQsRUFETSxFQUVOLEVBQUVBLE9BQU8sU0FBVCxFQUZNLEVBR04sRUFBRUEsT0FBTyxVQUFULEVBSE0sRUFJTixFQUFFQSxPQUFPLFVBQVQsRUFKTSxFQUtOLEVBQUVBLE9BQU8sWUFBVCxFQUxNLENBREc7QUFRWEMsaUJBQVcsQ0FDVCxFQUFFRCxPQUFPLFlBQVQsRUFEUyxFQUVULEVBQUVBLE9BQU8sU0FBVCxFQUZTLEVBR1QsRUFBRUEsT0FBTyxVQUFULEVBSFMsRUFJVCxFQUFFQSxPQUFPLFVBQVQsRUFKUyxFQUtULEVBQUVBLE9BQU8sWUFBVCxFQUxTLENBUkE7QUFlWEUsYUFBTztBQWZJLEtBQWI7O0FBa0JBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZRCxJQUFaLE9BQWQ7QUFyQmlCO0FBc0JsQjs7OztnQ0FFV0UsSyxFQUFPO0FBQ2pCQyxjQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxXQUFLRyxRQUFMLENBQWMsRUFBRVAsT0FBT0ksTUFBTUksTUFBTixDQUFhQyxLQUF0QixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUlDLFdBQVcsS0FBS2QsS0FBTCxDQUFXRyxTQUFYLENBQXFCWSxHQUFyQixDQUF5QixpQkFBUztBQUMvQyxZQUFJQyxNQUFNZCxLQUFOLENBQVllLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DLE9BQUtsQixLQUFMLENBQVdJLEtBQVgsQ0FBaUJhLFdBQWpCLEVBQW5DLENBQUosRUFBd0U7QUFDdEUsaUJBQU9ELEtBQVA7QUFDRDtBQUNGLE9BSmMsQ0FBZjtBQUtBUCxjQUFRQyxHQUFSLENBQVlJLFFBQVo7QUFDQSxVQUFJSyxVQUFVLEVBQWQ7QUFDQUwsZUFBU00sT0FBVCxDQUFpQixpQkFBUztBQUN4QixZQUFJSixTQUFTSyxTQUFiLEVBQXdCO0FBQ3RCRixrQkFBUUcsSUFBUixDQUFhTixLQUFiO0FBQ0Q7QUFDRixPQUpEO0FBS0EsV0FBS0wsUUFBTCxDQUFjLEVBQUVWLFFBQVFrQixPQUFWLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSxzQ0FBQyxnQkFBRCxJQUFRLGFBQWEsS0FBS2QsV0FBMUIsRUFBdUMsUUFBUSxLQUFLRSxNQUFwRCxHQUZGO0FBR0Usc0NBQUMsbUJBQUQsSUFBVyxRQUFRLEtBQUtQLEtBQUwsQ0FBV0MsTUFBOUI7QUFIRixPQURGO0FBT0Q7Ozs7RUF0RGVzQixnQkFBTUMsUzs7QUF5RHhCQyxtQkFBU0MsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL21haW4uY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IE1vdmllTGlzdCBmcm9tIFwiLi9Nb3ZpZUxpc3RcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IFtcbiAgICAgICAgeyB0aXRsZTogXCJNZWFuIEdpcmxzXCIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJIYWNrZXJzXCIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJUaGUgR3JleVwiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiU3Vuc2hpbmVcIiB9LFxuICAgICAgICB7IHRpdGxlOiBcIkV4IE1hY2hpbmFcIiB9XG4gICAgICBdLFxuICAgICAgb2xkTW92aWVzOiBbXG4gICAgICAgIHsgdGl0bGU6IFwiTWVhbiBHaXJsc1wiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiSGFja2Vyc1wiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiVGhlIEdyZXlcIiB9LFxuICAgICAgICB7IHRpdGxlOiBcIlN1bnNoaW5lXCIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJFeCBNYWNoaW5hXCIgfVxuICAgICAgXSxcbiAgICAgIGlucHV0OiBcIlwiXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlSW5wdXQgPSB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0OiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBzZWFyY2goKSB7XG4gICAgbGV0IGZpbHRlcmVkID0gdGhpcy5zdGF0ZS5vbGRNb3ZpZXMubWFwKG1vdmllID0+IHtcbiAgICAgIGlmIChtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuaW5wdXQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgcmV0dXJuIG1vdmllO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkKTtcbiAgICBsZXQgY2xlYW5lZCA9IFtdO1xuICAgIGZpbHRlcmVkLmZvckVhY2gobW92aWUgPT4ge1xuICAgICAgaWYgKG1vdmllICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjbGVhbmVkLnB1c2gobW92aWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb3ZpZXM6IGNsZWFuZWQgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgICAgPFNlYXJjaCBoYW5kbGVJbnB1dD17dGhpcy5oYW5kbGVJbnB1dH0gc2VhcmNoPXt0aGlzLnNlYXJjaH0gLz5cbiAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuIl19