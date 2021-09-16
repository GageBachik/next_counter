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
var key = JSON.parse("[115,220,248,164,179,76,28,197,93,107,70,150,168,211,25,186,225,79,68,90,182,135,216,177,123,229,12,145,183,197,123,69,111,12,141,102,117,160,23,151,190,74,150,179,184,231,70,119,122,132,214,167,55,254,143,113,89,56,67,115,25,21,40,63]");
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
    args: []
  }, {
    name: "update",
    accounts: [{
      name: "myAccount",
      isMut: true,
      isSigner: false
    }],
    args: []
  }],
  accounts: [{
    name: "MyAccount",
    type: {
      kind: "struct",
      fields: [{
        name: "count",
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
            return program.rpc.initialize(
            /*new anchor.BN(big_number),*/
            {
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
            return program.rpc.update(
            /*new anchor.BN(big_number),*/
            {
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
} //phantom wallet


_s(useUser, "MBjjql4lnepiJcmnnCIZwE0laGY=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_3__.default];
});

function HomePage() {
  _s2();

  // if (process.browser) {
  //   const wallets = useMemo(
  //     () => [getPhantomWallet()],
  //     ["http://127.0.0.1:8899"]
  //   );
  // }
  // phantom wallet support still buggy
  // const wallet = useWallet();
  // if (!wallet.connected) {
  //   /* If the user's wallet is not connected, display connect wallet button. */
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         marginTop: "100px",
  //       }}
  //     >
  //       <WalletMultiButton />
  //     </div>
  //   );
  // }
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
      lineNumber: 210,
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
      lineNumber: 214,
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
            lineNumber: 246,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "mb-5",
            children: user.data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 245,
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
                  lineNumber: 253,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                ref: ref,
                name: "big_number",
                type: "text",
                placeholder: "1234",
                className: "input input-bordered"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 251,
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
                lineNumber: 264,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDBlNDc0NzA4Y2I3ZjQxMzE0NzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7Ozs7QUFDQSxJQUFNRSxNQUFNLEdBQUdDLG1CQUFPLENBQUMscUZBQUQsQ0FBdEI7O0FBQ0Esa0JBQ0VELE1BQU0sQ0FBQ0UsSUFEVDtBQUFBLElBQVFDLGFBQVIsZUFBUUEsYUFBUjtBQUFBLElBQXVCQyxPQUF2QixlQUF1QkEsT0FBdkI7QUFBQSxJQUFnQ0MsVUFBaEMsZUFBZ0NBLFVBQWhDO0FBQUEsSUFBNENDLFNBQTVDLGVBQTRDQSxTQUE1QztBQUFBLElBQXVEQyxnQkFBdkQsZUFBdURBLGdCQUF2RDtBQUVBLElBQU1DLE1BQU0sR0FBR0MsdUJBQWY7QUFDQSxJQUFNRyxVQUFVLEdBQUcsSUFBSVAsVUFBSixDQUFlRyxNQUFmLEVBQXVCLFFBQXZCLENBQW5CO0FBQ0EsSUFBTUssR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDViw2T0FEVSxDQUFaO0FBR0EsSUFBTUMsT0FBTyxHQUFHWixPQUFPLENBQUNhLGFBQVIsQ0FBc0IsSUFBSUMsVUFBSixDQUFlTCxHQUFmLENBQXRCLENBQWhCO0FBQ0EsSUFBTU0sTUFBTSxHQUFHLElBQUluQixNQUFNLENBQUNvQixNQUFYLENBQWtCSixPQUFsQixDQUFmO0FBQ0EsSUFBTUssTUFBTSxHQUFHckIsTUFBTSxDQUFDc0IsUUFBUCxDQUFnQkMsY0FBaEIsRUFBZjtBQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJeEIsTUFBTSxDQUFDc0IsUUFBWCxDQUFvQlYsVUFBcEIsRUFBZ0NPLE1BQWhDLEVBQXdDRSxNQUF4QyxDQUFqQjtBQUNBckIsTUFBTSxDQUFDeUIsV0FBUCxDQUFtQkQsUUFBbkI7QUFFQSxJQUFNRSxTQUFTLEdBQUd0QixPQUFPLENBQUN1QixRQUFSLEVBQWxCO0FBRUEsSUFBTUMsR0FBRyxHQUFHO0FB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QTVCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkY7QUFpRkQ7O0lBdklRRztVQTBDMkJKOzs7S0ExQzNCSTtBQXlJVCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuLy9hbmNob3IgYm9pbGVycGxhdGUgc2V0dXBcclxuY29uc3QgYW5jaG9yID0gcmVxdWlyZShcIkBwcm9qZWN0LXNlcnVtL2FuY2hvclwiKTtcclxuY29uc3QgeyBTeXN0ZW1Qcm9ncmFtLCBLZXlwYWlyLCBDb25uZWN0aW9uLCBQdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wgfSA9XHJcbiAgYW5jaG9yLndlYjM7XHJcbmNvbnN0IHJwY1VybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JQQ19VUkw7XHJcbmNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihycGNVcmwsIFwicmVjZW50XCIpO1xyXG5jb25zdCBrZXkgPSBKU09OLnBhcnNlKFxyXG4gIFwiWzExNSwyMjAsMjQ4LDE2NCwxNzksNzYsMjgsMTk3LDkzLDEwNyw3MCwxNTAsMTY4LDIxMSwyNSwxODYsMjI1LDc5LDY4LDkwLDE4MiwxMzUsMjE2LDE3NywxMjMsMjI5LDEyLDE0NSwxODMsMTk3LDEyMyw2OSwxMTEsMTIsMTQxLDEwMiwxMTcsMTYwLDIzLDE1MSwxOTAsNzQsMTUwLDE3OSwxODQsMjMxLDcwLDExOSwxMjIsMTMyLDIxNCwxNjcsNTUsMjU0LDE0MywxMTMsODksNTYsNjcsMTE1LDI1LDIxLDQwLDYzXVwiXHJcbik7XHJcbmNvbnN0IGtleXBhaXIgPSBLZXlwYWlyLmZyb21TZWNyZXRLZXkobmV3IFVpbnQ4QXJyYXkoa2V5KSk7XHJcbmNvbnN0IHdhbGxldCA9IG5ldyBhbmNob3IuV2FsbGV0KGtleXBhaXIpO1xyXG5jb25zdCBvcHRpb24gPSBhbmNob3IuUHJvdmlkZXIuZGVmYXVsdE9wdGlvbnMoKTtcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgYW5jaG9yLlByb3ZpZGVyKGNvbm5lY3Rpb24sIHdhbGxldCwgb3B0aW9uKTtcclxuYW5jaG9yLnNldFByb3ZpZGVyKHByb3ZpZGVyKTtcclxuXHJcbmNvbnN0IG15QWNjb3VudCA9IEtleXBhaXIuZ2VuZXJhdGUoKTtcclxuXHJcbmNvbnN0IGlkbCA9IHtcclxuICB2ZXJzaW9uOiBcIjAuMC4wXCIsXHJcbiAgbmFtZTogXCJuZXh0X2NvdW50ZXJcIixcclxuICBpbnN0cnVjdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJpbml0aWFsaXplXCIsXHJcbiAgICAgIGFjY291bnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJteUFjY291bnRcIixcclxuICAgICAgICAgIGlzTXV0OiB0cnVlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInVzZXJcIixcclxuICAgICAgICAgIGlzTXV0OiBmYWxzZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwic3lzdGVtUHJvZ3JhbVwiLFxyXG4gICAgICAgICAgaXNNdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGFyZ3M6IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJ1cGRhdGVcIixcclxuICAgICAgYWNjb3VudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIm15QWNjb3VudFwiLFxyXG4gICAgICAgICAgaXNNdXQ6IHRydWUsXHJcbiAgICAgICAgICBpc1NpZ25lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgYXJnczogW10sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgYWNjb3VudHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNeUFjY291bnRcIixcclxuICAgICAgdHlwZToge1xyXG4gICAgICAgIGtpbmQ6IFwic3RydWN0XCIsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiY291bnRcIixcclxuICAgICAgICAgICAgdHlwZTogXCJ1NjRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBtZXRhZGF0YToge1xyXG4gICAgYWRkcmVzczogXCI5bVR2dEhtTW1EVGttWDZjVW9YUXd6cDk3N0VBellpZHluQU5mUDlOelBVR1wiLFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IHByb2dyYW1JZCA9IG5ldyBQdWJsaWNLZXkoXCI5bVR2dEhtTW1EVGttWDZjVW9YUXd6cDk3N0VBellpZHluQU5mUDlOelBVR1wiKTtcclxuY29uc3QgcHJvZ3JhbSA9IG5ldyBhbmNob3IuUHJvZ3JhbShpZGwsIHByb2dyYW1JZCk7XHJcbi8vZW5kIGFuY2hvciBib2lsZXJwbGF0ZSBzZXR1cFxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJvZ3JhbV9mZXRjaGVyKFxyXG4gIF9hcGk6IHN0cmluZyxcclxuICBtZXRob2Q6IHN0cmluZyxcclxuICBiaWdfbnVtYmVyOiBzdHJpbmdcclxuKSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBgZmV0Y2hpbmcgcHJvZ3JhbSB3aXRoIG1ldGhvZDogJHttZXRob2R9IGFuZCBiaWdfbnVtYmVyOiAke2JpZ19udW1iZXJ9YFxyXG4gICk7XHJcblxyXG4gIGlmIChtZXRob2QgPT0gXCJpbml0aWFsaXplXCIpIHtcclxuICAgIGF3YWl0IHByb2dyYW0ucnBjXHJcbiAgICAgIC5pbml0aWFsaXplKFxyXG4gICAgICAgIC8qbmV3IGFuY2hvci5CTihiaWdfbnVtYmVyKSwqLyB7XHJcbiAgICAgICAgICBhY2NvdW50czoge1xyXG4gICAgICAgICAgICBteUFjY291bnQ6IG15QWNjb3VudC5wdWJsaWNLZXksXHJcbiAgICAgICAgICAgIHVzZXI6IHByb3ZpZGVyLndhbGxldC5wdWJsaWNLZXksXHJcbiAgICAgICAgICAgIHN5c3RlbVByb2dyYW06IFN5c3RlbVByb2dyYW0ucHJvZ3JhbUlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNpZ25lcnM6IFtteUFjY291bnRdLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIGlmIChtZXRob2QgPT0gXCJ1cGRhdGVcIikge1xyXG4gICAgYXdhaXQgcHJvZ3JhbS5ycGNcclxuICAgICAgLnVwZGF0ZShcclxuICAgICAgICAvKm5ldyBhbmNob3IuQk4oYmlnX251bWJlciksKi8ge1xyXG4gICAgICAgICAgYWNjb3VudHM6IHtcclxuICAgICAgICAgICAgbXlBY2NvdW50OiBteUFjY291bnQucHVibGljS2V5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcHJvZ3JhbS5hY2NvdW50Lm15QWNjb3VudFxyXG4gICAgLmZldGNoKG15QWNjb3VudC5wdWJsaWNLZXkpXHJcbiAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuICBjb25zb2xlLmxvZyhcImFjY291bnRcIiwgYWNjb3VudCk7XHJcbiAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShteUFjY291bnQucHVibGljS2V5KTtcclxuICBjb25zb2xlLmxvZyhcImJhbGFuY2VcIiwgYmFsYW5jZSAvIExBTVBPUlRTX1BFUl9TT0wpO1xyXG4gIGNvbnNvbGUubG9nKFwicHVia2V5OiBcIiwgbXlBY2NvdW50LnB1YmxpY0tleS50b1N0cmluZygpKTtcclxuICBpZiAoYWNjb3VudCAhPSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB7IGRhdGE6IGFjY291bnQuZGF0YS50b1N0cmluZygpIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGNvbm5lY3Rpb25cclxuICAgICAgLnJlcXVlc3RBaXJkcm9wKG15QWNjb3VudC5wdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICAgIC8vIGF3YWl0IGNvbm5lY3Rpb24uY29uZmlybVRyYW5zYWN0aW9uKHNpZ25hdHVyZSk7XHJcbiAgICAvLyBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKG15QWNjb3VudC5wdWJsaWNLZXkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJiYWxhbmNlXCIsIGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicHVia2V5OiBcIiwgbXlBY2NvdW50LnB1YmxpY0tleS50b1N0cmluZygpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYWlyZHJvcCBjb25maXJtZWRcIiwgc2lnbmF0dXJlKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFwiSW5pdGlhbGl6ZSBhbiBhY2NvdW50IHdpdGggdGhlIGZvcm0gdG8gdGhlIHJpZ2h0IHRvIGdldCBzdGFydGVkLiBUaGUgYWNjb3VudCBkYXRhIHdpbGwgc2hvdyB1cCBpbiB0aGlzIGJveCBhZnRlcndhcmRzLlwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVVzZXIobWV0aG9kPzogc3RyaW5nLCBiaWdfbnVtYmVyPzogc3RyaW5nKSB7XHJcbiAgY29uc29sZS5sb2cobWV0aG9kLCBiaWdfbnVtYmVyKTtcclxuICBtZXRob2QgPSBtZXRob2QgfHwgXCJObyBBY2NvdW50XCI7XHJcbiAgYmlnX251bWJlciA9IGJpZ19udW1iZXIgfHwgXCIwMDAwXCI7XHJcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBbXCJwcm9ncmFtX3JwY1wiLCBtZXRob2QsIGJpZ19udW1iZXJdLFxyXG4gICAgcHJvZ3JhbV9mZXRjaGVyXHJcbiAgKTtcclxuICBjb25zdCBsb2FkaW5nID0gIWRhdGEgJiYgIWVycm9yO1xyXG4gIGNvbnNvbGUubG9nKFwiZGF0YSBpbiB1c2VVc2VyOiBcIiwgZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICB1c2VyOiBkYXRhLFxyXG4gICAgbXV0YXRlLFxyXG4gIH07XHJcbn1cclxuLy9waGFudG9tIHdhbGxldFxyXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xyXG5pbXBvcnQgeyBXYWxsZXRNdWx0aUJ1dHRvbiB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpXCI7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAvLyBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgLy8gICBjb25zdCB3YWxsZXRzID0gdXNlTWVtbyhcclxuICAvLyAgICAgKCkgPT4gW2dldFBoYW50b21XYWxsZXQoKV0sXHJcbiAgLy8gICAgIFtcImh0dHA6Ly8xMjcuMC4wLjE6ODg5OVwiXVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHBoYW50b20gd2FsbGV0IHN1cHBvcnQgc3RpbGwgYnVnZ3lcclxuICAvLyBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKTtcclxuXHJcbiAgLy8gaWYgKCF3YWxsZXQuY29ubmVjdGVkKSB7XHJcbiAgLy8gICAvKiBJZiB0aGUgdXNlcidzIHdhbGxldCBpcyBub3QgY29ubmVjdGVkLCBkaXNwbGF5IGNvbm5lY3Qgd2FsbGV0IGJ1dHRvbi4gKi9cclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxkaXZcclxuICAvLyAgICAgICBzdHlsZT17e1xyXG4gIC8vICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgLy8gICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAvLyAgICAgICAgIG1hcmdpblRvcDogXCIxMDBweFwiLFxyXG4gIC8vICAgICAgIH19XHJcbiAgLy8gICAgID5cclxuICAvLyAgICAgICA8V2FsbGV0TXVsdGlCdXR0b24gLz5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICAvLyBiYXNpYyBhbmNob3IgcnBjIGluaXQgY2FsbCBhbmQgcmV0dXJuIG9uIHBhZ2UgbG9hZFxyXG4gIC8vIGNvbnN0IFt0eCwgc2V0VHhdID0gdXNlU3RhdGUoeyB0eDogXCIuLi5sb2FkaW5nXCIgfSk7XHJcbiAgLy8gY29uc3QgZmV0Y2hUeCA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgIGNvbnN0IHR4ID0gYXdhaXQgcHJvZ3JhbS5ycGMuaW5pdGlhbGl6ZSgpO1xyXG4gIC8vICAgcmV0dXJuIHR4O1xyXG4gIC8vIH07XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGdldFR4ID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBjb25zdCB0eCA9IGF3YWl0IGZldGNoVHgoKTtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJ0eFwiLCB0eCk7XHJcbiAgLy8gICAgIHNldFR4KHsgdHg6IHR4IH0pO1xyXG4gIC8vICAgfTtcclxuICAvLyAgIGdldFR4KCk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICAvLyBOZXcgbmV4dGpzIHN3ciBzZXR1cCBmb3IgbW9yZSBhZHZhbmNlZCBycGMgY2FsbHNcclxuICBjb25zdCB7IHVzZXIsIG11dGF0ZSwgbG9hZGluZyB9ID0gdXNlVXNlcigpO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiNWVtXCIgfX0+XHJcbiAgICAgICAgW0VSUk9SXTogdXNlciBpcyByZXR1cmluZyB1bmRlZmluZWRcclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIEJhc2ljIGFsZXJ0IHNldHVwIGZvciBpbnRpYWxpemluZyBhbiBhbiBhY25ob3IgUlBDIGFuZCByZXR1cm5pbmcgdGhlIHR4XHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbS04XCI+XHJcbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAvLyAgICAgICA8c3ZnXHJcbiAgICAvLyAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgLy8gICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAvLyAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgLy8gICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IG14LTIgc3Ryb2tlLWN1cnJlbnRcIlxyXG4gICAgLy8gICAgICAgPlxyXG4gICAgLy8gICAgICAgICA8cGF0aFxyXG4gICAgLy8gICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAvLyAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAvLyAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgIC8vICAgICAgICAgICBkPVwiTTEzIDE2aC0xdi00aC0xbTEtNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcclxuICAgIC8vICAgICAgICAgPjwvcGF0aD5cclxuICAgIC8vICAgICAgIDwvc3ZnPlxyXG4gICAgLy8gICAgICAgPGxhYmVsPnt0eC50eH08L2xhYmVsPlxyXG4gICAgLy8gICAgIDwvZGl2PlxyXG4gICAgLy8gICA8L2Rpdj5cclxuICAgIC8vIDwvZGl2PlxyXG5cclxuICAgIC8vIEludGVybWVkaWF0ZSBzZXR1cCBmb3IgYWRkaW5nIGRhdGEgdG8geW91ciBhY2NvdW50IGFuZCB0aGVuIHVwZGF0aW5nIHRoZSBkYXRhXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8gbWluLWgtc2NyZWVuIGJnLWJhc2UtMjAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaGVyby1jb250ZW50IGxnOmZsZXgtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IHRleHQtNXhsIGZvbnQtYm9sZFwiPkFuY2hvciBBY2NvdW50IERhdGE8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNVwiPnt1c2VyLmRhdGF9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmbGV4LXNocmluay0wIHctZnVsbCBtYXgtdy1zbSBzaGFkb3ctMnhsIGJnLWJhc2UtMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPkRhdGE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJpZ19udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMjM0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIuZGF0YTogXCIsIHVzZXIuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmlnX251bWJlcjogYW55ID0gcmVmLmN1cnJlbnQgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YSA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJJbml0aWFsaXplIGFuIGFjY291bnQgd2l0aCB0aGUgZm9ybSB0byB0aGUgcmlnaHQgdG8gZ2V0IHN0YXJ0ZWQuIFRoZSBhY2NvdW50IGRhdGEgd2lsbCBzaG93IHVwIGluIHRoaXMgYm94IGFmdGVyd2FyZHMuXCJcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb2dyYW1fZmV0Y2hlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmFtX3JwY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImluaXRpYWxpemVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlnX251bWJlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG11dGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3JhbV9ycGNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlnX251bWJlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG11dGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU1dSIiwiYW5jaG9yIiwicmVxdWlyZSIsIndlYjMiLCJTeXN0ZW1Qcm9ncmFtIiwiS2V5cGFpciIsIkNvbm5lY3Rpb24iLCJQdWJsaWNLZXkiLCJMQU1QT1JUU19QRVJfU09MIiwicnBjVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JQQ19VUkwiLCJjb25uZWN0aW9uIiwia2V5IiwiSlNPTiIsInBhcnNlIiwia2V5cGFpciIsImZyb21TZWNyZXRLZXkiLCJVaW50OEFycmF5Iiwid2FsbGV0IiwiV2FsbGV0Iiwib3B0aW9uIiwiUHJvdmlkZXIiLCJkZWZhdWx0T3B0aW9ucyIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJteUFjY291bnQiLCJnZW5lcmF0ZSIsImlkbCIsInZlcnNpb24iLCJuYW1lIiwiaW5zdHJ1Y3Rpb25zIiwiYWNjb3VudHMiLCJpc011dCIsImlzU2lnbmVyIiwiYXJncyIsInR5cGUiLCJraW5kIiwiZmllbGRzIiwibWV0YWRhdGEiLCJhZGRyZXNzIiwicHJvZ3JhbUlkIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJwcm9ncmFtX2ZldGNoZXIiLCJfYXBpIiwibWV0aG9kIiwiYmlnX251bWJlciIsImNvbnNvbGUiLCJsb2ciLCJycGMiLCJpbml0aWFsaXplIiwicHVibGljS2V5IiwidXNlciIsInN5c3RlbVByb2dyYW0iLCJzaWduZXJzIiwiZSIsInVwZGF0ZSIsImFjY291bnQiLCJmZXRjaCIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJkYXRhIiwicmVxdWVzdEFpcmRyb3AiLCJzaWduYXR1cmUiLCJ1c2VVc2VyIiwibXV0YXRlIiwiZXJyb3IiLCJsb2FkaW5nIiwiSG9tZVBhZ2UiLCJyZWYiLCJjb2xvciIsIm1hcmdpbiIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==