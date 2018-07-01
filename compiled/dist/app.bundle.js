'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = "./app.js");
  /******/
})(
/************************************************************************/
/******/{

  /***/"./app.js":
  /*!****************!*\
    !*** ./app.js ***!
    \****************/
  /*! no static exports found */
  /***/function appJs(module, exports) {

    eval("alert(\"Hello Nick!\");\n\n\n//# sourceURL=webpack:///./app.js?");

    /***/
  }

  /******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Rpc3QvYXBwLmJ1bmRsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsImdldERlZmF1bHQiLCJnZXRNb2R1bGVFeHBvcnRzIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZXZhbCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFFBQVMsQ0FBQyxVQUFTQSxPQUFULEVBQWtCO0FBQUU7QUFDOUIsVUFENEIsQ0FDbEI7QUFDVixVQUFVLElBQUlDLG1CQUFtQixFQUF2QjtBQUNWO0FBQ0EsVUFKNEIsQ0FJbEI7QUFDVixVQUFVLFNBQVNDLG1CQUFULENBQTZCQyxRQUE3QixFQUF1QztBQUNqRDtBQUNBLFlBRmlELENBRXRDO0FBQ1gsWUFBVyxJQUFHRixpQkFBaUJFLFFBQWpCLENBQUgsRUFBK0I7QUFDMUMsY0FBWSxPQUFPRixpQkFBaUJFLFFBQWpCLEVBQTJCQyxPQUFsQztBQUNaO0FBQVk7QUFDWixZQU5pRCxDQU10QztBQUNYLFlBQVcsSUFBSUMsU0FBU0osaUJBQWlCRSxRQUFqQixJQUE2QjtBQUNyRCxjQUFZRyxHQUFHSCxRQURzQztBQUVyRCxjQUFZSSxHQUFHLEtBRnNDO0FBR3JELGNBQVlILFNBQVM7QUFDckIsY0FKcUQsRUFBMUM7QUFLWDtBQUNBLFlBYmlELENBYXRDO0FBQ1gsWUFBV0osUUFBUUcsUUFBUixFQUFrQkssSUFBbEIs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RWxCO0FBQ1YsVUFBVXhCLG9CQUFvQjRCLENBQXBCLEdBQXdCLFVBQVN6QixNQUFULEVBQWlCO0FBQ25ELFlBQVcsSUFBSVEsU0FBU1IsVUFBVUEsT0FBT29CLFVBQWpCO0FBQ3hCLFlBQVksU0FBU00sVUFBVCxHQUFzQjtBQUFFLGFBQU8xQixPQUFPLFNBQVAsQ0FBUDtBQUEyQixLQUR2QztBQUV4QixZQUFZLFNBQVMyQixnQkFBVCxHQUE0QjtBQUFFLGFBQU8zQixNQUFQO0FBQWdCLEtBRi9DO0FBR1gsWUFBV0gsb0JBQW9CUyxDQUFwQixDQUFzQkUsTUFBdEIsRUFBOEIsR0FBOUIsRUFBbUNBLE1BQW5DO0FBQ1gsWUFBVyxPQUFPQSxNQUFQO0FBQ1g7QUFBVyxHQU5EO0FBT1Y7QUFDQSxVQTNFNEIsQ0EyRWxCO0FBQ1YsVUFBVVgsb0JBQW9CWSxDQUFwQixHQUF3QixVQUFTbUIsTUFBVCxFQUFpQkMsUUFBakIsRUFBMkI7QUFBRSxXQUFPbkIsT0FBT29CLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDNUIsSUFBaEMsQ0FBcUN5QixNQUFyQyxFQUE2Q0MsUUFBN0MsQ0FBUDtBQUFnRSxHQUFySDtBQUNWO0FBQ0EsVUE5RTRCLENBOEVsQjtBQUNWLFVBQVVoQyxvQkFBb0JtQyxDQUFwQixHQUF3QixFQUF4QjtBQUNWO0FBQ0E7QUFDQSxVQWxGNEIsQ0FrRmxCO0FBQ1YsVUFBVSxPQUFPbkMsb0JBQW9CQSxvQkFBb0JvQyxDQUFwQixHQUF3QixVQUE1QyxDQUFQO0FBQ1Y7QUFBVSxDQXBGRDtBQXFGVDtBQUNBLFFBQVU7O0FBRVYsT0FBTTtBQUNOOzs7QUFHQTtBQUNBLE9BQU8sZUFBU2pDLE1BQVQsRUFBaUJELE9BQWpCLEVBQTBCOztBQUVqQ21DLFNBQUssaUVBQUw7O0FBRUE7QUFBTzs7QUFFUCxVQWJVLEVBdEZEIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAuanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9hcHAuanNcIjpcbi8qISoqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9hcHAuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImFsZXJ0KFxcXCJIZWxsbyBOaWNrIVxcXCIpO1xcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovLy8uL2FwcC5qcz9cIik7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pOyJdfQ==