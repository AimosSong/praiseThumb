webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var f = new _index2.default();
xtag.register('x-praise', {
  content: '<div class="wrap" id="thumb">' + '<span class="thumb"></span>' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="hide" id="animation">+1</div>' + '</div>',

  methods: {
    praise: function praise() {
      var _this = this;
      f.clickAddNum();
      var animation = _this.querySelector("#animation");
      animation.className = "hide";
      animation.classList.add("num");
      setTimeout(function () {
        animation.classList.remove("num");
      }, 800);
    },
    throttle: function throttle(fn, wait) {
      var timer;
      return function () {
        if (!timer) {
          timer = setTimeout(function () {
            return timer = null;
          }, wait);
        }
      };
    }
  },
  events: {
    click: function click(e) {
      var _this2 = this;

      var _this = this;
      if (e.target.id == "thumb") {
        var t = '';
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(function () {
          _this2.praise();
        }, 500);
      }
    }
  }
});

/***/ })

},[4]);