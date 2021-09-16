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
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v2.2.14 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n}\n\n:root {\n\tbackground-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n\tcolor: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\nhtml {\n\t-webkit-tap-highlight-color: transparent;\n}\n\n:root {\n\t--p: 259 94.4% 51.2%;\n\t--pf: 259 94.3% 41%;\n\t--pc: 0 0% 100%;\n\t--s: 314 100% 47.1%;\n\t--sf: 314 100% 37.1%;\n\t--sc: 0 0% 100%;\n\t--a: 174 60% 51%;\n\t--af: 174 59.8% 41%;\n\t--ac: 0 0% 100%;\n\t--n: 219 14.1% 27.8%;\n\t--nf: 222 13.4% 19%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 20% 98%;\n\t--b3: 216 12.2% 83.9%;\n\t--bc: 215 27.9% 16.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 0.5rem;\n\t--rounded-badge: 1.9rem;\n\t--animation-btn: 0.25s;\n\t--animation-input: .2s;\n\t--padding-card: 2rem;\n\t--btn-text-case: uppercase;\n\t--btn-focus-scale: 0.95;\n\t--navbar-padding: .5rem;\n\t--border-btn: 1px;\n\t--tab-border: 1px;\n\t--tab-radius: 0.5rem;\n\t--tab-spacer: 0.5rem;\n\t--focus-ring: 2px;\n\t--focus-ring-offset: 2px;\n\t--glass-opacity: 30%;\n\t--glass-border-opacity: 10%;\n\t--glass-reflex-degree: 100deg;\n\t--glass-reflex-opacity: 10%;\n\t--glass-blur: 40px;\n\t--glass-text-shadow-opacity: 5%;\n}\n\n@media (prefers-color-scheme: dark) {\n\n\t:root {\n\t\t--p: 259 94% 61%;\n\t\t--pf: 259 94.4% 51.2%;\n\t\t--pc: 0 0% 100%;\n\t\t--s: 314 100% 47.1%;\n\t\t--sf: 314 100% 37.1%;\n\t\t--sc: 0 0% 100%;\n\t\t--a: 174 60% 51%;\n\t\t--af: 174 59.8% 41%;\n\t\t--ac: 0 0% 100%;\n\t\t--n: 222 13.4% 19%;\n\t\t--nf: 223 13.7% 10%;\n\t\t--nc: 0 0% 100%;\n\t\t--b1: 219 14.1% 27.8%;\n\t\t--b2: 222 13.4% 19%;\n\t\t--b3: 223 13.7% 10%;\n\t\t--bc: 228 14.3% 93.1%;\n\t\t--in: 202 100% 70%;\n\t\t--su: 89 61.6% 52%;\n\t\t--wa: 54 68.8% 63.5%;\n\t\t--er: 0 100% 71.8%;\n\t}\n}\n\n[data-theme=light] {\n\t--p: 259 94.4% 51.2%;\n\t--pf: 259 94.3% 41%;\n\t--pc: 0 0% 100%;\n\t--s: 314 100% 47.1%;\n\t--sf: 314 100% 37.1%;\n\t--sc: 0 0% 100%;\n\t--a: 174 60% 51%;\n\t--af: 174 59.8% 41%;\n\t--ac: 0 0% 100%;\n\t--n: 219 14.1% 27.8%;\n\t--nf: 222 13.4% 19%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 20% 98%;\n\t--b3: 216 12.2% 83.9%;\n\t--bc: 215 27.9% 16.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 0.5rem;\n\t--rounded-badge: 1.9rem;\n\t--animation-btn: 0.25s;\n\t--animation-input: .2s;\n\t--padding-card: 2rem;\n\t--btn-text-case: uppercase;\n\t--btn-focus-scale: 0.95;\n\t--navbar-padding: .5rem;\n\t--border-btn: 1px;\n\t--tab-border: 1px;\n\t--tab-radius: 0.5rem;\n\t--tab-spacer: 0.5rem;\n\t--focus-ring: 2px;\n\t--focus-ring-offset: 2px;\n\t--glass-opacity: 30%;\n\t--glass-border-opacity: 10%;\n\t--glass-reflex-degree: 100deg;\n\t--glass-reflex-opacity: 10%;\n\t--glass-blur: 40px;\n\t--glass-text-shadow-opacity: 5%;\n}\n\n[data-theme=dark] {\n\t--p: 259 94% 61%;\n\t--pf: 259 94.4% 51.2%;\n\t--pc: 0 0% 100%;\n\t--s: 314 100% 47.1%;\n\t--sf: 314 100% 37.1%;\n\t--sc: 0 0% 100%;\n\t--a: 174 60% 51%;\n\t--af: 174 59.8% 41%;\n\t--ac: 0 0% 100%;\n\t--n: 222 13.4% 19%;\n\t--nf: 223 13.7% 10%;\n\t--nc: 0 0% 100%;\n\t--b1: 219 14.1% 27.8%;\n\t--b2: 222 13.4% 19%;\n\t--b3: 223 13.7% 10%;\n\t--bc: 228 14.3% 93.1%;\n\t--in: 202 100% 70%;\n\t--su: 89 61.6% 52%;\n\t--wa: 54 68.8% 63.5%;\n\t--er: 0 100% 71.8%;\n}\n\n[data-theme=cupcake] {\n\t--p: 183 47.4% 59%;\n\t--pf: 183 47.2% 49%;\n\t--pc: 0 0% 100%;\n\t--s: 338 71.4% 78%;\n\t--sf: 338 71.8% 68%;\n\t--sc: 0 0% 100%;\n\t--a: 39 84.1% 58%;\n\t--af: 39 83.7% 48%;\n\t--ac: 0 0% 100%;\n\t--n: 280 46.5% 13.9%;\n\t--nf: 279 46.4% 11%;\n\t--nc: 0 0% 100%;\n\t--b1: 24 33.3% 97.1%;\n\t--b2: 27 22% 92%;\n\t--b3: 22 14.3% 89%;\n\t--bc: 280 46.5% 13.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 1.9rem;\n\t--rounded-badge: 1.9rem;\n\t--tab-border: 2px;\n}\n\n[data-theme=bumblebee] {\n\t--p: 50 94.4% 58%;\n\t--pf: 50 94.3% 47.8%;\n\t--pc: 240 33.3% 14.1%;\n\t--s: 41 74.2% 52.9%;\n\t--sf: 41 73.6% 43.1%;\n\t--sc: 0 0% 100%;\n\t--a: 240 33.3% 14.1%;\n\t--af: 240 33.3% 10%;\n\t--ac: 0 0% 100%;\n\t--n: 240 33.3% 14.1%;\n\t--nf: 240 33.3% 10%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 100%;\n\t--b2: 0 0% 96.1%;\n\t--b3: 0 0% 89%;\n\t--bc: 0 0% 0%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n}\n\n[data-theme=emerald] {\n\t--p: 141 50% 60%;\n\t--pf: 141 49.8% 50%;\n\t--pc: 210 20% 98%;\n\t--s: 219 96.1% 60%;\n\t--sf: 219 96.1% 50%;\n\t--sc: 210 20% 98%;\n\t--a: 10 81.2% 56.1%;\n\t--af: 10 81.2% 45.9%;\n\t--ac: 210 20% 98%;\n\t--n: 219 20.3% 25.1%;\n\t--nf: 220 19.5% 15.1%;\n\t--nc: 210 20% 98%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 20% 98%;\n\t--b3: 0 0% 94.9%;\n\t--bc: 219 20.3% 25.1%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--animation-btn: 0;\n\t--animation-input: 0;\n\t--btn-focus-scale: 1;\n}\n\n[data-theme=corporate] {\n\t--p: 229 95.7% 63.9%;\n\t--pf: 229 95.7% 53.9%;\n\t--pc: 233 27.3% 12.9%;\n\t--s: 215 26.3% 59%;\n\t--sf: 214 26.1% 48.8%;\n\t--sc: 233 27.3% 12.9%;\n\t--a: 154 49% 60%;\n\t--af: 154 49% 50%;\n\t--ac: 233 27.3% 12.9%;\n\t--n: 233 27.3% 12.9%;\n\t--nf: 240 25% 3.1%;\n\t--nc: 210 38.5% 94.9%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 60% 98%;\n\t--b3: 210 38.5% 94.9%;\n\t--bc: 233 27.3% 12.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--animation-btn: 0;\n\t--animation-input: 0;\n\t--btn-focus-scale: 1;\n}\n\n[data-theme=synthwave] {\n\t--p: 321 69.6% 69%;\n\t--pf: 321 70.3% 59%;\n\t--pc: 257 63.2% 17.1%;\n\t--sf: 197 87.4% 75.1%;\n\t--s: 197 86.6% 64.9%;\n\t--sc: 257 63.2% 17.1%;\n\t--af: 48 89.3% 67.1%;\n\t--a: 48 89% 57.1%;\n\t--ac: 257 63.2% 17.1%;\n\t--n: 253 60.8% 19%;\n\t--nf: 257 64.3% 11%;\n\t--nc: 260 60% 98%;\n\t--b1: 254 59.1% 25.9%;\n\t--b2: 253 60.8% 19%;\n\t--b3: 257 64.3% 11%;\n\t--bc: 260 60% 98%;\n\t--in: 199 87% 63.9%;\n\t--su: 168 74.2% 68%;\n\t--wa: 48 89% 57.1%;\n\t--er: 352 73.6% 56.9%;\n}\n\n[data-theme=retro] {\n\tfont-family: uisecondaryerif,Georgia,Cambria,Times New Roman,Times,serif;\n\t--p: 3 73.8% 76.1%;\n\t--pf: 3 73.6% 65.9%;\n\t--pc: 345 5.3% 14.9%;\n\t--s: 145 27.3% 72%;\n\t--sf: 145 26.8% 62%;\n\t--sc: 345 5.3% 14.9%;\n\t--a: 49 67.2% 76.1%;\n\t--af: 49 66.7% 65.9%;\n\t--ac: 345 5.3% 14.9%;\n\t--n: 42 16.8% 42%;\n\t--nf: 41 13.1% 23.9%;\n\t--nc: 45 47.1% 80%;\n\t--b1: 45 47.1% 80%;\n\t--b2: 45 37.1% 72%;\n\t--b3: 42 36% 65.1%;\n\t--bc: 345 5.3% 14.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 0.4rem;\n\t--rounded-btn: 0.4rem;\n\t--rounded-badge: 0.4rem;\n}\n\n[data-theme=cyberpunk] {\n\tfont-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n\t--p: 345 100% 72.9%;\n\t--pf: 344 100% 67.1%;\n\t--pc: 0 0% 0%;\n\t--s: 195 80.4% 70%;\n\t--sf: 194 65.8% 61%;\n\t--sc: 0 0% 0%;\n\t--a: 276 74.3% 71%;\n\t--af: 276 75.7% 62.9%;\n\t--ac: 0 0% 0%;\n\t--n: 57 100% 12.9%;\n\t--nf: 60 80% 2%;\n\t--nc: 56 100% 50%;\n\t--b1: 56 100% 50%;\n\t--b2: 56 100% 42.9%;\n\t--b3: 56 100% 36.1%;\n\t--bc: 0 0% 0%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 0;\n\t--rounded-btn: 0;\n\t--rounded-badge: 0;\n\t--tab-radius: 0;\n}\n\n[data-theme=valentine] {\n\t--p: 353 73.8% 67.1%;\n\t--pf: 353 73.6% 56.9%;\n\t--pc: 0 0% 100%;\n\t--s: 254 86.4% 76.9%;\n\t--sf: 254 86.9% 67.1%;\n\t--sc: 0 0% 100%;\n\t--a: 181 55.6% 70%;\n\t--af: 181 54.9% 60%;\n\t--ac: 0 0% 100%;\n\t--n: 336 42.9% 48%;\n\t--nf: 340 40.2% 38%;\n\t--nc: 318 46.4% 89%;\n\t--b1: 318 46.4% 89%;\n\t--b2: 315 58.9% 79%;\n\t--b3: 316 62.3% 72.9%;\n\t--bc: 344 38.5% 28%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 1.9rem;\n\t--rounded-badge: 1.9rem;\n}\n\n[data-theme=halloween] {\n\t--p: 32 89.3% 52.2%;\n\t--pf: 32 88.8% 42%;\n\t--pc: 180 7.3% 8%;\n\t--s: 271 45.8% 42%;\n\t--sf: 271 46% 32%;\n\t--sc: 0 0% 100%;\n\t--a: 91 100% 32.9%;\n\t--af: 91 100% 22.9%;\n\t--ac: 0 0% 100%;\n\t--n: 180 3.6% 11%;\n\t--nf: 180 7.3% 8%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 12.9%;\n\t--b2: 180 3.6% 11%;\n\t--b3: 180 7.3% 8%;\n\t--bc: 0 0% 100%;\n\t--in: 202 100% 70%;\n\t--su: 89 61.6% 52%;\n\t--wa: 54 68.8% 63.5%;\n\t--er: 0 100% 71.8%;\n}\n\n[data-theme=garden] {\n\t--p: 139 16% 42.9%;\n\t--pf: 137 14.8% 33.1%;\n\t--pc: 0 0% 100%;\n\t--s: 97 37.1% 93.1%;\n\t--sf: 98 36.3% 82.2%;\n\t--sc: 96 32.5% 15.1%;\n\t--a: 0 67.7% 93.9%;\n\t--af: 0 71.1% 85.1%;\n\t--ac: 0 22% 16.1%;\n\t--n: 0 3.9% 35.1%;\n\t--nf: 0 3.7% 15.9%;\n\t--nc: 0 4.3% 91%;\n\t--b1: 0 4.3% 91%;\n\t--b2: 0 5.2% 81%;\n\t--b3: 0 5.4% 71%;\n\t--bc: 0 3.2% 6.1%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 0.5rem;\n\t--rounded-badge: 1.9rem;\n}\n\n[data-theme=forest] {\n\t--p: 141 72% 42%;\n\t--pf: 141 71.8% 32%;\n\t--pc: 0 0% 100%;\n\t--s: 141 74.7% 48%;\n\t--sf: 141 75.3% 38%;\n\t--sc: 0 0% 100%;\n\t--a: 35 69% 52%;\n\t--af: 35 69.2% 42%;\n\t--ac: 0 0% 100%;\n\t--n: 0 9.7% 6.1%;\n\t--nf: 0 20% 2%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 12.2% 8%;\n\t--b2: 0 9.7% 6.1%;\n\t--b3: 0 20% 2%;\n\t--bc: 0 0% 100%;\n\t--rounded-btn: 1.9rem;\n\t--in: 202 100% 70%;\n\t--su: 89 61.6% 52%;\n\t--wa: 54 68.8% 63.5%;\n\t--er: 0 100% 71.8%;\n}\n\n[data-theme=aqua] {\n\t--p: 189 100% 62.9%;\n\t--pf: 189 100% 52.9%;\n\t--pc: 0 0% 0%;\n\t--s: 274 30.9% 56.9%;\n\t--sf: 274 30.8% 47.1%;\n\t--sc: 0 0% 100%;\n\t--a: 47 100% 80%;\n\t--af: 47 100% 70%;\n\t--ac: 0 0% 100%;\n\t--n: 231 77.4% 32.9%;\n\t--nf: 231 67.6% 29%;\n\t--nc: 0 0% 100%;\n\t--b1: 231 88.7% 38%;\n\t--b2: 231 77.4% 32.9%;\n\t--b3: 231 67.6% 29%;\n\t--bc: 0 0% 100%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n}\n\n[data-theme=lofi] {\n\t--p: 0 0% 50.2%;\n\t--pf: 0 0% 45.1%;\n\t--pc: 240 4% 95.1%;\n\t--s: 0 0% 30.2%;\n\t--sf: 0 0% 25.1%;\n\t--sc: 240 4% 95.1%;\n\t--a: 0 0% 10.2%;\n\t--af: 0 0% 5.1%;\n\t--ac: 240 4% 95.1%;\n\t--n: 240 4% 95.1%;\n\t--nf: 240 5.9% 90%;\n\t--nc: 0 0% 30.2%;\n\t--b1: 0 0% 100%;\n\t--b2: 0 0% 100%;\n\t--b3: 0 0% 100%;\n\t--bc: 0 0% 49%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--border-color: #e6e6e6;\n\t--animation-btn: 0;\n\t--animation-input: 0;\n\t--btn-focus-scale: 1;\n\t--rounded-box: 0rem;\n\t--rounded-btn: 0rem;\n\t--rounded-badge: 0rem;\n\t--tab-radius: 0rem;\n}\n\n[data-theme=lofi] * {\n\tborder-color: var(--border-color) !important;\n\t--tw-border-opacity: 1 !important;\n\t--tw-text-opacity: 1 !important;\n\t--tw-shadow: 0 0 0 1px var(--border-color) !important;\n}\n\n[data-theme=pastel] {\n\t--p: 284 21.6% 80%;\n\t--pf: 282 21.6% 70%;\n\t--pc: 0 0% 0%;\n\t--s: 352 70.5% 88%;\n\t--sf: 352 69.6% 78%;\n\t--sc: 0 0% 100%;\n\t--a: 158 54.6% 81%;\n\t--af: 158 55.4% 71%;\n\t--ac: 0 0% 100%;\n\t--n: 199 43.7% 61%;\n\t--nf: 199 44% 51%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 20% 98%;\n\t--b3: 216 12.2% 83.9%;\n\t--bc: 206 3.1% 55.1%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n\t--rounded-box: 1rem;\n\t--rounded-btn: 1.9rem;\n\t--rounded-badge: 1.9rem;\n}\n\n[data-theme=fantasy] {\n\t--p: 296 82.8% 25.1%;\n\t--pf: 296 81.8% 15.1%;\n\t--pc: 0 0% 100%;\n\t--s: 200 100% 37.1%;\n\t--sf: 200 100% 27.1%;\n\t--sc: 0 0% 100%;\n\t--a: 31 94.4% 51.2%;\n\t--af: 31 94.3% 41%;\n\t--ac: 0 0% 100%;\n\t--n: 215 27.9% 16.9%;\n\t--nf: 221 39.3% 11%;\n\t--nc: 0 0% 100%;\n\t--b1: 0 0% 100%;\n\t--b2: 210 20% 98%;\n\t--b3: 216 12.2% 83.9%;\n\t--bc: 215 27.9% 16.9%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n}\n\n[data-theme=wireframe] {\n\tfont-family: Chalkboard,comic sans ms,\"sanssecondaryerif\";\n\t--p: 0 0% 72.2%;\n\t--pf: 0 0% 72.2%;\n\t--pc: 0 0% 0%;\n\t--s: 0 0% 72.2%;\n\t--sf: 0 0% 72.2%;\n\t--sc: 0 0% 0%;\n\t--a: 0 0% 72.2%;\n\t--af: 0 0% 72.2%;\n\t--ac: 0 0% 0%;\n\t--b1: 0 0% 100%;\n\t--b2: 0 0% 100%;\n\t--b3: 0 0% 100%;\n\t--bc: 0 0% 0%;\n\t--n: 0 0% 92.2%;\n\t--nf: 0 0% 92.2%;\n\t--nc: 0 0% 0%;\n\t--in: 240 100% 50%;\n\t--su: 120 100% 25.1%;\n\t--wa: 60 30.2% 50%;\n\t--er: 0 100% 50%;\n\t--border-color: #000000;\n\t--rounded-box: 0.2rem;\n\t--rounded-btn: 0.2rem;\n\t--rounded-badge: 0.2rem;\n\t--tab-radius: 0.2rem;\n}\n\n[data-theme=wireframe] * {\n\tborder-color: var(--border-color) !important;\n\t--tw-border-opacity: 1 !important;\n\t--tw-text-opacity: 1 !important;\n\t--tw-shadow: 0 0 0 1px var(--border-color) !important;\n}\n\n[data-theme=black] {\n\t--p: 0 0% 100%;\n\t--pf: 0 0% 100%;\n\t--pc: 0 0% 0%;\n\t--s: 0 0% 100%;\n\t--sf: 0 0% 100%;\n\t--sc: 0 0% 0%;\n\t--a: 0 0% 100%;\n\t--af: 0 0% 100%;\n\t--ac: 0 0% 0%;\n\t--b1: 0 0% 0%;\n\t--b2: 0 0% 20%;\n\t--b3: 0 0% 30.2%;\n\t--bc: 0 0% 100%;\n\t--n: 0 0% 20%;\n\t--nf: 0 0% 30.2%;\n\t--nc: 0 0% 100%;\n\t--in: 240 100% 50%;\n\t--su: 120 100% 25.1%;\n\t--wa: 60 100% 50%;\n\t--er: 0 100% 50%;\n\t--rounded-box: 0;\n\t--rounded-btn: 0;\n\t--rounded-badge: 0;\n\t--tab-radius: 0;\n\t--animation-btn: 0;\n\t--animation-input: 0;\n\t--btn-focus-scale: 1;\n\t--btn-text-case: lowercase;\n}\n\n[data-theme=luxury] {\n\t--p: 0 0% 100%;\n\t--pf: 0 0% 90.2%;\n\t--pc: 0 0% 0%;\n\t--s: 218 54.3% 18%;\n\t--sf: 219 56.1% 8%;\n\t--sc: 0 0% 100%;\n\t--a: 319 21.8% 26.1%;\n\t--af: 320 22% 16.1%;\n\t--ac: 0 0% 100%;\n\t--n: 270 4.3% 9%;\n\t--nf: 270 2.2% 18%;\n\t--nc: 37 67.3% 58%;\n\t--b1: 240 10% 3.9%;\n\t--b2: 270 4.3% 9%;\n\t--b3: 270 2.2% 18%;\n\t--bc: 37 67.3% 58%;\n\t--in: 202 100% 70%;\n\t--su: 89 61.6% 52%;\n\t--wa: 54 68.8% 63.5%;\n\t--er: 0 100% 71.8%;\n}\n\n[data-theme=dracula] {\n\t--p: 330 100% 85.1%;\n\t--pf: 330 100% 75.1%;\n\t--pc: 233 12.1% 12.9%;\n\t--s: 115 100% 85.1%;\n\t--sf: 115 100% 75.1%;\n\t--sc: 233 12.1% 12.9%;\n\t--a: 60 100% 85.1%;\n\t--af: 60 100% 75.1%;\n\t--ac: 233 12.1% 12.9%;\n\t--n: 245 14.3% 15.1%;\n\t--nf: 233 12.1% 12.9%;\n\t--nc: 251 100% 90%;\n\t--b1: 244 13% 21.2%;\n\t--b2: 245 14.3% 15.1%;\n\t--b3: 233 12.1% 12.9%;\n\t--bc: 251 100% 90%;\n\t--in: 207 89.8% 53.9%;\n\t--su: 174 100% 29%;\n\t--wa: 36 100% 50%;\n\t--er: 14 100% 57.1%;\n}\n\n.alert>:not([hidden])~:not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(0.5rem*(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(0.5rem*var(--tw-space-y-reverse));\n}\n\n.alert {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-between;\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b2)/var(--tw-bg-opacity,1));\n\tpadding: 1rem;\n\tborder-radius: var(--rounded-box,1rem);\n}\n\n@media (min-width:768px) {\n\n\t.alert>:not([hidden])~:not([hidden]) {\n\t\t--tw-space-y-reverse: 0;\n\t\tmargin-top: calc(0px*(1 - var(--tw-space-y-reverse)));\n\t\tmargin-bottom: calc(0px*var(--tw-space-y-reverse));\n\t}\n\n\t.alert {\n\t\tflex-direction: row;\n\t}\n}\n\n.alert>* {\n\tdisplay: flex;\n}\n\n.avatar.placeholder>div {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.btn {\n\tborder-color: transparent;\n\tborder-color: hsla(var(--n)/var(--tw-border-opacity,1));\n\tcursor: pointer;\n\tdisplay: inline-flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-shrink: 0;\n\ttext-align: center;\n\t-webkit-user-select: none;\n\tuser-select: none;\n\ttransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\n\ttransition-duration: .15s;\n\ttransition-duration: .2s;\n\ttransition-timing-function: cubic-bezier(.4,0,.2,1);\n\tborder-radius: var(--rounded-btn,.5rem);\n\theight: 3rem;\n\tfont-size: .875rem;\n\tline-height: 1.25rem;\n\tline-height: 2;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n\tmin-height: 3rem;\n\tfont-weight: 600;\n\ttext-transform: uppercase;\n\ttext-transform: var(--btn-text-case,uppercase);\n\tborder-width: var(--border-btn,1px);\n\tanimation: button-pop var(--animation-btn,.25s) ease-out;\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--n)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--nc)/var(--tw-text-opacity,1));\n}\n\n.btn:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.btn-disabled,.btn[disabled] {\n\tpointer-events: none;\n\t--tw-bg-opacity: 1;\n\t--tw-bg-opacity: 0.2;\n\tbackground-color: hsla(var(--n)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 0;\n\t--tw-text-opacity: 1;\n\t--tw-text-opacity: 0.2;\n\tcolor: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.btn.loading,.btn.loading:hover {\n\tpointer-events: none;\n}\n\n.btn.loading:before {\n\tborder-radius: 9999px;\n\tborder-width: 2px;\n\theight: 1rem;\n\tmargin-right: .5rem;\n\twidth: 1rem;\n\tanimation: spin 2s linear infinite;\n\tcontent: \"\";\n\tborder-color: transparent currentColor currentColor transparent;\n}\n\n@media (prefers-reduced-motion:reduce) {\n\n\t.btn.loading:before {\n\t\tanimation: spin 10s linear infinite;\n\t}\n}\n\n@keyframes spin {\n\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\tto {\n\t\ttransform: rotate(1turn);\n\t}\n}\n\n.btn-group>input[type=radio].btn {\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.btn-group>input[type=radio].btn:before {\n\tcontent: attr(data-title);\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow: hidden;\n\tposition: relative;\n\tborder-radius: var(--rounded-box,1rem);\n}\n\n.card:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.card-body {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1 1 auto;\n\tpadding: var(--padding-card,2rem);\n}\n\n.card figure,.card figure>* {\n\twidth: 100%;\n}\n\n.card.image-full {\n\tdisplay: grid;\n}\n\n.card.image-full:before {\n\tposition: relative;\n\tcontent: \"\";\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--n)/var(--tw-bg-opacity,1));\n\topacity: .75;\n\tz-index: 10;\n\tborder-radius: var(--rounded-box,1rem);\n}\n\n.card.image-full:before,.card.image-full>* {\n\tgrid-column-start: 1;\n\tgrid-row-start: 1;\n}\n\n.card.image-full>figure img {\n\theight: 100%;\n\tobject-fit: cover;\n}\n\n.card.image-full>.card-body {\n\tposition: relative;\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--nc)/var(--tw-text-opacity,1));\n\tz-index: 20;\n}\n\n.form-control {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.label {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\t-webkit-user-select: none;\n\tuser-select: none;\n\tpadding: .5rem .25rem;\n}\n\n.hero {\n\tbackground-position: 50%;\n\tbackground-size: cover;\n\tdisplay: grid;\n\tplace-items: center;\n\twidth: 100%;\n}\n\n.hero>* {\n\tgrid-column-start: 1;\n\tgrid-row-start: 1;\n}\n\n.hero-content {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tz-index: 0;\n\tmax-width: 80rem;\n\tpadding: 1rem;\n\tgap: 1rem;\n}\n\n.input {\n\tflex-shrink: 1;\n\ttransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\n\ttransition-duration: .15s;\n\ttransition-duration: .2s;\n\ttransition-timing-function: cubic-bezier(.4,0,.2,1);\n\theight: 3rem;\n\tfont-size: .875rem;\n\tline-height: 1.25rem;\n\tline-height: 2;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\t--tw-border-opacity: 0;\n\tborder-color: hsla(var(--bc)/var(--tw-border-opacity,1));\n\tborder-width: 1px;\n\tborder-radius: var(--rounded-btn,.5rem);\n}\n\n.input:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\tbox-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsla(var(--bc)/.2);\n}\n\n.btn .badge {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n\tborder-color: transparent;\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.btn .badge-outline {\n\tbackground-color: transparent;\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--b2)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary .badge {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--p)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary .badge-outline {\n\tbackground-color: transparent;\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--p)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--p)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary:hover .badge {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--pc)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--pc)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--p)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary:hover .badge.outline {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--pf)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--pc)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn:active:focus,.btn:active:hover {\n\tanimation: none;\n\ttransform: scale(var(--btn-focus-scale,.95));\n}\n\n.btn-active,.btn:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--nf)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--nf)/var(--tw-border-opacity,1));\n}\n\n.btn:focus-visible {\n\tbox-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--nf));\n}\n\n.btn-primary {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--p)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn-primary.btn-active,.btn-primary:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--pf)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--pf)/var(--tw-border-opacity,1));\n}\n\n.btn-primary:focus-visible {\n\tbox-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p));\n}\n\n.btn.glass.btn-active,.btn.glass:hover {\n\t--glass-opacity: 25%;\n\t--glass-border-opacity: 15%;\n}\n\n.btn.glass:focus-visible {\n\tbox-shadow: 0 0 0 2px currentColor;\n}\n\n.btn-outline.btn-primary {\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--p)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--pf)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--pf)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn.loading.btn-circle:before,.btn.loading.btn-square:before {\n\tmargin-right: 0;\n}\n\n.btn.loading.btn-lg:before,.btn.loading.btn-xl:before {\n\theight: 1.25rem;\n\twidth: 1.25rem;\n}\n\n.btn.loading.btn-sm:before,.btn.loading.btn-xs:before {\n\theight: .75rem;\n\twidth: .75rem;\n}\n\n.btn-group>.btn-active,.btn-group>input[type=radio]:checked.btn {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--p)/var(--tw-border-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn-group>.btn-active:focus-visible,.btn-group>input[type=radio]:checked.btn:focus-visible {\n\tbox-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p));\n}\n\n.btn-group>.btn:not(:first-child) {\n\tborder-top-left-radius: 0;\n\tborder-bottom-left-radius: 0;\n\tmargin-left: -1px;\n}\n\n.btn-group>.btn:not(:last-child) {\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n}\n\n@keyframes button-pop {\n\n\t0% {\n\t\ttransform: scale(var(--btn-focus-scale,.95));\n\t}\n\n\t40% {\n\t\ttransform: scale(1.02);\n\t}\n\n\tto {\n\t\ttransform: scale(1);\n\t}\n}\n\n.card:focus-visible {\n\tbox-shadow: 0 0 0 2px currentColor;\n}\n\n.card.bordered {\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n\tborder-width: 1px;\n}\n\n.card.compact .card-body {\n\tfont-size: .875rem;\n\tline-height: 1.25rem;\n\tpadding: 1rem;\n}\n\n.card.compact .card-title {\n\tmargin-bottom: .25rem;\n}\n\n@keyframes checkmark {\n\n\t0% {\n\t\tbackground-position-y: 5px;\n\t}\n\n\t50% {\n\t\tbackground-position-y: -2px;\n\t}\n\n\tto {\n\t\tbackground-position-y: 0;\n\t}\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-primary {\n\tbox-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p));\n}\n\n.label-text {\n\tfont-size: .875rem;\n\tline-height: 1.25rem;\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.label a:hover {\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.input-bordered {\n\t--tw-border-opacity: 0.2;\n}\n\n.input-disabled,.input[disabled] {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b2)/var(--tw-bg-opacity,1));\n\t--tw-border-opacity: 1;\n\tborder-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n\tcursor: not-allowed;\n\t--tw-text-opacity: 0.2;\n}\n\n.input-disabled::placeholder,.input[disabled]::placeholder {\n\t--tw-placeholder-opacity: 1;\n\t--tw-placeholder-opacity: 0.2;\n\tcolor: hsla(var(--bc)/var(--tw-placeholder-opacity,1));\n}\n\n.mockup-phone .display {\n\toverflow: hidden;\n\tborder-radius: 40px;\n\tmargin-top: -25px;\n}\n\n@keyframes radiomark {\n\n\t0% {\n\t\tbox-shadow: 0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset,var(--focus-shadow);\n\t}\n\n\t50% {\n\t\tbox-shadow: 0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset,var(--focus-shadow);\n\t}\n\n\tto {\n\t\tbox-shadow: 0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset,var(--focus-shadow);\n\t}\n}\n\n.alert-info {\n\t--tw-bg-opacity: 1;\n\t--tw-bg-opacity: 0.1;\n\tbackground-color: hsla(var(--in)/var(--tw-bg-opacity,1));\n\t--tw-text-opacity: 1;\n\tcolor: hsla(var(--in)/var(--tw-text-opacity,1));\n}\n\n.static {\n\tposition: static;\n}\n\n.m-8 {\n\tmargin: 2rem;\n}\n\n.mx-2 {\n\tmargin-left: 0.5rem;\n\tmargin-right: 0.5rem;\n}\n\n.mb-5 {\n\tmargin-bottom: 1.25rem;\n}\n\n.mt-6 {\n\tmargin-top: 1.5rem;\n}\n\n.flex {\n\tdisplay: flex;\n}\n\n.h-6 {\n\theight: 1.5rem;\n}\n\n.min-h-screen {\n\tmin-height: 100vh;\n}\n\n.w-6 {\n\twidth: 1.5rem;\n}\n\n.w-full {\n\twidth: 100%;\n}\n\n.max-w-sm {\n\tmax-width: 24rem;\n}\n\n.flex-1 {\n\tflex: 1 1 0%;\n}\n\n.flex-shrink-0 {\n\tflex-shrink: 0;\n}\n\n.flex-col {\n\tflex-direction: column;\n}\n\n.justify-center {\n\tjustify-content: center;\n}\n\n.bg-base-200 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b2) / var(--tw-bg-opacity));\n}\n\n.bg-base-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: hsla(var(--b1) / var(--tw-bg-opacity));\n}\n\n.stroke-current {\n\tstroke: currentColor;\n}\n\n.text-center {\n\ttext-align: center;\n}\n\n.text-5xl {\n\tfont-size: 3rem;\n\tline-height: 1;\n}\n\n.font-bold {\n\tfont-weight: 700;\n}\n\n.shadow-2xl {\n\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n@media (min-width: 1024px) {\n\n\t.lg\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.lg\\:text-left {\n\t\ttext-align: left;\n\t}\n}\n", "",{"version":3,"sources":["webpack://node_modules/tailwindcss/tailwind.css","webpack://node_modules/tailwindcss/%3Cinput%20css%20RHXVyN%3E","webpack://node_modules/tailwindcss/%3Cinput%20css%20Y1Dg0z%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxPQUFPLE1BQU0sU0FBUyx1QkFBdUIscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxRQUFRLE9BQU8sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxPQUFPLE1BQU0sS0FBSyx1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sTUFBTSxNQUFNLEtBQUssYUFBYSxjQUFjLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixXQUFXLE9BQU8sS0FBSyxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLE1BQU0sYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sU0FBUyxNQUFNLEtBQUssdUJBQXVCLHVCQUF1QixRQUFRLE9BQU8sTUFBTSxLQUFLLGFBQWEsYUFBYSxPQUFPLDRCQUE0QixNQUFNLE9BQU8sdUJBQXVCLHFCQUFxQix1QkFBdUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxNQUFNLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxPQUFPLFVBQVUsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLGFBQWEsT0FBTyxVQUFVLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLFVBQVUsTUFBTSxTQUFTLFdBQVcsWUFBWSxXQUFXLE9BQU8sU0FBUyxNQUFNLFFBQVEsYUFBYSxRQUFRLG1CQUFtQixNQUFNLFlBQVkscUJBQXFCLHVCQUF1QixRQUFRLFNBQVMsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxRQUFRLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLFNBQVMsTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLFNBQVMsT0FBTyxLQUFLLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxTQUFTLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxTQUFTLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxTQUFTLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxTQUFTLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcs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QTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwrRkFBK0YsZUFBZTtBQUM5RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFFUixrREFBa0Q7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxrQ0FBa0M7QUFDbEM7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEOztBQUUzRDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7O0FBR2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkhBQTJIO0FBQzNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0VBQW9FOztBQUVwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkLFdBQVcsZUFBZTtBQUMxQixXQUFXLEdBQUc7QUFDZCxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FB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Q0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQSxrREFBa0Q7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxpQ0FBaUM7O0FBRXBDO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDMUhhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSx3SkFBaUU7QUFDbkU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvbG9hZGFibGUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2xvYWRhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcz80NmUxIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub1NTUiA9IG5vU1NSO1xuZXhwb3J0cy5kZWZhdWx0ID0gZHluYW1pYztcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2xvYWRhYmxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkYWJsZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsIGxvYWRhYmxlT3B0aW9ucykge1xuICAgIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICAgIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZztcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgICByZXR1cm4gKCk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcbiAgICAgICAgfSlcbiAgICA7XG59XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgbGV0IGxvYWRhYmxlRm4gPSBfbG9hZGFibGUuZGVmYXVsdDtcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgICAgICBsb2FkaW5nOiAoeyBlcnJvciAsIGlzTG9hZGluZyAsIHBhc3REZWxheSAgfSk9PntcbiAgICAgICAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvci5tZXNzYWdlLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgZXJyb3Iuc3RhY2spKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zXG4gICAgICAgIDtcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmR5bmFtaWNPcHRpb25zXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIHBhc3Npbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7bG9hZGluZzogKCkgPT4gPHA+TG9hZGluZyBzb21ldGhpbmc8L3A+fSlcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgY29uc3Qgc3VzcGVuc2VPcHRpb25zID0gbG9hZGFibGVPcHRpb25zO1xuICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMpIHtcbiAgICAgICAgLy8gRXJyb3IgaWYgcmVhY3Qgcm9vdCBpcyBub3QgZW5hYmxlZCBhbmQgYHN1c3BlbnNlYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfUkVBQ1RfUk9PVCAmJiBzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGFkZCBlcnJvciBkb2Mgd2hlbiB0aGlzIGZlYXR1cmUgaXMgc3RhYmxlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3VzcGVuc2Ugb3B0aW9uIHVzYWdlIGluIG5leHQvZHluYW1pYy4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLWR5bmFtaWMtc3VzcGVuc2VgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3VzcGVuc2VPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgIHJldHVybiBsb2FkYWJsZUZuKHN1c3BlbnNlT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcbiAgICB9XG4gICAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG4gICAgaWYgKHR5cGVvZiBsb2FkYWJsZU9wdGlvbnMuc3NyID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICAgICAgICAgIHJldHVybiBub1NTUihsb2FkYWJsZUZuLCBsb2FkYWJsZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgIH1cbiAgICByZXR1cm4gbG9hZGFibGVGbihsb2FkYWJsZU9wdGlvbnMpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Mb2FkYWJsZUNvbnRleHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgTG9hZGFibGVDb250ZXh0ID0gX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydHMuTG9hZGFibGVDb250ZXh0ID0gTG9hZGFibGVDb250ZXh0O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBMb2FkYWJsZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnTG9hZGFibGVDb250ZXh0Jztcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9hZGFibGUtY29udGV4dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3VzZVN1YnNjcmlwdGlvbiA9IHJlcXVpcmUoXCJ1c2Utc3Vic2NyaXB0aW9uXCIpO1xudmFyIF9sb2FkYWJsZUNvbnRleHQgPSByZXF1aXJlKFwiLi9sb2FkYWJsZS1jb250ZXh0XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgQUxMX0lOSVRJQUxJWkVSUyA9IFtdO1xuY29uc3QgUkVBRFlfSU5JVElBTElaRVJTID0gW107XG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGxvYWQobG9hZGVyKSB7XG4gICAgbGV0IHByb21pc2UgPSBsb2FkZXIoKTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGxvYWRlZDogbnVsbCxcbiAgICAgICAgZXJyb3I6IG51bGxcbiAgICB9O1xuICAgIHN0YXRlLnByb21pc2UgPSBwcm9taXNlLnRoZW4oKGxvYWRlZCk9PntcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgICAgIHJldHVybiBsb2FkZWQ7XG4gICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IGVycjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICAgIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIHJlc29sdmUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iai5kZWZhdWx0IDogb2JqO1xufVxuZnVuY3Rpb24gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZEZuLCBvcHRpb25zKSB7XG4gICAgbGV0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgbG9hZGVyOiBudWxsLFxuICAgICAgICBsb2FkaW5nOiBudWxsLFxuICAgICAgICBkZWxheTogMjAwLFxuICAgICAgICB0aW1lb3V0OiBudWxsLFxuICAgICAgICB3ZWJwYWNrOiBudWxsLFxuICAgICAgICBtb2R1bGVzOiBudWxsLFxuICAgICAgICBzdXNwZW5zZTogZmFsc2VcbiAgICB9LCBvcHRpb25zKTtcbiAgICBpZiAob3B0cy5zdXNwZW5zZSkge1xuICAgICAgICBvcHRzLmxhenkgPSBfcmVhY3QuZGVmYXVsdC5sYXp5KG9wdHMubG9hZGVyKTtcbiAgICB9XG4gICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IG5ldyBMb2FkYWJsZVN1YnNjcmlwdGlvbihsb2FkRm4sIG9wdHMpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRWYWx1ZTogc3ViLmdldEN1cnJlbnRWYWx1ZS5iaW5kKHN1YiksXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlOiBzdWIuc3Vic2NyaWJlLmJpbmQoc3ViKSxcbiAgICAgICAgICAgICAgICByZXRyeTogc3ViLnJldHJ5LmJpbmQoc3ViKSxcbiAgICAgICAgICAgICAgICBwcm9taXNlOiBzdWIucHJvbWlzZS5iaW5kKHN1YilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi5wcm9taXNlKCk7XG4gICAgfVxuICAgIC8vIFNlcnZlciBvbmx5XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmICFvcHRzLnN1c3BlbnNlKSB7XG4gICAgICAgIEFMTF9JTklUSUFMSVpFUlMucHVzaChpbml0KTtcbiAgICB9XG4gICAgLy8gQ2xpZW50IG9ubHlcbiAgICBpZiAoIWluaXRpYWxpemVkICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvcHRzLndlYnBhY2sgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlcXVpcmUucmVzb2x2ZVdlYWsgPT09ICdmdW5jdGlvbicgJiYgIW9wdHMuc3VzcGVuc2UpIHtcbiAgICAgICAgY29uc3QgbW9kdWxlSWRzID0gb3B0cy53ZWJwYWNrKCk7XG4gICAgICAgIFJFQURZX0lOSVRJQUxJWkVSUy5wdXNoKChpZHMpPT57XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZUlkIG9mIG1vZHVsZUlkcyl7XG4gICAgICAgICAgICAgICAgaWYgKGlkcy5pbmRleE9mKG1vZHVsZUlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBMb2FkYWJsZUltcGwocHJvcHMsIHJlZikge1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9sb2FkYWJsZUNvbnRleHQuTG9hZGFibGVDb250ZXh0KTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSAoMCwgX3VzZVN1YnNjcmlwdGlvbikudXNlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIF9yZWFjdC5kZWZhdWx0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKT0+KHtcbiAgICAgICAgICAgICAgICByZXRyeTogc3Vic2NyaXB0aW9uLnJldHJ5XG4gICAgICAgICAgICB9KVxuICAgICAgICAsIFtdKTtcbiAgICAgICAgaWYgKGNvbnRleHQgJiYgQXJyYXkuaXNBcnJheShvcHRzLm1vZHVsZXMpKSB7XG4gICAgICAgICAgICBvcHRzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlTmFtZSk9PntcbiAgICAgICAgICAgICAgICBjb250ZXh0KG1vZHVsZU5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgICAgIGlmIChzdGF0ZS5sb2FkaW5nIHx8IHN0YXRlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQob3B0cy5sb2FkaW5nLCB7XG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogc3RhdGUubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgcGFzdERlbGF5OiBzdGF0ZS5wYXN0RGVsYXksXG4gICAgICAgICAgICAgICAgICAgIHRpbWVkT3V0OiBzdGF0ZS50aW1lZE91dCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgICAgICAgICAgICAgICAgICByZXRyeTogc3Vic2NyaXB0aW9uLnJldHJ5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlc29sdmUoc3RhdGUubG9hZGVkKSwgcHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW1xuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICBzdGF0ZVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gTGF6eUltcGwocHJvcHMsIHJlZikge1xuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChvcHRzLmxhenksIHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgcmVmXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBMb2FkYWJsZUNvbXBvbmVudCA9IG9wdHMuc3VzcGVuc2UgPyBMYXp5SW1wbCA6IExvYWRhYmxlSW1wbDtcbiAgICBMb2FkYWJsZUNvbXBvbmVudC5wcmVsb2FkID0gKCk9PiFvcHRzLnN1c3BlbnNlICYmIGluaXQoKVxuICAgIDtcbiAgICBMb2FkYWJsZUNvbXBvbmVudC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbXBvbmVudCc7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoTG9hZGFibGVDb21wb25lbnQpO1xufVxuY2xhc3MgTG9hZGFibGVTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGxvYWRGbiwgb3B0cyl7XG4gICAgICAgIHRoaXMuX2xvYWRGbiA9IGxvYWRGbjtcbiAgICAgICAgdGhpcy5fb3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5fZGVsYXkgPSBudWxsO1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXRyeSgpO1xuICAgIH1cbiAgICBwcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzLnByb21pc2U7XG4gICAgfVxuICAgIHJldHJ5KCkge1xuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XG4gICAgICAgIHRoaXMuX3JlcyA9IHRoaXMuX2xvYWRGbih0aGlzLl9vcHRzLmxvYWRlcik7XG4gICAgICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IF9yZXM6IHJlcyAsIF9vcHRzOiBvcHRzMSAgfSA9IHRoaXM7XG4gICAgICAgIGlmIChyZXMubG9hZGluZykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRzMS5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0czEuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUucGFzdERlbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZWxheSA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzdERlbGF5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0czEuZGVsYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0czEudGltZW91dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZWRPdXQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgb3B0czEudGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVzLnByb21pc2UudGhlbigoKT0+e1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xuICAgICAgICB9KS5jYXRjaCgoX2Vycik9PntcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSh7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfdXBkYXRlKHBhcnRpYWwpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9zdGF0ZSxcbiAgICAgICAgICAgIGVycm9yOiB0aGlzLl9yZXMuZXJyb3IsXG4gICAgICAgICAgICBsb2FkZWQ6IHRoaXMuX3Jlcy5sb2FkZWQsXG4gICAgICAgICAgICBsb2FkaW5nOiB0aGlzLl9yZXMubG9hZGluZyxcbiAgICAgICAgICAgIC4uLnBhcnRpYWxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKT0+Y2FsbGJhY2soKVxuICAgICAgICApO1xuICAgIH1cbiAgICBfY2xlYXJUaW1lb3V0cygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgIH1cbiAgICBnZXRDdXJyZW50VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIExvYWRhYmxlKG9wdHMxKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWQsIG9wdHMxKTtcbn1cbmZ1bmN0aW9uIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKSB7XG4gICAgbGV0IHByb21pc2VzID0gW107XG4gICAgd2hpbGUoaW5pdGlhbGl6ZXJzLmxlbmd0aCl7XG4gICAgICAgIGxldCBpbml0ID0gaW5pdGlhbGl6ZXJzLnBvcCgpO1xuICAgICAgICBwcm9taXNlcy5wdXNoKGluaXQoaWRzKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKT0+e1xuICAgICAgICBpZiAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuTG9hZGFibGUucHJlbG9hZEFsbCA9ICgpPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlSW5pdGlhbGl6ZXJzLCByZWplY3QpPT57XG4gICAgICAgIGZsdXNoSW5pdGlhbGl6ZXJzKEFMTF9JTklUSUFMSVpFUlMpLnRoZW4ocmVzb2x2ZUluaXRpYWxpemVycywgcmVqZWN0KTtcbiAgICB9KTtcbn07XG5Mb2FkYWJsZS5wcmVsb2FkUmVhZHkgPSAoaWRzID0gW10pPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlUHJlbG9hZCk9PntcbiAgICAgICAgY29uc3QgcmVzID0gKCk9PntcbiAgICAgICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJlbG9hZCgpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBhbHdheXMgd2lsbCByZXNvbHZlLCBlcnJvcnMgc2hvdWxkIGJlIGhhbmRsZWQgd2l0aGluIGxvYWRpbmcgVUlzLlxuICAgICAgICBmbHVzaEluaXRpYWxpemVycyhSRUFEWV9JTklUSUFMSVpFUlMsIGlkcykudGhlbihyZXMsIHJlcyk7XG4gICAgfSk7XG59O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Ll9fTkVYVF9QUkVMT0FEUkVBRFkgPSBMb2FkYWJsZS5wcmVsb2FkUmVhZHk7XG59XG52YXIgX2RlZmF1bHQgPSBMb2FkYWJsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2FkYWJsZS5qcy5tYXAiLCJpbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IFNXUkNvbmZpZyBmcm9tIFwic3dyXCI7XHJcblxyXG4vLyBpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIC8qLCBBcHBDb250ZXh0ICovIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuXHJcbmNvbnN0IFdhbGxldENvbm5lY3Rpb25Qcm92aWRlciA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KFwiLi9jb21wb25lbnRzL1dhbGxldENvbm5lY3Rpb25Qcm92aWRlclwiKSxcclxuICB7XHJcbiAgICBzc3I6IGZhbHNlLFxyXG4gIH1cclxuKTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdhbGxldENvbm5lY3Rpb25Qcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9XYWxsZXRDb25uZWN0aW9uUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gT25seSB1bmNvbW1lbnQgdGhpcyBtZXRob2QgaWYgeW91IGhhdmUgYmxvY2tpbmcgZGF0YSByZXF1aXJlbWVudHMgZm9yXHJcbi8vIGV2ZXJ5IHNpbmdsZSBwYWdlIGluIHlvdXIgYXBwbGljYXRpb24uIFRoaXMgZGlzYWJsZXMgdGhlIGFiaWxpdHkgdG9cclxuLy8gcGVyZm9ybSBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiwgY2F1c2luZyBldmVyeSBwYWdlIGluIHlvdXIgYXBwIHRvXHJcbi8vIGJlIHNlcnZlci1zaWRlIHJlbmRlcmVkLlxyXG4vL1xyXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dDogQXBwQ29udGV4dCkgPT4ge1xyXG4vLyAgIC8vIGNhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcclxuLy8gICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XHJcblxyXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzFdIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vdGFpbHdpbmQuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzFdIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vdGFpbHdpbmQuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzFdIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vdGFpbHdpbmQuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUxKCkge1xuICAgIGxldCBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgICAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgICAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICAgICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbn0oKTtcbmNvbnN0IGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldDEoKSB7XG4gICAgY29uc3QgbWVtbyA9IHtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgICAgICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgICB9O1xufSgpO1xuY29uc3Qgc3R5bGVzSW5Eb20gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICBsZXQgcmVzdWx0ID0gLTE7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZENvdW50TWFwID0ge1xuICAgIH07XG4gICAgY29uc3QgaWRlbnRpZmllcnMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0W2ldO1xuICAgICAgICBjb25zdCBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgICAgICBjb25zdCBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBpZCArICcgJyArIGNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICAgICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgICAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgICAgICB9O1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgICAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICAgIH1cbiAgICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHtcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3Qgbm9uY2UgPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gICAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gICAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqLyBjb25zdCByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0MSgpIHtcbiAgICBjb25zdCB0ZXh0U3RvcmUgPSBbXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgICB9O1xufSgpO1xuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gICAgY29uc3QgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyAnQG1lZGlhICcgKyBvYmoubWVkaWEgKyAnIHsnICsgb2JqLmNzcyArICd9JyA6IG9iai5jc3M7XG4gICAgLy8gRm9yIG9sZCBJRVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi8gaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuICAgICAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICAgIGxldCBjc3MgPSBvYmouY3NzO1xuICAgIGNvbnN0IG1lZGlhID0gb2JqLm1lZGlhO1xuICAgIGNvbnN0IHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICAgIH1cbiAgICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJztcbiAgICB9XG4gICAgLy8gRm9yIG9sZCBJRVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi8gaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxufVxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5sZXQgc2luZ2xldG9uQ291bnRlciA9IDA7XG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgICBsZXQgc3R5bGU7XG4gICAgbGV0IHVwZGF0ZTtcbiAgICBsZXQgcmVtb3ZlO1xuICAgIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgICAgICBjb25zdCBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgICAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICAgICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgICAgIHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKG9iaik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgICAgICBpZiAobmV3T2JqKSB7XG4gICAgICAgICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7XG4gICAgfTtcbiAgICAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG4gICAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgICAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgICB9XG4gICAgbGlzdCA9IGxpc3QgfHwgW107XG4gICAgbGV0IGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICAgICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICAgIGZvcihsZXQgaTEgPSAwOyBpMSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkxKyspe1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpMV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgaWYgKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgICB9O1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIHRhaWx3aW5kY3NzIHYyLjIuMTQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXG5cXG4vKlxcbkRvY3VtZW50XFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyoqXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZWN0aW9uc1xcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHRzeXN0ZW0tdWksXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxuXFx0XFx0J1NlZ29lIFVJJyxcXG5cXHRcXHRSb2JvdG8sXFxuXFx0XFx0SGVsdmV0aWNhLFxcblxcdFxcdEFyaWFsLFxcblxcdFxcdHNhbnMtc2VyaWYsXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknO1xcbn1cXG5cXG4vKlxcbkdyb3VwaW5nIGNvbnRlbnRcXG49PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuKi9cXG5cXG5ociB7XFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnJbdGl0bGVdIHtcXG5cXHQtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG5cXHQgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbjIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHR1aS1tb25vc3BhY2UsXFxuXFx0XFx0U0ZNb25vLVJlZ3VsYXIsXFxuXFx0XFx0Q29uc29sYXMsXFxuXFx0XFx0J0xpYmVyYXRpb24gTW9ubycsXFxuXFx0XFx0TWVubG8sXFxuXFx0XFx0bW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG5cXHRmb250LXNpemU6IDc1JTtcXG5cXHRsaW5lLWhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcblxcdGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG5cXHR0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG5UYWJ1bGFyIGRhdGFcXG49PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbiovXFxuXFxudGFibGUge1xcblxcdHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuXFx0Ym9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuRm9ybXNcXG49PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4qL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3XFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG5cXHRib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0ICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxubGVnZW5kIHtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuXFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG5cXHRmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuSW50ZXJhY3RpdmVcXG49PT09PT09PT09PVxcbiovXFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59LyoqXFxuICogTWFudWFsbHkgZm9ya2VkIGZyb20gU1VJVCBDU1MgQmFzZTogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZVxcbiAqIEEgdGhpbiBsYXllciBvbiB0b3Agb2Ygbm9ybWFsaXplLmNzcyB0aGF0IHByb3ZpZGVzIGEgc3RhcnRpbmcgcG9pbnQgbW9yZVxcbiAqIHN1aXRhYmxlIGZvciB3ZWIgYXBwbGljYXRpb25zLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4gKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBUYWlsd2luZCBjdXN0b20gcmVzZXQgc3R5bGVzXFxuICovXFxuXFxuLyoqXFxuICogMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgKHdpdGggVGFpbHdpbmQncyBkZWZhdWx0XFxuICogICAgc2Fucy1zZXJpZiBmb250IHN0YWNrIGFzIGEgZmFsbGJhY2spIGFzIGEgc2FuZSBkZWZhdWx0LlxcbiAqIDIuIFVzZSBUYWlsd2luZCdzIGRlZmF1bHQgXFxcIm5vcm1hbFxcXCIgbGluZS1oZWlnaHQgc28gdGhlIHVzZXIgaXNuJ3QgZm9yY2VkXFxuICogICAgdG8gb3ZlcnJpZGUgaXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGV2ZW4gd2hlbiB1c2luZyB0aGUgZGVmYXVsdCB0aGVtZS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDIgKi9cXG59XFxuXFxuXFxuLyoqXFxuICogSW5oZXJpdCBmb250LWZhbWlseSBhbmQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzXFxuICogYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuICovXFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLlxcbiAqXFxuICogICAgV2UgdXNlZCB0byBzZXQgdGhpcyBpbiB0aGUgaHRtbCBlbGVtZW50IGFuZCBpbmhlcml0IGZyb21cXG4gKiAgICB0aGUgcGFyZW50IGVsZW1lbnQgZm9yIGV2ZXJ5dGhpbmcgZWxzZS4gVGhpcyBjYXVzZWQgaXNzdWVzXFxuICogICAgaW4gc2hhZG93LWRvbS1lbmhhbmNlZCBlbGVtZW50cyBsaWtlIDxkZXRhaWxzPiB3aGVyZSB0aGUgY29udGVudFxcbiAqICAgIGlzIHdyYXBwZWQgYnkgYSBkaXYgd2l0aCBib3gtc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80XFxuICpcXG4gKlxcbiAqIDIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLlxcbiAqXFxuICogICAgQnkgZGVmYXVsdCwgdGhlIHdheSB0aGUgYnJvd3NlciBzcGVjaWZpZXMgdGhhdCBhbiBlbGVtZW50IHNob3VsZCBoYXZlIG5vXFxuICogICAgYm9yZGVyIGlzIGJ5IHNldHRpbmcgaXQncyBib3JkZXItc3R5bGUgdG8gYG5vbmVgIGluIHRoZSB1c2VyLWFnZW50XFxuICogICAgc3R5bGVzaGVldC5cXG4gKlxcbiAqICAgIEluIG9yZGVyIHRvIGVhc2lseSBhZGQgYm9yZGVycyB0byBlbGVtZW50cyBieSBqdXN0IHNldHRpbmcgdGhlIGBib3JkZXItd2lkdGhgXFxuICogICAgcHJvcGVydHksIHdlIGNoYW5nZSB0aGUgZGVmYXVsdCBib3JkZXItc3R5bGUgZm9yIGFsbCBlbGVtZW50cyB0byBgc29saWRgLCBhbmRcXG4gKiAgICB1c2UgYm9yZGVyLXdpZHRoIHRvIGhpZGUgdGhlbSBpbnN0ZWFkLiBUaGlzIHdheSBvdXIgYGJvcmRlcmAgdXRpbGl0aWVzIG9ubHlcXG4gKiAgICBuZWVkIHRvIHNldCB0aGUgYGJvcmRlci13aWR0aGAgcHJvcGVydHkgaW5zdGVhZCBvZiB0aGUgZW50aXJlIGBib3JkZXJgXFxuICogICAgc2hvcnRoYW5kLCBtYWtpbmcgb3VyIGJvcmRlciB1dGlsaXRpZXMgbXVjaCBtb3JlIHN0cmFpZ2h0Zm9yd2FyZCB0byBjb21wb3NlLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2XFxuICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4gKiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0XFxuICovXFxuXFxuaHIge1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG4vKipcXG4gKiBVbmRvIHRoZSBgYm9yZGVyLXN0eWxlOiBub25lYCByZXNldCB0aGF0IE5vcm1hbGl6ZSBhcHBsaWVzIHRvIGltYWdlcyBzbyB0aGF0XFxuICogb3VyIGBib3JkZXIte3dpZHRofWAgdXRpbGl0aWVzIGhhdmUgdGhlIGV4cGVjdGVkIGVmZmVjdC5cXG4gKlxcbiAqIFRoZSBOb3JtYWxpemUgcmVzZXQgaXMgdW5uZWNlc3NhcnkgZm9yIHVzIHNpbmNlIHdlIGRlZmF1bHQgdGhlIGJvcmRlci13aWR0aFxcbiAqIHRvIDAgb24gYWxsIGVsZW1lbnRzLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zNjJcXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxufVxcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKipcXG4gKiBPdmVycmlkZSBsZWdhY3kgZm9jdXMgcmVzZXQgZnJvbSBOb3JtYWxpemUgd2l0aCBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZXMuXFxuICpcXG4gKiBUaGlzIGlzIGFjdHVhbGx5IGFuIGltcHJvdmVtZW50IG92ZXIgdGhlIG5ldyBkZWZhdWx0cyBpbiBGaXJlZm94IGluIG91ciB0ZXN0aW5nLFxcbiAqIGFzIGl0IHRyaWdnZXJzIHRoZSBiZXR0ZXIgZm9jdXMgc3R5bGVzIGV2ZW4gZm9yIGxpbmtzLCB3aGljaCBzdGlsbCB1c2UgYSBkb3R0ZWRcXG4gKiBvdXRsaW5lIGluIEZpcmVmb3ggYnkgZGVmYXVsdC5cXG4gKi9cXG4gXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2ZcXG4gKiBvcHQtb3V0LlxcbiAqL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGZvcm0gZWxlbWVudCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gZm9yZ2V0IHRvXFxuICogc3R5bGUgZXhwbGljaXRseSBzbyB5b3UgZG9uJ3QgaW5hZHZlcnRlbnRseSBpbnRyb2R1Y2VcXG4gKiBzdHlsZXMgdGhhdCBkZXZpYXRlIGZyb20geW91ciBkZXNpZ24gc3lzdGVtLiBUaGVzZSBzdHlsZXNcXG4gKiBzdXBwbGVtZW50IGEgcGFydGlhbCByZXNldCB0aGF0IGlzIGFscmVhZHkgYXBwbGllZCBieVxcbiAqIG5vcm1hbGl6ZS5jc3MuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogVXNlIHRoZSBjb25maWd1cmVkICdtb25vJyBmb250IGZhbWlseSBmb3IgZWxlbWVudHMgdGhhdFxcbiAqIGFyZSBleHBlY3RlZCB0byBiZSByZW5kZXJlZCB3aXRoIGEgbW9ub3NwYWNlIGZvbnQsIGZhbGxpbmdcXG4gKiBiYWNrIHRvIHRoZSBzeXN0ZW0gbW9ub3NwYWNlIHN0YWNrIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyZWRcXG4gKiAnbW9ubycgZm9udCBmYW1pbHkuXFxuICovXFxuXFxucHJlLFxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdCBhcyB0aGF0J3NcXG4gKiAgICB0aGUgYmVoYXZpb3IgeW91IHdhbnQgYWxtb3N0IGFsbCBvZiB0aGUgdGltZS4gSW5zcGlyZWQgYnlcXG4gKiAgICBDU1MgUmVtZWR5LCB3aXRoIGBzdmdgIGFkZGVkIGFzIHdlbGwuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICogXFxuICogMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlXFxuICogICAgc2Vuc2libHkgYnkgZGVmYXVsdCB3aGVuIG92ZXJyaWRpbmcgYGRpc3BsYXlgIGJ5IGFkZGluZyBhXFxuICogICAgdXRpbGl0eSBsaWtlIGBpbmxpbmVgLlxcbiAqXFxuICogICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnRpbmcgZXJyb3IgaW4gc29tZVxcbiAqICAgIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuICogXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwXFxuICovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmVcXG4gKiB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIEVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcblxcdC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuXFx0LS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcblxcdC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxufVxcblxcbjpyb290IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWIxKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuaHRtbCB7XFxuXFx0LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuOnJvb3Qge1xcblxcdC0tcDogMjU5IDk0LjQlIDUxLjIlO1xcblxcdC0tcGY6IDI1OSA5NC4zJSA0MSU7XFxuXFx0LS1wYzogMCAwJSAxMDAlO1xcblxcdC0tczogMzE0IDEwMCUgNDcuMSU7XFxuXFx0LS1zZjogMzE0IDEwMCUgMzcuMSU7XFxuXFx0LS1zYzogMCAwJSAxMDAlO1xcblxcdC0tYTogMTc0IDYwJSA1MSU7XFxuXFx0LS1hZjogMTc0IDU5LjglIDQxJTtcXG5cXHQtLWFjOiAwIDAlIDEwMCU7XFxuXFx0LS1uOiAyMTkgMTQuMSUgMjcuOCU7XFxuXFx0LS1uZjogMjIyIDEzLjQlIDE5JTtcXG5cXHQtLW5jOiAwIDAlIDEwMCU7XFxuXFx0LS1iMTogMCAwJSAxMDAlO1xcblxcdC0tYjI6IDIxMCAyMCUgOTglO1xcblxcdC0tYjM6IDIxNiAxMi4yJSA4My45JTtcXG5cXHQtLWJjOiAyMTUgMjcuOSUgMTYuOSU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcblxcdC0tcm91bmRlZC1ib3g6IDFyZW07XFxuXFx0LS1yb3VuZGVkLWJ0bjogMC41cmVtO1xcblxcdC0tcm91bmRlZC1iYWRnZTogMS45cmVtO1xcblxcdC0tYW5pbWF0aW9uLWJ0bjogMC4yNXM7XFxuXFx0LS1hbmltYXRpb24taW5wdXQ6IC4ycztcXG5cXHQtLXBhZGRpbmctY2FyZDogMnJlbTtcXG5cXHQtLWJ0bi10ZXh0LWNhc2U6IHVwcGVyY2FzZTtcXG5cXHQtLWJ0bi1mb2N1cy1zY2FsZTogMC45NTtcXG5cXHQtLW5hdmJhci1wYWRkaW5nOiAuNXJlbTtcXG5cXHQtLWJvcmRlci1idG46IDFweDtcXG5cXHQtLXRhYi1ib3JkZXI6IDFweDtcXG5cXHQtLXRhYi1yYWRpdXM6IDAuNXJlbTtcXG5cXHQtLXRhYi1zcGFjZXI6IDAuNXJlbTtcXG5cXHQtLWZvY3VzLXJpbmc6IDJweDtcXG5cXHQtLWZvY3VzLXJpbmctb2Zmc2V0OiAycHg7XFxuXFx0LS1nbGFzcy1vcGFjaXR5OiAzMCU7XFxuXFx0LS1nbGFzcy1ib3JkZXItb3BhY2l0eTogMTAlO1xcblxcdC0tZ2xhc3MtcmVmbGV4LWRlZ3JlZTogMTAwZGVnO1xcblxcdC0tZ2xhc3MtcmVmbGV4LW9wYWNpdHk6IDEwJTtcXG5cXHQtLWdsYXNzLWJsdXI6IDQwcHg7XFxuXFx0LS1nbGFzcy10ZXh0LXNoYWRvdy1vcGFjaXR5OiA1JTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcblxcblxcdDpyb290IHtcXG5cXHRcXHQtLXA6IDI1OSA5NCUgNjElO1xcblxcdFxcdC0tcGY6IDI1OSA5NC40JSA1MS4yJTtcXG5cXHRcXHQtLXBjOiAwIDAlIDEwMCU7XFxuXFx0XFx0LS1zOiAzMTQgMTAwJSA0Ny4xJTtcXG5cXHRcXHQtLXNmOiAzMTQgMTAwJSAzNy4xJTtcXG5cXHRcXHQtLXNjOiAwIDAlIDEwMCU7XFxuXFx0XFx0LS1hOiAxNzQgNjAlIDUxJTtcXG5cXHRcXHQtLWFmOiAxNzQgNTkuOCUgNDElO1xcblxcdFxcdC0tYWM6IDAgMCUgMTAwJTtcXG5cXHRcXHQtLW46IDIyMiAxMy40JSAxOSU7XFxuXFx0XFx0LS1uZjogMjIzIDEzLjclIDEwJTtcXG5cXHRcXHQtLW5jOiAwIDAlIDEwMCU7XFxuXFx0XFx0LS1iMTogMjE5IDE0LjElIDI3LjglO1xcblxcdFxcdC0tYjI6IDIyMiAxMy40JSAxOSU7XFxuXFx0XFx0LS1iMzogMjIzIDEzLjclIDEwJTtcXG5cXHRcXHQtLWJjOiAyMjggMTQuMyUgOTMuMSU7XFxuXFx0XFx0LS1pbjogMjAyIDEwMCUgNzAlO1xcblxcdFxcdC0tc3U6IDg5IDYxLjYlIDUyJTtcXG5cXHRcXHQtLXdhOiA1NCA2OC44JSA2My41JTtcXG5cXHRcXHQtLWVyOiAwIDEwMCUgNzEuOCU7XFxuXFx0fVxcbn1cXG5cXG5bZGF0YS10aGVtZT1saWdodF0ge1xcblxcdC0tcDogMjU5IDk0LjQlIDUxLjIlO1xcblxcdC0tcGY6IDI1OSA5NC4zJSA0MSU7XFxuXFx0LS1wYzogMCAwJSAxMDAlO1xcblxcdC0tczogMzE0IDEwMCUgNDcuMSU7XFxuXFx0LS1zZjogMzE0IDEwMCUgMzcuMSU7XFxuXFx0LS1zYzogMCAwJSAxMDAlO1xcblxcdC0tYTogMTc0IDYwJSA1MSU7XFxuXFx0LS1hZjogMTc0IDU5LjglIDQxJTtcXG5cXHQtLWFjOiAwIDAlIDEwMCU7XFxuXFx0LS1uOiAyMTkgMTQuMSUgMjcuOCU7XFxuXFx0LS1uZjogMjIyIDEzLjQlIDE5JTtcXG5cXHQtLW5jOiAwIDAlIDEwMCU7XFxuXFx0LS1iMTogMCAwJSAxMDAlO1xcblxcdC0tYjI6IDIxMCAyMCUgOTglO1xcblxcdC0tYjM6IDIxNiAxMi4yJSA4My45JTtcXG5cXHQtLWJjOiAyMTUgMjcuOSUgMTYuOSU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcblxcdC0tcm91bmRlZC1ib3g6IDFyZW07XFxuXFx0LS1yb3VuZGVkLWJ0bjogMC41cmVtO1xcblxcdC0tcm91bmRlZC1iYWRnZTogMS45cmVtO1xcblxcdC0tYW5pbWF0aW9uLWJ0bjogMC4yNXM7XFxuXFx0LS1hbmltYXRpb24taW5wdXQ6IC4ycztcXG5cXHQtLXBhZGRpbmctY2FyZDogMnJlbTtcXG5cXHQtLWJ0bi10ZXh0LWNhc2U6IHVwcGVyY2FzZTtcXG5cXHQtLWJ0bi1mb2N1cy1zY2FsZTogMC45NTtcXG5cXHQtLW5hdmJhci1wYWRkaW5nOiAuNXJlbTtcXG5cXHQtLWJvcmRlci1idG46IDFweDtcXG5cXHQtLXRhYi1ib3JkZXI6IDFweDtcXG5cXHQtLXRhYi1yYWRpdXM6IDAuNXJlbTtcXG5cXHQtLXRhYi1zcGFjZXI6IDAuNXJlbTtcXG5cXHQtLWZvY3VzLXJpbmc6IDJweDtcXG5cXHQtLWZvY3VzLXJpbmctb2Zmc2V0OiAycHg7XFxuXFx0LS1nbGFzcy1vcGFjaXR5OiAzMCU7XFxuXFx0LS1nbGFzcy1ib3JkZXItb3BhY2l0eTogMTAlO1xcblxcdC0tZ2xhc3MtcmVmbGV4LWRlZ3JlZTogMTAwZGVnO1xcblxcdC0tZ2xhc3MtcmVmbGV4LW9wYWNpdHk6IDEwJTtcXG5cXHQtLWdsYXNzLWJsdXI6IDQwcHg7XFxuXFx0LS1nbGFzcy10ZXh0LXNoYWRvdy1vcGFjaXR5OiA1JTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9ZGFya10ge1xcblxcdC0tcDogMjU5IDk0JSA2MSU7XFxuXFx0LS1wZjogMjU5IDk0LjQlIDUxLjIlO1xcblxcdC0tcGM6IDAgMCUgMTAwJTtcXG5cXHQtLXM6IDMxNCAxMDAlIDQ3LjElO1xcblxcdC0tc2Y6IDMxNCAxMDAlIDM3LjElO1xcblxcdC0tc2M6IDAgMCUgMTAwJTtcXG5cXHQtLWE6IDE3NCA2MCUgNTElO1xcblxcdC0tYWY6IDE3NCA1OS44JSA0MSU7XFxuXFx0LS1hYzogMCAwJSAxMDAlO1xcblxcdC0tbjogMjIyIDEzLjQlIDE5JTtcXG5cXHQtLW5mOiAyMjMgMTMuNyUgMTAlO1xcblxcdC0tbmM6IDAgMCUgMTAwJTtcXG5cXHQtLWIxOiAyMTkgMTQuMSUgMjcuOCU7XFxuXFx0LS1iMjogMjIyIDEzLjQlIDE5JTtcXG5cXHQtLWIzOiAyMjMgMTMuNyUgMTAlO1xcblxcdC0tYmM6IDIyOCAxNC4zJSA5My4xJTtcXG5cXHQtLWluOiAyMDIgMTAwJSA3MCU7XFxuXFx0LS1zdTogODkgNjEuNiUgNTIlO1xcblxcdC0td2E6IDU0IDY4LjglIDYzLjUlO1xcblxcdC0tZXI6IDAgMTAwJSA3MS44JTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9Y3VwY2FrZV0ge1xcblxcdC0tcDogMTgzIDQ3LjQlIDU5JTtcXG5cXHQtLXBmOiAxODMgNDcuMiUgNDklO1xcblxcdC0tcGM6IDAgMCUgMTAwJTtcXG5cXHQtLXM6IDMzOCA3MS40JSA3OCU7XFxuXFx0LS1zZjogMzM4IDcxLjglIDY4JTtcXG5cXHQtLXNjOiAwIDAlIDEwMCU7XFxuXFx0LS1hOiAzOSA4NC4xJSA1OCU7XFxuXFx0LS1hZjogMzkgODMuNyUgNDglO1xcblxcdC0tYWM6IDAgMCUgMTAwJTtcXG5cXHQtLW46IDI4MCA0Ni41JSAxMy45JTtcXG5cXHQtLW5mOiAyNzkgNDYuNCUgMTElO1xcblxcdC0tbmM6IDAgMCUgMTAwJTtcXG5cXHQtLWIxOiAyNCAzMy4zJSA5Ny4xJTtcXG5cXHQtLWIyOiAyNyAyMiUgOTIlO1xcblxcdC0tYjM6IDIyIDE0LjMlIDg5JTtcXG5cXHQtLWJjOiAyODAgNDYuNSUgMTMuOSU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcblxcdC0tcm91bmRlZC1ib3g6IDFyZW07XFxuXFx0LS1yb3VuZGVkLWJ0bjogMS45cmVtO1xcblxcdC0tcm91bmRlZC1iYWRnZTogMS45cmVtO1xcblxcdC0tdGFiLWJvcmRlcjogMnB4O1xcbn1cXG5cXG5bZGF0YS10aGVtZT1idW1ibGViZWVdIHtcXG5cXHQtLXA6IDUwIDk0LjQlIDU4JTtcXG5cXHQtLXBmOiA1MCA5NC4zJSA0Ny44JTtcXG5cXHQtLXBjOiAyNDAgMzMuMyUgMTQuMSU7XFxuXFx0LS1zOiA0MSA3NC4yJSA1Mi45JTtcXG5cXHQtLXNmOiA0MSA3My42JSA0My4xJTtcXG5cXHQtLXNjOiAwIDAlIDEwMCU7XFxuXFx0LS1hOiAyNDAgMzMuMyUgMTQuMSU7XFxuXFx0LS1hZjogMjQwIDMzLjMlIDEwJTtcXG5cXHQtLWFjOiAwIDAlIDEwMCU7XFxuXFx0LS1uOiAyNDAgMzMuMyUgMTQuMSU7XFxuXFx0LS1uZjogMjQwIDMzLjMlIDEwJTtcXG5cXHQtLW5jOiAwIDAlIDEwMCU7XFxuXFx0LS1iMTogMCAwJSAxMDAlO1xcblxcdC0tYjI6IDAgMCUgOTYuMSU7XFxuXFx0LS1iMzogMCAwJSA4OSU7XFxuXFx0LS1iYzogMCAwJSAwJTtcXG5cXHQtLWluOiAyMDcgODkuOCUgNTMuOSU7XFxuXFx0LS1zdTogMTc0IDEwMCUgMjklO1xcblxcdC0td2E6IDM2IDEwMCUgNTAlO1xcblxcdC0tZXI6IDE0IDEwMCUgNTcuMSU7XFxufVxcblxcbltkYXRhLXRoZW1lPWVtZXJhbGRdIHtcXG5cXHQtLXA6IDE0MSA1MCUgNjAlO1xcblxcdC0tcGY6IDE0MSA0OS44JSA1MCU7XFxuXFx0LS1wYzogMjEwIDIwJSA5OCU7XFxuXFx0LS1zOiAyMTkgOTYuMSUgNjAlO1xcblxcdC0tc2Y6IDIxOSA5Ni4xJSA1MCU7XFxuXFx0LS1zYzogMjEwIDIwJSA5OCU7XFxuXFx0LS1hOiAxMCA4MS4yJSA1Ni4xJTtcXG5cXHQtLWFmOiAxMCA4MS4yJSA0NS45JTtcXG5cXHQtLWFjOiAyMTAgMjAlIDk4JTtcXG5cXHQtLW46IDIxOSAyMC4zJSAyNS4xJTtcXG5cXHQtLW5mOiAyMjAgMTkuNSUgMTUuMSU7XFxuXFx0LS1uYzogMjEwIDIwJSA5OCU7XFxuXFx0LS1iMTogMCAwJSAxMDAlO1xcblxcdC0tYjI6IDIxMCAyMCUgOTglO1xcblxcdC0tYjM6IDAgMCUgOTQuOSU7XFxuXFx0LS1iYzogMjE5IDIwLjMlIDI1LjElO1xcblxcdC0taW46IDIwNyA4OS44JSA1My45JTtcXG5cXHQtLXN1OiAxNzQgMTAwJSAyOSU7XFxuXFx0LS13YTogMzYgMTAwJSA1MCU7XFxuXFx0LS1lcjogMTQgMTAwJSA1Ny4xJTtcXG5cXHQtLWFuaW1hdGlvbi1idG46IDA7XFxuXFx0LS1hbmltYXRpb24taW5wdXQ6IDA7XFxuXFx0LS1idG4tZm9jdXMtc2NhbGU6IDE7XFxufVxcblxcbltkYXRhLXRoZW1lPWNvcnBvcmF0ZV0ge1xcblxcdC0tcDogMjI5IDk1LjclIDYzLjklO1xcblxcdC0tcGY6IDIyOSA5NS43JSA1My45JTtcXG5cXHQtLXBjOiAyMzMgMjcuMyUgMTIuOSU7XFxuXFx0LS1zOiAyMTUgMjYuMyUgNTklO1xcblxcdC0tc2Y6IDIxNCAyNi4xJSA0OC44JTtcXG5cXHQtLXNjOiAyMzMgMjcuMyUgMTIuOSU7XFxuXFx0LS1hOiAxNTQgNDklIDYwJTtcXG5cXHQtLWFmOiAxNTQgNDklIDUwJTtcXG5cXHQtLWFjOiAyMzMgMjcuMyUgMTIuOSU7XFxuXFx0LS1uOiAyMzMgMjcuMyUgMTIuOSU7XFxuXFx0LS1uZjogMjQwIDI1JSAzLjElO1xcblxcdC0tbmM6IDIxMCAzOC41JSA5NC45JTtcXG5cXHQtLWIxOiAwIDAlIDEwMCU7XFxuXFx0LS1iMjogMjEwIDYwJSA5OCU7XFxuXFx0LS1iMzogMjEwIDM4LjUlIDk0LjklO1xcblxcdC0tYmM6IDIzMyAyNy4zJSAxMi45JTtcXG5cXHQtLWluOiAyMDcgODkuOCUgNTMuOSU7XFxuXFx0LS1zdTogMTc0IDEwMCUgMjklO1xcblxcdC0td2E6IDM2IDEwMCUgNTAlO1xcblxcdC0tZXI6IDE0IDEwMCUgNTcuMSU7XFxuXFx0LS1hbmltYXRpb24tYnRuOiAwO1xcblxcdC0tYW5pbWF0aW9uLWlucHV0OiAwO1xcblxcdC0tYnRuLWZvY3VzLXNjYWxlOiAxO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1zeW50aHdhdmVdIHtcXG5cXHQtLXA6IDMyMSA2OS42JSA2OSU7XFxuXFx0LS1wZjogMzIxIDcwLjMlIDU5JTtcXG5cXHQtLXBjOiAyNTcgNjMuMiUgMTcuMSU7XFxuXFx0LS1zZjogMTk3IDg3LjQlIDc1LjElO1xcblxcdC0tczogMTk3IDg2LjYlIDY0LjklO1xcblxcdC0tc2M6IDI1NyA2My4yJSAxNy4xJTtcXG5cXHQtLWFmOiA0OCA4OS4zJSA2Ny4xJTtcXG5cXHQtLWE6IDQ4IDg5JSA1Ny4xJTtcXG5cXHQtLWFjOiAyNTcgNjMuMiUgMTcuMSU7XFxuXFx0LS1uOiAyNTMgNjAuOCUgMTklO1xcblxcdC0tbmY6IDI1NyA2NC4zJSAxMSU7XFxuXFx0LS1uYzogMjYwIDYwJSA5OCU7XFxuXFx0LS1iMTogMjU0IDU5LjElIDI1LjklO1xcblxcdC0tYjI6IDI1MyA2MC44JSAxOSU7XFxuXFx0LS1iMzogMjU3IDY0LjMlIDExJTtcXG5cXHQtLWJjOiAyNjAgNjAlIDk4JTtcXG5cXHQtLWluOiAxOTkgODclIDYzLjklO1xcblxcdC0tc3U6IDE2OCA3NC4yJSA2OCU7XFxuXFx0LS13YTogNDggODklIDU3LjElO1xcblxcdC0tZXI6IDM1MiA3My42JSA1Ni45JTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9cmV0cm9dIHtcXG5cXHRmb250LWZhbWlseTogdWlzZWNvbmRhcnllcmlmLEdlb3JnaWEsQ2FtYnJpYSxUaW1lcyBOZXcgUm9tYW4sVGltZXMsc2VyaWY7XFxuXFx0LS1wOiAzIDczLjglIDc2LjElO1xcblxcdC0tcGY6IDMgNzMuNiUgNjUuOSU7XFxuXFx0LS1wYzogMzQ1IDUuMyUgMTQuOSU7XFxuXFx0LS1zOiAxNDUgMjcuMyUgNzIlO1xcblxcdC0tc2Y6IDE0NSAyNi44JSA2MiU7XFxuXFx0LS1zYzogMzQ1IDUuMyUgMTQuOSU7XFxuXFx0LS1hOiA0OSA2Ny4yJSA3Ni4xJTtcXG5cXHQtLWFmOiA0OSA2Ni43JSA2NS45JTtcXG5cXHQtLWFjOiAzNDUgNS4zJSAxNC45JTtcXG5cXHQtLW46IDQyIDE2LjglIDQyJTtcXG5cXHQtLW5mOiA0MSAxMy4xJSAyMy45JTtcXG5cXHQtLW5jOiA0NSA0Ny4xJSA4MCU7XFxuXFx0LS1iMTogNDUgNDcuMSUgODAlO1xcblxcdC0tYjI6IDQ1IDM3LjElIDcyJTtcXG5cXHQtLWIzOiA0MiAzNiUgNjUuMSU7XFxuXFx0LS1iYzogMzQ1IDUuMyUgMTQuOSU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcblxcdC0tcm91bmRlZC1ib3g6IDAuNHJlbTtcXG5cXHQtLXJvdW5kZWQtYnRuOiAwLjRyZW07XFxuXFx0LS1yb3VuZGVkLWJhZGdlOiAwLjRyZW07XFxufVxcblxcbltkYXRhLXRoZW1lPWN5YmVycHVua10ge1xcblxcdGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsU0ZNb25vLVJlZ3VsYXIsTWVubG8sTW9uYWNvLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxDb3VyaWVyIE5ldyxtb25vc3BhY2U7XFxuXFx0LS1wOiAzNDUgMTAwJSA3Mi45JTtcXG5cXHQtLXBmOiAzNDQgMTAwJSA2Ny4xJTtcXG5cXHQtLXBjOiAwIDAlIDAlO1xcblxcdC0tczogMTk1IDgwLjQlIDcwJTtcXG5cXHQtLXNmOiAxOTQgNjUuOCUgNjElO1xcblxcdC0tc2M6IDAgMCUgMCU7XFxuXFx0LS1hOiAyNzYgNzQuMyUgNzElO1xcblxcdC0tYWY6IDI3NiA3NS43JSA2Mi45JTtcXG5cXHQtLWFjOiAwIDAlIDAlO1xcblxcdC0tbjogNTcgMTAwJSAxMi45JTtcXG5cXHQtLW5mOiA2MCA4MCUgMiU7XFxuXFx0LS1uYzogNTYgMTAwJSA1MCU7XFxuXFx0LS1iMTogNTYgMTAwJSA1MCU7XFxuXFx0LS1iMjogNTYgMTAwJSA0Mi45JTtcXG5cXHQtLWIzOiA1NiAxMDAlIDM2LjElO1xcblxcdC0tYmM6IDAgMCUgMCU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcblxcdC0tcm91bmRlZC1ib3g6IDA7XFxuXFx0LS1yb3VuZGVkLWJ0bjogMDtcXG5cXHQtLXJvdW5kZWQtYmFkZ2U6IDA7XFxuXFx0LS10YWItcmFkaXVzOiAwO1xcbn1cXG5cXG5bZGF0YS10aGVtZT12YWxlbnRpbmVdIHtcXG5cXHQtLXA6IDM1MyA3My44JSA2Ny4xJTtcXG5cXHQtLXBmOiAzNTMgNzMuNiUgNTYuOSU7XFxuXFx0LS1wYzogMCAwJSAxMDAlO1xcblxcdC0tczogMjU0IDg2LjQlIDc2LjklO1xcblxcdC0tc2Y6IDI1NCA4Ni45JSA2Ny4xJTtcXG5cXHQtLXNjOiAwIDAlIDEwMCU7XFxuXFx0LS1hOiAxODEgNTUuNiUgNzAlO1xcblxcdC0tYWY6IDE4MSA1NC45JSA2MCU7XFxuXFx0LS1hYzogMCAwJSAxMDAlO1xcblxcdC0tbjogMzM2IDQyLjklIDQ4JTtcXG5cXHQtLW5mOiAzNDAgNDAuMiUgMzglO1xcblxcdC0tbmM6IDMxOCA0Ni40JSA4OSU7XFxuXFx0LS1iMTogMzE4IDQ2LjQlIDg5JTtcXG5cXHQtLWIyOiAzMTUgNTguOSUgNzklO1xcblxcdC0tYjM6IDMxNiA2Mi4zJSA3Mi45JTtcXG5cXHQtLWJjOiAzNDQgMzguNSUgMjglO1xcblxcdC0taW46IDIwNyA4OS44JSA1My45JTtcXG5cXHQtLXN1OiAxNzQgMTAwJSAyOSU7XFxuXFx0LS13YTogMzYgMTAwJSA1MCU7XFxuXFx0LS1lcjogMTQgMTAwJSA1Ny4xJTtcXG5cXHQtLXJvdW5kZWQtYm94OiAxcmVtO1xcblxcdC0tcm91bmRlZC1idG46IDEuOXJlbTtcXG5cXHQtLXJvdW5kZWQtYmFkZ2U6IDEuOXJlbTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9aGFsbG93ZWVuXSB7XFxuXFx0LS1wOiAzMiA4OS4zJSA1Mi4yJTtcXG5cXHQtLXBmOiAzMiA4OC44JSA0MiU7XFxuXFx0LS1wYzogMTgwIDcuMyUgOCU7XFxuXFx0LS1zOiAyNzEgNDUuOCUgNDIlO1xcblxcdC0tc2Y6IDI3MSA0NiUgMzIlO1xcblxcdC0tc2M6IDAgMCUgMTAwJTtcXG5cXHQtLWE6IDkxIDEwMCUgMzIuOSU7XFxuXFx0LS1hZjogOTEgMTAwJSAyMi45JTtcXG5cXHQtLWFjOiAwIDAlIDEwMCU7XFxuXFx0LS1uOiAxODAgMy42JSAxMSU7XFxuXFx0LS1uZjogMTgwIDcuMyUgOCU7XFxuXFx0LS1uYzogMCAwJSAxMDAlO1xcblxcdC0tYjE6IDAgMCUgMTIuOSU7XFxuXFx0LS1iMjogMTgwIDMuNiUgMTElO1xcblxcdC0tYjM6IDE4MCA3LjMlIDglO1xcblxcdC0tYmM6IDAgMCUgMTAwJTtcXG5cXHQtLWluOiAyMDIgMTAwJSA3MCU7XFxuXFx0LS1zdTogODkgNjEuNiUgNTIlO1xcblxcdC0td2E6IDU0IDY4LjglIDYzLjUlO1xcblxcdC0tZXI6IDAgMTAwJSA3MS44JTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9Z2FyZGVuXSB7XFxuXFx0LS1wOiAxMzkgMTYlIDQyLjklO1xcblxcdC0tcGY6IDEzNyAxNC44JSAzMy4xJTtcXG5cXHQtLXBjOiAwIDAlIDEwMCU7XFxuXFx0LS1zOiA5NyAzNy4xJSA5My4xJTtcXG5cXHQtLXNmOiA5OCAzNi4zJSA4Mi4yJTtcXG5cXHQtLXNjOiA5NiAzMi41JSAxNS4xJTtcXG5cXHQtLWE6IDAgNjcuNyUgOTMuOSU7XFxuXFx0LS1hZjogMCA3MS4xJSA4NS4xJTtcXG5cXHQtLWFjOiAwIDIyJSAxNi4xJTtcXG5cXHQtLW46IDAgMy45JSAzNS4xJTtcXG5cXHQtLW5mOiAwIDMuNyUgMTUuOSU7XFxuXFx0LS1uYzogMCA0LjMlIDkxJTtcXG5cXHQtLWIxOiAwIDQuMyUgOTElO1xcblxcdC0tYjI6IDAgNS4yJSA4MSU7XFxuXFx0LS1iMzogMCA1LjQlIDcxJTtcXG5cXHQtLWJjOiAwIDMuMiUgNi4xJTtcXG5cXHQtLWluOiAyMDcgODkuOCUgNTMuOSU7XFxuXFx0LS1zdTogMTc0IDEwMCUgMjklO1xcblxcdC0td2E6IDM2IDEwMCUgNTAlO1xcblxcdC0tZXI6IDE0IDEwMCUgNTcuMSU7XFxuXFx0LS1yb3VuZGVkLWJveDogMXJlbTtcXG5cXHQtLXJvdW5kZWQtYnRuOiAwLjVyZW07XFxuXFx0LS1yb3VuZGVkLWJhZGdlOiAxLjlyZW07XFxufVxcblxcbltkYXRhLXRoZW1lPWZvcmVzdF0ge1xcblxcdC0tcDogMTQxIDcyJSA0MiU7XFxuXFx0LS1wZjogMTQxIDcxLjglIDMyJTtcXG5cXHQtLXBjOiAwIDAlIDEwMCU7XFxuXFx0LS1zOiAxNDEgNzQuNyUgNDglO1xcblxcdC0tc2Y6IDE0MSA3NS4zJSAzOCU7XFxuXFx0LS1zYzogMCAwJSAxMDAlO1xcblxcdC0tYTogMzUgNjklIDUyJTtcXG5cXHQtLWFmOiAzNSA2OS4yJSA0MiU7XFxuXFx0LS1hYzogMCAwJSAxMDAlO1xcblxcdC0tbjogMCA5LjclIDYuMSU7XFxuXFx0LS1uZjogMCAyMCUgMiU7XFxuXFx0LS1uYzogMCAwJSAxMDAlO1xcblxcdC0tYjE6IDAgMTIuMiUgOCU7XFxuXFx0LS1iMjogMCA5LjclIDYuMSU7XFxuXFx0LS1iMzogMCAyMCUgMiU7XFxuXFx0LS1iYzogMCAwJSAxMDAlO1xcblxcdC0tcm91bmRlZC1idG46IDEuOXJlbTtcXG5cXHQtLWluOiAyMDIgMTAwJSA3MCU7XFxuXFx0LS1zdTogODkgNjEuNiUgNTIlO1xcblxcdC0td2E6IDU0IDY4LjglIDYzLjUlO1xcblxcdC0tZXI6IDAgMTAwJSA3MS44JTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9YXF1YV0ge1xcblxcdC0tcDogMTg5IDEwMCUgNjIuOSU7XFxuXFx0LS1wZjogMTg5IDEwMCUgNTIuOSU7XFxuXFx0LS1wYzogMCAwJSAwJTtcXG5cXHQtLXM6IDI3NCAzMC45JSA1Ni45JTtcXG5cXHQtLXNmOiAyNzQgMzAuOCUgNDcuMSU7XFxuXFx0LS1zYzogMCAwJSAxMDAlO1xcblxcdC0tYTogNDcgMTAwJSA4MCU7XFxuXFx0LS1hZjogNDcgMTAwJSA3MCU7XFxuXFx0LS1hYzogMCAwJSAxMDAlO1xcblxcdC0tbjogMjMxIDc3LjQlIDMyLjklO1xcblxcdC0tbmY6IDIzMSA2Ny42JSAyOSU7XFxuXFx0LS1uYzogMCAwJSAxMDAlO1xcblxcdC0tYjE6IDIzMSA4OC43JSAzOCU7XFxuXFx0LS1iMjogMjMxIDc3LjQlIDMyLjklO1xcblxcdC0tYjM6IDIzMSA2Ny42JSAyOSU7XFxuXFx0LS1iYzogMCAwJSAxMDAlO1xcblxcdC0taW46IDIwNyA4OS44JSA1My45JTtcXG5cXHQtLXN1OiAxNzQgMTAwJSAyOSU7XFxuXFx0LS13YTogMzYgMTAwJSA1MCU7XFxuXFx0LS1lcjogMTQgMTAwJSA1Ny4xJTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9bG9maV0ge1xcblxcdC0tcDogMCAwJSA1MC4yJTtcXG5cXHQtLXBmOiAwIDAlIDQ1LjElO1xcblxcdC0tcGM6IDI0MCA0JSA5NS4xJTtcXG5cXHQtLXM6IDAgMCUgMzAuMiU7XFxuXFx0LS1zZjogMCAwJSAyNS4xJTtcXG5cXHQtLXNjOiAyNDAgNCUgOTUuMSU7XFxuXFx0LS1hOiAwIDAlIDEwLjIlO1xcblxcdC0tYWY6IDAgMCUgNS4xJTtcXG5cXHQtLWFjOiAyNDAgNCUgOTUuMSU7XFxuXFx0LS1uOiAyNDAgNCUgOTUuMSU7XFxuXFx0LS1uZjogMjQwIDUuOSUgOTAlO1xcblxcdC0tbmM6IDAgMCUgMzAuMiU7XFxuXFx0LS1iMTogMCAwJSAxMDAlO1xcblxcdC0tYjI6IDAgMCUgMTAwJTtcXG5cXHQtLWIzOiAwIDAlIDEwMCU7XFxuXFx0LS1iYzogMCAwJSA0OSU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcblxcdC0tYm9yZGVyLWNvbG9yOiAjZTZlNmU2O1xcblxcdC0tYW5pbWF0aW9uLWJ0bjogMDtcXG5cXHQtLWFuaW1hdGlvbi1pbnB1dDogMDtcXG5cXHQtLWJ0bi1mb2N1cy1zY2FsZTogMTtcXG5cXHQtLXJvdW5kZWQtYm94OiAwcmVtO1xcblxcdC0tcm91bmRlZC1idG46IDByZW07XFxuXFx0LS1yb3VuZGVkLWJhZGdlOiAwcmVtO1xcblxcdC0tdGFiLXJhZGl1czogMHJlbTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9bG9maV0gKiB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpICFpbXBvcnRhbnQ7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxuXFx0LS10dy1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1ib3JkZXItY29sb3IpICFpbXBvcnRhbnQ7XFxufVxcblxcbltkYXRhLXRoZW1lPXBhc3RlbF0ge1xcblxcdC0tcDogMjg0IDIxLjYlIDgwJTtcXG5cXHQtLXBmOiAyODIgMjEuNiUgNzAlO1xcblxcdC0tcGM6IDAgMCUgMCU7XFxuXFx0LS1zOiAzNTIgNzAuNSUgODglO1xcblxcdC0tc2Y6IDM1MiA2OS42JSA3OCU7XFxuXFx0LS1zYzogMCAwJSAxMDAlO1xcblxcdC0tYTogMTU4IDU0LjYlIDgxJTtcXG5cXHQtLWFmOiAxNTggNTUuNCUgNzElO1xcblxcdC0tYWM6IDAgMCUgMTAwJTtcXG5cXHQtLW46IDE5OSA0My43JSA2MSU7XFxuXFx0LS1uZjogMTk5IDQ0JSA1MSU7XFxuXFx0LS1uYzogMCAwJSAxMDAlO1xcblxcdC0tYjE6IDAgMCUgMTAwJTtcXG5cXHQtLWIyOiAyMTAgMjAlIDk4JTtcXG5cXHQtLWIzOiAyMTYgMTIuMiUgODMuOSU7XFxuXFx0LS1iYzogMjA2IDMuMSUgNTUuMSU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcblxcdC0tcm91bmRlZC1ib3g6IDFyZW07XFxuXFx0LS1yb3VuZGVkLWJ0bjogMS45cmVtO1xcblxcdC0tcm91bmRlZC1iYWRnZTogMS45cmVtO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1mYW50YXN5XSB7XFxuXFx0LS1wOiAyOTYgODIuOCUgMjUuMSU7XFxuXFx0LS1wZjogMjk2IDgxLjglIDE1LjElO1xcblxcdC0tcGM6IDAgMCUgMTAwJTtcXG5cXHQtLXM6IDIwMCAxMDAlIDM3LjElO1xcblxcdC0tc2Y6IDIwMCAxMDAlIDI3LjElO1xcblxcdC0tc2M6IDAgMCUgMTAwJTtcXG5cXHQtLWE6IDMxIDk0LjQlIDUxLjIlO1xcblxcdC0tYWY6IDMxIDk0LjMlIDQxJTtcXG5cXHQtLWFjOiAwIDAlIDEwMCU7XFxuXFx0LS1uOiAyMTUgMjcuOSUgMTYuOSU7XFxuXFx0LS1uZjogMjIxIDM5LjMlIDExJTtcXG5cXHQtLW5jOiAwIDAlIDEwMCU7XFxuXFx0LS1iMTogMCAwJSAxMDAlO1xcblxcdC0tYjI6IDIxMCAyMCUgOTglO1xcblxcdC0tYjM6IDIxNiAxMi4yJSA4My45JTtcXG5cXHQtLWJjOiAyMTUgMjcuOSUgMTYuOSU7XFxuXFx0LS1pbjogMjA3IDg5LjglIDUzLjklO1xcblxcdC0tc3U6IDE3NCAxMDAlIDI5JTtcXG5cXHQtLXdhOiAzNiAxMDAlIDUwJTtcXG5cXHQtLWVyOiAxNCAxMDAlIDU3LjElO1xcbn1cXG5cXG5bZGF0YS10aGVtZT13aXJlZnJhbWVdIHtcXG5cXHRmb250LWZhbWlseTogQ2hhbGtib2FyZCxjb21pYyBzYW5zIG1zLFxcXCJzYW5zc2Vjb25kYXJ5ZXJpZlxcXCI7XFxuXFx0LS1wOiAwIDAlIDcyLjIlO1xcblxcdC0tcGY6IDAgMCUgNzIuMiU7XFxuXFx0LS1wYzogMCAwJSAwJTtcXG5cXHQtLXM6IDAgMCUgNzIuMiU7XFxuXFx0LS1zZjogMCAwJSA3Mi4yJTtcXG5cXHQtLXNjOiAwIDAlIDAlO1xcblxcdC0tYTogMCAwJSA3Mi4yJTtcXG5cXHQtLWFmOiAwIDAlIDcyLjIlO1xcblxcdC0tYWM6IDAgMCUgMCU7XFxuXFx0LS1iMTogMCAwJSAxMDAlO1xcblxcdC0tYjI6IDAgMCUgMTAwJTtcXG5cXHQtLWIzOiAwIDAlIDEwMCU7XFxuXFx0LS1iYzogMCAwJSAwJTtcXG5cXHQtLW46IDAgMCUgOTIuMiU7XFxuXFx0LS1uZjogMCAwJSA5Mi4yJTtcXG5cXHQtLW5jOiAwIDAlIDAlO1xcblxcdC0taW46IDI0MCAxMDAlIDUwJTtcXG5cXHQtLXN1OiAxMjAgMTAwJSAyNS4xJTtcXG5cXHQtLXdhOiA2MCAzMC4yJSA1MCU7XFxuXFx0LS1lcjogMCAxMDAlIDUwJTtcXG5cXHQtLWJvcmRlci1jb2xvcjogIzAwMDAwMDtcXG5cXHQtLXJvdW5kZWQtYm94OiAwLjJyZW07XFxuXFx0LS1yb3VuZGVkLWJ0bjogMC4ycmVtO1xcblxcdC0tcm91bmRlZC1iYWRnZTogMC4ycmVtO1xcblxcdC0tdGFiLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG5bZGF0YS10aGVtZT13aXJlZnJhbWVdICoge1xcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKSAhaW1wb3J0YW50O1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcblxcdC0tdHctc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yKSAhaW1wb3J0YW50O1xcbn1cXG5cXG5bZGF0YS10aGVtZT1ibGFja10ge1xcblxcdC0tcDogMCAwJSAxMDAlO1xcblxcdC0tcGY6IDAgMCUgMTAwJTtcXG5cXHQtLXBjOiAwIDAlIDAlO1xcblxcdC0tczogMCAwJSAxMDAlO1xcblxcdC0tc2Y6IDAgMCUgMTAwJTtcXG5cXHQtLXNjOiAwIDAlIDAlO1xcblxcdC0tYTogMCAwJSAxMDAlO1xcblxcdC0tYWY6IDAgMCUgMTAwJTtcXG5cXHQtLWFjOiAwIDAlIDAlO1xcblxcdC0tYjE6IDAgMCUgMCU7XFxuXFx0LS1iMjogMCAwJSAyMCU7XFxuXFx0LS1iMzogMCAwJSAzMC4yJTtcXG5cXHQtLWJjOiAwIDAlIDEwMCU7XFxuXFx0LS1uOiAwIDAlIDIwJTtcXG5cXHQtLW5mOiAwIDAlIDMwLjIlO1xcblxcdC0tbmM6IDAgMCUgMTAwJTtcXG5cXHQtLWluOiAyNDAgMTAwJSA1MCU7XFxuXFx0LS1zdTogMTIwIDEwMCUgMjUuMSU7XFxuXFx0LS13YTogNjAgMTAwJSA1MCU7XFxuXFx0LS1lcjogMCAxMDAlIDUwJTtcXG5cXHQtLXJvdW5kZWQtYm94OiAwO1xcblxcdC0tcm91bmRlZC1idG46IDA7XFxuXFx0LS1yb3VuZGVkLWJhZGdlOiAwO1xcblxcdC0tdGFiLXJhZGl1czogMDtcXG5cXHQtLWFuaW1hdGlvbi1idG46IDA7XFxuXFx0LS1hbmltYXRpb24taW5wdXQ6IDA7XFxuXFx0LS1idG4tZm9jdXMtc2NhbGU6IDE7XFxuXFx0LS1idG4tdGV4dC1jYXNlOiBsb3dlcmNhc2U7XFxufVxcblxcbltkYXRhLXRoZW1lPWx1eHVyeV0ge1xcblxcdC0tcDogMCAwJSAxMDAlO1xcblxcdC0tcGY6IDAgMCUgOTAuMiU7XFxuXFx0LS1wYzogMCAwJSAwJTtcXG5cXHQtLXM6IDIxOCA1NC4zJSAxOCU7XFxuXFx0LS1zZjogMjE5IDU2LjElIDglO1xcblxcdC0tc2M6IDAgMCUgMTAwJTtcXG5cXHQtLWE6IDMxOSAyMS44JSAyNi4xJTtcXG5cXHQtLWFmOiAzMjAgMjIlIDE2LjElO1xcblxcdC0tYWM6IDAgMCUgMTAwJTtcXG5cXHQtLW46IDI3MCA0LjMlIDklO1xcblxcdC0tbmY6IDI3MCAyLjIlIDE4JTtcXG5cXHQtLW5jOiAzNyA2Ny4zJSA1OCU7XFxuXFx0LS1iMTogMjQwIDEwJSAzLjklO1xcblxcdC0tYjI6IDI3MCA0LjMlIDklO1xcblxcdC0tYjM6IDI3MCAyLjIlIDE4JTtcXG5cXHQtLWJjOiAzNyA2Ny4zJSA1OCU7XFxuXFx0LS1pbjogMjAyIDEwMCUgNzAlO1xcblxcdC0tc3U6IDg5IDYxLjYlIDUyJTtcXG5cXHQtLXdhOiA1NCA2OC44JSA2My41JTtcXG5cXHQtLWVyOiAwIDEwMCUgNzEuOCU7XFxufVxcblxcbltkYXRhLXRoZW1lPWRyYWN1bGFdIHtcXG5cXHQtLXA6IDMzMCAxMDAlIDg1LjElO1xcblxcdC0tcGY6IDMzMCAxMDAlIDc1LjElO1xcblxcdC0tcGM6IDIzMyAxMi4xJSAxMi45JTtcXG5cXHQtLXM6IDExNSAxMDAlIDg1LjElO1xcblxcdC0tc2Y6IDExNSAxMDAlIDc1LjElO1xcblxcdC0tc2M6IDIzMyAxMi4xJSAxMi45JTtcXG5cXHQtLWE6IDYwIDEwMCUgODUuMSU7XFxuXFx0LS1hZjogNjAgMTAwJSA3NS4xJTtcXG5cXHQtLWFjOiAyMzMgMTIuMSUgMTIuOSU7XFxuXFx0LS1uOiAyNDUgMTQuMyUgMTUuMSU7XFxuXFx0LS1uZjogMjMzIDEyLjElIDEyLjklO1xcblxcdC0tbmM6IDI1MSAxMDAlIDkwJTtcXG5cXHQtLWIxOiAyNDQgMTMlIDIxLjIlO1xcblxcdC0tYjI6IDI0NSAxNC4zJSAxNS4xJTtcXG5cXHQtLWIzOiAyMzMgMTIuMSUgMTIuOSU7XFxuXFx0LS1iYzogMjUxIDEwMCUgOTAlO1xcblxcdC0taW46IDIwNyA4OS44JSA1My45JTtcXG5cXHQtLXN1OiAxNzQgMTAwJSAyOSU7XFxuXFx0LS13YTogMzYgMTAwJSA1MCU7XFxuXFx0LS1lcjogMTQgMTAwJSA1Ny4xJTtcXG59XFxuXFxuLmFsZXJ0Pjpub3QoW2hpZGRlbl0pfjpub3QoW2hpZGRlbl0pIHtcXG5cXHQtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG5cXHRtYXJnaW4tdG9wOiBjYWxjKDAuNXJlbSooMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDAuNXJlbSp2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKTtcXG59XFxuXFxuLmFsZXJ0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjIpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcm91bmRlZC1ib3gsMXJlbSk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XFxuXFxuXFx0LmFsZXJ0Pjpub3QoW2hpZGRlbl0pfjpub3QoW2hpZGRlbl0pIHtcXG5cXHRcXHQtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG5cXHRcXHRtYXJnaW4tdG9wOiBjYWxjKDBweCooMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiBjYWxjKDBweCp2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKTtcXG5cXHR9XFxuXFxuXFx0LmFsZXJ0IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG59XFxuXFxuLmFsZXJ0Pioge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hdmF0YXIucGxhY2Vob2xkZXI+ZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5idG4ge1xcblxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLW4pL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcixib3JkZXItY29sb3IsY29sb3IsZmlsbCxzdHJva2Usb3BhY2l0eSxib3gtc2hhZG93LHRyYW5zZm9ybTtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMTVzO1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcm91bmRlZC1idG4sLjVyZW0pO1xcblxcdGhlaWdodDogM3JlbTtcXG5cXHRmb250LXNpemU6IC44NzVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDI7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuXFx0bWluLWhlaWdodDogM3JlbTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHZhcigtLWJ0bi10ZXh0LWNhc2UsdXBwZXJjYXNlKTtcXG5cXHRib3JkZXItd2lkdGg6IHZhcigtLWJvcmRlci1idG4sMXB4KTtcXG5cXHRhbmltYXRpb246IGJ1dHRvbi1wb3AgdmFyKC0tYW5pbWF0aW9uLWJ0biwuMjVzKSBlYXNlLW91dDtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1uKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiBoc2xhKHZhcigtLW5jKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuXFxuLmJ0bi1kaXNhYmxlZCwuYnRuW2Rpc2FibGVkXSB7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdC0tdHctYmctb3BhY2l0eTogMC4yO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tbikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMDtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMC4yO1xcblxcdGNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLmxvYWRpbmcsLmJ0bi5sb2FkaW5nOmhvdmVyIHtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmJ0bi5sb2FkaW5nOmJlZm9yZSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogOTk5OXB4O1xcblxcdGJvcmRlci13aWR0aDogMnB4O1xcblxcdGhlaWdodDogMXJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IC41cmVtO1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCBjdXJyZW50Q29sb3IgY3VycmVudENvbG9yIHRyYW5zcGFyZW50O1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKSB7XFxuXFxuXFx0LmJ0bi5sb2FkaW5nOmJlZm9yZSB7XFxuXFx0XFx0YW5pbWF0aW9uOiBzcGluIDEwcyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcblxcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFxuXFx0dG8ge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcXG5cXHR9XFxufVxcblxcbi5idG4tZ3JvdXA+aW5wdXRbdHlwZT1yYWRpb10uYnRuIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmJ0bi1ncm91cD5pbnB1dFt0eXBlPXJhZGlvXS5idG46YmVmb3JlIHtcXG5cXHRjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xcbn1cXG5cXG4uY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLXJvdW5kZWQtYm94LDFyZW0pO1xcbn1cXG5cXG4uY2FyZDpmb2N1cyB7XFxuXFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi5jYXJkLWJvZHkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4OiAxIDEgYXV0bztcXG5cXHRwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWNhcmQsMnJlbSk7XFxufVxcblxcbi5jYXJkIGZpZ3VyZSwuY2FyZCBmaWd1cmU+KiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkLmltYWdlLWZ1bGwge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jYXJkLmltYWdlLWZ1bGw6YmVmb3JlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tbikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuXFx0b3BhY2l0eTogLjc1O1xcblxcdHotaW5kZXg6IDEwO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLXJvdW5kZWQtYm94LDFyZW0pO1xcbn1cXG5cXG4uY2FyZC5pbWFnZS1mdWxsOmJlZm9yZSwuY2FyZC5pbWFnZS1mdWxsPioge1xcblxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcblxcdGdyaWQtcm93LXN0YXJ0OiAxO1xcbn1cXG5cXG4uY2FyZC5pbWFnZS1mdWxsPmZpZ3VyZSBpbWcge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmNhcmQuaW1hZ2UtZnVsbD4uY2FyZC1ib2R5IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0tbmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxuXFx0ei1pbmRleDogMjA7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxhYmVsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0cGFkZGluZzogLjVyZW0gLjI1cmVtO1xcbn1cXG5cXG4uaGVybyB7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVybz4qIHtcXG5cXHRncmlkLWNvbHVtbi1zdGFydDogMTtcXG5cXHRncmlkLXJvdy1zdGFydDogMTtcXG59XFxuXFxuLmhlcm8tY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHotaW5kZXg6IDA7XFxuXFx0bWF4LXdpZHRoOiA4MHJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmlucHV0IHtcXG5cXHRmbGV4LXNocmluazogMTtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLGJvcmRlci1jb2xvcixjb2xvcixmaWxsLHN0cm9rZSxvcGFjaXR5LGJveC1zaGFkb3csdHJhbnNmb3JtO1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IC4xNXM7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcXG5cXHRoZWlnaHQ6IDNyZW07XFxuXFx0Zm9udC1zaXplOiAuODc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAyO1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWIxKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDA7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuXFx0Ym9yZGVyLXdpZHRoOiAxcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcm91bmRlZC1idG4sLjVyZW0pO1xcbn1cXG5cXG4uaW5wdXQ6Zm9jdXMge1xcblxcdG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRvdXRsaW5lLW9mZnNldDogMnB4O1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKSwwIDAgMCA0cHggaHNsYSh2YXIoLS1iYykvLjIpO1xcbn1cXG5cXG4uYnRuIC5iYWRnZSB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjEpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4gLmJhZGdlLW91dGxpbmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWIyKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0tYjIpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tb3V0bGluZS5idG4tcHJpbWFyeSAuYmFkZ2Uge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1wYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1wcmltYXJ5IC5iYWRnZS1vdXRsaW5lIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0tcCkvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1wcmltYXJ5OmhvdmVyIC5iYWRnZSB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tcGMpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0tcCkvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1wcmltYXJ5OmhvdmVyIC5iYWRnZS5vdXRsaW5lIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1wZikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IGhzbGEodmFyKC0tcGMpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1wYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bjphY3RpdmU6Zm9jdXMsLmJ0bjphY3RpdmU6aG92ZXIge1xcblxcdGFuaW1hdGlvbjogbm9uZTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWJ0bi1mb2N1cy1zY2FsZSwuOTUpKTtcXG59XFxuXFxuLmJ0bi1hY3RpdmUsLmJ0bjpob3ZlciB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tbmYpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLW5mKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG46Zm9jdXMtdmlzaWJsZSB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpLDAgMCAwIDRweCBoc2wodmFyKC0tbmYpKTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0tcGMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tcHJpbWFyeS5idG4tYWN0aXZlLC5idG4tcHJpbWFyeTpob3ZlciB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tcGYpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXBmKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tcHJpbWFyeTpmb2N1cy12aXNpYmxlIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAycHggaHNsKHZhcigtLWIxKSksMCAwIDAgNHB4IGhzbCh2YXIoLS1wKSk7XFxufVxcblxcbi5idG4uZ2xhc3MuYnRuLWFjdGl2ZSwuYnRuLmdsYXNzOmhvdmVyIHtcXG5cXHQtLWdsYXNzLW9wYWNpdHk6IDI1JTtcXG5cXHQtLWdsYXNzLWJvcmRlci1vcGFjaXR5OiAxNSU7XFxufVxcblxcbi5idG4uZ2xhc3M6Zm9jdXMtdmlzaWJsZSB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgMnB4IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1wcmltYXJ5IHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLW91dGxpbmUuYnRuLXByaW1hcnk6aG92ZXIge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXBmKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wZikvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLmxvYWRpbmcuYnRuLWNpcmNsZTpiZWZvcmUsLmJ0bi5sb2FkaW5nLmJ0bi1zcXVhcmU6YmVmb3JlIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5idG4ubG9hZGluZy5idG4tbGc6YmVmb3JlLC5idG4ubG9hZGluZy5idG4teGw6YmVmb3JlIHtcXG5cXHRoZWlnaHQ6IDEuMjVyZW07XFxuXFx0d2lkdGg6IDEuMjVyZW07XFxufVxcblxcbi5idG4ubG9hZGluZy5idG4tc206YmVmb3JlLC5idG4ubG9hZGluZy5idG4teHM6YmVmb3JlIHtcXG5cXHRoZWlnaHQ6IC43NXJlbTtcXG5cXHR3aWR0aDogLjc1cmVtO1xcbn1cXG5cXG4uYnRuLWdyb3VwPi5idG4tYWN0aXZlLC5idG4tZ3JvdXA+aW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZC5idG4ge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1wYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1ncm91cD4uYnRuLWFjdGl2ZTpmb2N1cy12aXNpYmxlLC5idG4tZ3JvdXA+aW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZC5idG46Zm9jdXMtdmlzaWJsZSB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpLDAgMCAwIDRweCBoc2wodmFyKC0tcCkpO1xcbn1cXG5cXG4uYnRuLWdyb3VwPi5idG46bm90KDpmaXJzdC1jaGlsZCkge1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG5cXHRtYXJnaW4tbGVmdDogLTFweDtcXG59XFxuXFxuLmJ0bi1ncm91cD4uYnRuOm5vdCg6bGFzdC1jaGlsZCkge1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJ1dHRvbi1wb3Age1xcblxcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWJ0bi1mb2N1cy1zY2FsZSwuOTUpKTtcXG5cXHR9XFxuXFxuXFx0NDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcblxcdH1cXG5cXG5cXHR0byB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cXHR9XFxufVxcblxcbi5jYXJkOmZvY3VzLXZpc2libGUge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDJweCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi5jYXJkLmJvcmRlcmVkIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1iMikvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcblxcdGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG4uY2FyZC5jb21wYWN0IC5jYXJkLWJvZHkge1xcblxcdGZvbnQtc2l6ZTogLjg3NXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS4yNXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY2FyZC5jb21wYWN0IC5jYXJkLXRpdGxlIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAuMjVyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgY2hlY2ttYXJrIHtcXG5cXG5cXHQwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbi15OiA1cHg7XFxuXFx0fVxcblxcblxcdDUwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMnB4O1xcblxcdH1cXG5cXG5cXHR0byB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbi15OiAwO1xcblxcdH1cXG59XFxuXFxuLmRyYXdlci10b2dnbGU6Zm9jdXMtdmlzaWJsZX4uZHJhd2VyLWNvbnRlbnQgLmRyYXdlci1idXR0b24uYnRuLXByaW1hcnkge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKSwwIDAgMCA0cHggaHNsKHZhcigtLXApKTtcXG59XFxuXFxuLmxhYmVsLXRleHQge1xcblxcdGZvbnQtc2l6ZTogLjg3NXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS4yNXJlbTtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmxhYmVsIGE6aG92ZXIge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uaW5wdXQtYm9yZGVyZWQge1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLmlucHV0LWRpc2FibGVkLC5pbnB1dFtkaXNhYmxlZF0ge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWIyKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1iMikvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcblxcdGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLmlucHV0LWRpc2FibGVkOjpwbGFjZWhvbGRlciwuaW5wdXRbZGlzYWJsZWRdOjpwbGFjZWhvbGRlciB7XFxuXFx0LS10dy1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xcblxcdC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMC4yO1xcblxcdGNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLm1vY2t1cC1waG9uZSAuZGlzcGxheSB7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRib3JkZXItcmFkaXVzOiA0MHB4O1xcblxcdG1hcmdpbi10b3A6IC0yNXB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJhZGlvbWFyayB7XFxuXFxuXFx0MCUge1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCAwIDEycHggaHNsKHZhcigtLWIxKSkgaW5zZXQsMCAwIDAgMTJweCBoc2wodmFyKC0tYjEpKSBpbnNldCx2YXIoLS1mb2N1cy1zaGFkb3cpO1xcblxcdH1cXG5cXG5cXHQ1MCUge1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCBoc2wodmFyKC0tYjEpKSBpbnNldCwwIDAgMCAzcHggaHNsKHZhcigtLWIxKSkgaW5zZXQsdmFyKC0tZm9jdXMtc2hhZG93KTtcXG5cXHR9XFxuXFxuXFx0dG8ge1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCAwIDRweCBoc2wodmFyKC0tYjEpKSBpbnNldCwwIDAgMCA0cHggaHNsKHZhcigtLWIxKSkgaW5zZXQsdmFyKC0tZm9jdXMtc2hhZG93KTtcXG5cXHR9XFxufVxcblxcbi5hbGVydC1pbmZvIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAwLjE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1pbikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IGhzbGEodmFyKC0taW4pL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5zdGF0aWMge1xcblxcdHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcblxcbi5tLTgge1xcblxcdG1hcmdpbjogMnJlbTtcXG59XFxuXFxuLm14LTIge1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5tYi01IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG5cXG4ubXQtNiB7XFxuXFx0bWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG5cXG4uZmxleCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmgtNiB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5taW4taC1zY3JlZW4ge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udy02IHtcXG5cXHR3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4udy1mdWxsIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1heC13LXNtIHtcXG5cXHRtYXgtd2lkdGg6IDI0cmVtO1xcbn1cXG5cXG4uZmxleC0xIHtcXG5cXHRmbGV4OiAxIDEgMCU7XFxufVxcblxcbi5mbGV4LXNocmluay0wIHtcXG5cXHRmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmctYmFzZS0yMDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWIyKSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLWJhc2UtMTAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iMSkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5zdHJva2UtY3VycmVudCB7XFxuXFx0c3Ryb2tlOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGV4dC01eGwge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmZvbnQtYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnNoYWRvdy0yeGwge1xcblxcdC0tdHctc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG5cXHQubGdcXFxcOmZsZXgtcm93IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOnRleHQtbGVmdCB7XFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCIsXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzLyUzQ2lucHV0JTIwY3NzJTIwUkhYVnlOJTNFXCIsXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzLyUzQ2lucHV0JTIwY3NzJTIwWTFEZzB6JTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpRUFBYyxDQUFkLDhGQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7Q0FBYzs7QUFBZDs7O0NDY0Msc0JBQXNCO0FEZFQ7O0FBQWQ7O0NBQWM7O0FBQWQ7Q0NzQkMsZ0JBQWdCO0NBQ2hCLFdBQVc7QUR2QkU7O0FBQWQ7OztDQUFjOztBQUFkO0NDZ0NDLGlCQUFpQixFQUFFLE1BQU07Q0FDekIsOEJBQThCLEVBQUUsTUFBTTtBRGpDekI7O0FBQWQ7OztDQUFjOztB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O0NBQUEsbUJBQUE7Q0FBQSxvQkFBQTtDQUFBLGVBQUE7Q0FBQSxnQkFBQTtDQUFBLG1CQUFBO0NBQUEsZUFBQTtDQUFBLGtCQUFBO0NBQUEsbUJBQUE7Q0FBQSxlQUFBO0NBQUEscUJBQUE7Q0FBQSxtQkFBQTtDQUFBLG1CQUFBO0NBQUEscUJBQUE7Q0FBQSxrQkFBQTtDQUFBLGtCQUFBO0NBQUEsb0JBQUE7Q0FBQSxrQkFBQTtBSEFjOztBQUFkO0NHQUEsa0JBQUE7Q0FBQSxtQkFBQTtDQUFBLGVBQUE7Q0FBQSxrQkFBQTtDQUFBLG1CQUFBO0NBQUEsZUFBQTtDQUFBLGlCQUFBO0NBQUEsa0JBQUE7Q0FBQSxlQUFBO0NBQUEsb0JBQUE7Q0FBQSxtQkFBQTtDQUFBLGVBQUE7Q0FBQSxvQkFBQTtDQUFBLGdCQUFBO0NBQUEsa0JBQUE7Q0FBQSxxQkFBQTtDQUFBLHFCQUFBO0NBQUEsa0JBQUE7Q0FBQSxpQkFBQTtDQUFBLG1CQUFBO0NBQUEsbUJBQUE7Q0FBQSxxQkFBQTtDQUFBLHVCQUFBO0NBQUEsaUJBQUE7QUhBYzs7QUFBZDtDR0FBLGlCQUFBO0NBQUEsb0JBQUE7Q0FBQSxxQkFBQTtDQUFBLG1CQUFBO0NBQUEsb0JBQUE7Q0FBQSxlQUFBO0NBQUEsb0JBQUE7Q0FBQSxtQkFBQTtDQUFBLGVBQUE7Q0FBQSxvQkFBQTtDQUFBLG1CQUFBO0NBQUEsZUFBQTtDQUFBLGVBQUE7Q0FBQSxnQkFBQTtDQUFBLGNBQUE7Q0FBQSxhQUFBO0NBQUEscUJBQUE7Q0FBQSxrQkFBQTtDQUFBLGlCQUFBO0NBQUEsbUJBQUE7QUhBYzs7QUFBZDtDR0FBLGdCQUFBO0NBQUEsbUJBQUE7Q0FBQSxpQkFBQTtDQUFBLGtCQUFBO0NBQUEsbUJBQUE7Q0FBQSxpQkFBQTtDQUFBLG1CQUFBO0NBQUEsb0JBQUE7Q0FBQSxpQkFBQTtDQUFBLG9CQUFBO0NBQUEscUJBQUE7Q0FBQSxpQkFBQTtDQUFBLGVBQUE7Q0FBQSxpQkFBQTtDQUFBLGdCQUFBO0NBQUEscUJBQUE7Q0FBQSxxQkFBQTtDQUFBLGtCQUFBO0NBQUEsaUJBQUE7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Q0FBQSxtQkFBQTtDQUFBLG1CQUFBO0NBQUEscUJBQUE7Q0FBQSx1QkFBQTtBSEFjOztBQUFkO0NHQUEsZ0JBQUE7Q0FBQSxtQkFBQTtDQUFBLGVBQUE7Q0FBQSxrQkFBQTtDQUFBLG1CQUFBO0NBQUEsZUFBQTtDQUFBLGVBQUE7Q0FBQSxrQkFBQTtDQUFBLGVBQUE7Q0FBQSxnQkFBQTtDQUFBLGNBQUE7Q0FBQSxlQUFBO0NBQUEsZ0JBQUE7Q0FBQSxpQkFBQTtDQUFBLGNBQUE7Q0FBQSxlQUFBO0NBQUEscUJBQUE7Q0FBQSxrQkFBQTtDQUFBLGtCQUFBO0NBQUEsb0JBQUE7Q0FBQSxrQkFBQTtBSEFjOztBQUFkO0NHQUEsbUJBQUE7Q0FBQSxvQkFBQTtDQUFBLGFBQUE7Q0FBQSxvQkFBQTtDQUFBLHFCQUFBO0NBQUEsZUFBQTtDQUFBLGdCQUFBO0NBQUEsaUJBQUE7Q0FBQSxlQUFBO0NBQUEsb0JBQUE7Q0FBQSxtQkFBQTtDQUFBLGVBQUE7Q0FBQSxtQkFBQTtDQUFBLHFCQUFBO0NBQUEsbUJBQUE7Q0FBQSxlQUFBO0NBQUEscUJBQUE7Q0FBQSxrQkFBQTtDQUFBLGlCQUFBO0NBQUEsbUJBQUE7QUhBYzs7QUFBZDtDR0FBLGVBQUE7Q0FBQSxnQkFBQTtDQUFBLGtCQUFBO0NBQUEsZUFBQTtDQUFBLGdCQUFBO0NBQUEsa0JBQUE7Q0FBQSxlQUFBO0NBQUEsZUFBQTtDQUFBLGtCQUFBO0NBQUEsaUJBQUE7Q0FBQSxrQkFBQTtDQUFBLGdCQUFBO0NBQUEsZUFBQTtDQUFBLGVBQUE7Q0FBQSxlQUFBO0NBQUEsY0FBQTtDQUFBLHFCQUFBO0NBQUEsa0JBQUE7Q0FBQSxpQkFBQTtDQUFBLG1CQUFBO0NBQUEsdUJBQUE7Q0FBQSxrQkFBQTtDQUFBLG9CQUFBO0NBQUEsb0JBQUE7Q0FBQSxtQkFBQTtDQUFBLG1CQUFBO0NBQUEscUJBQUE7Q0FBQSxrQkFBQTtBSEFjOztBQUFkO0NHQUEsNENBQUE7Q0FBQSxpQ0FBQTtDQUFBLCtCQUFBO0NBQUEscURBQUE7QUhBYzs7QUFBZDtDR0FBLGtCQUFBO0NBQUEsbUJB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QUEsaUJBQUE7QUhFb0I7O0FBQXBCOztDR0ZBO0VBQUEsK0ZBQUE7Q0g0cURDOztDRzVxREQ7RUFBQSw2RkFBQTtDSGdyREM7O0NHaHJERDtFQUFBLDZGQUFBO0NIb3JEQztBQWxyRG1COztBQUFwQjtDR0ZBLGtCQUFBO0NBQUEsb0JBQUE7Q0FBQSx3REFBQTtDQUFBLG9CQUFBO0NBQUEsK0NBQUE7QUhFb0I7O0FBRXBCO0NHSkEsZ0JBQUE7QUhJbUI7O0FBQW5CO0NHSkEsWUFBQTtBSEltQjs7QUFBbkI7Q0dKQSxtQkFBQTtDQUFBLG9CQUFBO0FISW1COztBQUFuQjtDR0pBLHNCQUFBO0FISW1COztBQUFuQjtDR0pBLGtCQUFBO0FISW1COztBQUFuQjtDR0pBLGFBQUE7QUhJbUI7O0FBQW5CO0NHSkEsY0FBQTtBSEltQjs7QUFBbkI7Q0dKQSxpQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxhQUFBO0FISW1COztBQUFuQjtDR0pBLFdBQUE7QUhJbUI7O0FBQW5CO0NHSkEsZ0JBQUE7QUhJbUI7O0FBQW5CO0NHSkEsWUFBQTtBSEltQjs7QUFBbkI7Q0dKQSxjQUFBO0FISW1COztBQUFuQjtDR0pBLHNCQUFBO0FISW1COztBQUFuQjtDR0pBLHVCQUFBO0FISW1COztBQUFuQjtDR0pBLGtCQUFBO0NBQUEsd0RBQUE7QUhJbUI7O0FBQW5CO0NHSkEsa0JBQUE7Q0FBQSx3REFBQTtBSEltQjs7QUFBbkI7Q0dKQSxvQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxrQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxlQUFBO0NBQUEsY0FBQTtBSEltQjs7QUFBbkI7Q0dKQSxnQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxrREFBQTtDQUFBLHVHQUFBO0FISW1COztBQUpuQjs7Q0dBQTtFQUFBLG1CQUFBO0NIZ3lEQzs7Q0doeUREO0VBQUEsZ0JBQUE7Q0hveURDO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuXFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuXFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cIixcIi8qISBtb2Rlcm4tbm9ybWFsaXplIHYxLjEuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplICovXFxuXFxuLypcXG5Eb2N1bWVudFxcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5Vc2UgYSBiZXR0ZXIgYm94IG1vZGVsIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qKlxcblVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbmh0bWwge1xcblxcdC1tb3otdGFiLXNpemU6IDQ7XFxuXFx0dGFiLXNpemU6IDQ7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4qL1xcblxcbmh0bWwge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2VjdGlvbnNcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG5JbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbiovXFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdC1hcHBsZS1zeXN0ZW0sIC8qIEZpcmVmb3ggc3VwcG9ydHMgdGhpcyBidXQgbm90IHlldCBgc3lzdGVtLXVpYCAqL1xcblxcdFxcdCdTZWdvZSBVSScsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdEhlbHZldGljYSxcXG5cXHRcXHRBcmlhbCxcXG5cXHRcXHRzYW5zLXNlcmlmLFxcblxcdFxcdCdBcHBsZSBDb2xvciBFbW9qaScsXFxuXFx0XFx0J1NlZ29lIFVJIEVtb2ppJztcXG59XFxuXFxuLypcXG5Hcm91cGluZyBjb250ZW50XFxuPT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbiovXFxuXFxuaHIge1xcblxcdGhlaWdodDogMDsgLyogMSAqL1xcblxcdGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG49PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXG5cXHRcXHRDb25zb2xhcyxcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXG5cXHRcXHRNZW5sbyxcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcblxcdHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcblRhYnVsYXIgZGF0YVxcbj09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG5cXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cIixcIi8qKlxcbiAqIE1hbnVhbGx5IGZvcmtlZCBmcm9tIFNVSVQgQ1NTIEJhc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdWl0Y3NzL2Jhc2VcXG4gKiBBIHRoaW4gbGF5ZXIgb24gdG9wIG9mIG5vcm1hbGl6ZS5jc3MgdGhhdCBwcm92aWRlcyBhIHN0YXJ0aW5nIHBvaW50IG1vcmVcXG4gKiBzdWl0YWJsZSBmb3Igd2ViIGFwcGxpY2F0aW9ucy5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuICovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogVGFpbHdpbmQgY3VzdG9tIHJlc2V0IHN0eWxlc1xcbiAqL1xcblxcbi8qKlxcbiAqIDEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5ICh3aXRoIFRhaWx3aW5kJ3MgZGVmYXVsdFxcbiAqICAgIHNhbnMtc2VyaWYgZm9udCBzdGFjayBhcyBhIGZhbGxiYWNrKSBhcyBhIHNhbmUgZGVmYXVsdC5cXG4gKiAyLiBVc2UgVGFpbHdpbmQncyBkZWZhdWx0IFxcXCJub3JtYWxcXFwiIGxpbmUtaGVpZ2h0IHNvIHRoZSB1c2VyIGlzbid0IGZvcmNlZFxcbiAqICAgIHRvIG92ZXJyaWRlIGl0IHRvIGVuc3VyZSBjb25zaXN0ZW5jeSBldmVuIHdoZW4gdXNpbmcgdGhlIGRlZmF1bHQgdGhlbWUuXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkuc2FucycsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIik7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDIgKi9cXG59XFxuXFxuXFxuLyoqXFxuICogSW5oZXJpdCBmb250LWZhbWlseSBhbmQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzXFxuICogYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuICovXFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLlxcbiAqXFxuICogICAgV2UgdXNlZCB0byBzZXQgdGhpcyBpbiB0aGUgaHRtbCBlbGVtZW50IGFuZCBpbmhlcml0IGZyb21cXG4gKiAgICB0aGUgcGFyZW50IGVsZW1lbnQgZm9yIGV2ZXJ5dGhpbmcgZWxzZS4gVGhpcyBjYXVzZWQgaXNzdWVzXFxuICogICAgaW4gc2hhZG93LWRvbS1lbmhhbmNlZCBlbGVtZW50cyBsaWtlIDxkZXRhaWxzPiB3aGVyZSB0aGUgY29udGVudFxcbiAqICAgIGlzIHdyYXBwZWQgYnkgYSBkaXYgd2l0aCBib3gtc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80XFxuICpcXG4gKlxcbiAqIDIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLlxcbiAqXFxuICogICAgQnkgZGVmYXVsdCwgdGhlIHdheSB0aGUgYnJvd3NlciBzcGVjaWZpZXMgdGhhdCBhbiBlbGVtZW50IHNob3VsZCBoYXZlIG5vXFxuICogICAgYm9yZGVyIGlzIGJ5IHNldHRpbmcgaXQncyBib3JkZXItc3R5bGUgdG8gYG5vbmVgIGluIHRoZSB1c2VyLWFnZW50XFxuICogICAgc3R5bGVzaGVldC5cXG4gKlxcbiAqICAgIEluIG9yZGVyIHRvIGVhc2lseSBhZGQgYm9yZGVycyB0byBlbGVtZW50cyBieSBqdXN0IHNldHRpbmcgdGhlIGBib3JkZXItd2lkdGhgXFxuICogICAgcHJvcGVydHksIHdlIGNoYW5nZSB0aGUgZGVmYXVsdCBib3JkZXItc3R5bGUgZm9yIGFsbCBlbGVtZW50cyB0byBgc29saWRgLCBhbmRcXG4gKiAgICB1c2UgYm9yZGVyLXdpZHRoIHRvIGhpZGUgdGhlbSBpbnN0ZWFkLiBUaGlzIHdheSBvdXIgYGJvcmRlcmAgdXRpbGl0aWVzIG9ubHlcXG4gKiAgICBuZWVkIHRvIHNldCB0aGUgYGJvcmRlci13aWR0aGAgcHJvcGVydHkgaW5zdGVhZCBvZiB0aGUgZW50aXJlIGBib3JkZXJgXFxuICogICAgc2hvcnRoYW5kLCBtYWtpbmcgb3VyIGJvcmRlciB1dGlsaXRpZXMgbXVjaCBtb3JlIHN0cmFpZ2h0Zm9yd2FyZCB0byBjb21wb3NlLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2XFxuICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4gKiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0XFxuICovXFxuXFxuaHIge1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG4vKipcXG4gKiBVbmRvIHRoZSBgYm9yZGVyLXN0eWxlOiBub25lYCByZXNldCB0aGF0IE5vcm1hbGl6ZSBhcHBsaWVzIHRvIGltYWdlcyBzbyB0aGF0XFxuICogb3VyIGBib3JkZXIte3dpZHRofWAgdXRpbGl0aWVzIGhhdmUgdGhlIGV4cGVjdGVkIGVmZmVjdC5cXG4gKlxcbiAqIFRoZSBOb3JtYWxpemUgcmVzZXQgaXMgdW5uZWNlc3NhcnkgZm9yIHVzIHNpbmNlIHdlIGRlZmF1bHQgdGhlIGJvcmRlci13aWR0aFxcbiAqIHRvIDAgb24gYWxsIGVsZW1lbnRzLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zNjJcXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6IHRoZW1lKCdjb2xvcnMuZ3JheS40MDAnLCAjYTFhMWFhKTtcXG59XFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qKlxcbiAqIE92ZXJyaWRlIGxlZ2FjeSBmb2N1cyByZXNldCBmcm9tIE5vcm1hbGl6ZSB3aXRoIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlcy5cXG4gKlxcbiAqIFRoaXMgaXMgYWN0dWFsbHkgYW4gaW1wcm92ZW1lbnQgb3ZlciB0aGUgbmV3IGRlZmF1bHRzIGluIEZpcmVmb3ggaW4gb3VyIHRlc3RpbmcsXFxuICogYXMgaXQgdHJpZ2dlcnMgdGhlIGJldHRlciBmb2N1cyBzdHlsZXMgZXZlbiBmb3IgbGlua3MsIHdoaWNoIHN0aWxsIHVzZSBhIGRvdHRlZFxcbiAqIG91dGxpbmUgaW4gRmlyZWZveCBieSBkZWZhdWx0LlxcbiAqL1xcbiBcXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IGF1dG87XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZlxcbiAqIG9wdC1vdXQuXFxuICovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgZm9ybSBlbGVtZW50IHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byBmb3JnZXQgdG9cXG4gKiBzdHlsZSBleHBsaWNpdGx5IHNvIHlvdSBkb24ndCBpbmFkdmVydGVudGx5IGludHJvZHVjZVxcbiAqIHN0eWxlcyB0aGF0IGRldmlhdGUgZnJvbSB5b3VyIGRlc2lnbiBzeXN0ZW0uIFRoZXNlIHN0eWxlc1xcbiAqIHN1cHBsZW1lbnQgYSBwYXJ0aWFsIHJlc2V0IHRoYXQgaXMgYWxyZWFkeSBhcHBsaWVkIGJ5XFxuICogbm9ybWFsaXplLmNzcy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBVc2UgdGhlIGNvbmZpZ3VyZWQgJ21vbm8nIGZvbnQgZmFtaWx5IGZvciBlbGVtZW50cyB0aGF0XFxuICogYXJlIGV4cGVjdGVkIHRvIGJlIHJlbmRlcmVkIHdpdGggYSBtb25vc3BhY2UgZm9udCwgZmFsbGluZ1xcbiAqIGJhY2sgdG8gdGhlIHN5c3RlbSBtb25vc3BhY2Ugc3RhY2sgaWYgdGhlcmUgaXMgbm8gY29uZmlndXJlZFxcbiAqICdtb25vJyBmb250IGZhbWlseS5cXG4gKi9cXG5cXG5wcmUsXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkubW9ubycsIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlKTtcXG59XFxuXFxuLyoqXFxuICogMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQgYXMgdGhhdCdzXFxuICogICAgdGhlIGJlaGF2aW9yIHlvdSB3YW50IGFsbW9zdCBhbGwgb2YgdGhlIHRpbWUuIEluc3BpcmVkIGJ5XFxuICogICAgQ1NTIFJlbWVkeSwgd2l0aCBgc3ZnYCBhZGRlZCBhcyB3ZWxsLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqIFxcbiAqIDIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZVxcbiAqICAgIHNlbnNpYmx5IGJ5IGRlZmF1bHQgd2hlbiBvdmVycmlkaW5nIGBkaXNwbGF5YCBieSBhZGRpbmcgYVxcbiAqICAgIHV0aWxpdHkgbGlrZSBgaW5saW5lYC5cXG4gKlxcbiAqICAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50aW5nIGVycm9yIGluIHNvbWVcXG4gKiAgICB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiAqIFxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMFxcbiAqL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlXFxuICogdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby5cXG4gKlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBFbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvZHluYW1pYycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHZ1bmRlZmluZWRcbiAqIHVzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vXG4vLyBJbiBvcmRlciB0byBhdm9pZCByZW1vdmluZyBhbmQgcmUtYWRkaW5nIHN1YnNjcmlwdGlvbnMgZWFjaCB0aW1lIHRoaXMgaG9vayBpcyBjYWxsZWQsXG4vLyB0aGUgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhpcyBob29rIHNob3VsZCBiZSBtZW1vaXplZCBpbiBzb21lIHdheeKAk1xuLy8gZWl0aGVyIGJ5IHdyYXBwaW5nIHRoZSBlbnRpcmUgcGFyYW1zIG9iamVjdCB3aXRoIHVzZU1lbW8oKVxuLy8gb3IgYnkgd3JhcHBpbmcgdGhlIGluZGl2aWR1YWwgY2FsbGJhY2tzIHdpdGggdXNlQ2FsbGJhY2soKS5cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKF9yZWYpIHtcbiAgdmFyIGdldEN1cnJlbnRWYWx1ZSA9IF9yZWYuZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlID0gX3JlZi5zdWJzY3JpYmU7XG5cbiAgLy8gUmVhZCB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIG91ciBzdWJzY3JpcHRpb24uXG4gIC8vIFdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLCB3ZSdsbCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gYWxzbyBzdG9yZSB0aGUgaG9vayBwYXJhbXMgc28gdGhhdCB3ZSBjYW4gY2hlY2sgZm9yIHN0YWxlbmVzcy5cbiAgLy8gKFNlZSB0aGUgY29tbWVudCBpbiBjaGVja0ZvclVwZGF0ZXMoKSBiZWxvdyBmb3IgbW9yZSBpbmZvLilcbiAgdmFyIF91c2VTdGF0ZSA9IHJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiBnZXRDdXJyZW50VmFsdWUoKVxuICAgIH07XG4gIH0pLFxuICAgICAgc3RhdGUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdmFsdWVUb1JldHVybiA9IHN0YXRlLnZhbHVlOyAvLyBJZiBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZCBzaW5jZSBvdXIgbGFzdCByZW5kZXIsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIGl0cyBjdXJyZW50IHZhbHVlLlxuXG4gIGlmIChzdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBzdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgIC8vIElmIHRoZSBzdWJzY3JpcHRpb24gaGFzIGJlZW4gdXBkYXRlZCwgd2UnbGwgc2NoZWR1bGUgYW5vdGhlciB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgICAvLyBSZWFjdCB3aWxsIHByb2Nlc3MgdGhpcyB1cGRhdGUgaW1tZWRpYXRlbHksIHNvIHRoZSBvbGQgc3Vic2NyaXB0aW9uIHZhbHVlIHdvbid0IGJlIGNvbW1pdHRlZC5cbiAgICAvLyBJdCBpcyBzdGlsbCBuaWNlIHRvIGF2b2lkIHJldHVybmluZyBhIG1pc21hdGNoZWQgdmFsdWUgdGhvdWdoLCBzbyBsZXQncyBvdmVycmlkZSB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIHZhbHVlVG9SZXR1cm4gPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IHZhbHVlVG9SZXR1cm5cbiAgICB9KTtcbiAgfSAvLyBEaXNwbGF5IHRoZSBjdXJyZW50IHZhbHVlIGZvciB0aGlzIGhvb2sgaW4gUmVhY3QgRGV2VG9vbHMuXG5cblxuICByZWFjdC51c2VEZWJ1Z1ZhbHVlKHZhbHVlVG9SZXR1cm4pOyAvLyBJdCBpcyBpbXBvcnRhbnQgbm90IHRvIHN1YnNjcmliZSB3aGlsZSByZW5kZXJpbmcgYmVjYXVzZSB0aGlzIGNhbiBsZWFkIHRvIG1lbW9yeSBsZWFrcy5cbiAgLy8gKExlYXJuIG1vcmUgYXQgcmVhY3Rqcy5vcmcvZG9jcy9zdHJpY3QtbW9kZS5odG1sI2RldGVjdGluZy11bmV4cGVjdGVkLXNpZGUtZWZmZWN0cylcbiAgLy8gSW5zdGVhZCwgd2Ugd2FpdCB1bnRpbCB0aGUgY29tbWl0IHBoYXNlIHRvIGF0dGFjaCBvdXIgaGFuZGxlci5cbiAgLy9cbiAgLy8gV2UgaW50ZW50aW9uYWxseSB1c2UgYSBwYXNzaXZlIGVmZmVjdCAodXNlRWZmZWN0KSByYXRoZXIgdGhhbiBhIHN5bmNocm9ub3VzIG9uZSAodXNlTGF5b3V0RWZmZWN0KVxuICAvLyBzbyB0aGF0IHdlIGRvbid0IHN0cmV0Y2ggdGhlIGNvbW1pdCBwaGFzZS5cbiAgLy8gVGhpcyBhbHNvIGhhcyBhbiBhZGRlZCBiZW5lZml0IHdoZW4gbXVsdGlwbGUgY29tcG9uZW50cyBhcmUgc3Vic2NyaWJlZCB0byB0aGUgc2FtZSBzb3VyY2U6XG4gIC8vIEl0IGFsbG93cyBlYWNoIG9mIHRoZSBldmVudCBoYW5kbGVycyB0byBzYWZlbHkgc2NoZWR1bGUgd29yayB3aXRob3V0IHBvdGVudGlhbGx5IHJlbW92aW5nIGFuIGFub3RoZXIgaGFuZGxlci5cbiAgLy8gKExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2sweXZyNTk3MG8pXG5cbiAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcblxuICAgIHZhciBjaGVja0ZvclVwZGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZXZlbiBhZnRlciBiZWluZyB1bnN1YnNjcmliZWQsXG4gICAgICAvLyBpZiBpdCdzIHJlbW92ZWQgYXMgYSByZXN1bHQgb2YgYSBzdWJzY3JpcHRpb24gZXZlbnQvdXBkYXRlLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCBSZWFjdCB3aWxsIGxvZyBhIERFViB3YXJuaW5nIGFib3V0IGFuIHVwZGF0ZSBmcm9tIGFuIHVubW91bnRlZCBjb21wb25lbnQuXG4gICAgICAvLyBXZSBjYW4gYXZvaWQgdHJpZ2dlcmluZyB0aGF0IHdhcm5pbmcgd2l0aCB0aGlzIGNoZWNrLlxuICAgICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gV2UgdXNlIGEgc3RhdGUgdXBkYXRlciBmdW5jdGlvbiB0byBhdm9pZCBzY2hlZHVsaW5nIHdvcmsgZm9yIGEgc3RhbGUgc291cmNlLlxuICAgICAgLy8gSG93ZXZlciBpdCdzIGltcG9ydGFudCB0byBlYWdlcmx5IHJlYWQgdGhlIGN1cnJlbnRseSB2YWx1ZSxcbiAgICAgIC8vIHNvIHRoYXQgYWxsIHNjaGVkdWxlZCB3b3JrIHNoYXJlcyB0aGUgc2FtZSB2YWx1ZSAoaW4gdGhlIGV2ZW50IG9mIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMpLlxuICAgICAgLy8gVGhpcyBhdm9pZHMgdmlzdWFsIFwidGVhcmluZ1wiIHdoZW4gYSBtdXRhdGlvbiBoYXBwZW5zIGR1cmluZyBhIChjb25jdXJyZW50KSByZW5kZXIuXG5cblxuICAgICAgdmFyIHZhbHVlID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIC8vIElnbm9yZSB2YWx1ZXMgZnJvbSBzdGFsZSBzb3VyY2VzIVxuICAgICAgICAvLyBTaW5jZSB3ZSBzdWJzY3JpYmUgYW4gdW5zdWJzY3JpYmUgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGZvciBhIHN0YWxlIChwcmV2aW91cykgc3Vic2NyaXB0aW9uLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGF2b2lkcyBzY2hlZHVsaW5nIGFuIHVwZGF0ZSBmb3IgdGhhdCBzdGFsZSBzdWJzY3JpcHRpb24uXG4gICAgICAgIGlmIChwcmV2U3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgcHJldlN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfSAvLyBTb21lIHN1YnNjcmlwdGlvbnMgd2lsbCBhdXRvLWludm9rZSB0aGUgaGFuZGxlciwgZXZlbiBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgbm8gdXBkYXRlIGlzIG5lZWRlZC5cbiAgICAgICAgLy8gUmV0dXJuIHN0YXRlIGFzLWlzIHNvIFJlYWN0IGNhbiBiYWlsIG91dCBhbmQgYXZvaWQgYW4gdW5uZWNlc3NhcnkgcmVuZGVyLlxuXG5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoY2hlY2tGb3JVcGRhdGVzKTsgLy8gQmVjYXVzZSB3ZSdyZSBzdWJzY3JpYmluZyBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBhbiB1cGRhdGUgaGFzIG9jY3VycmVkIGJldHdlZW4gcmVuZGVyIGFuZCBvdXIgZWZmZWN0IGhhbmRsZXIuXG4gICAgLy8gQ2hlY2sgZm9yIHRoaXMgYW5kIHNjaGVkdWxlIGFuIHVwZGF0ZSBpZiB3b3JrIGhhcyBvY2N1cnJlZC5cblxuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtnZXRDdXJyZW50VmFsdWUsIHN1YnNjcmliZV0pOyAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgZm9yIG91ciBjYWxsZXIgdG8gdXNlIHdoaWxlIHJlbmRlcmluZy5cblxuICByZXR1cm4gdmFsdWVUb1JldHVybjtcbn1cblxuZXhwb3J0cy51c2VTdWJzY3JpcHRpb24gPSB1c2VTdWJzY3JpcHRpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJub1NTUiIsImR5bmFtaWMiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9sb2FkYWJsZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJpc1NlcnZlclNpZGUiLCJMb2FkYWJsZUluaXRpYWxpemVyIiwibG9hZGFibGVPcHRpb25zIiwid2VicGFjayIsIm1vZHVsZXMiLCJMb2FkaW5nIiwibG9hZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJzdXNwZW5zZU9wdGlvbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMiLCJfX05FWFRfUkVBQ1RfUk9PVCIsInN1c3BlbnNlIiwiRXJyb3IiLCJsb2FkYWJsZUdlbmVyYXRlZCIsInNzciIsIkxvYWRhYmxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsIl91c2VTdWJzY3JpcHRpb24iLCJfbG9hZGFibGVDb250ZXh0IiwiQUxMX0lOSVRJQUxJWkVSUyIsIlJFQURZX0lOSVRJQUxJWkVSUyIsImluaXRpYWxpemVkIiwibG9hZCIsInByb21pc2UiLCJzdGF0ZSIsImxvYWRlZCIsInRoZW4iLCJlcnIiLCJyZXNvbHZlIiwiY3JlYXRlTG9hZGFibGVDb21wb25lbnQiLCJsb2FkRm4iLCJvcHRzIiwiYXNzaWduIiwiZGVsYXkiLCJ0aW1lb3V0IiwibGF6eSIsInN1YnNjcmlwdGlvbiIsImluaXQiLCJzdWIiLCJMb2FkYWJsZVN1YnNjcmlwdGlvbiIsImdldEN1cnJlbnRWYWx1ZSIsImJpbmQiLCJzdWJzY3JpYmUiLCJyZXRyeSIsInB1c2giLCJyZXNvbHZlV2VhayIsIm1vZHVsZUlkcyIsImlkcyIsIm1vZHVsZUlkIiwiaW5kZXhPZiIsIkxvYWRhYmxlSW1wbCIsInByb3BzIiwicmVmIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdWJzY3JpcHRpb24iLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm1vZHVsZU5hbWUiLCJ1c2VNZW1vIiwiTGF6eUltcGwiLCJMb2FkYWJsZUNvbXBvbmVudCIsInByZWxvYWQiLCJmb3J3YXJkUmVmIiwiX2xvYWRGbiIsIl9vcHRzIiwiX2NhbGxiYWNrcyIsIlNldCIsIl9kZWxheSIsIl90aW1lb3V0IiwiX3JlcyIsIl9jbGVhclRpbWVvdXRzIiwiX3N0YXRlIiwicmVzIiwib3B0czEiLCJzZXRUaW1lb3V0IiwiX3VwZGF0ZSIsIl9lcnIiLCJwYXJ0aWFsIiwiY2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJhZGQiLCJMb2FkYWJsZSIsImZsdXNoSW5pdGlhbGl6ZXJzIiwiaW5pdGlhbGl6ZXJzIiwicHJvbWlzZXMiLCJsZW5ndGgiLCJwb3AiLCJhbGwiLCJwcmVsb2FkQWxsIiwicmVzb2x2ZUluaXRpYWxpemVycyIsInJlamVjdCIsInByZWxvYWRSZWFkeSIsInJlc29sdmVQcmVsb2FkIiwid2luZG93IiwiX19ORVhUX1BSRUxPQURSRUFEWSIsIl9kZWZhdWx0IiwiV2FsbGV0Q29ubmVjdGlvblByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9