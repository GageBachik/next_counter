(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/shared/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}

function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  var suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/loadable-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/loadable-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = _react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/loadable.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/loadable.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/shared/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    webpack: null,
    modules: null,
    suspense: false
  }, options);

  if (opts.suspense) {
    opts.lazy = _react["default"].lazy(opts.loader);
  }

  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function' && "function" === 'function' && !opts.suspense) {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  function LoadableImpl(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription).useSubscription(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return _react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return _react["default"].createElement(resolve(state.loaded), props);
      } else {
        return null;
      }
    }, [props, state]);
  }

  _s(LoadableImpl, "JtITP7ezdiMOXETwxX2mQsR5YT8=", true);

  function LazyImpl(props, ref) {
    return _react["default"].createElement(opts.lazy, _objectSpread(_objectSpread({}, props), {}, {
      ref: ref
    }));
  }

  var LoadableComponent = opts.suspense ? LazyImpl : LoadableImpl;

  LoadableComponent.preload = function () {
    return !opts.suspense && init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return _react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts1 = this._opts;

      if (res.loading) {
        if (typeof opts1.delay === 'number') {
          if (opts1.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts1.delay);
          }
        }

        if (typeof opts1.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts1.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts1) {
  return createLoadableComponent(load, opts1);
}

_c = Loadable;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Loadable");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/gagebachik/projects/next_counter/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var WalletConnectionProvider = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "pages_components_WalletConnectionProvider_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./components/WalletConnectionProvider */ "./pages/components/WalletConnectionProvider.tsx"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./components/WalletConnectionProvider */ "./pages/components/WalletConnectionProvider.tsx")];
    },
    modules: ["_app.tsx -> " + "./components/WalletConnectionProvider"]
  }
});
_c2 = WalletConnectionProvider;

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(WalletConnectionProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps }
// }


_c3 = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c, _c2, _c3;

$RefreshReg$(_c, "WalletConnectionProvider$dynamic");
$RefreshReg$(_c2, "WalletConnectionProvider");
$RefreshReg$(_c3, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app! ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app */ "./pages/_app.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css",
      function () {
        content = __webpack_require__(/*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target];
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v2.2.14 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n}\n\n:root {\n\tbackground-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n\tcolor: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\nhtml {\n\t-webkit-tap-highlight-color: transparent;\n}\n\n:root {\n\t--p: 259 94.4% 51.2%;\n\t--pf: 259 94.3% 41%;\n\t--pc: 0 0% 100%;\n\t--s: 314 100% 47.1%;\n\t--sf: 314 100% 37.1%;\n\t--sc: 0 0% 100%;\n\t--a: 174 60% 51%;\n\t--af: 174 59.8% 41%;\n\t--ac: 0 0% 100%;\n\t--n: 219 14.1% 27.8%;\n\t--nf: 222 13.4% 19%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 20% 98%;\n\t--b3: 216 12.2% 83.9%;\n\t--bc: 215 27.9% 16.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 0.5rem;\n\t--rounded-badge: 1.9rem;\n\t--animation-btn: 0.25s;\n\t--animation-input: .2s;\n\t--padding-card: 2rem;\n\t--btn-text-case: uppercase;\n\t--btn-focus-scale: 0.95;\n\t--navbar-padding: .5rem;\n\t--border-btn: 1px;\n\t--tab-border: 1px;\n\t--tab-radius: 0.5rem;\n\t--tab-spacer: 0.5rem;\n\t--focus-ring: 2px;\n\t--focus-ring-offset: 2px;\n\t--glass-opacity: 30%;\n\t--glass-border-opacity: 10%;\n\t--glass-reflex-degree: 100deg;\n\t--glass-reflex-opacity: 10%;\n\t--glass-blur: 40px;\n\t--glass-text-shadow-opacity: 5%;\n}\n\n@media (prefers-color-scheme: dark) {\n\n\t:root {\n\t\t--p: 259 94% 61%;\n\t\t--pf: 259 94.4% 51.2%;\n\t\t--pc: 0 0% 100%;\n\t\t--s: 314 100% 47.1%;\n\t\t--sf: 314 100% 37.1%;\n\t\t--sc: 0 0% 100%;\n\t\t--a: 174 60% 51%;\n\t\t--af: 174 59.8% 41%;\n\t\t--ac: 0 0% 100%;\n\t\t--n: 222 13.4% 19%;\n\t\t--nf: 223 13.7% 10%;\n\t\t--nc: 0 0% 100%;\n\t\t--b1: 219 14.1% 27.8%;\n\t\t--b2: 222 13.4% 19%;\n\t\t--b3: 223 13.7% 10%;\n\t\t--bc: 228 14.3% 93.1%;\n\t\t--in: 202 100% 70%;\n\t\t--su: 89 61.6% 52%;\n\t\t--wa: 54 68.8% 63.5%;\n\t\t--er: 0 100% 71.8%;\n\t}\n}\n\n[data-theme=light] {\n\t--p: 259 94.4% 51.2%;\n\t--pf: 259 94.3% 41%;\n\t--pc: 0 0% 100%;\n\t--s: 314 100% 47.1%;\n\t--sf: 314 100% 37.1%;\n\t--sc: 0 0% 100%;\n\t--a: 174 60% 51%;\n\t--af: 174 59.8% 41%;\n\t--ac: 0 0% 100%;\n\t--n: 219 14.1% 27.8%;\n\t--nf: 222 13.4% 19%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 20% 98%;\n\t--b3: 216 12.2% 83.9%;\n\t--bc: 215 27.9% 16.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 0.5rem;\n\t--rounded-badge: 1.9rem;\n\t--animation-btn: 0.25s;\n\t--animation-input: .2s;\n\t--padding-card: 2rem;\n\t--btn-text-case: uppercase;\n\t--btn-focus-scale: 0.95;\n\t--navbar-padding: .5rem;\n\t--border-btn: 1px;\n\t--tab-border: 1px;\n\t--tab-radius: 0.5rem;\n\t--tab-spacer: 0.5rem;\n\t--focus-ring: 2px;\n\t--focus-ring-offset: 2px;\n\t--glass-opacity: 30%;\n\t--glass-border-opacity: 10%;\n\t--glass-reflex-degree: 100deg;\n\t--glass-reflex-opacity: 10%;\n\t--glass-blur: 40px;\n\t--glass-text-shadow-opacity: 5%;\n}\n\n[data-theme=dark] {\n\t--p: 259 94% 61%;\n\t--pf: 259 94.4% 51.2%;\n\t--pc: 0 0% 100%;\n\t--s: 314 100% 47.1%;\n\t--sf: 314 100% 37.1%;\n\t--sc: 0 0% 100%;\n\t--a: 174 60% 51%;\n\t--af: 174 59.8% 41%;\n\t--ac: 0 0% 100%;\n\t--n: 222 13.4% 19%;\n\t--nf: 223 13.7% 10%;\n\t--nc: 0 0% 100%;\n\t--b1: 219 14.1% 27.8%;\n\t--b2: 222 13.4% 19%;\n\t--b3: 223 13.7% 10%;\n\t--bc: 228 14.3% 93.1%;\n\t--in: 202 100% 70%;\n\t--su: 89 61.6% 52%;\n\t--wa: 54 68.8% 63.5%;\n\t--er: 0 100% 71.8%;\n}\n\n[data-theme=cupcake] {\n\t--p: 183 47.4% 59%;\n\t--pf: 183 47.2% 49%;\n\t--pc: 0 0% 100%;\n\t--s: 338 71.4% 78%;\n\t--sf: 338 71.8% 68%;\n\t--sc: 0 0% 100%;\n\t--a: 39 84.1% 58%;\n\t--af: 39 83.7% 48%;\n\t--ac: 0 0% 100%;\n\t--n: 280 46.5% 13.9%;\n\t--nf: 279 46.4% 11%;\n\t--nc: 0 0% 100%;\n\t--b1: 24 33.3% 97.1%;\n\t--b2: 27 22% 92%;\n\t--b3: 22 14.3% 89%;\n\t--bc: 280 46.5% 13.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 1.9rem;\n\t--rounded-badge: 1.9rem;\n\t--tab-border: 2px;\n}\n\n[data-theme=bumblebee] {\n\t--p: 50 94.4% 58%;\n\t--pf: 50 94.3% 47.8%;\n\t--pc: 240 33.3% 14.1%;\n\t--s: 41 74.2% 52.9%;\n\t--sf: 41 73.6% 43.1%;\n\t--sc: 0 0% 100%;\n\t--a: 240 33.3% 14.1%;\n\t--af: 240 33.3% 10%;\n\t--ac: 0 0% 100%;\n\t--n: 240 33.3% 14.1%;\n\t--nf: 240 33.3% 10%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 100%;\n\t--b2: 0 0% 96.1%;\n\t--b3: 0 0% 89%;\n\t--bc: 0 0% 0%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n}\n\n[data-theme=emerald] {\n\t--p: 141 50% 60%;\n\t--pf: 141 49.8% 50%;\n\t--pc: 210 20% 98%;\n\t--s: 219 96.1% 60%;\n\t--sf: 219 96.1% 50%;\n\t--sc: 210 20% 98%;\n\t--a: 10 81.2% 56.1%;\n\t--af: 10 81.2% 45.9%;\n\t--ac: 210 20% 98%;\n\t--n: 219 20.3% 25.1%;\n\t--nf: 220 19.5% 15.1%;\n\t--nc: 210 20% 98%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 20% 98%;\n\t--b3: 0 0% 94.9%;\n\t--bc: 219 20.3% 25.1%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--animation-btn: 0;\n\t--animation-input: 0;\n\t--btn-focus-scale: 1;\n}\n\n[data-theme=corporate] {\n\t--p: 229 95.7% 63.9%;\n\t--pf: 229 95.7% 53.9%;\n\t--pc: 233 27.3% 12.9%;\n\t--s: 215 26.3% 59%;\n\t--sf: 214 26.1% 48.8%;\n\t--sc: 233 27.3% 12.9%;\n\t--a: 154 49% 60%;\n\t--af: 154 49% 50%;\n\t--ac: 233 27.3% 12.9%;\n\t--n: 233 27.3% 12.9%;\n\t--nf: 240 25% 3.1%;\n\t--nc: 210 38.5% 94.9%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 60% 98%;\n\t--b3: 210 38.5% 94.9%;\n\t--bc: 233 27.3% 12.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--animation-btn: 0;\n\t--animation-input: 0;\n\t--btn-focus-scale: 1;\n}\n\n[data-theme=synthwave] {\n\t--p: 321 69.6% 69%;\n\t--pf: 321 70.3% 59%;\n\t--pc: 257 63.2% 17.1%;\n\t--sf: 197 87.4% 75.1%;\n\t--s: 197 86.6% 64.9%;\n\t--sc: 257 63.2% 17.1%;\n\t--af: 48 89.3% 67.1%;\n\t--a: 48 89% 57.1%;\n\t--ac: 257 63.2% 17.1%;\n\t--n: 253 60.8% 19%;\n\t--nf: 257 64.3% 11%;\n\t--nc: 260 60% 98%;\n\t--b1: 254 59.1% 25.9%;\n\t--b2: 253 60.8% 19%;\n\t--b3: 257 64.3% 11%;\n\t--bc: 260 60% 98%;\n\t--in: 199 87% 63.9%;\n\t--su: 168 74.2% 68%;\n\t--wa: 48 89% 57.1%;\n\t--er: 352 73.6% 56.9%;\n}\n\n[data-theme=retro] {\n\tfont-family: uisecondaryerif,Georgia,Cambria,Times New Roman,Times,serif;\n\t--p: 3 73.8% 76.1%;\n\t--pf: 3 73.6% 65.9%;\n\t--pc: 345 5.3% 14.9%;\n\t--s: 145 27.3% 72%;\n\t--sf: 145 26.8% 62%;\n\t--sc: 345 5.3% 14.9%;\n\t--a: 49 67.2% 76.1%;\n\t--af: 49 66.7% 65.9%;\n\t--ac: 345 5.3% 14.9%;\n\t--n: 42 16.8% 42%;\n\t--nf: 41 13.1% 23.9%;\n\t--nc: 45 47.1% 80%;\n\t--b1: 45 47.1% 80%;\n\t--b2: 45 37.1% 72%;\n\t--b3: 42 36% 65.1%;\n\t--bc: 345 5.3% 14.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 0.4rem;\n\t--rounded-btn: 0.4rem;\n\t--rounded-badge: 0.4rem;\n}\n\n[data-theme=cyberpunk] {\n\tfont-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n\t--p: 345 100% 72.9%;\n\t--pf: 344 100% 67.1%;\n\t--pc: 0 0% 0%;\n\t--s: 195 80.4% 70%;\n\t--sf: 194 65.8% 61%;\n\t--sc: 0 0% 0%;\n\t--a: 276 74.3% 71%;\n\t--af: 276 75.7% 62.9%;\n\t--ac: 0 0% 0%;\n\t--n: 57 100% 12.9%;\n\t--nf: 60 80% 2%;\n\t--nc: 56 100% 50%;\n\t--b1: 56 100% 50%;\n\t--b2: 56 100% 42.9%;\n\t--b3: 56 100% 36.1%;\n\t--bc: 0 0% 0%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 0;\n\t--rounded-btn: 0;\n\t--rounded-badge: 0;\n\t--tab-radius: 0;\n}\n\n[data-theme=valentine] {\n\t--p: 353 73.8% 67.1%;\n\t--pf: 353 73.6% 56.9%;\n\t--pc: 0 0% 100%;\n\t--s: 254 86.4% 76.9%;\n\t--sf: 254 86.9% 67.1%;\n\t--sc: 0 0% 100%;\n\t--a: 181 55.6% 70%;\n\t--af: 181 54.9% 60%;\n\t--ac: 0 0% 100%;\n\t--n: 336 42.9% 48%;\n\t--nf: 340 40.2% 38%;\n\t--nc: 318 46.4% 89%;\n\t--b1: 318 46.4% 89%;\n\t--b2: 315 58.9% 79%;\n\t--b3: 316 62.3% 72.9%;\n\t--bc: 344 38.5% 28%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 1.9rem;\n\t--rounded-badge: 1.9rem;\n}\n\n[data-theme=halloween] {\n\t--p: 32 89.3% 52.2%;\n\t--pf: 32 88.8% 42%;\n\t--pc: 180 7.3% 8%;\n\t--s: 271 45.8% 42%;\n\t--sf: 271 46% 32%;\n\t--sc: 0 0% 100%;\n\t--a: 91 100% 32.9%;\n\t--af: 91 100% 22.9%;\n\t--ac: 0 0% 100%;\n\t--n: 180 3.6% 11%;\n\t--nf: 180 7.3% 8%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 12.9%;\n\t--b2: 180 3.6% 11%;\n\t--b3: 180 7.3% 8%;\n\t--bc: 0 0% 100%;\n\t--in: 202 100% 70%;\n\t--su: 89 61.6% 52%;\n\t--wa: 54 68.8% 63.5%;\n\t--er: 0 100% 71.8%;\n}\n\n[data-theme=garden] {\n\t--p: 139 16% 42.9%;\n\t--pf: 137 14.8% 33.1%;\n\t--pc: 0 0% 100%;\n\t--s: 97 37.1% 93.1%;\n\t--sf: 98 36.3% 82.2%;\n\t--sc: 96 32.5% 15.1%;\n\t--a: 0 67.7% 93.9%;\n\t--af: 0 71.1% 85.1%;\n\t--ac: 0 22% 16.1%;\n\t--n: 0 3.9% 35.1%;\n\t--nf: 0 3.7% 15.9%;\n\t--nc: 0 4.3% 91%;\n\t--b1: 0 4.3% 91%;\n\t--b2: 0 5.2% 81%;\n\t--b3: 0 5.4% 71%;\n\t--bc: 0 3.2% 6.1%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 0.5rem;\n\t--rounded-badge: 1.9rem;\n}\n\n[data-theme=forest] {\n\t--p: 141 72% 42%;\n\t--pf: 141 71.8% 32%;\n\t--pc: 0 0% 100%;\n\t--s: 141 74.7% 48%;\n\t--sf: 141 75.3% 38%;\n\t--sc: 0 0% 100%;\n\t--a: 35 69% 52%;\n\t--af: 35 69.2% 42%;\n\t--ac: 0 0% 100%;\n\t--n: 0 9.7% 6.1%;\n\t--nf: 0 20% 2%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 12.2% 8%;\n\t--b2: 0 9.7% 6.1%;\n\t--b3: 0 20% 2%;\n\t--bc: 0 0% 100%;\n\t--rounded-btn: 1.9rem;\n\t--in: 202 100% 70%;\n\t--su: 89 61.6% 52%;\n\t--wa: 54 68.8% 63.5%;\n\t--er: 0 100% 71.8%;\n}\n\n[data-theme=aqua] {\n\t--p: 189 100% 62.9%;\n\t--pf: 189 100% 52.9%;\n\t--pc: 0 0% 0%;\n\t--s: 274 30.9% 56.9%;\n\t--sf: 274 30.8% 47.1%;\n\t--sc: 0 0% 100%;\n\t--a: 47 100% 80%;\n\t--af: 47 100% 70%;\n\t--ac: 0 0% 100%;\n\t--n: 231 77.4% 32.9%;\n\t--nf: 231 67.6% 29%;\n\t--nc: 0 0% 100%;\n\t--b1: 231 88.7% 38%;\n\t--b2: 231 77.4% 32.9%;\n\t--b3: 231 67.6% 29%;\n\t--bc: 0 0% 100%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n}\n\n[data-theme=lofi] {\n\t--p: 0 0% 50.2%;\n\t--pf: 0 0% 45.1%;\n\t--pc: 240 4% 95.1%;\n\t--s: 0 0% 30.2%;\n\t--sf: 0 0% 25.1%;\n\t--sc: 240 4% 95.1%;\n\t--a: 0 0% 10.2%;\n\t--af: 0 0% 5.1%;\n\t--ac: 240 4% 95.1%;\n\t--n: 240 4% 95.1%;\n\t--nf: 240 5.9% 90%;\n\t--nc: 0 0% 30.2%;\n\t--b1: 0 0% 100%;\n\t--b2: 0 0% 100%;\n\t--b3: 0 0% 100%;\n\t--bc: 0 0% 49%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--border-color: #e6e6e6;\n\t--animation-btn: 0;\n\t--animation-input: 0;\n\t--btn-focus-scale: 1;\n\t--rounded-box: 0rem;\n\t--rounded-btn: 0rem;\n\t--rounded-badge: 0rem;\n\t--tab-radius: 0rem;\n}\n\n[data-theme=lofi] * {\n\tborder-color: var(--border-color) !important;\n\t--tw-border-opacity: 1 !important;\n\t--tw-text-opacity: 1 !important;\n\t--tw-shadow: 0 0 0 1px var(--border-color) !important;\n}\n\n[data-theme=pastel] {\n\t--p: 284 21.6% 80%;\n\t--pf: 282 21.6% 70%;\n\t--pc: 0 0% 0%;\n\t--s: 352 70.5% 88%;\n\t--sf: 352 69.6% 78%;\n\t--sc: 0 0% 100%;\n\t--a: 158 54.6% 81%;\n\t--af: 158 55.4% 71%;\n\t--ac: 0 0% 100%;\n\t--n: 199 43.7% 61%;\n\t--nf: 199 44% 51%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 20% 98%;\n\t--b3: 216 12.2% 83.9%;\n\t--bc: 206 3.1% 55.1%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 1.9rem;\n\t--rounded-badge: 1.9rem;\n}\n\n[data-theme=fantasy] {\n\t--p: 296 82.8% 25.1%;\n\t--pf: 296 81.8% 15.1%;\n\t--pc: 0 0% 100%;\n\t--s: 200 100% 37.1%;\n\t--sf: 200 100% 27.1%;\n\t--sc: 0 0% 100%;\n\t--a: 31 94.4% 51.2%;\n\t--af: 31 94.3% 41%;\n\t--ac: 0 0% 100%;\n\t--n: 215 27.9% 16.9%;\n\t--nf: 221 39.3% 11%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 20% 98%;\n\t--b3: 216 12.2% 83.9%;\n\t--bc: 215 27.9% 16.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n}\n\n[data-theme=wireframe] {\n\tfont-family: Chalkboard,comic sans ms,\"sanssecondaryerif\";\n\t--p: 0 0% 72.2%;\n\t--pf: 0 0% 72.2%;\n\t--pc: 0 0% 0%;\n\t--s: 0 0% 72.2%;\n\t--sf: 0 0% 72.2%;\n\t--sc: 0 0% 0%;\n\t--a: 0 0% 72.2%;\n\t--af: 0 0% 72.2%;\n\t--ac: 0 0% 0%;\n\t--b1: 0 0% 100%;\n\t--b2: 0 0% 100%;\n\t--b3: 0 0% 100%;\n\t--bc: 0 0% 0%;\n\t--n: 0 0% 92.2%;\n\t--nf: 0 0% 92.2%;\n\t--nc: 0 0% 0%;\n\t--in: 240 100% 50%;\n\t--su: 120 100% 25.1%;\n\t--wa: 60 30.2% 50%;\n\t--er: 0 100% 50%;\n\t--border-color: #000000;\n\t--rounded-box: 0.2rem;\n\t--rounded-btn: 0.2rem;\n\t--rounded-badge: 0.2rem;\n\t--tab-radius: 0.2rem;\n}\n\n[data-theme=wireframe] * {\n\tborder-color: var(--border-color) !important;\n\t--tw-border-opacity: 1 !important;\n\t--tw-text-opacity: 1 !important;\n\t--tw-shadow: 0 0 0 1px var(--border-color) !important;\n}\n\n[data-theme=black] {\n\t--p: 0 0% 100%;\n\t--pf: 0 0% 100%;\n\t--pc: 0 0% 0%;\n\t--s: 0 0% 100%;\n\t--sf: 0 0% 100%;\n\t--sc: 0 0% 0%;\n\t--a: 0 0% 100%;\n\t--af: 0 0% 100%;\n\t--ac: 0 0% 0%;\n\t--b1: 0 0% 0%;\n\t--b2: 0 0% 20%;\n\t--b3: 0 0% 30.2%;\n\t--bc: 0 0% 100%;\n\t--n: 0 0% 20%;\n\t--nf: 0 0% 30.2%;\n\t--nc: 0 0% 100%;\n\t--in: 240 100% 50%;\n\t--su: 120 100% 25.1%;\n\t--wa: 60 100% 50%;\n\t--er: 0 100% 50%;\n\t--rounded-box: 0;\n\t--rounded-btn: 0;\n\t--rounded-badge: 0;\n\t--tab-radius: 0;\n\t--animation-btn: 0;\n\t--animation-input: 0;\n\t--btn-focus-scale: 1;\n\t--btn-text-case: lowercase;\n}\n\n[data-theme=luxury] {\n\t--p: 0 0% 100%;\n\t--pf: 0 0% 90.2%;\n\t--pc: 0 0% 0%;\n\t--s: 218 54.3% 18%;\n\t--sf: 219 56.1% 8%;\n\t--sc: 0 0% 100%;\n\t--a: 319 21.8% 26.1%;\n\t--af: 320 22% 16.1%;\n\t--ac: 0 0% 100%;\n\t--n: 270 4.3% 9%;\n\t--nf: 270 2.2% 18%;\n\t--nc: 37 67.3% 58%;\n\t--b1: 240 10% 3.9%;\n\t--b2: 270 4.3% 9%;\n\t--b3: 270 2.2% 18%;\n\t--bc: 37 67.3% 58%;\n\t--in: 202 100% 70%;\n\t--su: 89 61.6% 52%;\n\t--wa: 54 68.8% 63.5%;\n\t--er: 0 100% 71.8%;\n}\n\n[data-theme=dracula] {\n\t--p: 330 100% 85.1%;\n\t--pf: 330 100% 75.1%;\n\t--pc: 233 12.1% 12.9%;\n\t--s: 115 100% 85.1%;\n\t--sf: 115 100% 75.1%;\n\t--sc: 233 12.1% 12.9%;\n\t--a: 60 100% 85.1%;\n\t--af: 60 100% 75.1%;\n\t--ac: 233 12.1% 12.9%;\n\t--n: 245 14.3% 15.1%;\n\t--nf: 233 12.1% 12.9%;\n\t--nc: 251 100% 90%;\n\t--b1: 244 13% 21.2%;\n\t--b2: 245 14.3% 15.1%;\n\t--b3: 233 12.1% 12.9%;\n\t--bc: 251 100% 90%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n}\n\n.alert>:not([hidden])~:not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(0.5rem*(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(0.5rem*var(--tw-space-y-reverse));\n}\n\n.alert {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-between;\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b2)/var(--tw-bg-opacity,1));\n\tpadding: 1rem;\n\tborder-radius: var(--rounded-box,1rem);\n}\n\n@media (min-width:768px) {\n\n\t.alert>:not([hidden])~:not([hidden]) {\n\t\t--tw-space-y-reverse: 0;\n\t\tmargin-top: calc(0px*(1 - var(--tw-space-y-reverse)));\n\t\tmargin-bottom: calc(0px*var(--tw-space-y-reverse));\n\t}\n\n\t.alert {\n\t\tflex-direction: row;\n\t}\n}\n\n.alert>* {\n\tdisplay: flex;\n}\n\n.avatar.placeholder>div {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.btn {\n\tborder-color: transparent;\n\tborder-color: hsla(var(--n)/var(--tw-border-opacity,1));\n\tcursor: pointer;\n\tdisplay: inline-flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-shrink: 0;\n\ttext-align: center;\n\t-webkit-user-select: none;\n\tuser-select: none;\n\ttransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\n\ttransition-duration: .15s;\n\ttransition-duration: .2s;\n\ttransition-timing-function: cubic-bezier(.4,0,.2,1);\n\tborder-radius: var(--rounded-btn,.5rem);\n\theight: 3rem;\n\tfont-size: .875rem;\n\tline-height: 1.25rem;\n\tline-height: 2;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n\tmin-height: 3rem;\n\tfont-weight: 600;\n\ttext-transform: uppercase;\n\ttext-transform: var(--btn-text-case,uppercase);\n\tborder-width: var(--border-btn,1px);\n\tanimation: button-pop var(--animation-btn,.25s) ease-out;\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--n)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--nc)/var(--tw-text-opacity,1));\n}\n\n.btn:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.btn-disabled,.btn[disabled] {\n\tpointer-events: none;\n\t--tw-bg-opacity: 1;\n\t--tw-bg-opacity: 0.2;\n\tbackground-color: hsla(var(--n)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 0;\n\t--tw-text-opacity: 1;\n\t--tw-text-opacity: 0.2;\n\tcolor: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.btn.loading,.btn.loading:hover {\n\tpointer-events: none;\n}\n\n.btn.loading:before {\n\tborder-radius: 9999px;\n\tborder-width: 2px;\n\theight: 1rem;\n\tmargin-right: .5rem;\n\twidth: 1rem;\n\tanimation: spin 2s linear infinite;\n\tcontent: \"\";\n\tborder-color: transparent currentColor currentColor transparent;\n}\n\n@media (prefers-reduced-motion:reduce) {\n\n\t.btn.loading:before {\n\t\tanimation: spin 10s linear infinite;\n\t}\n}\n\n@keyframes spin {\n\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\tto {\n\t\ttransform: rotate(1turn);\n\t}\n}\n\n.btn-group>input[type=radio].btn {\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.btn-group>input[type=radio].btn:before {\n\tcontent: attr(data-title);\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow: hidden;\n\tposition: relative;\n\tborder-radius: var(--rounded-box,1rem);\n}\n\n.card:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.card-body {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1 1 auto;\n\tpadding: var(--padding-card,2rem);\n}\n\n.card figure,.card figure>* {\n\twidth: 100%;\n}\n\n.card.image-full {\n\tdisplay: grid;\n}\n\n.card.image-full:before {\n\tposition: relative;\n\tcontent: \"\";\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--n)/var(--tw-bg-opacity,1));\n\topacity: .75;\n\tz-index: 10;\n\tborder-radius: var(--rounded-box,1rem);\n}\n\n.card.image-full:before,.card.image-full>* {\n\tgrid-column-start: 1;\n\tgrid-row-start: 1;\n}\n\n.card.image-full>figure img {\n\theight: 100%;\n\tobject-fit: cover;\n}\n\n.card.image-full>.card-body {\n\tposition: relative;\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--nc)/var(--tw-text-opacity,1));\n\tz-index: 20;\n}\n\n.form-control {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.label {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\t-webkit-user-select: none;\n\tuser-select: none;\n\tpadding: .5rem .25rem;\n}\n\n.hero {\n\tbackground-position: 50%;\n\tbackground-size: cover;\n\tdisplay: grid;\n\tplace-items: center;\n\twidth: 100%;\n}\n\n.hero>* {\n\tgrid-column-start: 1;\n\tgrid-row-start: 1;\n}\n\n.hero-content {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tz-index: 0;\n\tmax-width: 80rem;\n\tpadding: 1rem;\n\tgap: 1rem;\n}\n\n.input {\n\tflex-shrink: 1;\n\ttransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\n\ttransition-duration: .15s;\n\ttransition-duration: .2s;\n\ttransition-timing-function: cubic-bezier(.4,0,.2,1);\n\theight: 3rem;\n\tfont-size: .875rem;\n\tline-height: 1.25rem;\n\tline-height: 2;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\t--tw-border-opacity: 0;\n\tborder-color: hsla(var(--bc)/var(--tw-border-opacity,1));\n\tborder-width: 1px;\n\tborder-radius: var(--rounded-btn,.5rem);\n}\n\n.input:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\tbox-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsla(var(--bc)/.2);\n}\n\n.btn .badge {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n\tborder-color: transparent;\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.btn .badge-outline {\n\tbackground-color: transparent;\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--b2)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary .badge {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--p)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary .badge-outline {\n\tbackground-color: transparent;\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--p)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--p)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary:hover .badge {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--pc)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--pc)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--p)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary:hover .badge.outline {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--pf)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--pc)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn:active:focus,.btn:active:hover {\n\tanimation: none;\n\ttransform: scale(var(--btn-focus-scale,.95));\n}\n\n.btn-active,.btn:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--nf)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--nf)/var(--tw-border-opacity,1));\n}\n\n.btn:focus-visible {\n\tbox-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--nf));\n}\n\n.btn-primary {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--p)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn-primary.btn-active,.btn-primary:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--pf)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--pf)/var(--tw-border-opacity,1));\n}\n\n.btn-primary:focus-visible {\n\tbox-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p));\n}\n\n.btn.glass.btn-active,.btn.glass:hover {\n\t--glass-opacity: 25%;\n\t--glass-border-opacity: 15%;\n}\n\n.btn.glass:focus-visible {\n\tbox-shadow: 0 0 0 2px currentColor;\n}\n\n.btn-outline.btn-primary {\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--p)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--pf)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--pf)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn.loading.btn-circle:before,.btn.loading.btn-square:before {\n\tmargin-right: 0;\n}\n\n.btn.loading.btn-lg:before,.btn.loading.btn-xl:before {\n\theight: 1.25rem;\n\twidth: 1.25rem;\n}\n\n.btn.loading.btn-sm:before,.btn.loading.btn-xs:before {\n\theight: .75rem;\n\twidth: .75rem;\n}\n\n.btn-group>.btn-active,.btn-group>input[type=radio]:checked.btn {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--p)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn-group>.btn-active:focus-visible,.btn-group>input[type=radio]:checked.btn:focus-visible {\n\tbox-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p));\n}\n\n.btn-group>.btn:not(:first-child) {\n\tborder-top-left-radius: 0;\n\tborder-bottom-left-radius: 0;\n\tmargin-left: -1px;\n}\n\n.btn-group>.btn:not(:last-child) {\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n}\n\n@keyframes button-pop {\n\n\t0% {\n\t\ttransform: scale(var(--btn-focus-scale,.95));\n\t}\n\n\t40% {\n\t\ttransform: scale(1.02);\n\t}\n\n\tto {\n\t\ttransform: scale(1);\n\t}\n}\n\n.card:focus-visible {\n\tbox-shadow: 0 0 0 2px currentColor;\n}\n\n.card.bordered {\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n\tborder-width: 1px;\n}\n\n.card.compact .card-body {\n\tfont-size: .875rem;\n\tline-height: 1.25rem;\n\tpadding: 1rem;\n}\n\n.card.compact .card-title {\n\tmargin-bottom: .25rem;\n}\n\n@keyframes checkmark {\n\n\t0% {\n\t\tbackground-position-y: 5px;\n\t}\n\n\t50% {\n\t\tbackground-position-y: -2px;\n\t}\n\n\tto {\n\t\tbackground-position-y: 0;\n\t}\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-primary {\n\tbox-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p));\n}\n\n.label-text {\n\tfont-size: .875rem;\n\tline-height: 1.25rem;\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.label a:hover {\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.input-bordered {\n\t--tw-border-opacity: 0.2;\n}\n\n.input-disabled,.input[disabled] {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b2)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n\tcursor: not-allowed;\n\t--tw-text-opacity: 0.2;\n}\n\n.input-disabled::placeholder,.input[disabled]::placeholder {\n\t--tw-placeholder-opacity: 1;\n\t--tw-placeholder-opacity: 0.2;\n\tcolor: hsla(var(--bc)/var(--tw-placeholder-opacity,1));\n}\n\n.mockup-phone .display {\n\toverflow: hidden;\n\tborder-radius: 40px;\n\tmargin-top: -25px;\n}\n\n@keyframes radiomark {\n\n\t0% {\n\t\tbox-shadow: 0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset,var(--focus-shadow);\n\t}\n\n\t50% {\n\t\tbox-shadow: 0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset,var(--focus-shadow);\n\t}\n\n\tto {\n\t\tbox-shadow: 0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset,var(--focus-shadow);\n\t}\n}\n\n.alert-info {\n\t--tw-bg-opacity: 1;\n\t--tw-bg-opacity: 0.1;\n\tbackground-color: hsla(var(--in)/var(--tw-bg-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--in)/var(--tw-text-opacity,1));\n}\n\n.static {\n\tposition: static;\n}\n\n.fixed {\n\tposition: fixed;\n}\n\n.m-8 {\n\tmargin: 2rem;\n}\n\n.mx-2 {\n\tmargin-left: 0.5rem;\n\tmargin-right: 0.5rem;\n}\n\n.mb-5 {\n\tmargin-bottom: 1.25rem;\n}\n\n.mt-6 {\n\tmargin-top: 1.5rem;\n}\n\n.flex {\n\tdisplay: flex;\n}\n\n.h-6 {\n\theight: 1.5rem;\n}\n\n.min-h-screen {\n\tmin-height: 100vh;\n}\n\n.w-6 {\n\twidth: 1.5rem;\n}\n\n.w-full {\n\twidth: 100%;\n}\n\n.max-w-sm {\n\tmax-width: 24rem;\n}\n\n.flex-1 {\n\tflex: 1 1 0%;\n}\n\n.flex-shrink-0 {\n\tflex-shrink: 0;\n}\n\n.flex-col {\n\tflex-direction: column;\n}\n\n.justify-center {\n\tjustify-content: center;\n}\n\n.bg-base-200 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b2) / var(--tw-bg-opacity));\n}\n\n.bg-base-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b1) / var(--tw-bg-opacity));\n}\n\n.stroke-current {\n\tstroke: currentColor;\n}\n\n.text-center {\n\ttext-align: center;\n}\n\n.text-5xl {\n\tfont-size: 3rem;\n\tline-height: 1;\n}\n\n.font-bold {\n\tfont-weight: 700;\n}\n\n.shadow-2xl {\n\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n@media (min-width: 1024px) {\n\n\t.lg\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.lg\\:text-left {\n\t\ttext-align: left;\n\t}\n}\n", "",{"version":3,"sources":["webpack://node_modules/tailwindcss/tailwind.css","webpack://node_modules/tailwindcss/%3Cinput%20css%20yFtiyS%3E","webpack://node_modules/tailwindcss/%3Cinput%20css%20ZuVU0r%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVCLFFBQVEsT0FBTyxNQUFNLE9BQU8sTUFBTSxTQUFTLHVCQUF1QixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLFFBQVEsT0FBTyxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLE1BQU0sV0FBVyxPQUFPLE9BQU8sTUFBTSxLQUFLLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxNQUFNLE1BQU0sS0FBSyxhQUFhLGNBQWMsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFdBQVcsT0FBTyxLQUFLLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLE9BQU8sTUFBTSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxTQUFTLE1BQU0sS0FBSyx1QkFBdUIsdUJBQXVCLFFBQVEsT0FBTyxNQUFNLEtBQUssYUFBYSxhQUFhLE9BQU8sNEJBQTRCLE1BQU0sT0FBTyx1QkFBdUIscUJBQXFCLHVCQUF1Qix1QkFBdUIsUUFBUSxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sWUFBWSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLE9BQU8sVUFBVSxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLFVBQVUsYUFBYSxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssV0FBVyxZQUFZLE9BQU8sVUFBVSxNQUFNLFNBQVMsV0FBVyxZQUFZLFdBQVcsT0FBTyxTQUFTLE1BQU0sUUFBUSxhQUFhLFFBQVEsbUJBQW1CLE1BQU0sWUFBWSxxQkFBcUIsdUJBQXVCLFFBQVEsU0FBUyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLFFBQVEsS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sU0FBUyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sU0FBUyxPQUFPLEtBQUssV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLFNBQVMsTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLFNBQVMsTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLFNBQVMsTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLFNBQVMsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtGQUErRixlQUFlO0FBQzlHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSLGtEQUFrRDtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQ7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOzs7QUFHbEI7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwySEFBMkg7QUFDM0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvRUFBb0U7O0FBRXBFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxlQUFlO0FBQzFCLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFFUjtB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QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBLGtEQUFrRDtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGlDQUFpQzs7QUFFcEM7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkIsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUMxSGE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLHdKQUFpRTtBQUNuRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS1jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvbG9hZGFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzPzQ2ZTEiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm5vU1NSID0gbm9TU1I7XG5leHBvcnRzLmRlZmF1bHQgPSBkeW5hbWljO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfbG9hZGFibGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KVxuICAgIDtcbn1cbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZS5kZWZhdWx0O1xuICAgIGxldCBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgICAgIGxvYWRpbmc6ICh7IGVycm9yICwgaXNMb2FkaW5nICwgcGFzdERlbGF5ICB9KT0+e1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGVycm9yLm1lc3NhZ2UsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBlcnJvci5zdGFjaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKT0+ZHluYW1pY09wdGlvbnNcbiAgICAgICAgO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4uZHluYW1pY09wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCBzdXNwZW5zZU9wdGlvbnMgPSBsb2FkYWJsZU9wdGlvbnM7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUykge1xuICAgICAgICAvLyBFcnJvciBpZiByZWFjdCByb290IGlzIG5vdCBlbmFibGVkIGFuZCBgc3VzcGVuc2VgIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZVxuICAgICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9SRUFDVF9ST09UICYmIHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGRvYyB3aGVuIHRoaXMgZmVhdHVyZSBpcyBzdGFibGVcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdXNwZW5zZSBvcHRpb24gdXNhZ2UgaW4gbmV4dC9keW5hbWljLiBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtZHluYW1pYy1zdXNwZW5zZWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRhYmxlRm4oc3VzcGVuc2VPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICAgICAgICB9O1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgICAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxvYWRhYmxlQ29udGV4dCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBMb2FkYWJsZUNvbnRleHQgPSBfcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuZXhwb3J0cy5Mb2FkYWJsZUNvbnRleHQgPSBMb2FkYWJsZUNvbnRleHQ7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIExvYWRhYmxlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbnRleHQnO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2FkYWJsZS1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfdXNlU3Vic2NyaXB0aW9uID0gcmVxdWlyZShcInVzZS1zdWJzY3JpcHRpb25cIik7XG52YXIgX2xvYWRhYmxlQ29udGV4dCA9IHJlcXVpcmUoXCIuL2xvYWRhYmxlLWNvbnRleHRcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBBTExfSU5JVElBTElaRVJTID0gW107XG5jb25zdCBSRUFEWV9JTklUSUFMSVpFUlMgPSBbXTtcbmxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuZnVuY3Rpb24gbG9hZChsb2FkZXIpIHtcbiAgICBsZXQgcHJvbWlzZSA9IGxvYWRlcigpO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgbG9hZGVkOiBudWxsLFxuICAgICAgICBlcnJvcjogbnVsbFxuICAgIH07XG4gICAgc3RhdGUucHJvbWlzZSA9IHByb21pc2UudGhlbigobG9hZGVkKT0+e1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmxvYWRlZCA9IGxvYWRlZDtcbiAgICAgICAgcmV0dXJuIGxvYWRlZDtcbiAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmVycm9yID0gZXJyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gcmVzb2x2ZShvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqLmRlZmF1bHQgOiBvYmo7XG59XG5mdW5jdGlvbiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkRm4sIG9wdGlvbnMpIHtcbiAgICBsZXQgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBsb2FkZXI6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6IG51bGwsXG4gICAgICAgIGRlbGF5OiAyMDAsXG4gICAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICAgIHdlYnBhY2s6IG51bGwsXG4gICAgICAgIG1vZHVsZXM6IG51bGwsXG4gICAgICAgIHN1c3BlbnNlOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpO1xuICAgIGlmIChvcHRzLnN1c3BlbnNlKSB7XG4gICAgICAgIG9wdHMubGF6eSA9IF9yZWFjdC5kZWZhdWx0Lmxhenkob3B0cy5sb2FkZXIpO1xuICAgIH1cbiAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgY29uc3Qgc3ViID0gbmV3IExvYWRhYmxlU3Vic2NyaXB0aW9uKGxvYWRGbiwgb3B0cyk7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudFZhbHVlOiBzdWIuZ2V0Q3VycmVudFZhbHVlLmJpbmQoc3ViKSxcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmU6IHN1Yi5zdWJzY3JpYmUuYmluZChzdWIpLFxuICAgICAgICAgICAgICAgIHJldHJ5OiBzdWIucmV0cnkuYmluZChzdWIpLFxuICAgICAgICAgICAgICAgIHByb21pc2U6IHN1Yi5wcm9taXNlLmJpbmQoc3ViKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnByb21pc2UoKTtcbiAgICB9XG4gICAgLy8gU2VydmVyIG9ubHlcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgIW9wdHMuc3VzcGVuc2UpIHtcbiAgICAgICAgQUxMX0lOSVRJQUxJWkVSUy5wdXNoKGluaXQpO1xuICAgIH1cbiAgICAvLyBDbGllbnQgb25seVxuICAgIGlmICghaW5pdGlhbGl6ZWQgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG9wdHMud2VicGFjayA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmVxdWlyZS5yZXNvbHZlV2VhayA9PT0gJ2Z1bmN0aW9uJyAmJiAhb3B0cy5zdXNwZW5zZSkge1xuICAgICAgICBjb25zdCBtb2R1bGVJZHMgPSBvcHRzLndlYnBhY2soKTtcbiAgICAgICAgUkVBRFlfSU5JVElBTElaRVJTLnB1c2goKGlkcyk9PntcbiAgICAgICAgICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgbW9kdWxlSWRzKXtcbiAgICAgICAgICAgICAgICBpZiAoaWRzLmluZGV4T2YobW9kdWxlSWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIExvYWRhYmxlSW1wbChwcm9wcywgcmVmKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX2xvYWRhYmxlQ29udGV4dC5Mb2FkYWJsZUNvbnRleHQpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9ICgwLCBfdXNlU3Vic2NyaXB0aW9uKS51c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgX3JlYWN0LmRlZmF1bHQudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpPT4oe1xuICAgICAgICAgICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICwgW10pO1xuICAgICAgICBpZiAoY29udGV4dCAmJiBBcnJheS5pc0FycmF5KG9wdHMubW9kdWxlcykpIHtcbiAgICAgICAgICAgIG9wdHMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGVOYW1lKT0+e1xuICAgICAgICAgICAgICAgIGNvbnRleHQobW9kdWxlTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICAgICAgaWYgKHN0YXRlLmxvYWRpbmcgfHwgc3RhdGUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChvcHRzLmxvYWRpbmcsIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICBwYXN0RGVsYXk6IHN0YXRlLnBhc3REZWxheSxcbiAgICAgICAgICAgICAgICAgICAgdGltZWRPdXQ6IHN0YXRlLnRpbWVkT3V0LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogc3RhdGUuZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVzb2x2ZShzdGF0ZS5sb2FkZWQpLCBwcm9wcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgIHN0YXRlXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBMYXp5SW1wbChwcm9wcywgcmVmKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG9wdHMubGF6eSwge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICByZWZcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRhYmxlQ29tcG9uZW50ID0gb3B0cy5zdXNwZW5zZSA/IExhenlJbXBsIDogTG9hZGFibGVJbXBsO1xuICAgIExvYWRhYmxlQ29tcG9uZW50LnByZWxvYWQgPSAoKT0+IW9wdHMuc3VzcGVuc2UgJiYgaW5pdCgpXG4gICAgO1xuICAgIExvYWRhYmxlQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ0xvYWRhYmxlQ29tcG9uZW50JztcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihMb2FkYWJsZUNvbXBvbmVudCk7XG59XG5jbGFzcyBMb2FkYWJsZVN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3RydWN0b3IobG9hZEZuLCBvcHRzKXtcbiAgICAgICAgdGhpcy5fbG9hZEZuID0gbG9hZEZuO1xuICAgICAgICB0aGlzLl9vcHRzID0gb3B0cztcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLl9kZWxheSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLnJldHJ5KCk7XG4gICAgfVxuICAgIHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXMucHJvbWlzZTtcbiAgICB9XG4gICAgcmV0cnkoKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKTtcbiAgICAgICAgdGhpcy5fcmVzID0gdGhpcy5fbG9hZEZuKHRoaXMuX29wdHMubG9hZGVyKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XG4gICAgICAgICAgICBwYXN0RGVsYXk6IGZhbHNlLFxuICAgICAgICAgICAgdGltZWRPdXQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgX3JlczogcmVzICwgX29wdHM6IG9wdHMxICB9ID0gdGhpcztcbiAgICAgICAgaWYgKHJlcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMxLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRzMS5kZWxheSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZS5wYXN0RGVsYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlbGF5ID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXN0RGVsYXk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBvcHRzMS5kZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRzMS50aW1lb3V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lZE91dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBvcHRzMS50aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXMucHJvbWlzZS50aGVuKCgpPT57XG4gICAgICAgICAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XG4gICAgICAgIH0pLmNhdGNoKChfZXJyKT0+e1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlKHtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF91cGRhdGUocGFydGlhbCkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuX3N0YXRlLFxuICAgICAgICAgICAgZXJyb3I6IHRoaXMuX3Jlcy5lcnJvcixcbiAgICAgICAgICAgIGxvYWRlZDogdGhpcy5fcmVzLmxvYWRlZCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRoaXMuX3Jlcy5sb2FkaW5nLFxuICAgICAgICAgICAgLi4ucGFydGlhbFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spPT5jYWxsYmFjaygpXG4gICAgICAgICk7XG4gICAgfVxuICAgIF9jbGVhclRpbWVvdXRzKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgfVxuICAgIGdldEN1cnJlbnRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKT0+e1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gTG9hZGFibGUob3B0czEpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZCwgb3B0czEpO1xufVxuZnVuY3Rpb24gZmx1c2hJbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzLCBpZHMpIHtcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcbiAgICB3aGlsZShpbml0aWFsaXplcnMubGVuZ3RoKXtcbiAgICAgICAgbGV0IGluaXQgPSBpbml0aWFsaXplcnMucG9wKCk7XG4gICAgICAgIHByb21pc2VzLnB1c2goaW5pdChpZHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpPT57XG4gICAgICAgIGlmIChpbml0aWFsaXplcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmx1c2hJbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzLCBpZHMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5Mb2FkYWJsZS5wcmVsb2FkQWxsID0gKCk9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVJbml0aWFsaXplcnMsIHJlamVjdCk9PntcbiAgICAgICAgZmx1c2hJbml0aWFsaXplcnMoQUxMX0lOSVRJQUxJWkVSUykudGhlbihyZXNvbHZlSW5pdGlhbGl6ZXJzLCByZWplY3QpO1xuICAgIH0pO1xufTtcbkxvYWRhYmxlLnByZWxvYWRSZWFkeSA9IChpZHMgPSBbXSk9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcmVsb2FkKT0+e1xuICAgICAgICBjb25zdCByZXMgPSAoKT0+e1xuICAgICAgICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcmVsb2FkKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIGFsd2F5cyB3aWxsIHJlc29sdmUsIGVycm9ycyBzaG91bGQgYmUgaGFuZGxlZCB3aXRoaW4gbG9hZGluZyBVSXMuXG4gICAgICAgIGZsdXNoSW5pdGlhbGl6ZXJzKFJFQURZX0lOSVRJQUxJWkVSUywgaWRzKS50aGVuKHJlcywgcmVzKTtcbiAgICB9KTtcbn07XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuX19ORVhUX1BSRUxPQURSRUFEWSA9IExvYWRhYmxlLnByZWxvYWRSZWFkeTtcbn1cbnZhciBfZGVmYXVsdCA9IExvYWRhYmxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvYWRhYmxlLmpzLm1hcCIsImltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xyXG5pbXBvcnQgU1dSQ29uZmlnIGZyb20gXCJzd3JcIjtcclxuXHJcbi8vIGltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgLyosIEFwcENvbnRleHQgKi8gfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5cclxuY29uc3QgV2FsbGV0Q29ubmVjdGlvblByb3ZpZGVyID0gZHluYW1pYyhcclxuICAoKSA9PiBpbXBvcnQoXCIuL2NvbXBvbmVudHMvV2FsbGV0Q29ubmVjdGlvblByb3ZpZGVyXCIpLFxyXG4gIHtcclxuICAgIHNzcjogZmFsc2UsXHJcbiAgfVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2FsbGV0Q29ubmVjdGlvblByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1dhbGxldENvbm5lY3Rpb25Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG4vLyBPbmx5IHVuY29tbWVudCB0aGlzIG1ldGhvZCBpZiB5b3UgaGF2ZSBibG9ja2luZyBkYXRhIHJlcXVpcmVtZW50cyBmb3JcclxuLy8gZXZlcnkgc2luZ2xlIHBhZ2UgaW4geW91ciBhcHBsaWNhdGlvbi4gVGhpcyBkaXNhYmxlcyB0aGUgYWJpbGl0eSB0b1xyXG4vLyBwZXJmb3JtIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLCBjYXVzaW5nIGV2ZXJ5IHBhZ2UgaW4geW91ciBhcHAgdG9cclxuLy8gYmUgc2VydmVyLXNpZGUgcmVuZGVyZWQuXHJcbi8vXHJcbi8vIE15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0OiBBcHBDb250ZXh0KSA9PiB7XHJcbi8vICAgLy8gY2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxyXG4vLyAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcclxuXHJcbi8vICAgcmV0dXJuIHsgLi4uYXBwUHJvcHMgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMV0hLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMl0hLi90YWlsd2luZC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMV0hLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMl0hLi90YWlsd2luZC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMV0hLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMl0hLi90YWlsd2luZC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRTEoKSB7XG4gICAgbGV0IG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgICAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xufSgpO1xuY29uc3QgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0MSgpIHtcbiAgICBjb25zdCBtZW1vID0ge1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgICAgICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICAgIH07XG59KCk7XG5jb25zdCBzdHlsZXNJbkRvbSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICAgIGxldCByZXN1bHQgPSAtMTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGlkQ291bnRNYXAgPSB7XG4gICAgfTtcbiAgICBjb25zdCBpZGVudGlmaWVycyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgIGNvbnN0IGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgICAgIGNvbnN0IGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGlkICsgJyAnICsgY291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgICAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gICAgfVxuICAgIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBub25jZSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovIGNvbnN0IHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQxKCkge1xuICAgIGNvbnN0IHRleHRTdG9yZSA9IFtdO1xuICAgIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgICAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICAgIH07XG59KCk7XG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgICBjb25zdCBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/ICdAbWVkaWEgJyArIG9iai5tZWRpYSArICcgeycgKyBvYmouY3NzICsgJ30nIDogb2JqLmNzcztcbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG4gICAgICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gICAgbGV0IGNzcyA9IG9iai5jc3M7XG4gICAgY29uc3QgbWVkaWEgPSBvYmoubWVkaWE7XG4gICAgY29uc3Qgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gICAgfVxuICAgIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nO1xuICAgIH1cbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG59XG5sZXQgc2luZ2xldG9uID0gbnVsbDtcbmxldCBzaW5nbGV0b25Db3VudGVyID0gMDtcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICAgIGxldCBzdHlsZTtcbiAgICBsZXQgdXBkYXRlO1xuICAgIGxldCByZW1vdmU7XG4gICAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgICAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICAgICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICAgICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcbiAgICAgICAgcmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUob2JqKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgICAgIGlmIChuZXdPYmopIHtcbiAgICAgICAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtcbiAgICB9O1xuICAgIC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAgIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbiAgICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICAgIH1cbiAgICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgICBsZXQgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgICAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgICAgZm9yKGxldCBpMSA9IDA7IGkxIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaTErKyl7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2kxXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBpZiAoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICAgIH07XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgdGFpbHdpbmRjc3MgdjIuMi4xNCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20gKi8vKiEgbW9kZXJuLW5vcm1hbGl6ZSB2MS4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xcblxcbi8qXFxuRG9jdW1lbnRcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuVXNlIGEgYmV0dGVyIGJveCBtb2RlbCAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKipcXG5Vc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHQtbW96LXRhYi1zaXplOiA0O1xcblxcdHRhYi1zaXplOiA0O1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNlY3Rpb25zXFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4qL1xcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHN5c3RlbS11aSxcXG5cXHRcXHQtYXBwbGUtc3lzdGVtLCAvKiBGaXJlZm94IHN1cHBvcnRzIHRoaXMgYnV0IG5vdCB5ZXQgYHN5c3RlbS11aWAgKi9cXG5cXHRcXHQnU2Vnb2UgVUknLFxcblxcdFxcdFJvYm90byxcXG5cXHRcXHRIZWx2ZXRpY2EsXFxuXFx0XFx0QXJpYWwsXFxuXFx0XFx0c2Fucy1zZXJpZixcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7XFxufVxcblxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcblxcbmhyIHtcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcblxcdCAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXG5cXHRcXHRDb25zb2xhcyxcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXG5cXHRcXHRNZW5sbyxcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcblxcdHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcblRhYnVsYXIgZGF0YVxcbj09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG5cXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn0vKipcXG4gKiBNYW51YWxseSBmb3JrZWQgZnJvbSBTVUlUIENTUyBCYXNlOiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXFxuICogQSB0aGluIGxheWVyIG9uIHRvcCBvZiBub3JtYWxpemUuY3NzIHRoYXQgcHJvdmlkZXMgYSBzdGFydGluZyBwb2ludCBtb3JlXFxuICogc3VpdGFibGUgZm9yIHdlYiBhcHBsaWNhdGlvbnMuXFxuICovXFxuXFxuLyoqXFxuICogUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFRhaWx3aW5kIGN1c3RvbSByZXNldCBzdHlsZXNcXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSAod2l0aCBUYWlsd2luZCdzIGRlZmF1bHRcXG4gKiAgICBzYW5zLXNlcmlmIGZvbnQgc3RhY2sgYXMgYSBmYWxsYmFjaykgYXMgYSBzYW5lIGRlZmF1bHQuXFxuICogMi4gVXNlIFRhaWx3aW5kJ3MgZGVmYXVsdCBcXFwibm9ybWFsXFxcIiBsaW5lLWhlaWdodCBzbyB0aGUgdXNlciBpc24ndCBmb3JjZWRcXG4gKiAgICB0byBvdmVycmlkZSBpdCB0byBlbnN1cmUgY29uc2lzdGVuY3kgZXZlbiB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IHRoZW1lLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKipcXG4gKiBJbmhlcml0IGZvbnQtZmFtaWx5IGFuZCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXNcXG4gKiBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguXFxuICpcXG4gKiAgICBXZSB1c2VkIHRvIHNldCB0aGlzIGluIHRoZSBodG1sIGVsZW1lbnQgYW5kIGluaGVyaXQgZnJvbVxcbiAqICAgIHRoZSBwYXJlbnQgZWxlbWVudCBmb3IgZXZlcnl0aGluZyBlbHNlLiBUaGlzIGNhdXNlZCBpc3N1ZXNcXG4gKiAgICBpbiBzaGFkb3ctZG9tLWVuaGFuY2VkIGVsZW1lbnRzIGxpa2UgPGRldGFpbHM+IHdoZXJlIHRoZSBjb250ZW50XFxuICogICAgaXMgd3JhcHBlZCBieSBhIGRpdiB3aXRoIGJveC1zaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzRcXG4gKlxcbiAqXFxuICogMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguXFxuICpcXG4gKiAgICBCeSBkZWZhdWx0LCB0aGUgd2F5IHRoZSBicm93c2VyIHNwZWNpZmllcyB0aGF0IGFuIGVsZW1lbnQgc2hvdWxkIGhhdmUgbm9cXG4gKiAgICBib3JkZXIgaXMgYnkgc2V0dGluZyBpdCdzIGJvcmRlci1zdHlsZSB0byBgbm9uZWAgaW4gdGhlIHVzZXItYWdlbnRcXG4gKiAgICBzdHlsZXNoZWV0LlxcbiAqXFxuICogICAgSW4gb3JkZXIgdG8gZWFzaWx5IGFkZCBib3JkZXJzIHRvIGVsZW1lbnRzIGJ5IGp1c3Qgc2V0dGluZyB0aGUgYGJvcmRlci13aWR0aGBcXG4gKiAgICBwcm9wZXJ0eSwgd2UgY2hhbmdlIHRoZSBkZWZhdWx0IGJvcmRlci1zdHlsZSBmb3IgYWxsIGVsZW1lbnRzIHRvIGBzb2xpZGAsIGFuZFxcbiAqICAgIHVzZSBib3JkZXItd2lkdGggdG8gaGlkZSB0aGVtIGluc3RlYWQuIFRoaXMgd2F5IG91ciBgYm9yZGVyYCB1dGlsaXRpZXMgb25seVxcbiAqICAgIG5lZWQgdG8gc2V0IHRoZSBgYm9yZGVyLXdpZHRoYCBwcm9wZXJ0eSBpbnN0ZWFkIG9mIHRoZSBlbnRpcmUgYGJvcmRlcmBcXG4gKiAgICBzaG9ydGhhbmQsIG1ha2luZyBvdXIgYm9yZGVyIHV0aWxpdGllcyBtdWNoIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGNvbXBvc2UuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTZcXG4gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gKi9cXG5cXG5ociB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi8qKlxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcbiAqXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogIzljYTNhZjtcXG59XFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qKlxcbiAqIE92ZXJyaWRlIGxlZ2FjeSBmb2N1cyByZXNldCBmcm9tIE5vcm1hbGl6ZSB3aXRoIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlcy5cXG4gKlxcbiAqIFRoaXMgaXMgYWN0dWFsbHkgYW4gaW1wcm92ZW1lbnQgb3ZlciB0aGUgbmV3IGRlZmF1bHRzIGluIEZpcmVmb3ggaW4gb3VyIHRlc3RpbmcsXFxuICogYXMgaXQgdHJpZ2dlcnMgdGhlIGJldHRlciBmb2N1cyBzdHlsZXMgZXZlbiBmb3IgbGlua3MsIHdoaWNoIHN0aWxsIHVzZSBhIGRvdHRlZFxcbiAqIG91dGxpbmUgaW4gRmlyZWZveCBieSBkZWZhdWx0LlxcbiAqL1xcbiBcXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IGF1dG87XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZlxcbiAqIG9wdC1vdXQuXFxuICovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgZm9ybSBlbGVtZW50IHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byBmb3JnZXQgdG9cXG4gKiBzdHlsZSBleHBsaWNpdGx5IHNvIHlvdSBkb24ndCBpbmFkdmVydGVudGx5IGludHJvZHVjZVxcbiAqIHN0eWxlcyB0aGF0IGRldmlhdGUgZnJvbSB5b3VyIGRlc2lnbiBzeXN0ZW0uIFRoZXNlIHN0eWxlc1xcbiAqIHN1cHBsZW1lbnQgYSBwYXJ0aWFsIHJlc2V0IHRoYXQgaXMgYWxyZWFkeSBhcHBsaWVkIGJ5XFxuICogbm9ybWFsaXplLmNzcy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBVc2UgdGhlIGNvbmZpZ3VyZWQgJ21vbm8nIGZvbnQgZmFtaWx5IGZvciBlbGVtZW50cyB0aGF0XFxuICogYXJlIGV4cGVjdGVkIHRvIGJlIHJlbmRlcmVkIHdpdGggYSBtb25vc3BhY2UgZm9udCwgZmFsbGluZ1xcbiAqIGJhY2sgdG8gdGhlIHN5c3RlbSBtb25vc3BhY2Ugc3RhY2sgaWYgdGhlcmUgaXMgbm8gY29uZmlndXJlZFxcbiAqICdtb25vJyBmb250IGZhbWlseS5cXG4gKi9cXG5cXG5wcmUsXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbi8qKlxcbiAqIDEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0IGFzIHRoYXQnc1xcbiAqICAgIHRoZSBiZWhhdmlvciB5b3Ugd2FudCBhbG1vc3QgYWxsIG9mIHRoZSB0aW1lLiBJbnNwaXJlZCBieVxcbiAqICAgIENTUyBSZW1lZHksIHdpdGggYHN2Z2AgYWRkZWQgYXMgd2VsbC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKiBcXG4gKiAyLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmVcXG4gKiAgICBzZW5zaWJseSBieSBkZWZhdWx0IHdoZW4gb3ZlcnJpZGluZyBgZGlzcGxheWAgYnkgYWRkaW5nIGFcXG4gKiAgICB1dGlsaXR5IGxpa2UgYGlubGluZWAuXFxuICpcXG4gKiAgICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludGluZyBlcnJvciBpbiBzb21lXFxuICogICAgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4gKiBcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTBcXG4gKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZVxcbiAqIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG5cXHQtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuXFx0LS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG59XFxuXFxuOnJvb3Qge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjEpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdGNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG5odG1sIHtcXG5cXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG46cm9vdCB7XFxuXFx0LS1wOiAyNTkgOTQuNCUgNTEuMiU7XFxuXFx0LS1wZjogMjU5IDk0LjMlIDQxJTtcXG5cXHQtLXBjOiAwIDAlIDEwMCU7XFxuXFx0LS1zOiAzMTQgMTAwJSA0Ny4xJTtcXG5cXHQtLXNmOiAzMTQgMTAwJSAzNy4xJTtcXG5cXHQtLXNjOiAwIDAlIDEwMCU7XFxuXFx0LS1hOiAxNzQgNjAlIDUxJTtcXG5cXHQtLWFmOiAxNzQgNTkuOCUgNDElO1xcblxcdC0tYWM6IDAgMCUgMTAwJTtcXG5cXHQtLW46IDIxOSAxNC4xJSAyNy44JTtcXG5cXHQtLW5mOiAyMjIgMTMuNCUgMTklO1xcblxcdC0tbmM6IDAgMCUgMTAwJTtcXG5cXHQtLWIxOiAwIDAlIDEwMCU7XFxuXFx0LS1iMjogMjEwIDIwJSA5OCU7XFxuXFx0LS1iMzogMjE2IDEyLjIlIDgzLjklO1xcblxcdC0tYmM6IDIxNSAyNy45JSAxNi45JTtcXG5cXHQtLWluOiAyMDcgODkuOCUgNTMuOSU7XFxuXFx0LS1zdTogMTc0IDEwMCUgMjklO1xcblxcdC0td2E6IDM2IDEwMCUgNTAlO1xcblxcdC0tZXI6IDE0IDEwMCUgNTcuMSU7XFxuXFx0LS1yb3VuZGVkLWJveDogMXJlbTtcXG5cXHQtLXJvdW5kZWQtYnRuOiAwLjVyZW07XFxuXFx0LS1yb3VuZGVkLWJhZGdlOiAxLjlyZW07XFxuXFx0LS1hbmltYXRpb24tYnRuOiAwLjI1cztcXG5cXHQtLWFuaW1hdGlvbi1pbnB1dDogLjJzO1xcblxcdC0tcGFkZGluZy1jYXJkOiAycmVtO1xcblxcdC0tYnRuLXRleHQtY2FzZTogdXBwZXJjYXNlO1xcblxcdC0tYnRuLWZvY3VzLXNjYWxlOiAwLjk1O1xcblxcdC0tbmF2YmFyLXBhZGRpbmc6IC41cmVtO1xcblxcdC0tYm9yZGVyLWJ0bjogMXB4O1xcblxcdC0tdGFiLWJvcmRlcjogMXB4O1xcblxcdC0tdGFiLXJhZGl1czogMC41cmVtO1xcblxcdC0tdGFiLXNwYWNlcjogMC41cmVtO1xcblxcdC0tZm9jdXMtcmluZzogMnB4O1xcblxcdC0tZm9jdXMtcmluZy1vZmZzZXQ6IDJweDtcXG5cXHQtLWdsYXNzLW9wYWNpdHk6IDMwJTtcXG5cXHQtLWdsYXNzLWJvcmRlci1vcGFjaXR5OiAxMCU7XFxuXFx0LS1nbGFzcy1yZWZsZXgtZGVncmVlOiAxMDBkZWc7XFxuXFx0LS1nbGFzcy1yZWZsZXgtb3BhY2l0eTogMTAlO1xcblxcdC0tZ2xhc3MtYmx1cjogNDBweDtcXG5cXHQtLWdsYXNzLXRleHQtc2hhZG93LW9wYWNpdHk6IDUlO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuXFxuXFx0OnJvb3Qge1xcblxcdFxcdC0tcDogMjU5IDk0JSA2MSU7XFxuXFx0XFx0LS1wZjogMjU5IDk0LjQlIDUxLjIlO1xcblxcdFxcdC0tcGM6IDAgMCUgMTAwJTtcXG5cXHRcXHQtLXM6IDMxNCAxMDAlIDQ3LjElO1xcblxcdFxcdC0tc2Y6IDMxNCAxMDAlIDM3LjElO1xcblxcdFxcdC0tc2M6IDAgMCUgMTAwJTtcXG5cXHRcXHQtLWE6IDE3NCA2MCUgNTElO1xcblxcdFxcdC0tYWY6IDE3NCA1OS44JSA0MSU7XFxuXFx0XFx0LS1hYzogMCAwJSAxMDAlO1xcblxcdFxcdC0tbjogMjIyIDEzLjQlIDE5JTtcXG5cXHRcXHQtLW5mOiAyMjMgMTMuNyUgMTAlO1xcblxcdFxcdC0tbmM6IDAgMCUgMTAwJTtcXG5cXHRcXHQtLWIxOiAyMTkgMTQuMSUgMjcuOCU7XFxuXFx0XFx0LS1iMjogMjIyIDEzLjQlIDE5JTtcXG5cXHRcXHQtLWIzOiAyMjMgMTMuNyUgMTAlO1xcblxcdFxcdC0tYmM6IDIyOCAxNC4zJSA5My4xJTtcXG5cXHRcXHQtLWluOiAyMDIgMTAwJSA3MCU7XFxuXFx0XFx0LS1zdTogODkgNjEuNiUgNTIlO1xcblxcdFxcdC0td2E6IDU0IDY4LjglIDYzLjUlO1xcblxcdFxcdC0tZXI6IDAgMTAwJSA3MS44JTtcXG5cXHR9XFxufVxcblxcbltkYXRhLXRoZW1lPWxpZ2h0XSB7XFxuXFx0LS1wOiAyNTkgOTQuNCUgNTEuMiU7XFxuXFx0LS1wZjogMjU5IDk0LjMlIDQxJTtcXG5cXHQtLXBjOiAwIDAlIDEwMCU7XFxuXFx0LS1zOiAzMTQgMTAwJSA0Ny4xJTtcXG5cXHQtLXNmOiAzMTQgMTAwJSAzNy4xJTtcXG5cXHQtLXNjOiAwIDAlIDEwMCU7XFxuXFx0LS1hOiAxNzQgNjAlIDUxJTtcXG5cXHQtLWFmOiAxNzQgNTkuOCUgNDElO1xcblxcdC0tYWM6IDAgMCUgMTAwJTtcXG5cXHQtLW46IDIxOSAxNC4xJSAyNy44JTtcXG5cXHQtLW5mOiAyMjIgMTMuNCUgMTklO1xcblxcdC0tbmM6IDAgMCUgMTAwJTtcXG5cXHQtLWIxOiAwIDAlIDEwMCU7XFxuXFx0LS1iMjogMjEwIDIwJSA5OCU7XFxuXFx0LS1iMzogMjE2IDEyLjIlIDgzLjklO1xcblxcdC0tYmM6IDIxNSAyNy45JSAxNi45JTtcXG5cXHQtLWluOiAyMDcgODkuOCUgNTMuOSU7XFxuXFx0LS1zdTogMTc0IDEwMCUgMjklO1xcblxcdC0td2E6IDM2IDEwMCUgNTAlO1xcblxcdC0tZXI6IDE0IDEwMCUgNTcuMSU7XFxuXFx0LS1yb3VuZGVkLWJveDogMXJlbTtcXG5cXHQtLXJvdW5kZWQtYnRuOiAwLjVyZW07XFxuXFx0LS1yb3VuZGVkLWJhZGdlOiAxLjlyZW07XFxuXFx0LS1hbmltYXRpb24tYnRuOiAwLjI1cztcXG5cXHQtLWFuaW1hdGlvbi1pbnB1dDogLjJzO1xcblxcdC0tcGFkZGluZy1jYXJkOiAycmVtO1xcblxcdC0tYnRuLXRleHQtY2FzZTogdXBwZXJjYXNlO1xcblxcdC0tYnRuLWZvY3VzLXNjYWxlOiAwLjk1O1xcblxcdC0tbmF2YmFyLXBhZGRpbmc6IC41cmVtO1xcblxcdC0tYm9yZGVyLWJ0bjogMXB4O1xcblxcdC0tdGFiLWJvcmRlcjogMXB4O1xcblxcdC0tdGFiLXJhZGl1czogMC41cmVtO1xcblxcdC0tdGFiLXNwYWNlcjogMC41cmVtO1xcblxcdC0tZm9jdXMtcmluZzogMnB4O1xcblxcdC0tZm9jdXMtcmluZy1vZmZzZXQ6IDJweDtcXG5cXHQtLWdsYXNzLW9wYWNpdHk6IDMwJTtcXG5cXHQtLWdsYXNzLWJvcmRlci1vcGFjaXR5OiAxMCU7XFxuXFx0LS1nbGFzcy1yZWZsZXgtZGVncmVlOiAxMDBkZWc7XFxuXFx0LS1nbGFzcy1yZWZsZXgtb3BhY2l0eTogMTAlO1xcblxcdC0tZ2xhc3MtYmx1cjogNDBweDtcXG5cXHQtLWdsYXNzLXRleHQtc2hhZG93LW9wYWNpdHk6IDUlO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1kYXJrXSB7XFxuXFx0LS1wOiAyNTkgOTQlIDYxJTtcXG5cXHQtLXBmOiAyNTkgOTQuNCUgNTEuMiU7XFxuXFx0LS1wYzogMCAwJSAxMDAlO1xcblxcdC0tczogMzE0IDEwMCUgNDcuMSU7XFxuXFx0LS1zZjogMzE0IDEwMCUgMzcuMSU7XFxuXFx0LS1zYzogMCAwJSAxMDAlO1xcblxcdC0tYTogMTc0IDYwJSA1MSU7XFxuXFx0LS1hZjogMTc0IDU5LjglIDQxJTtcXG5cXHQtLWFjOiAwIDAlIDEwMCU7XFxuXFx0LS1uOiAyMjIgMTMuNCUgMTklO1xcblxcdC0tbmY6IDIyMyAxMy43JSAxMCU7XFxuXFx0LS1uYzogMCAwJSAxMDAlO1xcblxcdC0tYjE6IDIxOSAxNC4xJSAyNy44JTtcXG5cXHQtLWIyOiAyMjIgMTMuNCUgMTklO1xcblxcdC0tYjM6IDIyMyAxMy43JSAxMCU7XFxuXFx0LS1iYzogMjI4IDE0LjMlIDkzLjElO1xcblxcdC0taW46IDIwMiAxMDAlIDcwJTtcXG5cXHQtLXN1OiA4OSA2MS42JSA1MiU7XFxuXFx0LS13YTogNTQgNjguOCUgNjMuNSU7XFxuXFx0LS1lcjogMCAxMDAlIDcxLjglO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1jdXBjYWtlXSB7XFxuXFx0LS1wOiAxODMgNDcuNCUgNTklO1xcblxcdC0tcGY6IDE4MyA0Ny4yJSA0OSU7XFxuXFx0LS1wYzogMCAwJSAxMDAlO1xcblxcdC0tczogMzM4IDcxLjQlIDc4JTtcXG5cXHQtLXNmOiAzMzggNzEuOCUgNjglO1xcblxcdC0tc2M6IDAgMCUgMTAwJTtcXG5cXHQtLWE6IDM5IDg0LjElIDU4JTtcXG5cXHQtLWFmOiAzOSA4My43JSA0OCU7XFxuXFx0LS1hYzogMCAwJSAxMDAlO1xcblxcdC0tbjogMjgwIDQ2LjUlIDEzLjklO1xcblxcdC0tbmY6IDI3OSA0Ni40JSAxMSU7XFxuXFx0LS1uYzogMCAwJSAxMDAlO1xcblxcdC0tYjE6IDI0IDMzLjMlIDk3LjElO1xcblxcdC0tYjI6IDI3IDIyJSA5MiU7XFxuXFx0LS1iMzogMjIgMTQuMyUgODklO1xcblxcdC0tYmM6IDI4MCA0Ni41JSAxMy45JTtcXG5cXHQtLWluOiAyMDcgODkuOCUgNTMuOSU7XFxuXFx0LS1zdTogMTc0IDEwMCUgMjklO1xcblxcdC0td2E6IDM2IDEwMCUgNTAlO1xcblxcdC0tZXI6IDE0IDEwMCUgNTcuMSU7XFxuXFx0LS1yb3VuZGVkLWJveDogMXJlbTtcXG5cXHQtLXJvdW5kZWQtYnRuOiAxLjlyZW07XFxuXFx0LS1yb3VuZGVkLWJhZGdlOiAxLjlyZW07XFxuXFx0LS10YWItYm9yZGVyOiAycHg7XFxufVxcblxcbltkYXRhLXRoZW1lPWJ1bWJsZWJlZV0ge1xcblxcdC0tcDogNTAgOTQuNCUgNTglO1xcblxcdC0tcGY6IDUwIDk0LjMlIDQ3LjglO1xcblxcdC0tcGM6IDI0MCAzMy4zJSAxNC4xJTtcXG5cXHQtLXM6IDQxIDc0LjIlIDUyLjklO1xcblxcdC0tc2Y6IDQxIDczLjYlIDQzLjElO1xcblxcdC0tc2M6IDAgMCUgMTAwJTtcXG5cXHQtLWE6IDI0MCAzMy4zJSAxNC4xJTtcXG5cXHQtLWFmOiAyNDAgMzMuMyUgMTAlO1xcblxcdC0tYWM6IDAgMCUgMTAwJTtcXG5cXHQtLW46IDI0MCAzMy4zJSAxNC4xJTtcXG5cXHQtLW5mOiAyNDAgMzMuMyUgMTAlO1xcblxcdC0tbmM6IDAgMCUgMTAwJTtcXG5cXHQtLWIxOiAwIDAlIDEwMCU7XFxuXFx0LS1iMjogMCAwJSA5Ni4xJTtcXG5cXHQtLWIzOiAwIDAlIDg5JTtcXG5cXHQtLWJjOiAwIDAlIDAlO1xcblxcdC0taW46IDIwNyA4OS44JSA1My45JTtcXG5cXHQtLXN1OiAxNzQgMTAwJSAyOSU7XFxuXFx0LS13YTogMzYgMTAwJSA1MCU7XFxuXFx0LS1lcjogMTQgMTAwJSA1Ny4xJTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9ZW1lcmFsZF0ge1xcblxcdC0tcDogMTQxIDUwJSA2MCU7XFxuXFx0LS1wZjogMTQxIDQ5LjglIDUwJTtcXG5cXHQtLXBjOiAyMTAgMjAlIDk4JTtcXG5cXHQtLXM6IDIxOSA5Ni4xJSA2MCU7XFxuXFx0LS1zZjogMjE5IDk2LjElIDUwJTtcXG5cXHQtLXNjOiAyMTAgMjAlIDk4JTtcXG5cXHQtLWE6IDEwIDgxLjIlIDU2LjElO1xcblxcdC0tYWY6IDEwIDgxLjIlIDQ1LjklO1xcblxcdC0tYWM6IDIxMCAyMCUgOTglO1xcblxcdC0tbjogMjE5IDIwLjMlIDI1LjElO1xcblxcdC0tbmY6IDIyMCAxOS41JSAxNS4xJTtcXG5cXHQtLW5jOiAyMTAgMjAlIDk4JTtcXG5cXHQtLWIxOiAwIDAlIDEwMCU7XFxuXFx0LS1iMjogMjEwIDIwJSA5OCU7XFxuXFx0LS1iMzogMCAwJSA5NC45JTtcXG5cXHQtLWJjOiAyMTkgMjAuMyUgMjUuMSU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcblxcdC0tYW5pbWF0aW9uLWJ0bjogMDtcXG5cXHQtLWFuaW1hdGlvbi1pbnB1dDogMDtcXG5cXHQtLWJ0bi1mb2N1cy1zY2FsZTogMTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9Y29ycG9yYXRlXSB7XFxuXFx0LS1wOiAyMjkgOTUuNyUgNjMuOSU7XFxuXFx0LS1wZjogMjI5IDk1LjclIDUzLjklO1xcblxcdC0tcGM6IDIzMyAyNy4zJSAxMi45JTtcXG5cXHQtLXM6IDIxNSAyNi4zJSA1OSU7XFxuXFx0LS1zZjogMjE0IDI2LjElIDQ4LjglO1xcblxcdC0tc2M6IDIzMyAyNy4zJSAxMi45JTtcXG5cXHQtLWE6IDE1NCA0OSUgNjAlO1xcblxcdC0tYWY6IDE1NCA0OSUgNTAlO1xcblxcdC0tYWM6IDIzMyAyNy4zJSAxMi45JTtcXG5cXHQtLW46IDIzMyAyNy4zJSAxMi45JTtcXG5cXHQtLW5mOiAyNDAgMjUlIDMuMSU7XFxuXFx0LS1uYzogMjEwIDM4LjUlIDk0LjklO1xcblxcdC0tYjE6IDAgMCUgMTAwJTtcXG5cXHQtLWIyOiAyMTAgNjAlIDk4JTtcXG5cXHQtLWIzOiAyMTAgMzguNSUgOTQuOSU7XFxuXFx0LS1iYzogMjMzIDI3LjMlIDEyLjklO1xcblxcdC0taW46IDIwNyA4OS44JSA1My45JTtcXG5cXHQtLXN1OiAxNzQgMTAwJSAyOSU7XFxuXFx0LS13YTogMzYgMTAwJSA1MCU7XFxuXFx0LS1lcjogMTQgMTAwJSA1Ny4xJTtcXG5cXHQtLWFuaW1hdGlvbi1idG46IDA7XFxuXFx0LS1hbmltYXRpb24taW5wdXQ6IDA7XFxuXFx0LS1idG4tZm9jdXMtc2NhbGU6IDE7XFxufVxcblxcbltkYXRhLXRoZW1lPXN5bnRod2F2ZV0ge1xcblxcdC0tcDogMzIxIDY5LjYlIDY5JTtcXG5cXHQtLXBmOiAzMjEgNzAuMyUgNTklO1xcblxcdC0tcGM6IDI1NyA2My4yJSAxNy4xJTtcXG5cXHQtLXNmOiAxOTcgODcuNCUgNzUuMSU7XFxuXFx0LS1zOiAxOTcgODYuNiUgNjQuOSU7XFxuXFx0LS1zYzogMjU3IDYzLjIlIDE3LjElO1xcblxcdC0tYWY6IDQ4IDg5LjMlIDY3LjElO1xcblxcdC0tYTogNDggODklIDU3LjElO1xcblxcdC0tYWM6IDI1NyA2My4yJSAxNy4xJTtcXG5cXHQtLW46IDI1MyA2MC44JSAxOSU7XFxuXFx0LS1uZjogMjU3IDY0LjMlIDExJTtcXG5cXHQtLW5jOiAyNjAgNjAlIDk4JTtcXG5cXHQtLWIxOiAyNTQgNTkuMSUgMjUuOSU7XFxuXFx0LS1iMjogMjUzIDYwLjglIDE5JTtcXG5cXHQtLWIzOiAyNTcgNjQuMyUgMTElO1xcblxcdC0tYmM6IDI2MCA2MCUgOTglO1xcblxcdC0taW46IDE5OSA4NyUgNjMuOSU7XFxuXFx0LS1zdTogMTY4IDc0LjIlIDY4JTtcXG5cXHQtLXdhOiA0OCA4OSUgNTcuMSU7XFxuXFx0LS1lcjogMzUyIDczLjYlIDU2LjklO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1yZXRyb10ge1xcblxcdGZvbnQtZmFtaWx5OiB1aXNlY29uZGFyeWVyaWYsR2VvcmdpYSxDYW1icmlhLFRpbWVzIE5ldyBSb21hbixUaW1lcyxzZXJpZjtcXG5cXHQtLXA6IDMgNzMuOCUgNzYuMSU7XFxuXFx0LS1wZjogMyA3My42JSA2NS45JTtcXG5cXHQtLXBjOiAzNDUgNS4zJSAxNC45JTtcXG5cXHQtLXM6IDE0NSAyNy4zJSA3MiU7XFxuXFx0LS1zZjogMTQ1IDI2LjglIDYyJTtcXG5cXHQtLXNjOiAzNDUgNS4zJSAxNC45JTtcXG5cXHQtLWE6IDQ5IDY3LjIlIDc2LjElO1xcblxcdC0tYWY6IDQ5IDY2LjclIDY1LjklO1xcblxcdC0tYWM6IDM0NSA1LjMlIDE0LjklO1xcblxcdC0tbjogNDIgMTYuOCUgNDIlO1xcblxcdC0tbmY6IDQxIDEzLjElIDIzLjklO1xcblxcdC0tbmM6IDQ1IDQ3LjElIDgwJTtcXG5cXHQtLWIxOiA0NSA0Ny4xJSA4MCU7XFxuXFx0LS1iMjogNDUgMzcuMSUgNzIlO1xcblxcdC0tYjM6IDQyIDM2JSA2NS4xJTtcXG5cXHQtLWJjOiAzNDUgNS4zJSAxNC45JTtcXG5cXHQtLWluOiAyMDcgODkuOCUgNTMuOSU7XFxuXFx0LS1zdTogMTc0IDEwMCUgMjklO1xcblxcdC0td2E6IDM2IDEwMCUgNTAlO1xcblxcdC0tZXI6IDE0IDEwMCUgNTcuMSU7XFxuXFx0LS1yb3VuZGVkLWJveDogMC40cmVtO1xcblxcdC0tcm91bmRlZC1idG46IDAuNHJlbTtcXG5cXHQtLXJvdW5kZWQtYmFkZ2U6IDAuNHJlbTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9Y3liZXJwdW5rXSB7XFxuXFx0Zm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSxTRk1vbm8tUmVndWxhcixNZW5sbyxNb25hY28sQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLENvdXJpZXIgTmV3LG1vbm9zcGFjZTtcXG5cXHQtLXA6IDM0NSAxMDAlIDcyLjklO1xcblxcdC0tcGY6IDM0NCAxMDAlIDY3LjElO1xcblxcdC0tcGM6IDAgMCUgMCU7XFxuXFx0LS1zOiAxOTUgODAuNCUgNzAlO1xcblxcdC0tc2Y6IDE5NCA2NS44JSA2MSU7XFxuXFx0LS1zYzogMCAwJSAwJTtcXG5cXHQtLWE6IDI3NiA3NC4zJSA3MSU7XFxuXFx0LS1hZjogMjc2IDc1LjclIDYyLjklO1xcblxcdC0tYWM6IDAgMCUgMCU7XFxuXFx0LS1uOiA1NyAxMDAlIDEyLjklO1xcblxcdC0tbmY6IDYwIDgwJSAyJTtcXG5cXHQtLW5jOiA1NiAxMDAlIDUwJTtcXG5cXHQtLWIxOiA1NiAxMDAlIDUwJTtcXG5cXHQtLWIyOiA1NiAxMDAlIDQyLjklO1xcblxcdC0tYjM6IDU2IDEwMCUgMzYuMSU7XFxuXFx0LS1iYzogMCAwJSAwJTtcXG5cXHQtLWluOiAyMDcgODkuOCUgNTMuOSU7XFxuXFx0LS1zdTogMTc0IDEwMCUgMjklO1xcblxcdC0td2E6IDM2IDEwMCUgNTAlO1xcblxcdC0tZXI6IDE0IDEwMCUgNTcuMSU7XFxuXFx0LS1yb3VuZGVkLWJveDogMDtcXG5cXHQtLXJvdW5kZWQtYnRuOiAwO1xcblxcdC0tcm91bmRlZC1iYWRnZTogMDtcXG5cXHQtLXRhYi1yYWRpdXM6IDA7XFxufVxcblxcbltkYXRhLXRoZW1lPXZhbGVudGluZV0ge1xcblxcdC0tcDogMzUzIDczLjglIDY3LjElO1xcblxcdC0tcGY6IDM1MyA3My42JSA1Ni45JTtcXG5cXHQtLXBjOiAwIDAlIDEwMCU7XFxuXFx0LS1zOiAyNTQgODYuNCUgNzYuOSU7XFxuXFx0LS1zZjogMjU0IDg2LjklIDY3LjElO1xcblxcdC0tc2M6IDAgMCUgMTAwJTtcXG5cXHQtLWE6IDE4MSA1NS42JSA3MCU7XFxuXFx0LS1hZjogMTgxIDU0LjklIDYwJTtcXG5cXHQtLWFjOiAwIDAlIDEwMCU7XFxuXFx0LS1uOiAzMzYgNDIuOSUgNDglO1xcblxcdC0tbmY6IDM0MCA0MC4yJSAzOCU7XFxuXFx0LS1uYzogMzE4IDQ2LjQlIDg5JTtcXG5cXHQtLWIxOiAzMTggNDYuNCUgODklO1xcblxcdC0tYjI6IDMxNSA1OC45JSA3OSU7XFxuXFx0LS1iMzogMzE2IDYyLjMlIDcyLjklO1xcblxcdC0tYmM6IDM0NCAzOC41JSAyOCU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcblxcdC0tcm91bmRlZC1ib3g6IDFyZW07XFxuXFx0LS1yb3VuZGVkLWJ0bjogMS45cmVtO1xcblxcdC0tcm91bmRlZC1iYWRnZTogMS45cmVtO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1oYWxsb3dlZW5dIHtcXG5cXHQtLXA6IDMyIDg5LjMlIDUyLjIlO1xcblxcdC0tcGY6IDMyIDg4LjglIDQyJTtcXG5cXHQtLXBjOiAxODAgNy4zJSA4JTtcXG5cXHQtLXM6IDI3MSA0NS44JSA0MiU7XFxuXFx0LS1zZjogMjcxIDQ2JSAzMiU7XFxuXFx0LS1zYzogMCAwJSAxMDAlO1xcblxcdC0tYTogOTEgMTAwJSAzMi45JTtcXG5cXHQtLWFmOiA5MSAxMDAlIDIyLjklO1xcblxcdC0tYWM6IDAgMCUgMTAwJTtcXG5cXHQtLW46IDE4MCAzLjYlIDExJTtcXG5cXHQtLW5mOiAxODAgNy4zJSA4JTtcXG5cXHQtLW5jOiAwIDAlIDEwMCU7XFxuXFx0LS1iMTogMCAwJSAxMi45JTtcXG5cXHQtLWIyOiAxODAgMy42JSAxMSU7XFxuXFx0LS1iMzogMTgwIDcuMyUgOCU7XFxuXFx0LS1iYzogMCAwJSAxMDAlO1xcblxcdC0taW46IDIwMiAxMDAlIDcwJTtcXG5cXHQtLXN1OiA4OSA2MS42JSA1MiU7XFxuXFx0LS13YTogNTQgNjguOCUgNjMuNSU7XFxuXFx0LS1lcjogMCAxMDAlIDcxLjglO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1nYXJkZW5dIHtcXG5cXHQtLXA6IDEzOSAxNiUgNDIuOSU7XFxuXFx0LS1wZjogMTM3IDE0LjglIDMzLjElO1xcblxcdC0tcGM6IDAgMCUgMTAwJTtcXG5cXHQtLXM6IDk3IDM3LjElIDkzLjElO1xcblxcdC0tc2Y6IDk4IDM2LjMlIDgyLjIlO1xcblxcdC0tc2M6IDk2IDMyLjUlIDE1LjElO1xcblxcdC0tYTogMCA2Ny43JSA5My45JTtcXG5cXHQtLWFmOiAwIDcxLjElIDg1LjElO1xcblxcdC0tYWM6IDAgMjIlIDE2LjElO1xcblxcdC0tbjogMCAzLjklIDM1LjElO1xcblxcdC0tbmY6IDAgMy43JSAxNS45JTtcXG5cXHQtLW5jOiAwIDQuMyUgOTElO1xcblxcdC0tYjE6IDAgNC4zJSA5MSU7XFxuXFx0LS1iMjogMCA1LjIlIDgxJTtcXG5cXHQtLWIzOiAwIDUuNCUgNzElO1xcblxcdC0tYmM6IDAgMy4yJSA2LjElO1xcblxcdC0taW46IDIwNyA4OS44JSA1My45JTtcXG5cXHQtLXN1OiAxNzQgMTAwJSAyOSU7XFxuXFx0LS13YTogMzYgMTAwJSA1MCU7XFxuXFx0LS1lcjogMTQgMTAwJSA1Ny4xJTtcXG5cXHQtLXJvdW5kZWQtYm94OiAxcmVtO1xcblxcdC0tcm91bmRlZC1idG46IDAuNXJlbTtcXG5cXHQtLXJvdW5kZWQtYmFkZ2U6IDEuOXJlbTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9Zm9yZXN0XSB7XFxuXFx0LS1wOiAxNDEgNzIlIDQyJTtcXG5cXHQtLXBmOiAxNDEgNzEuOCUgMzIlO1xcblxcdC0tcGM6IDAgMCUgMTAwJTtcXG5cXHQtLXM6IDE0MSA3NC43JSA0OCU7XFxuXFx0LS1zZjogMTQxIDc1LjMlIDM4JTtcXG5cXHQtLXNjOiAwIDAlIDEwMCU7XFxuXFx0LS1hOiAzNSA2OSUgNTIlO1xcblxcdC0tYWY6IDM1IDY5LjIlIDQyJTtcXG5cXHQtLWFjOiAwIDAlIDEwMCU7XFxuXFx0LS1uOiAwIDkuNyUgNi4xJTtcXG5cXHQtLW5mOiAwIDIwJSAyJTtcXG5cXHQtLW5jOiAwIDAlIDEwMCU7XFxuXFx0LS1iMTogMCAxMi4yJSA4JTtcXG5cXHQtLWIyOiAwIDkuNyUgNi4xJTtcXG5cXHQtLWIzOiAwIDIwJSAyJTtcXG5cXHQtLWJjOiAwIDAlIDEwMCU7XFxuXFx0LS1yb3VuZGVkLWJ0bjogMS45cmVtO1xcblxcdC0taW46IDIwMiAxMDAlIDcwJTtcXG5cXHQtLXN1OiA4OSA2MS42JSA1MiU7XFxuXFx0LS13YTogNTQgNjguOCUgNjMuNSU7XFxuXFx0LS1lcjogMCAxMDAlIDcxLjglO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1hcXVhXSB7XFxuXFx0LS1wOiAxODkgMTAwJSA2Mi45JTtcXG5cXHQtLXBmOiAxODkgMTAwJSA1Mi45JTtcXG5cXHQtLXBjOiAwIDAlIDAlO1xcblxcdC0tczogMjc0IDMwLjklIDU2LjklO1xcblxcdC0tc2Y6IDI3NCAzMC44JSA0Ny4xJTtcXG5cXHQtLXNjOiAwIDAlIDEwMCU7XFxuXFx0LS1hOiA0NyAxMDAlIDgwJTtcXG5cXHQtLWFmOiA0NyAxMDAlIDcwJTtcXG5cXHQtLWFjOiAwIDAlIDEwMCU7XFxuXFx0LS1uOiAyMzEgNzcuNCUgMzIuOSU7XFxuXFx0LS1uZjogMjMxIDY3LjYlIDI5JTtcXG5cXHQtLW5jOiAwIDAlIDEwMCU7XFxuXFx0LS1iMTogMjMxIDg4LjclIDM4JTtcXG5cXHQtLWIyOiAyMzEgNzcuNCUgMzIuOSU7XFxuXFx0LS1iMzogMjMxIDY3LjYlIDI5JTtcXG5cXHQtLWJjOiAwIDAlIDEwMCU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1sb2ZpXSB7XFxuXFx0LS1wOiAwIDAlIDUwLjIlO1xcblxcdC0tcGY6IDAgMCUgNDUuMSU7XFxuXFx0LS1wYzogMjQwIDQlIDk1LjElO1xcblxcdC0tczogMCAwJSAzMC4yJTtcXG5cXHQtLXNmOiAwIDAlIDI1LjElO1xcblxcdC0tc2M6IDI0MCA0JSA5NS4xJTtcXG5cXHQtLWE6IDAgMCUgMTAuMiU7XFxuXFx0LS1hZjogMCAwJSA1LjElO1xcblxcdC0tYWM6IDI0MCA0JSA5NS4xJTtcXG5cXHQtLW46IDI0MCA0JSA5NS4xJTtcXG5cXHQtLW5mOiAyNDAgNS45JSA5MCU7XFxuXFx0LS1uYzogMCAwJSAzMC4yJTtcXG5cXHQtLWIxOiAwIDAlIDEwMCU7XFxuXFx0LS1iMjogMCAwJSAxMDAlO1xcblxcdC0tYjM6IDAgMCUgMTAwJTtcXG5cXHQtLWJjOiAwIDAlIDQ5JTtcXG5cXHQtLWluOiAyMDcgODkuOCUgNTMuOSU7XFxuXFx0LS1zdTogMTc0IDEwMCUgMjklO1xcblxcdC0td2E6IDM2IDEwMCUgNTAlO1xcblxcdC0tZXI6IDE0IDEwMCUgNTcuMSU7XFxuXFx0LS1ib3JkZXItY29sb3I6ICNlNmU2ZTY7XFxuXFx0LS1hbmltYXRpb24tYnRuOiAwO1xcblxcdC0tYW5pbWF0aW9uLWlucHV0OiAwO1xcblxcdC0tYnRuLWZvY3VzLXNjYWxlOiAxO1xcblxcdC0tcm91bmRlZC1ib3g6IDByZW07XFxuXFx0LS1yb3VuZGVkLWJ0bjogMHJlbTtcXG5cXHQtLXJvdW5kZWQtYmFkZ2U6IDByZW07XFxuXFx0LS10YWItcmFkaXVzOiAwcmVtO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1sb2ZpXSAqIHtcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcikgIWltcG9ydGFudDtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG5cXHQtLXR3LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWJvcmRlci1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuXFxuW2RhdGEtdGhlbWU9cGFzdGVsXSB7XFxuXFx0LS1wOiAyODQgMjEuNiUgODAlO1xcblxcdC0tcGY6IDI4MiAyMS42JSA3MCU7XFxuXFx0LS1wYzogMCAwJSAwJTtcXG5cXHQtLXM6IDM1MiA3MC41JSA4OCU7XFxuXFx0LS1zZjogMzUyIDY5LjYlIDc4JTtcXG5cXHQtLXNjOiAwIDAlIDEwMCU7XFxuXFx0LS1hOiAxNTggNTQuNiUgODElO1xcblxcdC0tYWY6IDE1OCA1NS40JSA3MSU7XFxuXFx0LS1hYzogMCAwJSAxMDAlO1xcblxcdC0tbjogMTk5IDQzLjclIDYxJTtcXG5cXHQtLW5mOiAxOTkgNDQlIDUxJTtcXG5cXHQtLW5jOiAwIDAlIDEwMCU7XFxuXFx0LS1iMTogMCAwJSAxMDAlO1xcblxcdC0tYjI6IDIxMCAyMCUgOTglO1xcblxcdC0tYjM6IDIxNiAxMi4yJSA4My45JTtcXG5cXHQtLWJjOiAyMDYgMy4xJSA1NS4xJTtcXG5cXHQtLWluOiAyMDcgODkuOCUgNTMuOSU7XFxuXFx0LS1zdTogMTc0IDEwMCUgMjklO1xcblxcdC0td2E6IDM2IDEwMCUgNTAlO1xcblxcdC0tZXI6IDE0IDEwMCUgNTcuMSU7XFxuXFx0LS1yb3VuZGVkLWJveDogMXJlbTtcXG5cXHQtLXJvdW5kZWQtYnRuOiAxLjlyZW07XFxuXFx0LS1yb3VuZGVkLWJhZGdlOiAxLjlyZW07XFxufVxcblxcbltkYXRhLXRoZW1lPWZhbnRhc3ldIHtcXG5cXHQtLXA6IDI5NiA4Mi44JSAyNS4xJTtcXG5cXHQtLXBmOiAyOTYgODEuOCUgMTUuMSU7XFxuXFx0LS1wYzogMCAwJSAxMDAlO1xcblxcdC0tczogMjAwIDEwMCUgMzcuMSU7XFxuXFx0LS1zZjogMjAwIDEwMCUgMjcuMSU7XFxuXFx0LS1zYzogMCAwJSAxMDAlO1xcblxcdC0tYTogMzEgOTQuNCUgNTEuMiU7XFxuXFx0LS1hZjogMzEgOTQuMyUgNDElO1xcblxcdC0tYWM6IDAgMCUgMTAwJTtcXG5cXHQtLW46IDIxNSAyNy45JSAxNi45JTtcXG5cXHQtLW5mOiAyMjEgMzkuMyUgMTElO1xcblxcdC0tbmM6IDAgMCUgMTAwJTtcXG5cXHQtLWIxOiAwIDAlIDEwMCU7XFxuXFx0LS1iMjogMjEwIDIwJSA5OCU7XFxuXFx0LS1iMzogMjE2IDEyLjIlIDgzLjklO1xcblxcdC0tYmM6IDIxNSAyNy45JSAxNi45JTtcXG5cXHQtLWluOiAyMDcgODkuOCUgNTMuOSU7XFxuXFx0LS1zdTogMTc0IDEwMCUgMjklO1xcblxcdC0td2E6IDM2IDEwMCUgNTAlO1xcblxcdC0tZXI6IDE0IDEwMCUgNTcuMSU7XFxufVxcblxcbltkYXRhLXRoZW1lPXdpcmVmcmFtZV0ge1xcblxcdGZvbnQtZmFtaWx5OiBDaGFsa2JvYXJkLGNvbWljIHNhbnMgbXMsXFxcInNhbnNzZWNvbmRhcnllcmlmXFxcIjtcXG5cXHQtLXA6IDAgMCUgNzIuMiU7XFxuXFx0LS1wZjogMCAwJSA3Mi4yJTtcXG5cXHQtLXBjOiAwIDAlIDAlO1xcblxcdC0tczogMCAwJSA3Mi4yJTtcXG5cXHQtLXNmOiAwIDAlIDcyLjIlO1xcblxcdC0tc2M6IDAgMCUgMCU7XFxuXFx0LS1hOiAwIDAlIDcyLjIlO1xcblxcdC0tYWY6IDAgMCUgNzIuMiU7XFxuXFx0LS1hYzogMCAwJSAwJTtcXG5cXHQtLWIxOiAwIDAlIDEwMCU7XFxuXFx0LS1iMjogMCAwJSAxMDAlO1xcblxcdC0tYjM6IDAgMCUgMTAwJTtcXG5cXHQtLWJjOiAwIDAlIDAlO1xcblxcdC0tbjogMCAwJSA5Mi4yJTtcXG5cXHQtLW5mOiAwIDAlIDkyLjIlO1xcblxcdC0tbmM6IDAgMCUgMCU7XFxuXFx0LS1pbjogMjQwIDEwMCUgNTAlO1xcblxcdC0tc3U6IDEyMCAxMDAlIDI1LjElO1xcblxcdC0td2E6IDYwIDMwLjIlIDUwJTtcXG5cXHQtLWVyOiAwIDEwMCUgNTAlO1xcblxcdC0tYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcblxcdC0tcm91bmRlZC1ib3g6IDAuMnJlbTtcXG5cXHQtLXJvdW5kZWQtYnRuOiAwLjJyZW07XFxuXFx0LS1yb3VuZGVkLWJhZGdlOiAwLjJyZW07XFxuXFx0LS10YWItcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbltkYXRhLXRoZW1lPXdpcmVmcmFtZV0gKiB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpICFpbXBvcnRhbnQ7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxuXFx0LS10dy1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1ib3JkZXItY29sb3IpICFpbXBvcnRhbnQ7XFxufVxcblxcbltkYXRhLXRoZW1lPWJsYWNrXSB7XFxuXFx0LS1wOiAwIDAlIDEwMCU7XFxuXFx0LS1wZjogMCAwJSAxMDAlO1xcblxcdC0tcGM6IDAgMCUgMCU7XFxuXFx0LS1zOiAwIDAlIDEwMCU7XFxuXFx0LS1zZjogMCAwJSAxMDAlO1xcblxcdC0tc2M6IDAgMCUgMCU7XFxuXFx0LS1hOiAwIDAlIDEwMCU7XFxuXFx0LS1hZjogMCAwJSAxMDAlO1xcblxcdC0tYWM6IDAgMCUgMCU7XFxuXFx0LS1iMTogMCAwJSAwJTtcXG5cXHQtLWIyOiAwIDAlIDIwJTtcXG5cXHQtLWIzOiAwIDAlIDMwLjIlO1xcblxcdC0tYmM6IDAgMCUgMTAwJTtcXG5cXHQtLW46IDAgMCUgMjAlO1xcblxcdC0tbmY6IDAgMCUgMzAuMiU7XFxuXFx0LS1uYzogMCAwJSAxMDAlO1xcblxcdC0taW46IDI0MCAxMDAlIDUwJTtcXG5cXHQtLXN1OiAxMjAgMTAwJSAyNS4xJTtcXG5cXHQtLXdhOiA2MCAxMDAlIDUwJTtcXG5cXHQtLWVyOiAwIDEwMCUgNTAlO1xcblxcdC0tcm91bmRlZC1ib3g6IDA7XFxuXFx0LS1yb3VuZGVkLWJ0bjogMDtcXG5cXHQtLXJvdW5kZWQtYmFkZ2U6IDA7XFxuXFx0LS10YWItcmFkaXVzOiAwO1xcblxcdC0tYW5pbWF0aW9uLWJ0bjogMDtcXG5cXHQtLWFuaW1hdGlvbi1pbnB1dDogMDtcXG5cXHQtLWJ0bi1mb2N1cy1zY2FsZTogMTtcXG5cXHQtLWJ0bi10ZXh0LWNhc2U6IGxvd2VyY2FzZTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9bHV4dXJ5XSB7XFxuXFx0LS1wOiAwIDAlIDEwMCU7XFxuXFx0LS1wZjogMCAwJSA5MC4yJTtcXG5cXHQtLXBjOiAwIDAlIDAlO1xcblxcdC0tczogMjE4IDU0LjMlIDE4JTtcXG5cXHQtLXNmOiAyMTkgNTYuMSUgOCU7XFxuXFx0LS1zYzogMCAwJSAxMDAlO1xcblxcdC0tYTogMzE5IDIxLjglIDI2LjElO1xcblxcdC0tYWY6IDMyMCAyMiUgMTYuMSU7XFxuXFx0LS1hYzogMCAwJSAxMDAlO1xcblxcdC0tbjogMjcwIDQuMyUgOSU7XFxuXFx0LS1uZjogMjcwIDIuMiUgMTglO1xcblxcdC0tbmM6IDM3IDY3LjMlIDU4JTtcXG5cXHQtLWIxOiAyNDAgMTAlIDMuOSU7XFxuXFx0LS1iMjogMjcwIDQuMyUgOSU7XFxuXFx0LS1iMzogMjcwIDIuMiUgMTglO1xcblxcdC0tYmM6IDM3IDY3LjMlIDU4JTtcXG5cXHQtLWluOiAyMDIgMTAwJSA3MCU7XFxuXFx0LS1zdTogODkgNjEuNiUgNTIlO1xcblxcdC0td2E6IDU0IDY4LjglIDYzLjUlO1xcblxcdC0tZXI6IDAgMTAwJSA3MS44JTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9ZHJhY3VsYV0ge1xcblxcdC0tcDogMzMwIDEwMCUgODUuMSU7XFxuXFx0LS1wZjogMzMwIDEwMCUgNzUuMSU7XFxuXFx0LS1wYzogMjMzIDEyLjElIDEyLjklO1xcblxcdC0tczogMTE1IDEwMCUgODUuMSU7XFxuXFx0LS1zZjogMTE1IDEwMCUgNzUuMSU7XFxuXFx0LS1zYzogMjMzIDEyLjElIDEyLjklO1xcblxcdC0tYTogNjAgMTAwJSA4NS4xJTtcXG5cXHQtLWFmOiA2MCAxMDAlIDc1LjElO1xcblxcdC0tYWM6IDIzMyAxMi4xJSAxMi45JTtcXG5cXHQtLW46IDI0NSAxNC4zJSAxNS4xJTtcXG5cXHQtLW5mOiAyMzMgMTIuMSUgMTIuOSU7XFxuXFx0LS1uYzogMjUxIDEwMCUgOTAlO1xcblxcdC0tYjE6IDI0NCAxMyUgMjEuMiU7XFxuXFx0LS1iMjogMjQ1IDE0LjMlIDE1LjElO1xcblxcdC0tYjM6IDIzMyAxMi4xJSAxMi45JTtcXG5cXHQtLWJjOiAyNTEgMTAwJSA5MCU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcbn1cXG5cXG4uYWxlcnQ+Om5vdChbaGlkZGVuXSl+Om5vdChbaGlkZGVuXSkge1xcblxcdC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcblxcdG1hcmdpbi10b3A6IGNhbGMoMC41cmVtKigxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpO1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMC41cmVtKnZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbn1cXG5cXG4uYWxlcnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iMikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1yb3VuZGVkLWJveCwxcmVtKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcXG5cXG5cXHQuYWxlcnQ+Om5vdChbaGlkZGVuXSl+Om5vdChbaGlkZGVuXSkge1xcblxcdFxcdC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcblxcdFxcdG1hcmdpbi10b3A6IGNhbGMoMHB4KigxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IGNhbGMoMHB4KnZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcblxcdH1cXG5cXG5cXHQuYWxlcnQge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0fVxcbn1cXG5cXG4uYWxlcnQ+KiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmF2YXRhci5wbGFjZWhvbGRlcj5kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJ0biB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItY29sb3I6IGhzbGEodmFyKC0tbikvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLGJvcmRlci1jb2xvcixjb2xvcixmaWxsLHN0cm9rZSxvcGFjaXR5LGJveC1zaGFkb3csdHJhbnNmb3JtO1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IC4xNXM7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1yb3VuZGVkLWJ0biwuNXJlbSk7XFxuXFx0aGVpZ2h0OiAzcmVtO1xcblxcdGZvbnQtc2l6ZTogLjg3NXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS4yNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMjtcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG5cXHRtaW4taGVpZ2h0OiAzcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdmFyKC0tYnRuLXRleHQtY2FzZSx1cHBlcmNhc2UpO1xcblxcdGJvcmRlci13aWR0aDogdmFyKC0tYm9yZGVyLWJ0biwxcHgpO1xcblxcdGFuaW1hdGlvbjogYnV0dG9uLXBvcCB2YXIoLS1hbmltYXRpb24tYnRuLC4yNXMpIGVhc2Utb3V0O1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLW4pL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0tbmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG46Zm9jdXMge1xcblxcdG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4uYnRuLWRpc2FibGVkLC5idG5bZGlzYWJsZWRdIHtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAwLjI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1uKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAwO1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAwLjI7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4ubG9hZGluZywuYnRuLmxvYWRpbmc6aG92ZXIge1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYnRuLmxvYWRpbmc6YmVmb3JlIHtcXG5cXHRib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxuXFx0Ym9yZGVyLXdpZHRoOiAycHg7XFxuXFx0aGVpZ2h0OiAxcmVtO1xcblxcdG1hcmdpbi1yaWdodDogLjVyZW07XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0YW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IGN1cnJlbnRDb2xvciBjdXJyZW50Q29sb3IgdHJhbnNwYXJlbnQ7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2UpIHtcXG5cXG5cXHQuYnRuLmxvYWRpbmc6YmVmb3JlIHtcXG5cXHRcXHRhbmltYXRpb246IHNwaW4gMTBzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuXFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXG5cXHR0byB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xcblxcdH1cXG59XFxuXFxuLmJ0bi1ncm91cD5pbnB1dFt0eXBlPXJhZGlvXS5idG4ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uYnRuLWdyb3VwPmlucHV0W3R5cGU9cmFkaW9dLmJ0bjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XFxufVxcblxcbi5jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcm91bmRlZC1ib3gsMXJlbSk7XFxufVxcblxcbi5jYXJkOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuXFxuLmNhcmQtYm9keSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXg6IDEgMSBhdXRvO1xcblxcdHBhZGRpbmc6IHZhcigtLXBhZGRpbmctY2FyZCwycmVtKTtcXG59XFxuXFxuLmNhcmQgZmlndXJlLC5jYXJkIGZpZ3VyZT4qIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQuaW1hZ2UtZnVsbCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmNhcmQuaW1hZ2UtZnVsbDpiZWZvcmUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1uKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG5cXHRvcGFjaXR5OiAuNzU7XFxuXFx0ei1pbmRleDogMTA7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcm91bmRlZC1ib3gsMXJlbSk7XFxufVxcblxcbi5jYXJkLmltYWdlLWZ1bGw6YmVmb3JlLC5jYXJkLmltYWdlLWZ1bGw+KiB7XFxuXFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuXFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XFxufVxcblxcbi5jYXJkLmltYWdlLWZ1bGw+ZmlndXJlIGltZyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uY2FyZC5pbWFnZS1mdWxsPi5jYXJkLWJvZHkge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1uYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG5cXHR6LWluZGV4OiAyMDtcXG59XFxuXFxuLmZvcm0tY29udHJvbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGFiZWwge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRwYWRkaW5nOiAuNXJlbSAuMjVyZW07XFxufVxcblxcbi5oZXJvIHtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZXJvPioge1xcblxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcblxcdGdyaWQtcm93LXN0YXJ0OiAxO1xcbn1cXG5cXG4uaGVyby1jb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0ei1pbmRleDogMDtcXG5cXHRtYXgtd2lkdGg6IDgwcmVtO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uaW5wdXQge1xcblxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsYm9yZGVyLWNvbG9yLGNvbG9yLGZpbGwsc3Ryb2tlLG9wYWNpdHksYm94LXNoYWRvdyx0cmFuc2Zvcm07XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjE1cztcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XFxuXFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNCwwLC4yLDEpO1xcblxcdGhlaWdodDogM3JlbTtcXG5cXHRmb250LXNpemU6IC44NzVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDI7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjEpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMDtcXG5cXHRib3JkZXItY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG5cXHRib3JkZXItd2lkdGg6IDFweDtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1yb3VuZGVkLWJ0biwuNXJlbSk7XFxufVxcblxcbi5pbnB1dDpmb2N1cyB7XFxuXFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpLDAgMCAwIDRweCBoc2xhKHZhcigtLWJjKS8uMik7XFxufVxcblxcbi5idG4gLmJhZGdlIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iMSkvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0biAuYmFkZ2Utb3V0bGluZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IGhzbGEodmFyKC0tYjIpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1iMikvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1wcmltYXJ5IC5iYWRnZSB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tcCkvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IGhzbGEodmFyKC0tcCkvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLW91dGxpbmUuYnRuLXByaW1hcnkgLmJhZGdlLW91dGxpbmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLW91dGxpbmUuYnRuLXByaW1hcnk6aG92ZXIgLmJhZGdlIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1wYykvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IGhzbGEodmFyKC0tcGMpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLW91dGxpbmUuYnRuLXByaW1hcnk6aG92ZXIgLmJhZGdlLm91dGxpbmUge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXBmKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wYykvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuOmFjdGl2ZTpmb2N1cywuYnRuOmFjdGl2ZTpob3ZlciB7XFxuXFx0YW5pbWF0aW9uOiBub25lO1xcblxcdHRyYW5zZm9ybTogc2NhbGUodmFyKC0tYnRuLWZvY3VzLXNjYWxlLC45NSkpO1xcbn1cXG5cXG4uYnRuLWFjdGl2ZSwuYnRuOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1uZikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IGhzbGEodmFyKC0tbmYpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bjpmb2N1cy12aXNpYmxlIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAycHggaHNsKHZhcigtLWIxKSksMCAwIDAgNHB4IGhzbCh2YXIoLS1uZikpO1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1wYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5LmJ0bi1hY3RpdmUsLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1wZikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IGhzbGEodmFyKC0tcGYpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5OmZvY3VzLXZpc2libGUge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKSwwIDAgMCA0cHggaHNsKHZhcigtLXApKTtcXG59XFxuXFxuLmJ0bi5nbGFzcy5idG4tYWN0aXZlLC5idG4uZ2xhc3M6aG92ZXIge1xcblxcdC0tZ2xhc3Mtb3BhY2l0eTogMjUlO1xcblxcdC0tZ2xhc3MtYm9yZGVyLW9wYWNpdHk6IDE1JTtcXG59XFxuXFxuLmJ0bi5nbGFzczpmb2N1cy12aXNpYmxlIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAycHggY3VycmVudENvbG9yO1xcbn1cXG5cXG4uYnRuLW91dGxpbmUuYnRuLXByaW1hcnkge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tb3V0bGluZS5idG4tcHJpbWFyeTpob3ZlciB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tcGYpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXBmKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0tcGMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4ubG9hZGluZy5idG4tY2lyY2xlOmJlZm9yZSwuYnRuLmxvYWRpbmcuYnRuLXNxdWFyZTpiZWZvcmUge1xcblxcdG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuLmJ0bi5sb2FkaW5nLmJ0bi1sZzpiZWZvcmUsLmJ0bi5sb2FkaW5nLmJ0bi14bDpiZWZvcmUge1xcblxcdGhlaWdodDogMS4yNXJlbTtcXG5cXHR3aWR0aDogMS4yNXJlbTtcXG59XFxuXFxuLmJ0bi5sb2FkaW5nLmJ0bi1zbTpiZWZvcmUsLmJ0bi5sb2FkaW5nLmJ0bi14czpiZWZvcmUge1xcblxcdGhlaWdodDogLjc1cmVtO1xcblxcdHdpZHRoOiAuNzVyZW07XFxufVxcblxcbi5idG4tZ3JvdXA+LmJ0bi1hY3RpdmUsLmJ0bi1ncm91cD5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkLmJ0biB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tcCkvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IGhzbGEodmFyKC0tcCkvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLWdyb3VwPi5idG4tYWN0aXZlOmZvY3VzLXZpc2libGUsLmJ0bi1ncm91cD5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkLmJ0bjpmb2N1cy12aXNpYmxlIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAycHggaHNsKHZhcigtLWIxKSksMCAwIDAgNHB4IGhzbCh2YXIoLS1wKSk7XFxufVxcblxcbi5idG4tZ3JvdXA+LmJ0bjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcblxcdG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG5cXG4uYnRuLWdyb3VwPi5idG46bm90KDpsYXN0LWNoaWxkKSB7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxufVxcblxcbkBrZXlmcmFtZXMgYnV0dG9uLXBvcCB7XFxuXFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUodmFyKC0tYnRuLWZvY3VzLXNjYWxlLC45NSkpO1xcblxcdH1cXG5cXG5cXHQ0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuXFx0fVxcblxcblxcdHRvIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcblxcdH1cXG59XFxuXFxuLmNhcmQ6Zm9jdXMtdmlzaWJsZSB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgMnB4IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLmNhcmQuYm9yZGVyZWQge1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWIyKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuXFx0Ym9yZGVyLXdpZHRoOiAxcHg7XFxufVxcblxcbi5jYXJkLmNvbXBhY3QgLmNhcmQtYm9keSB7XFxuXFx0Zm9udC1zaXplOiAuODc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jYXJkLmNvbXBhY3QgLmNhcmQtdGl0bGUge1xcblxcdG1hcmdpbi1ib3R0b206IC4yNXJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBjaGVja21hcmsge1xcblxcblxcdDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDVweDtcXG5cXHR9XFxuXFxuXFx0NTAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0ycHg7XFxuXFx0fVxcblxcblxcdHRvIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDA7XFxuXFx0fVxcbn1cXG5cXG4uZHJhd2VyLXRvZ2dsZTpmb2N1cy12aXNpYmxlfi5kcmF3ZXItY29udGVudCAuZHJhd2VyLWJ1dHRvbi5idG4tcHJpbWFyeSB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpLDAgMCAwIDRweCBoc2wodmFyKC0tcCkpO1xcbn1cXG5cXG4ubGFiZWwtdGV4dCB7XFxuXFx0Zm9udC1zaXplOiAuODc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4ubGFiZWwgYTpob3ZlciB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5pbnB1dC1ib3JkZXJlZCB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uaW5wdXQtZGlzYWJsZWQsLmlucHV0W2Rpc2FibGVkXSB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjIpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWIyKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuXFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uaW5wdXQtZGlzYWJsZWQ6OnBsYWNlaG9sZGVyLC5pbnB1dFtkaXNhYmxlZF06OnBsYWNlaG9sZGVyIHtcXG5cXHQtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XFxuXFx0LS10dy1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjI7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHksMSkpO1xcbn1cXG5cXG4ubW9ja3VwLXBob25lIC5kaXNwbGF5IHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuXFx0bWFyZ2luLXRvcDogLTI1cHg7XFxufVxcblxcbkBrZXlmcmFtZXMgcmFkaW9tYXJrIHtcXG5cXG5cXHQwJSB7XFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDAgMTJweCBoc2wodmFyKC0tYjEpKSBpbnNldCwwIDAgMCAxMnB4IGhzbCh2YXIoLS1iMSkpIGluc2V0LHZhcigtLWZvY3VzLXNoYWRvdyk7XFxuXFx0fVxcblxcblxcdDUwJSB7XFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IGhzbCh2YXIoLS1iMSkpIGluc2V0LDAgMCAwIDNweCBoc2wodmFyKC0tYjEpKSBpbnNldCx2YXIoLS1mb2N1cy1zaGFkb3cpO1xcblxcdH1cXG5cXG5cXHR0byB7XFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDAgNHB4IGhzbCh2YXIoLS1iMSkpIGluc2V0LDAgMCAwIDRweCBoc2wodmFyKC0tYjEpKSBpbnNldCx2YXIoLS1mb2N1cy1zaGFkb3cpO1xcblxcdH1cXG59XFxuXFxuLmFsZXJ0LWluZm8ge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDAuMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWluKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1pbikvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLnN0YXRpYyB7XFxuXFx0cG9zaXRpb246IHN0YXRpYztcXG59XFxuXFxuLmZpeGVkIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5tLTgge1xcblxcdG1hcmdpbjogMnJlbTtcXG59XFxuXFxuLm14LTIge1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5tYi01IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG5cXG4ubXQtNiB7XFxuXFx0bWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG5cXG4uZmxleCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmgtNiB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5taW4taC1zY3JlZW4ge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udy02IHtcXG5cXHR3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4udy1mdWxsIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1heC13LXNtIHtcXG5cXHRtYXgtd2lkdGg6IDI0cmVtO1xcbn1cXG5cXG4uZmxleC0xIHtcXG5cXHRmbGV4OiAxIDEgMCU7XFxufVxcblxcbi5mbGV4LXNocmluay0wIHtcXG5cXHRmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmctYmFzZS0yMDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWIyKSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLWJhc2UtMTAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iMSkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5zdHJva2UtY3VycmVudCB7XFxuXFx0c3Ryb2tlOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGV4dC01eGwge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmZvbnQtYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnNoYWRvdy0yeGwge1xcblxcdC0tdHctc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG5cXHQubGdcXFxcOmZsZXgtcm93IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOnRleHQtbGVmdCB7XFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCIsXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzLyUzQ2lucHV0JTIwY3NzJTIweUZ0aXlTJTNFXCIsXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzLyUzQ2lucHV0JTIwY3NzJTIwWnVWVTByJTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpRUFBYyxDQUFkLDhGQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7Q0FBYzs7QUFBZDs7O0NDY0Msc0JBQXNCO0FEZFQ7O0FBQWQ7O0NBQWM7O0FBQWQ7Q0NzQkMsZ0JBQWdCO0NBQ2hCLFdBQVc7QUR2QkU7O0FBQWQ7OztDQUFjOztB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Z0JBQUE7Q0FBQSxnQkFBQTtDQUFBLGdCQUFBO0NBQUEsaUJBQUE7Q0FBQSxxQkFBQTtDQUFBLGtCQUFBO0NBQUEsaUJBQUE7Q0FBQSxtQkFBQTtDQUFBLG1CQUFBO0NBQUEscUJBQUE7Q0FBQSx1QkFBQTtBSEFjOztBQUFkO0NHQUEsZ0JBQUE7Q0FBQSxtQkFBQTtDQUFBLGVBQUE7Q0FBQSxrQkFBQTtDQUFBLG1CQUFBO0NBQUEsZUFBQTtDQUFBLGVBQUE7Q0FBQSxrQkFBQTtDQUFBLGVBQUE7Q0FBQSxnQkFBQTtDQUFBLGNBQUE7Q0FBQSxlQUFBO0NBQUEsZ0JBQUE7Q0FBQSxpQkFBQTtDQUFBLGNBQUE7Q0FBQSxlQUFBO0NBQUEscUJBQUE7Q0FBQSxrQkFBQTtDQUFBLGtCQUFBO0NBQUEsb0JBQUE7Q0FBQSxrQkFBQTtBSEFjOztBQUFkO0NHQUEsbUJBQUE7Q0FBQSxvQkFBQTtDQUFBLGFBQUE7Q0FBQSxvQkFBQTtDQUFBLHFCQUFBO0NBQUEsZUFBQTtDQUFBLGdCQUFBO0NBQUEsaUJBQUE7Q0FBQSxlQUFBO0NBQUEsb0JBQUE7Q0FBQSxtQkFBQTtDQUFBLGVBQUE7Q0FBQSxtQkFBQTtDQUFBLHFCQUFBO0NBQUEsbUJBQUE7Q0FBQSxlQUFBO0NBQUEscUJBQUE7Q0FBQSxrQkFBQTtDQUFBLGlCQUFBO0NBQUEsbUJBQUE7QUhBYzs7QUFBZDtDR0FBLGVBQUE7Q0FBQSxnQkFBQTtDQUFBLGtCQUFBO0NBQUEsZUFBQTtDQUFBLGdCQUFBO0NBQUEsa0JBQUE7Q0FBQSxlQUFBO0NBQUEsZUFBQTtDQUFBLGtCQUFBO0NBQUEsaUJBQUE7Q0FBQSxrQkFBQTtDQUFBLGdCQUFBO0NBQUEsZUFBQTtDQUFBLGVBQUE7Q0FBQSxlQUFBO0NBQUEsY0FBQTtDQUFBLHFCQUFBO0NBQUEsa0JBQUE7Q0FBQSxpQkFBQTtDQUFBLG1CQUFBO0NBQUEsdUJBQUE7Q0FBQSxrQkFBQTtDQUFBLG9CQUFBO0NBQUEsb0JBQUE7Q0FBQSxtQkFBQTtDQUFBLG1CQUFBO0NBQUEscUJBQUE7Q0FBQSxrQkFBQTtBSEFjOztBQUFkO0NH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QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5cXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5cXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblwiLFwiLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXG5cXG4vKlxcbkRvY3VtZW50XFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyoqXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZWN0aW9uc1xcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHRzeXN0ZW0tdWksXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxuXFx0XFx0J1NlZ29lIFVJJyxcXG5cXHRcXHRSb2JvdG8sXFxuXFx0XFx0SGVsdmV0aWNhLFxcblxcdFxcdEFyaWFsLFxcblxcdFxcdHNhbnMtc2VyaWYsXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknO1xcbn1cXG5cXG4vKlxcbkdyb3VwaW5nIGNvbnRlbnRcXG49PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuKi9cXG5cXG5ociB7XFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnJbdGl0bGVdIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0dWktbW9ub3NwYWNlLFxcblxcdFxcdFNGTW9uby1SZWd1bGFyLFxcblxcdFxcdENvbnNvbGFzLFxcblxcdFxcdCdMaWJlcmF0aW9uIE1vbm8nLFxcblxcdFxcdE1lbmxvLFxcblxcdFxcdG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuXFx0Zm9udC1zaXplOiA3NSU7XFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG5cXHRib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuXFx0dG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuVGFidWxhciBkYXRhXFxuPT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4qL1xcblxcbnRhYmxlIHtcXG5cXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcblxcdGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkZvcm1zXFxuPT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHRtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbjEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5SZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsICc6aW52YWxpZCcgc3R5bGVzIGluIEZpcmVmb3guXFxuU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczN1xcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmxlZ2VuZCB7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcblxcdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gJ2luaGVyaXQnIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuXFx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkludGVyYWN0aXZlXFxuPT09PT09PT09PT1cXG4qL1xcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblwiLFwiLyoqXFxuICogTWFudWFsbHkgZm9ya2VkIGZyb20gU1VJVCBDU1MgQmFzZTogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZVxcbiAqIEEgdGhpbiBsYXllciBvbiB0b3Agb2Ygbm9ybWFsaXplLmNzcyB0aGF0IHByb3ZpZGVzIGEgc3RhcnRpbmcgcG9pbnQgbW9yZVxcbiAqIHN1aXRhYmxlIGZvciB3ZWIgYXBwbGljYXRpb25zLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4gKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBUYWlsd2luZCBjdXN0b20gcmVzZXQgc3R5bGVzXFxuICovXFxuXFxuLyoqXFxuICogMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgKHdpdGggVGFpbHdpbmQncyBkZWZhdWx0XFxuICogICAgc2Fucy1zZXJpZiBmb250IHN0YWNrIGFzIGEgZmFsbGJhY2spIGFzIGEgc2FuZSBkZWZhdWx0LlxcbiAqIDIuIFVzZSBUYWlsd2luZCdzIGRlZmF1bHQgXFxcIm5vcm1hbFxcXCIgbGluZS1oZWlnaHQgc28gdGhlIHVzZXIgaXNuJ3QgZm9yY2VkXFxuICogICAgdG8gb3ZlcnJpZGUgaXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGV2ZW4gd2hlbiB1c2luZyB0aGUgZGVmYXVsdCB0aGVtZS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5zYW5zJywgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiKTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKipcXG4gKiBJbmhlcml0IGZvbnQtZmFtaWx5IGFuZCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXNcXG4gKiBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguXFxuICpcXG4gKiAgICBXZSB1c2VkIHRvIHNldCB0aGlzIGluIHRoZSBodG1sIGVsZW1lbnQgYW5kIGluaGVyaXQgZnJvbVxcbiAqICAgIHRoZSBwYXJlbnQgZWxlbWVudCBmb3IgZXZlcnl0aGluZyBlbHNlLiBUaGlzIGNhdXNlZCBpc3N1ZXNcXG4gKiAgICBpbiBzaGFkb3ctZG9tLWVuaGFuY2VkIGVsZW1lbnRzIGxpa2UgPGRldGFpbHM+IHdoZXJlIHRoZSBjb250ZW50XFxuICogICAgaXMgd3JhcHBlZCBieSBhIGRpdiB3aXRoIGJveC1zaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzRcXG4gKlxcbiAqXFxuICogMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguXFxuICpcXG4gKiAgICBCeSBkZWZhdWx0LCB0aGUgd2F5IHRoZSBicm93c2VyIHNwZWNpZmllcyB0aGF0IGFuIGVsZW1lbnQgc2hvdWxkIGhhdmUgbm9cXG4gKiAgICBib3JkZXIgaXMgYnkgc2V0dGluZyBpdCdzIGJvcmRlci1zdHlsZSB0byBgbm9uZWAgaW4gdGhlIHVzZXItYWdlbnRcXG4gKiAgICBzdHlsZXNoZWV0LlxcbiAqXFxuICogICAgSW4gb3JkZXIgdG8gZWFzaWx5IGFkZCBib3JkZXJzIHRvIGVsZW1lbnRzIGJ5IGp1c3Qgc2V0dGluZyB0aGUgYGJvcmRlci13aWR0aGBcXG4gKiAgICBwcm9wZXJ0eSwgd2UgY2hhbmdlIHRoZSBkZWZhdWx0IGJvcmRlci1zdHlsZSBmb3IgYWxsIGVsZW1lbnRzIHRvIGBzb2xpZGAsIGFuZFxcbiAqICAgIHVzZSBib3JkZXItd2lkdGggdG8gaGlkZSB0aGVtIGluc3RlYWQuIFRoaXMgd2F5IG91ciBgYm9yZGVyYCB1dGlsaXRpZXMgb25seVxcbiAqICAgIG5lZWQgdG8gc2V0IHRoZSBgYm9yZGVyLXdpZHRoYCBwcm9wZXJ0eSBpbnN0ZWFkIG9mIHRoZSBlbnRpcmUgYGJvcmRlcmBcXG4gKiAgICBzaG9ydGhhbmQsIG1ha2luZyBvdXIgYm9yZGVyIHV0aWxpdGllcyBtdWNoIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGNvbXBvc2UuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTZcXG4gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gKi9cXG5cXG5ociB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi8qKlxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcbiAqXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogdGhlbWUoJ2NvbG9ycy5ncmF5LjQwMCcsICNhMWExYWEpO1xcbn1cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqXFxuICogT3ZlcnJpZGUgbGVnYWN5IGZvY3VzIHJlc2V0IGZyb20gTm9ybWFsaXplIHdpdGggbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGVzLlxcbiAqXFxuICogVGhpcyBpcyBhY3R1YWxseSBhbiBpbXByb3ZlbWVudCBvdmVyIHRoZSBuZXcgZGVmYXVsdHMgaW4gRmlyZWZveCBpbiBvdXIgdGVzdGluZyxcXG4gKiBhcyBpdCB0cmlnZ2VycyB0aGUgYmV0dGVyIGZvY3VzIHN0eWxlcyBldmVuIGZvciBsaW5rcywgd2hpY2ggc3RpbGwgdXNlIGEgZG90dGVkXFxuICogb3V0bGluZSBpbiBGaXJlZm94IGJ5IGRlZmF1bHQuXFxuICovXFxuIFxcbjotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogYXV0bztcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mXFxuICogb3B0LW91dC5cXG4gKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBmb3JtIGVsZW1lbnQgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIGZvcmdldCB0b1xcbiAqIHN0eWxlIGV4cGxpY2l0bHkgc28geW91IGRvbid0IGluYWR2ZXJ0ZW50bHkgaW50cm9kdWNlXFxuICogc3R5bGVzIHRoYXQgZGV2aWF0ZSBmcm9tIHlvdXIgZGVzaWduIHN5c3RlbS4gVGhlc2Ugc3R5bGVzXFxuICogc3VwcGxlbWVudCBhIHBhcnRpYWwgcmVzZXQgdGhhdCBpcyBhbHJlYWR5IGFwcGxpZWQgYnlcXG4gKiBub3JtYWxpemUuY3NzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgY29uZmlndXJlZCAnbW9ubycgZm9udCBmYW1pbHkgZm9yIGVsZW1lbnRzIHRoYXRcXG4gKiBhcmUgZXhwZWN0ZWQgdG8gYmUgcmVuZGVyZWQgd2l0aCBhIG1vbm9zcGFjZSBmb250LCBmYWxsaW5nXFxuICogYmFjayB0byB0aGUgc3lzdGVtIG1vbm9zcGFjZSBzdGFjayBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkXFxuICogJ21vbm8nIGZvbnQgZmFtaWx5LlxcbiAqL1xcblxcbnByZSxcXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5tb25vJywgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2UpO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdCBhcyB0aGF0J3NcXG4gKiAgICB0aGUgYmVoYXZpb3IgeW91IHdhbnQgYWxtb3N0IGFsbCBvZiB0aGUgdGltZS4gSW5zcGlyZWQgYnlcXG4gKiAgICBDU1MgUmVtZWR5LCB3aXRoIGBzdmdgIGFkZGVkIGFzIHdlbGwuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICogXFxuICogMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlXFxuICogICAgc2Vuc2libHkgYnkgZGVmYXVsdCB3aGVuIG92ZXJyaWRpbmcgYGRpc3BsYXlgIGJ5IGFkZGluZyBhXFxuICogICAgdXRpbGl0eSBsaWtlIGBpbmxpbmVgLlxcbiAqXFxuICogICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnRpbmcgZXJyb3IgaW4gc29tZVxcbiAqICAgIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuICogXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwXFxuICovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmVcXG4gKiB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIEVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdnVuZGVmaW5lZFxuICogdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIHJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy9cbi8vIEluIG9yZGVyIHRvIGF2b2lkIHJlbW92aW5nIGFuZCByZS1hZGRpbmcgc3Vic2NyaXB0aW9ucyBlYWNoIHRpbWUgdGhpcyBob29rIGlzIGNhbGxlZCxcbi8vIHRoZSBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGlzIGhvb2sgc2hvdWxkIGJlIG1lbW9pemVkIGluIHNvbWUgd2F54oCTXG4vLyBlaXRoZXIgYnkgd3JhcHBpbmcgdGhlIGVudGlyZSBwYXJhbXMgb2JqZWN0IHdpdGggdXNlTWVtbygpXG4vLyBvciBieSB3cmFwcGluZyB0aGUgaW5kaXZpZHVhbCBjYWxsYmFja3Mgd2l0aCB1c2VDYWxsYmFjaygpLlxuXG5mdW5jdGlvbiB1c2VTdWJzY3JpcHRpb24oX3JlZikge1xuICB2YXIgZ2V0Q3VycmVudFZhbHVlID0gX3JlZi5nZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmUgPSBfcmVmLnN1YnNjcmliZTtcblxuICAvLyBSZWFkIHRoZSBjdXJyZW50IHZhbHVlIGZyb20gb3VyIHN1YnNjcmlwdGlvbi5cbiAgLy8gV2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMsIHdlJ2xsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIFJlYWN0LlxuICAvLyBJdCdzIGltcG9ydGFudCB0byBhbHNvIHN0b3JlIHRoZSBob29rIHBhcmFtcyBzbyB0aGF0IHdlIGNhbiBjaGVjayBmb3Igc3RhbGVuZXNzLlxuICAvLyAoU2VlIHRoZSBjb21tZW50IGluIGNoZWNrRm9yVXBkYXRlcygpIGJlbG93IGZvciBtb3JlIGluZm8uKVxuICB2YXIgX3VzZVN0YXRlID0gcmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IGdldEN1cnJlbnRWYWx1ZSgpXG4gICAgfTtcbiAgfSksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciB2YWx1ZVRvUmV0dXJuID0gc3RhdGUudmFsdWU7IC8vIElmIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkIHNpbmNlIG91ciBsYXN0IHJlbmRlciwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggaXRzIGN1cnJlbnQgdmFsdWUuXG5cbiAgaWYgKHN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgLy8gSWYgdGhlIHN1YnNjcmlwdGlvbiBoYXMgYmVlbiB1cGRhdGVkLCB3ZSdsbCBzY2hlZHVsZSBhbm90aGVyIHVwZGF0ZSB3aXRoIFJlYWN0LlxuICAgIC8vIFJlYWN0IHdpbGwgcHJvY2VzcyB0aGlzIHVwZGF0ZSBpbW1lZGlhdGVseSwgc28gdGhlIG9sZCBzdWJzY3JpcHRpb24gdmFsdWUgd29uJ3QgYmUgY29tbWl0dGVkLlxuICAgIC8vIEl0IGlzIHN0aWxsIG5pY2UgdG8gYXZvaWQgcmV0dXJuaW5nIGEgbWlzbWF0Y2hlZCB2YWx1ZSB0aG91Z2gsIHNvIGxldCdzIG92ZXJyaWRlIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgdmFsdWVUb1JldHVybiA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogdmFsdWVUb1JldHVyblxuICAgIH0pO1xuICB9IC8vIERpc3BsYXkgdGhlIGN1cnJlbnQgdmFsdWUgZm9yIHRoaXMgaG9vayBpbiBSZWFjdCBEZXZUb29scy5cblxuXG4gIHJlYWN0LnVzZURlYnVnVmFsdWUodmFsdWVUb1JldHVybik7IC8vIEl0IGlzIGltcG9ydGFudCBub3QgdG8gc3Vic2NyaWJlIHdoaWxlIHJlbmRlcmluZyBiZWNhdXNlIHRoaXMgY2FuIGxlYWQgdG8gbWVtb3J5IGxlYWtzLlxuICAvLyAoTGVhcm4gbW9yZSBhdCByZWFjdGpzLm9yZy9kb2NzL3N0cmljdC1tb2RlLmh0bWwjZGV0ZWN0aW5nLXVuZXhwZWN0ZWQtc2lkZS1lZmZlY3RzKVxuICAvLyBJbnN0ZWFkLCB3ZSB3YWl0IHVudGlsIHRoZSBjb21taXQgcGhhc2UgdG8gYXR0YWNoIG91ciBoYW5kbGVyLlxuICAvL1xuICAvLyBXZSBpbnRlbnRpb25hbGx5IHVzZSBhIHBhc3NpdmUgZWZmZWN0ICh1c2VFZmZlY3QpIHJhdGhlciB0aGFuIGEgc3luY2hyb25vdXMgb25lICh1c2VMYXlvdXRFZmZlY3QpXG4gIC8vIHNvIHRoYXQgd2UgZG9uJ3Qgc3RyZXRjaCB0aGUgY29tbWl0IHBoYXNlLlxuICAvLyBUaGlzIGFsc28gaGFzIGFuIGFkZGVkIGJlbmVmaXQgd2hlbiBtdWx0aXBsZSBjb21wb25lbnRzIGFyZSBzdWJzY3JpYmVkIHRvIHRoZSBzYW1lIHNvdXJjZTpcbiAgLy8gSXQgYWxsb3dzIGVhY2ggb2YgdGhlIGV2ZW50IGhhbmRsZXJzIHRvIHNhZmVseSBzY2hlZHVsZSB3b3JrIHdpdGhvdXQgcG90ZW50aWFsbHkgcmVtb3ZpbmcgYW4gYW5vdGhlciBoYW5kbGVyLlxuICAvLyAoTGVhcm4gbW9yZSBhdCBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvazB5dnI1OTcwbylcblxuICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuXG4gICAgdmFyIGNoZWNrRm9yVXBkYXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBldmVuIGFmdGVyIGJlaW5nIHVuc3Vic2NyaWJlZCxcbiAgICAgIC8vIGlmIGl0J3MgcmVtb3ZlZCBhcyBhIHJlc3VsdCBvZiBhIHN1YnNjcmlwdGlvbiBldmVudC91cGRhdGUuXG4gICAgICAvLyBJbiB0aGlzIGNhc2UsIFJlYWN0IHdpbGwgbG9nIGEgREVWIHdhcm5pbmcgYWJvdXQgYW4gdXBkYXRlIGZyb20gYW4gdW5tb3VudGVkIGNvbXBvbmVudC5cbiAgICAgIC8vIFdlIGNhbiBhdm9pZCB0cmlnZ2VyaW5nIHRoYXQgd2FybmluZyB3aXRoIHRoaXMgY2hlY2suXG4gICAgICBpZiAoZGlkVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBXZSB1c2UgYSBzdGF0ZSB1cGRhdGVyIGZ1bmN0aW9uIHRvIGF2b2lkIHNjaGVkdWxpbmcgd29yayBmb3IgYSBzdGFsZSBzb3VyY2UuXG4gICAgICAvLyBIb3dldmVyIGl0J3MgaW1wb3J0YW50IHRvIGVhZ2VybHkgcmVhZCB0aGUgY3VycmVudGx5IHZhbHVlLFxuICAgICAgLy8gc28gdGhhdCBhbGwgc2NoZWR1bGVkIHdvcmsgc2hhcmVzIHRoZSBzYW1lIHZhbHVlIChpbiB0aGUgZXZlbnQgb2YgbXVsdGlwbGUgc3Vic2NyaXB0aW9ucykuXG4gICAgICAvLyBUaGlzIGF2b2lkcyB2aXN1YWwgXCJ0ZWFyaW5nXCIgd2hlbiBhIG11dGF0aW9uIGhhcHBlbnMgZHVyaW5nIGEgKGNvbmN1cnJlbnQpIHJlbmRlci5cblxuXG4gICAgICB2YXIgdmFsdWUgPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgLy8gSWdub3JlIHZhbHVlcyBmcm9tIHN0YWxlIHNvdXJjZXMhXG4gICAgICAgIC8vIFNpbmNlIHdlIHN1YnNjcmliZSBhbiB1bnN1YnNjcmliZSBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZm9yIGEgc3RhbGUgKHByZXZpb3VzKSBzdWJzY3JpcHRpb24uXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgYXZvaWRzIHNjaGVkdWxpbmcgYW4gdXBkYXRlIGZvciB0aGF0IHN0YWxlIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBwcmV2U3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9IC8vIFNvbWUgc3Vic2NyaXB0aW9ucyB3aWxsIGF1dG8taW52b2tlIHRoZSBoYW5kbGVyLCBldmVuIGlmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZC5cbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLCBubyB1cGRhdGUgaXMgbmVlZGVkLlxuICAgICAgICAvLyBSZXR1cm4gc3RhdGUgYXMtaXMgc28gUmVhY3QgY2FuIGJhaWwgb3V0IGFuZCBhdm9pZCBhbiB1bm5lY2Vzc2FyeSByZW5kZXIuXG5cblxuICAgICAgICBpZiAocHJldlN0YXRlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2Fzc2lnbih7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShjaGVja0ZvclVwZGF0ZXMpOyAvLyBCZWNhdXNlIHdlJ3JlIHN1YnNjcmliaW5nIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IGFuIHVwZGF0ZSBoYXMgb2NjdXJyZWQgYmV0d2VlbiByZW5kZXIgYW5kIG91ciBlZmZlY3QgaGFuZGxlci5cbiAgICAvLyBDaGVjayBmb3IgdGhpcyBhbmQgc2NoZWR1bGUgYW4gdXBkYXRlIGlmIHdvcmsgaGFzIG9jY3VycmVkLlxuXG4gICAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW2dldEN1cnJlbnRWYWx1ZSwgc3Vic2NyaWJlXSk7IC8vIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBmb3Igb3VyIGNhbGxlciB0byB1c2Ugd2hpbGUgcmVuZGVyaW5nLlxuXG4gIHJldHVybiB2YWx1ZVRvUmV0dXJuO1xufVxuXG5leHBvcnRzLnVzZVN1YnNjcmlwdGlvbiA9IHVzZVN1YnNjcmlwdGlvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm5vU1NSIiwiZHluYW1pYyIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2xvYWRhYmxlIiwib2JqIiwiX19lc01vZHVsZSIsImlzU2VydmVyU2lkZSIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJsb2FkYWJsZU9wdGlvbnMiLCJ3ZWJwYWNrIiwibW9kdWxlcyIsIkxvYWRpbmciLCJsb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwidGltZWRPdXQiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJsb2FkYWJsZUZuIiwibWVzc2FnZSIsInN0YWNrIiwiUHJvbWlzZSIsImxvYWRlciIsInN1c3BlbnNlT3B0aW9ucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUyIsIl9fTkVYVF9SRUFDVF9ST09UIiwic3VzcGVuc2UiLCJFcnJvciIsImxvYWRhYmxlR2VuZXJhdGVkIiwic3NyIiwiTG9hZGFibGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiX3VzZVN1YnNjcmlwdGlvbiIsIl9sb2FkYWJsZUNvbnRleHQiLCJBTExfSU5JVElBTElaRVJTIiwiUkVBRFlfSU5JVElBTElaRVJTIiwiaW5pdGlhbGl6ZWQiLCJsb2FkIiwicHJvbWlzZSIsInN0YXRlIiwibG9hZGVkIiwidGhlbiIsImVyciIsInJlc29sdmUiLCJjcmVhdGVMb2FkYWJsZUNvbXBvbmVudCIsImxvYWRGbiIsIm9wdHMiLCJhc3NpZ24iLCJkZWxheSIsInRpbWVvdXQiLCJsYXp5Iiwic3Vic2NyaXB0aW9uIiwiaW5pdCIsInN1YiIsIkxvYWRhYmxlU3Vic2NyaXB0aW9uIiwiZ2V0Q3VycmVudFZhbHVlIiwiYmluZCIsInN1YnNjcmliZSIsInJldHJ5IiwicHVzaCIsInJlc29sdmVXZWFrIiwibW9kdWxlSWRzIiwiaWRzIiwibW9kdWxlSWQiLCJpbmRleE9mIiwiTG9hZGFibGVJbXBsIiwicHJvcHMiLCJyZWYiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN1YnNjcmlwdGlvbiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwibW9kdWxlTmFtZSIsInVzZU1lbW8iLCJMYXp5SW1wbCIsIkxvYWRhYmxlQ29tcG9uZW50IiwicHJlbG9hZCIsImZvcndhcmRSZWYiLCJfbG9hZEZuIiwiX29wdHMiLCJfY2FsbGJhY2tzIiwiU2V0IiwiX2RlbGF5IiwiX3RpbWVvdXQiLCJfcmVzIiwiX2NsZWFyVGltZW91dHMiLCJfc3RhdGUiLCJyZXMiLCJvcHRzMSIsInNldFRpbWVvdXQiLCJfdXBkYXRlIiwiX2VyciIsInBhcnRpYWwiLCJjYWxsYmFjayIsImNsZWFyVGltZW91dCIsImFkZCIsIkxvYWRhYmxlIiwiZmx1c2hJbml0aWFsaXplcnMiLCJpbml0aWFsaXplcnMiLCJwcm9taXNlcyIsImxlbmd0aCIsInBvcCIsImFsbCIsInByZWxvYWRBbGwiLCJyZXNvbHZlSW5pdGlhbGl6ZXJzIiwicmVqZWN0IiwicHJlbG9hZFJlYWR5IiwicmVzb2x2ZVByZWxvYWQiLCJ3aW5kb3ciLCJfX05FWFRfUFJFTE9BRFJFQURZIiwiX2RlZmF1bHQiLCJXYWxsZXRDb25uZWN0aW9uUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=