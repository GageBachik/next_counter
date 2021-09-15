"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


var _jsxFileName = "/home/gagebachik/projects/next_counter/pages/index.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



 //anchor boilerplate setup



var anchor = __webpack_require__(/*! @project-serum/anchor */ "./node_modules/@project-serum/anchor/dist/esm/index.js");

var _anchor$web = anchor.web3,
    SystemProgram = _anchor$web.SystemProgram,
    Keypair = _anchor$web.Keypair,
    Connection = _anchor$web.Connection,
    PublicKey = _anchor$web.PublicKey,
    LAMPORTS_PER_SOL = _anchor$web.LAMPORTS_PER_SOL;
var rpcUrl = "http://127.0.0.1:8899";
var connection = new Connection(rpcUrl, "recent");
var key = JSON.parse(JSON.stringify(process.env.NEXT_PRIVATE_KEY));
console.log("key", key);
var keypair = Keypair.fromSecretKey(new Uint8Array(key));
var wallet = new anchor.Wallet(keypair);
var option = anchor.Provider.defaultOptions();
var provider = new anchor.Provider(connection, wallet, option);
anchor.setProvider(provider);
var myAccount = Keypair.generate();
var idl = {
  version: "0.0.0",
  name: "next_counter",
  instructions: [{
    name: "initialize",
    accounts: [{
      name: "myAccount",
      isMut: true,
      isSigner: true
    }, {
      name: "user",
      isMut: false,
      isSigner: false
    }, {
      name: "systemProgram",
      isMut: false,
      isSigner: false
    }],
    args: [{
      name: "data",
      type: "u64"
    }]
  }, {
    name: "update",
    accounts: [{
      name: "myAccount",
      isMut: true,
      isSigner: false
    }],
    args: [{
      name: "data",
      type: "u64"
    }]
  }],
  accounts: [{
    name: "MyAccount",
    type: {
      kind: "struct",
      fields: [{
        name: "data",
        type: "u64"
      }]
    }
  }],
  metadata: {
    address: "9mTvtHmMmDTkmX6cUoXQwzp977EAzYidynANfP9NzPUG"
  }
};
var programId = new PublicKey("9mTvtHmMmDTkmX6cUoXQwzp977EAzYidynANfP9NzPUG");
var program = new anchor.Program(idl, programId); //end anchor boilerplate setup

function program_fetcher(_x, _x2, _x3) {
  return _program_fetcher.apply(this, arguments);
}

function _program_fetcher() {
  _program_fetcher = (0,_home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_api, method, big_number) {
    var account, balance, signature;
    return _home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("fetching program with method: ".concat(method, " and big_number: ").concat(big_number));

            if (!(method == "initialize")) {
              _context2.next = 6;
              break;
            }

            _context2.next = 4;
            return program.rpc.initialize(new anchor.BN(big_number), {
              accounts: {
                myAccount: myAccount.publicKey,
                user: provider.wallet.publicKey,
                systemProgram: SystemProgram.programId
              },
              signers: [myAccount]
            })["catch"](function (e) {
              console.log(e);
            });

          case 4:
            _context2.next = 9;
            break;

          case 6:
            if (!(method == "update")) {
              _context2.next = 9;
              break;
            }

            _context2.next = 9;
            return program.rpc.update(new anchor.BN(big_number), {
              accounts: {
                myAccount: myAccount.publicKey
              }
            })["catch"](function (e) {
              console.log(e);
            });

          case 9:
            _context2.next = 11;
            return program.account.myAccount.fetch(myAccount.publicKey)["catch"](function (e) {
              console.log(e);
            });

          case 11:
            account = _context2.sent;
            console.log("account", account);
            _context2.next = 15;
            return connection.getBalance(myAccount.publicKey);

          case 15:
            balance = _context2.sent;
            console.log("balance", balance / LAMPORTS_PER_SOL);
            console.log("pubkey: ", myAccount.publicKey.toString());

            if (!(account != undefined)) {
              _context2.next = 22;
              break;
            }

            return _context2.abrupt("return", {
              data: account.data.toString()
            });

          case 22:
            _context2.next = 24;
            return connection.requestAirdrop(myAccount.publicKey, LAMPORTS_PER_SOL)["catch"](function (e) {
              console.log(e);
            });

          case 24:
            signature = _context2.sent;
            return _context2.abrupt("return", {
              data: "Initialize an account with the form to the right to get started. The account data will show up in this box afterwards."
            });

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _program_fetcher.apply(this, arguments);
}

function useUser(method, big_number) {
  _s();

  console.log(method, big_number);
  method = method || "No Account";
  big_number = big_number || "0000";

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)(["program_rpc", method, big_number], program_fetcher),
      data = _useSWR.data,
      mutate = _useSWR.mutate,
      error = _useSWR.error;

  var loading = !data && !error;
  console.log("data in useUser: ", data);
  return {
    loading: loading,
    user: data,
    mutate: mutate
  };
}

_s(useUser, "MBjjql4lnepiJcmnnCIZwE0laGY=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_3__.default];
});

function HomePage() {
  _s2();

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(); // basic anchor rpc init call and return on page load
  // const [tx, setTx] = useState({ tx: "...loading" });
  // const fetchTx = async () => {
  //   const tx = await program.rpc.initialize();
  //   return tx;
  // };
  // useEffect(() => {
  //   const getTx = async () => {
  //     const tx = await fetchTx();
  //     console.log("tx", tx);
  //     setTx({ tx: tx });
  //   };
  //   getTx();
  // }, []);
  // New nextjs swr setup for more advanced rpc calls

  var _useUser = useUser(),
      user = _useUser.user,
      mutate = _useUser.mutate,
      loading = _useUser.loading;

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 12
    }, this);
  }

  if (!user) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      style: {
        color: "red",
        margin: "5em"
      },
      children: "[ERROR]: user is returing undefined"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }, this);
  }

  return (
    /*#__PURE__*/
    // Basic alert setup for intializing an an acnhor RPC and returning the tx
    // <div className="flex justify-center m-8">
    //   <div className="alert alert-info">
    //     <div className="flex-1">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         className="w-6 h-6 mx-2 stroke-current"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //         ></path>
    //       </svg>
    //       <label>{tx.tx}</label>
    //     </div>
    //   </div>
    // </div>
    // Intermediate setup for adding data to your account and then updating the data
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "hero min-h-screen bg-base-200",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "flex-col justify-center hero-content lg:flex-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "text-center lg:text-left",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
            className: "mb-5 text-5xl font-bold",
            children: "Anchor Account Data"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "mb-5",
            children: user.data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "form-control",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                className: "label",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "label-text",
                  children: "Data"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                ref: ref,
                name: "big_number",
                type: "text",
                placeholder: "1234",
                className: "input input-bordered"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "form-control mt-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                onClick: /*#__PURE__*/function () {
                  var _ref = (0,_home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
                    var big_number;
                    return _home_gagebachik_projects_next_counter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            e.preventDefault();
                            console.log("user.data: ", user.data);

                            if (!(ref.current != "undefined")) {
                              _context.next = 13;
                              break;
                            }

                            big_number = ref.current;

                            if (!(user.data == "Initialize an account with the form to the right to get started. The account data will show up in this box afterwards.")) {
                              _context.next = 10;
                              break;
                            }

                            _context.next = 7;
                            return program_fetcher("program_rpc", "initialize", big_number.value);

                          case 7:
                            mutate();
                            _context.next = 13;
                            break;

                          case 10:
                            _context.next = 12;
                            return program_fetcher("program_rpc", "update", big_number.value);

                          case 12:
                            mutate();

                          case 13:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x4) {
                    return _ref.apply(this, arguments);
                  };
                }(),
                type: "button",
                value: "Submit",
                className: "btn btn-primary"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 5
    }, this)
  );
}

_s2(HomePage, "H+oZH9/3cV6A9YAYlOUAEs4vzNY=", false, function () {
  return [useUser];
});

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTZlMzViNmQ4OTk4ZWVjMmEyMzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOzs7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHFGQUFELENBQXRCOztBQUNBLGtCQUNFRCxNQUFNLENBQUNFLElBRFQ7QUFBQSxJQUFRQyxhQUFSLGVBQVFBLGFBQVI7QUFBQSxJQUF1QkMsT0FBdkIsZUFBdUJBLE9BQXZCO0FBQUEsSUFBZ0NDLFVBQWhDLGVBQWdDQSxVQUFoQztBQUFBLElBQTRDQyxTQUE1QyxlQUE0Q0EsU0FBNUM7QUFBQSxJQUF1REMsZ0JBQXZELGVBQXVEQSxnQkFBdkQ7QUFFQSxJQUFNQyxNQUFNLEdBQUdDLHVCQUFmO0FBQ0EsSUFBTUcsVUFBVSxHQUFHLElBQUlQLFVBQUosQ0FBZUcsTUFBZixFQUF1QixRQUF2QixDQUFuQjtBQUNBLElBQU1LLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU8sZ0JBQTNCLENBQVgsQ0FBWjtBQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CTixHQUFuQjtBQUNBLElBQU1PLE9BQU8sR0FBR2hCLE9BQU8sQ0FBQ2lCLGFBQVIsQ0FBc0IsSUFBSUMsVUFBSixDQUFlVCxHQUFmLENBQXRCLENBQWhCO0FBQ0EsSUFBTVUsTUFBTSxHQUFHLElBQUl2QixNQUFNLENBQUN3QixNQUFYLENBQWtCSixPQUFsQixDQUFmO0FBQ0EsSUFBTUssTUFBTSxHQUFHekIsTUFBTSxDQUFDMEIsUUFBUCxDQUFnQkMsY0FBaEIsRUFBZjtBQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJNUIsTUFBTSxDQUFDMEIsUUFBWCxDQUFvQmQsVUFBcEIsRUFBZ0NXLE1BQWhDLEVBQXdDRSxNQUF4QyxDQUFqQjtBQUNBekIs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RW5CLFFBRm1CLEVBR25CRyxVQUFVLENBQUM2QixLQUhRLENBaEJsQjs7QUFBQTtBQXFCSFQsNEJBQUFBLE1BQU07O0FBckJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURUO0FBMEJFLG9CQUFJLEVBQUMsUUExQlA7QUEyQkUscUJBQUssRUFBQyxRQTNCUjtBQTRCRSx5QkFBUyxFQUFDO0FBNUJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCRjtBQWlGRDs7SUEvR1FHO1VBa0IyQko7OztLQWxCM0JJO0FBaUhULCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG4vL2FuY2hvciBib2lsZXJwbGF0ZSBzZXR1cFxyXG5jb25zdCBhbmNob3IgPSByZXF1aXJlKFwiQHByb2plY3Qtc2VydW0vYW5jaG9yXCIpO1xyXG5jb25zdCB7IFN5c3RlbVByb2dyYW0sIEtleXBhaXIsIENvbm5lY3Rpb24sIFB1YmxpY0tleSwgTEFNUE9SVFNfUEVSX1NPTCB9ID1cclxuICBhbmNob3Iud2ViMztcclxuY29uc3QgcnBjVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUlBDX1VSTDtcclxuY29uc3QgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKHJwY1VybCwgXCJyZWNlbnRcIik7XHJcbmNvbnN0IGtleSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuTkVYVF9QUklWQVRFX0tFWSkpO1xyXG5jb25zb2xlLmxvZyhcImtleVwiLCBrZXkpO1xyXG5jb25zdCBrZXlwYWlyID0gS2V5cGFpci5mcm9tU2VjcmV0S2V5KG5ldyBVaW50OEFycmF5KGtleSkpO1xyXG5jb25zdCB3YWxsZXQgPSBuZXcgYW5jaG9yLldhbGxldChrZXlwYWlyKTtcclxuY29uc3Qgb3B0aW9uID0gYW5jaG9yLlByb3ZpZGVyLmRlZmF1bHRPcHRpb25zKCk7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGFuY2hvci5Qcm92aWRlcihjb25uZWN0aW9uLCB3YWxsZXQsIG9wdGlvbik7XHJcbmFuY2hvci5zZXRQcm92aWRlcihwcm92aWRlcik7XHJcblxyXG5jb25zdCBteUFjY291bnQgPSBLZXlwYWlyLmdlbmVyYXRlKCk7XHJcblxyXG5jb25zdCBpZGwgPSB7XHJcbiAgdmVyc2lvbjogXCIwLjAuMFwiLFxyXG4gIG5hbWU6IFwibmV4dF9jb3VudGVyXCIsXHJcbiAgaW5zdHJ1Y3Rpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiaW5pdGlhbGl6ZVwiLFxyXG4gICAgICBhY2NvdW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwibXlBY2NvdW50XCIsXHJcbiAgICAgICAgICBpc011dDogdHJ1ZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgICAgICAgICBpc011dDogZmFsc2UsXHJcbiAgICAgICAgICBpc1NpZ25lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInN5c3RlbVByb2dyYW1cIixcclxuICAgICAgICAgIGlzTXV0OiBmYWxzZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJkYXRhXCIsXHJcbiAgICAgICAgICB0eXBlOiBcInU2NFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInVwZGF0ZVwiLFxyXG4gICAgICBhY2NvdW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwibXlBY2NvdW50XCIsXHJcbiAgICAgICAgICBpc011dDogdHJ1ZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJkYXRhXCIsXHJcbiAgICAgICAgICB0eXBlOiBcInU2NFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgYWNjb3VudHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNeUFjY291bnRcIixcclxuICAgICAgdHlwZToge1xyXG4gICAgICAgIGtpbmQ6IFwic3RydWN0XCIsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZGF0YVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInU2NFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIG1ldGFkYXRhOiB7XHJcbiAgICBhZGRyZXNzOiBcIjltVHZ0SG1NbURUa21YNmNVb1hRd3pwOTc3RUF6WWlkeW5BTmZQOU56UFVHXCIsXHJcbiAgfSxcclxufTtcclxuY29uc3QgcHJvZ3JhbUlkID0gbmV3IFB1YmxpY0tleShcIjltVHZ0SG1NbURUa21YNmNVb1hRd3pwOTc3RUF6WWlkeW5BTmZQOU56UFVHXCIpO1xyXG5jb25zdCBwcm9ncmFtID0gbmV3IGFuY2hvci5Qcm9ncmFtKGlkbCwgcHJvZ3JhbUlkKTtcclxuLy9lbmQgYW5jaG9yIGJvaWxlcnBsYXRlIHNldHVwXHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgX2FwaTogc3RyaW5nLFxyXG4gIG1ldGhvZDogc3RyaW5nLFxyXG4gIGJpZ19udW1iZXI6IHN0cmluZ1xyXG4pIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIGBmZXRjaGluZyBwcm9ncmFtIHdpdGggbWV0aG9kOiAke21ldGhvZH0gYW5kIGJpZ19udW1iZXI6ICR7YmlnX251bWJlcn1gXHJcbiAgKTtcclxuXHJcbiAgaWYgKG1ldGhvZCA9PSBcImluaXRpYWxpemVcIikge1xyXG4gICAgYXdhaXQgcHJvZ3JhbS5ycGNcclxuICAgICAgLmluaXRpYWxpemUobmV3IGFuY2hvci5CTihiaWdfbnVtYmVyKSwge1xyXG4gICAgICAgIGFjY291bnRzOiB7XHJcbiAgICAgICAgICBteUFjY291bnQ6IG15QWNjb3VudC5wdWJsaWNLZXksXHJcbiAgICAgICAgICB1c2VyOiBwcm92aWRlci53YWxsZXQucHVibGljS2V5LFxyXG4gICAgICAgICAgc3lzdGVtUHJvZ3JhbTogU3lzdGVtUHJvZ3JhbS5wcm9ncmFtSWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaWduZXJzOiBbbXlBY2NvdW50XSxcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAobWV0aG9kID09IFwidXBkYXRlXCIpIHtcclxuICAgIGF3YWl0IHByb2dyYW0ucnBjXHJcbiAgICAgIC51cGRhdGUobmV3IGFuY2hvci5CTihiaWdfbnVtYmVyKSwge1xyXG4gICAgICAgIGFjY291bnRzOiB7XHJcbiAgICAgICAgICBteUFjY291bnQ6IG15QWNjb3VudC5wdWJsaWNLZXksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcHJvZ3JhbS5hY2NvdW50Lm15QWNjb3VudFxyXG4gICAgLmZldGNoKG15QWNjb3VudC5wdWJsaWNLZXkpXHJcbiAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuICBjb25zb2xlLmxvZyhcImFjY291bnRcIiwgYWNjb3VudCk7XHJcbiAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShteUFjY291bnQucHVibGljS2V5KTtcclxuICBjb25zb2xlLmxvZyhcImJhbGFuY2VcIiwgYmFsYW5jZSAvIExBTVBPUlRTX1BFUl9TT0wpO1xyXG4gIGNvbnNvbGUubG9nKFwicHVia2V5OiBcIiwgbXlBY2NvdW50LnB1YmxpY0tleS50b1N0cmluZygpKTtcclxuICBpZiAoYWNjb3VudCAhPSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB7IGRhdGE6IGFjY291bnQuZGF0YS50b1N0cmluZygpIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGNvbm5lY3Rpb25cclxuICAgICAgLnJlcXVlc3RBaXJkcm9wKG15QWNjb3VudC5wdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICAgIC8vIGF3YWl0IGNvbm5lY3Rpb24uY29uZmlybVRyYW5zYWN0aW9uKHNpZ25hdHVyZSk7XHJcbiAgICAvLyBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKG15QWNjb3VudC5wdWJsaWNLZXkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJiYWxhbmNlXCIsIGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicHVia2V5OiBcIiwgbXlBY2NvdW50LnB1YmxpY0tleS50b1N0cmluZygpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYWlyZHJvcCBjb25maXJtZWRcIiwgc2lnbmF0dXJlKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFwiSW5pdGlhbGl6ZSBhbiBhY2NvdW50IHdpdGggdGhlIGZvcm0gdG8gdGhlIHJpZ2h0IHRvIGdldCBzdGFydGVkLiBUaGUgYWNjb3VudCBkYXRhIHdpbGwgc2hvdyB1cCBpbiB0aGlzIGJveCBhZnRlcndhcmRzLlwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVVzZXIobWV0aG9kPzogc3RyaW5nLCBiaWdfbnVtYmVyPzogc3RyaW5nKSB7XHJcbiAgY29uc29sZS5sb2cobWV0aG9kLCBiaWdfbnVtYmVyKTtcclxuICBtZXRob2QgPSBtZXRob2QgfHwgXCJObyBBY2NvdW50XCI7XHJcbiAgYmlnX251bWJlciA9IGJpZ19udW1iZXIgfHwgXCIwMDAwXCI7XHJcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBbXCJwcm9ncmFtX3JwY1wiLCBtZXRob2QsIGJpZ19udW1iZXJdLFxyXG4gICAgcHJvZ3JhbV9mZXRjaGVyXHJcbiAgKTtcclxuICBjb25zdCBsb2FkaW5nID0gIWRhdGEgJiYgIWVycm9yO1xyXG4gIGNvbnNvbGUubG9nKFwiZGF0YSBpbiB1c2VVc2VyOiBcIiwgZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICB1c2VyOiBkYXRhLFxyXG4gICAgbXV0YXRlLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gIC8vIGJhc2ljIGFuY2hvciBycGMgaW5pdCBjYWxsIGFuZCByZXR1cm4gb24gcGFnZSBsb2FkXHJcbiAgLy8gY29uc3QgW3R4LCBzZXRUeF0gPSB1c2VTdGF0ZSh7IHR4OiBcIi4uLmxvYWRpbmdcIiB9KTtcclxuICAvLyBjb25zdCBmZXRjaFR4ID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgdHggPSBhd2FpdCBwcm9ncmFtLnJwYy5pbml0aWFsaXplKCk7XHJcbiAgLy8gICByZXR1cm4gdHg7XHJcbiAgLy8gfTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgZ2V0VHggPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IHR4ID0gYXdhaXQgZmV0Y2hUeCgpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcInR4XCIsIHR4KTtcclxuICAvLyAgICAgc2V0VHgoeyB0eDogdHggfSk7XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgZ2V0VHgoKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIC8vIE5ldyBuZXh0anMgc3dyIHNldHVwIGZvciBtb3JlIGFkdmFuY2VkIHJwYyBjYWxsc1xyXG4gIGNvbnN0IHsgdXNlciwgbXV0YXRlLCBsb2FkaW5nIH0gPSB1c2VVc2VyKCk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgfVxyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCI1ZW1cIiB9fT5cclxuICAgICAgICBbRVJST1JdOiB1c2VyIGlzIHJldHVyaW5nIHVuZGVmaW5lZFxyXG4gICAgICA8L3A+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgLy8gQmFzaWMgYWxlcnQgc2V0dXAgZm9yIGludGlhbGl6aW5nIGFuIGFuIGFjbmhvciBSUEMgYW5kIHJldHVybmluZyB0aGUgdHhcclxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtLThcIj5cclxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+XHJcbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgIC8vICAgICAgIDxzdmdcclxuICAgIC8vICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAvLyAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgIC8vICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAvLyAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgbXgtMiBzdHJva2UtY3VycmVudFwiXHJcbiAgICAvLyAgICAgICA+XHJcbiAgICAvLyAgICAgICAgIDxwYXRoXHJcbiAgICAvLyAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIC8vICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIC8vICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgLy8gICAgICAgICAgIGQ9XCJNMTMgMTZoLTF2LTRoLTFtMS00aC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxyXG4gICAgLy8gICAgICAgICA+PC9wYXRoPlxyXG4gICAgLy8gICAgICAgPC9zdmc+XHJcbiAgICAvLyAgICAgICA8bGFiZWw+e3R4LnR4fTwvbGFiZWw+XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyAgIDwvZGl2PlxyXG4gICAgLy8gPC9kaXY+XHJcblxyXG4gICAgLy8gSW50ZXJtZWRpYXRlIHNldHVwIGZvciBhZGRpbmcgZGF0YSB0byB5b3VyIGFjY291bnQgYW5kIHRoZW4gdXBkYXRpbmcgdGhlIGRhdGFcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyBtaW4taC1zY3JlZW4gYmctYmFzZS0yMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoZXJvLWNvbnRlbnQgbGc6ZmxleC1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC01eGwgZm9udC1ib2xkXCI+QW5jaG9yIEFjY291bnQgRGF0YTwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01XCI+e3VzZXIuZGF0YX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGZsZXgtc2hyaW5rLTAgdy1mdWxsIG1heC13LXNtIHNoYWRvdy0yeGwgYmctYmFzZS0xMDBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+RGF0YTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYmlnX251bWJlclwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyMzRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtdC02XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlci5kYXRhOiBcIiwgdXNlci5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlZi5jdXJyZW50ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaWdfbnVtYmVyOiBhbnkgPSByZWYuY3VycmVudCBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhID09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkluaXRpYWxpemUgYW4gYWNjb3VudCB3aXRoIHRoZSBmb3JtIHRvIHRoZSByaWdodCB0byBnZXQgc3RhcnRlZC4gVGhlIGFjY291bnQgZGF0YSB3aWxsIHNob3cgdXAgaW4gdGhpcyBib3ggYWZ0ZXJ3YXJkcy5cIlxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJvZ3JhbV9mZXRjaGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2dyYW1fcnBjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5pdGlhbGl6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaWdfbnVtYmVyLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXV0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb2dyYW1fZmV0Y2hlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmFtX3JwY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaWdfbnVtYmVyLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXV0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTV1IiLCJhbmNob3IiLCJyZXF1aXJlIiwid2ViMyIsIlN5c3RlbVByb2dyYW0iLCJLZXlwYWlyIiwiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsIkxBTVBPUlRTX1BFUl9TT0wiLCJycGNVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUlBDX1VSTCIsImNvbm5lY3Rpb24iLCJrZXkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJORVhUX1BSSVZBVEVfS0VZIiwiY29uc29sZSIsImxvZyIsImtleXBhaXIiLCJmcm9tU2VjcmV0S2V5IiwiVWludDhBcnJheSIsIndhbGxldCIsIldhbGxldCIsIm9wdGlvbiIsIlByb3ZpZGVyIiwiZGVmYXVsdE9wdGlvbnMiLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwibXlBY2NvdW50IiwiZ2VuZXJhdGUiLCJpZGwiLCJ2ZXJzaW9uIiwibmFtZSIsImluc3RydWN0aW9ucyIsImFjY291bnRzIiwiaXNNdXQiLCJpc1NpZ25lciIsImFyZ3MiLCJ0eXBlIiwia2luZCIsImZpZWxkcyIsIm1ldGFkYXRhIiwiYWRkcmVzcyIsInByb2dyYW1JZCIsInByb2dyYW0iLCJQcm9ncmFtIiwicHJvZ3JhbV9mZXRjaGVyIiwiX2FwaSIsIm1ldGhvZCIsImJpZ19udW1iZXIiLCJycGMiLCJpbml0aWFsaXplIiwiQk4iLCJwdWJsaWNLZXkiLCJ1c2VyIiwic3lzdGVtUHJvZ3JhbSIsInNpZ25lcnMiLCJlIiwidXBkYXRlIiwiYWNjb3VudCIsImZldGNoIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2UiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsImRhdGEiLCJyZXF1ZXN0QWlyZHJvcCIsInNpZ25hdHVyZSIsInVzZVVzZXIiLCJtdXRhdGUiLCJlcnJvciIsImxvYWRpbmciLCJIb21lUGFnZSIsInJlZiIsImNvbG9yIiwibWFyZ2luIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9