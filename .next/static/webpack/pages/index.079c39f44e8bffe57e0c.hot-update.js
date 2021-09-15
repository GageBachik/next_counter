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
console.log("private key:", process.env.NEXT_PRIVATE_KEY);
var key = JSON.parse(process.env.NEXT_PRIVATE_KEY);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDc5YzM5ZjQ0ZThiZmZlNTdlMGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOzs7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHFGQUFELENBQXRCOztBQUNBLGtCQUNFRCxNQUFNLENBQUNFLElBRFQ7QUFBQSxJQUFRQyxhQUFSLGVBQVFBLGFBQVI7QUFBQSxJQUF1QkMsT0FBdkIsZUFBdUJBLE9BQXZCO0FBQUEsSUFBZ0NDLFVBQWhDLGVBQWdDQSxVQUFoQztBQUFBLElBQTRDQyxTQUE1QyxlQUE0Q0EsU0FBNUM7QUFBQSxJQUF1REMsZ0JBQXZELGVBQXVEQSxnQkFBdkQ7QUFFQSxJQUFNQyxNQUFNLEdBQUdDLHVCQUFmO0FBQ0EsSUFBTUcsVUFBVSxHQUFHLElBQUlQLFVBQUosQ0FBZUcsTUFBZixFQUF1QixRQUF2QixDQUFuQjtBQUNBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssZ0JBQXhDO0FBQ0EsSUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsT0FBTyxDQUFDQyxHQUFSLENBQVlLLGdCQUF2QixDQUFaO0FBQ0EsSUFBTUksT0FBTyxHQUFHZixPQUFPLENBQUNnQixhQUFSLENBQXNCLElBQUlDLFVBQUosQ0FBZUwsR0FBZixDQUF0QixDQUFoQjtBQUNBLElBQU1NLE1BQU0sR0FBRyxJQUFJdEIsTUFBTSxDQUFDdUIsTUFBWCxDQUFrQkosT0FBbEIsQ0FBZjtBQUNBLElBQU1LLE1BQU0sR0FBR3hCLE1BQU0sQ0FBQ3lCLFFBQVAsQ0FBZ0JDLGNBQWhCLEVBQWY7QUFDQSxJQUFNQyxRQUFRLEdBQUcsSUFBSTNCLE1BQU0sQ0FBQ3lCLFFBQVgsQ0FBb0JiLFVBQXBCLEVBQWdDVSxNQUFoQyxFQUF3Q0UsTUFBeEMsQ0FBakI7QUFDQXhCLE1BQU0s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QUZtQixFQUduQkcsVUFBVSxDQUFDNkIsS0FIUSxDQWhCbEI7O0FBQUE7QUFxQkhULDRCQUFBQSxNQUFNOztBQXJCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVDtBQTBCRSxvQkFBSSxFQUFDLFFBMUJQO0FBMkJFLHFCQUFLLEVBQUMsUUEzQlI7QUE0QkUseUJBQVMsRUFBQztBQTVCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkY7QUFpRkQ7O0lBL0dRRztVQWtCMkJKOzs7S0FsQjNCSTtBQWlIVCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuLy9hbmNob3IgYm9pbGVycGxhdGUgc2V0dXBcclxuY29uc3QgYW5jaG9yID0gcmVxdWlyZShcIkBwcm9qZWN0LXNlcnVtL2FuY2hvclwiKTtcclxuY29uc3QgeyBTeXN0ZW1Qcm9ncmFtLCBLZXlwYWlyLCBDb25uZWN0aW9uLCBQdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wgfSA9XHJcbiAgYW5jaG9yLndlYjM7XHJcbmNvbnN0IHJwY1VybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JQQ19VUkw7XHJcbmNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihycGNVcmwsIFwicmVjZW50XCIpO1xyXG5jb25zb2xlLmxvZyhcInByaXZhdGUga2V5OlwiLCBwcm9jZXNzLmVudi5ORVhUX1BSSVZBVEVfS0VZKTtcclxuY29uc3Qga2V5ID0gSlNPTi5wYXJzZShwcm9jZXNzLmVudi5ORVhUX1BSSVZBVEVfS0VZKTtcclxuY29uc3Qga2V5cGFpciA9IEtleXBhaXIuZnJvbVNlY3JldEtleShuZXcgVWludDhBcnJheShrZXkpKTtcclxuY29uc3Qgd2FsbGV0ID0gbmV3IGFuY2hvci5XYWxsZXQoa2V5cGFpcik7XHJcbmNvbnN0IG9wdGlvbiA9IGFuY2hvci5Qcm92aWRlci5kZWZhdWx0T3B0aW9ucygpO1xyXG5jb25zdCBwcm92aWRlciA9IG5ldyBhbmNob3IuUHJvdmlkZXIoY29ubmVjdGlvbiwgd2FsbGV0LCBvcHRpb24pO1xyXG5hbmNob3Iuc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xyXG5cclxuY29uc3QgbXlBY2NvdW50ID0gS2V5cGFpci5nZW5lcmF0ZSgpO1xyXG5cclxuY29uc3QgaWRsID0ge1xyXG4gIHZlcnNpb246IFwiMC4wLjBcIixcclxuICBuYW1lOiBcIm5leHRfY291bnRlclwiLFxyXG4gIGluc3RydWN0aW9uczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImluaXRpYWxpemVcIixcclxuICAgICAgYWNjb3VudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIm15QWNjb3VudFwiLFxyXG4gICAgICAgICAgaXNNdXQ6IHRydWUsXHJcbiAgICAgICAgICBpc1NpZ25lcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgICAgICAgaXNNdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJzeXN0ZW1Qcm9ncmFtXCIsXHJcbiAgICAgICAgICBpc011dDogZmFsc2UsXHJcbiAgICAgICAgICBpc1NpZ25lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgYXJnczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiZGF0YVwiLFxyXG4gICAgICAgICAgdHlwZTogXCJ1NjRcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJ1cGRhdGVcIixcclxuICAgICAgYWNjb3VudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIm15QWNjb3VudFwiLFxyXG4gICAgICAgICAgaXNNdXQ6IHRydWUsXHJcbiAgICAgICAgICBpc1NpZ25lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgYXJnczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiZGF0YVwiLFxyXG4gICAgICAgICAgdHlwZTogXCJ1NjRcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGFjY291bnRzOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTXlBY2NvdW50XCIsXHJcbiAgICAgIHR5cGU6IHtcclxuICAgICAgICBraW5kOiBcInN0cnVjdFwiLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImRhdGFcIixcclxuICAgICAgICAgICAgdHlwZTogXCJ1NjRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBtZXRhZGF0YToge1xyXG4gICAgYWRkcmVzczogXCI5bVR2dEhtTW1EVGttWDZjVW9YUXd6cDk3N0VBellpZHluQU5mUDlOelBVR1wiLFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IHByb2dyYW1JZCA9IG5ldyBQdWJsaWNLZXkoXCI5bVR2dEhtTW1EVGttWDZjVW9YUXd6cDk3N0VBellpZHluQU5mUDlOelBVR1wiKTtcclxuY29uc3QgcHJvZ3JhbSA9IG5ldyBhbmNob3IuUHJvZ3JhbShpZGwsIHByb2dyYW1JZCk7XHJcbi8vZW5kIGFuY2hvciBib2lsZXJwbGF0ZSBzZXR1cFxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJvZ3JhbV9mZXRjaGVyKFxyXG4gIF9hcGk6IHN0cmluZyxcclxuICBtZXRob2Q6IHN0cmluZyxcclxuICBiaWdfbnVtYmVyOiBzdHJpbmdcclxuKSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBgZmV0Y2hpbmcgcHJvZ3JhbSB3aXRoIG1ldGhvZDogJHttZXRob2R9IGFuZCBiaWdfbnVtYmVyOiAke2JpZ19udW1iZXJ9YFxyXG4gICk7XHJcblxyXG4gIGlmIChtZXRob2QgPT0gXCJpbml0aWFsaXplXCIpIHtcclxuICAgIGF3YWl0IHByb2dyYW0ucnBjXHJcbiAgICAgIC5pbml0aWFsaXplKG5ldyBhbmNob3IuQk4oYmlnX251bWJlciksIHtcclxuICAgICAgICBhY2NvdW50czoge1xyXG4gICAgICAgICAgbXlBY2NvdW50OiBteUFjY291bnQucHVibGljS2V5LFxyXG4gICAgICAgICAgdXNlcjogcHJvdmlkZXIud2FsbGV0LnB1YmxpY0tleSxcclxuICAgICAgICAgIHN5c3RlbVByb2dyYW06IFN5c3RlbVByb2dyYW0ucHJvZ3JhbUlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2lnbmVyczogW215QWNjb3VudF0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2UgaWYgKG1ldGhvZCA9PSBcInVwZGF0ZVwiKSB7XHJcbiAgICBhd2FpdCBwcm9ncmFtLnJwY1xyXG4gICAgICAudXBkYXRlKG5ldyBhbmNob3IuQk4oYmlnX251bWJlciksIHtcclxuICAgICAgICBhY2NvdW50czoge1xyXG4gICAgICAgICAgbXlBY2NvdW50OiBteUFjY291bnQucHVibGljS2V5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHByb2dyYW0uYWNjb3VudC5teUFjY291bnRcclxuICAgIC5mZXRjaChteUFjY291bnQucHVibGljS2V5KVxyXG4gICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfSk7XHJcbiAgY29uc29sZS5sb2coXCJhY2NvdW50XCIsIGFjY291bnQpO1xyXG4gIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldEJhbGFuY2UobXlBY2NvdW50LnB1YmxpY0tleSk7XHJcbiAgY29uc29sZS5sb2coXCJiYWxhbmNlXCIsIGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MKTtcclxuICBjb25zb2xlLmxvZyhcInB1YmtleTogXCIsIG15QWNjb3VudC5wdWJsaWNLZXkudG9TdHJpbmcoKSk7XHJcbiAgaWYgKGFjY291bnQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4geyBkYXRhOiBhY2NvdW50LmRhdGEudG9TdHJpbmcoKSB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBjb25uZWN0aW9uXHJcbiAgICAgIC5yZXF1ZXN0QWlyZHJvcChteUFjY291bnQucHVibGljS2V5LCBMQU1QT1JUU19QRVJfU09MKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgICAvLyBhd2FpdCBjb25uZWN0aW9uLmNvbmZpcm1UcmFuc2FjdGlvbihzaWduYXR1cmUpO1xyXG4gICAgLy8gY29uc3QgYmFsYW5jZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShteUFjY291bnQucHVibGljS2V5KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYmFsYW5jZVwiLCBiYWxhbmNlIC8gTEFNUE9SVFNfUEVSX1NPTCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInB1YmtleTogXCIsIG15QWNjb3VudC5wdWJsaWNLZXkudG9TdHJpbmcoKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImFpcmRyb3AgY29uZmlybWVkXCIsIHNpZ25hdHVyZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBcIkluaXRpYWxpemUgYW4gYWNjb3VudCB3aXRoIHRoZSBmb3JtIHRvIHRoZSByaWdodCB0byBnZXQgc3RhcnRlZC4gVGhlIGFjY291bnQgZGF0YSB3aWxsIHNob3cgdXAgaW4gdGhpcyBib3ggYWZ0ZXJ3YXJkcy5cIixcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VVc2VyKG1ldGhvZD86IHN0cmluZywgYmlnX251bWJlcj86IHN0cmluZykge1xyXG4gIGNvbnNvbGUubG9nKG1ldGhvZCwgYmlnX251bWJlcik7XHJcbiAgbWV0aG9kID0gbWV0aG9kIHx8IFwiTm8gQWNjb3VudFwiO1xyXG4gIGJpZ19udW1iZXIgPSBiaWdfbnVtYmVyIHx8IFwiMDAwMFwiO1xyXG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgW1wicHJvZ3JhbV9ycGNcIiwgbWV0aG9kLCBiaWdfbnVtYmVyXSxcclxuICAgIHByb2dyYW1fZmV0Y2hlclxyXG4gICk7XHJcbiAgY29uc3QgbG9hZGluZyA9ICFkYXRhICYmICFlcnJvcjtcclxuICBjb25zb2xlLmxvZyhcImRhdGEgaW4gdXNlVXNlcjogXCIsIGRhdGEpO1xyXG4gIHJldHVybiB7XHJcbiAgICBsb2FkaW5nLFxyXG4gICAgdXNlcjogZGF0YSxcclxuICAgIG11dGF0ZSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICAvLyBiYXNpYyBhbmNob3IgcnBjIGluaXQgY2FsbCBhbmQgcmV0dXJuIG9uIHBhZ2UgbG9hZFxyXG4gIC8vIGNvbnN0IFt0eCwgc2V0VHhdID0gdXNlU3RhdGUoeyB0eDogXCIuLi5sb2FkaW5nXCIgfSk7XHJcbiAgLy8gY29uc3QgZmV0Y2hUeCA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgIGNvbnN0IHR4ID0gYXdhaXQgcHJvZ3JhbS5ycGMuaW5pdGlhbGl6ZSgpO1xyXG4gIC8vICAgcmV0dXJuIHR4O1xyXG4gIC8vIH07XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGdldFR4ID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBjb25zdCB0eCA9IGF3YWl0IGZldGNoVHgoKTtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJ0eFwiLCB0eCk7XHJcbiAgLy8gICAgIHNldFR4KHsgdHg6IHR4IH0pO1xyXG4gIC8vICAgfTtcclxuICAvLyAgIGdldFR4KCk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICAvLyBOZXcgbmV4dGpzIHN3ciBzZXR1cCBmb3IgbW9yZSBhZHZhbmNlZCBycGMgY2FsbHNcclxuICBjb25zdCB7IHVzZXIsIG11dGF0ZSwgbG9hZGluZyB9ID0gdXNlVXNlcigpO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiNWVtXCIgfX0+XHJcbiAgICAgICAgW0VSUk9SXTogdXNlciBpcyByZXR1cmluZyB1bmRlZmluZWRcclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIEJhc2ljIGFsZXJ0IHNldHVwIGZvciBpbnRpYWxpemluZyBhbiBhbiBhY25ob3IgUlBDIGFuZCByZXR1cm5pbmcgdGhlIHR4XHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbS04XCI+XHJcbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAvLyAgICAgICA8c3ZnXHJcbiAgICAvLyAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgLy8gICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAvLyAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgLy8gICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IG14LTIgc3Ryb2tlLWN1cnJlbnRcIlxyXG4gICAgLy8gICAgICAgPlxyXG4gICAgLy8gICAgICAgICA8cGF0aFxyXG4gICAgLy8gICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAvLyAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAvLyAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgIC8vICAgICAgICAgICBkPVwiTTEzIDE2aC0xdi00aC0xbTEtNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcclxuICAgIC8vICAgICAgICAgPjwvcGF0aD5cclxuICAgIC8vICAgICAgIDwvc3ZnPlxyXG4gICAgLy8gICAgICAgPGxhYmVsPnt0eC50eH08L2xhYmVsPlxyXG4gICAgLy8gICAgIDwvZGl2PlxyXG4gICAgLy8gICA8L2Rpdj5cclxuICAgIC8vIDwvZGl2PlxyXG5cclxuICAgIC8vIEludGVybWVkaWF0ZSBzZXR1cCBmb3IgYWRkaW5nIGRhdGEgdG8geW91ciBhY2NvdW50IGFuZCB0aGVuIHVwZGF0aW5nIHRoZSBkYXRhXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8gbWluLWgtc2NyZWVuIGJnLWJhc2UtMjAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaGVyby1jb250ZW50IGxnOmZsZXgtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IHRleHQtNXhsIGZvbnQtYm9sZFwiPkFuY2hvciBBY2NvdW50IERhdGE8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNVwiPnt1c2VyLmRhdGF9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmbGV4LXNocmluay0wIHctZnVsbCBtYXgtdy1zbSBzaGFkb3ctMnhsIGJnLWJhc2UtMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPkRhdGE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJpZ19udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMjM0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIuZGF0YTogXCIsIHVzZXIuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmlnX251bWJlcjogYW55ID0gcmVmLmN1cnJlbnQgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YSA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJJbml0aWFsaXplIGFuIGFjY291bnQgd2l0aCB0aGUgZm9ybSB0byB0aGUgcmlnaHQgdG8gZ2V0IHN0YXJ0ZWQuIFRoZSBhY2NvdW50IGRhdGEgd2lsbCBzaG93IHVwIGluIHRoaXMgYm94IGFmdGVyd2FyZHMuXCJcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb2dyYW1fZmV0Y2hlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmFtX3JwY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImluaXRpYWxpemVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlnX251bWJlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG11dGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3JhbV9ycGNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlnX251bWJlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG11dGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU1dSIiwiYW5jaG9yIiwicmVxdWlyZSIsIndlYjMiLCJTeXN0ZW1Qcm9ncmFtIiwiS2V5cGFpciIsIkNvbm5lY3Rpb24iLCJQdWJsaWNLZXkiLCJMQU1QT1JUU19QRVJfU09MIiwicnBjVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JQQ19VUkwiLCJjb25uZWN0aW9uIiwiY29uc29sZSIsImxvZyIsIk5FWFRfUFJJVkFURV9LRVkiLCJrZXkiLCJKU09OIiwicGFyc2UiLCJrZXlwYWlyIiwiZnJvbVNlY3JldEtleSIsIlVpbnQ4QXJyYXkiLCJ3YWxsZXQiLCJXYWxsZXQiLCJvcHRpb24iLCJQcm92aWRlciIsImRlZmF1bHRPcHRpb25zIiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsIm15QWNjb3VudCIsImdlbmVyYXRlIiwiaWRsIiwidmVyc2lvbiIsIm5hbWUiLCJpbnN0cnVjdGlvbnMiLCJhY2NvdW50cyIsImlzTXV0IiwiaXNTaWduZXIiLCJhcmdzIiwidHlwZSIsImtpbmQiLCJmaWVsZHMiLCJtZXRhZGF0YSIsImFkZHJlc3MiLCJwcm9ncmFtSWQiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsInByb2dyYW1fZmV0Y2hlciIsIl9hcGkiLCJtZXRob2QiLCJiaWdfbnVtYmVyIiwicnBjIiwiaW5pdGlhbGl6ZSIsIkJOIiwicHVibGljS2V5IiwidXNlciIsInN5c3RlbVByb2dyYW0iLCJzaWduZXJzIiwiZSIsInVwZGF0ZSIsImFjY291bnQiLCJmZXRjaCIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJkYXRhIiwicmVxdWVzdEFpcmRyb3AiLCJzaWduYXR1cmUiLCJ1c2VVc2VyIiwibXV0YXRlIiwiZXJyb3IiLCJsb2FkaW5nIiwiSG9tZVBhZ2UiLCJyZWYiLCJjb2xvciIsIm1hcmdpbiIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==