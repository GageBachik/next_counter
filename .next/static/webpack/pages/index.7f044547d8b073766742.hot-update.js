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
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ "./node_modules/@solana/wallet-adapter-react/lib/index.js");
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ "./node_modules/@solana/wallet-adapter-react-ui/lib/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
              data: account.count.toString()
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
  // phantom wallet fixed
  var wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();

  if (!wallet.connected) {
    /* If the user's wallet is not connected, display connect wallet button. */
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: "100px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletMultiButton, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, this);
  }

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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 12
    }, this);
  }

  if (!user) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
      style: {
        color: "red",
        margin: "5em"
      },
      children: "[ERROR]: user is returing undefined"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
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
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "hero min-h-screen bg-base-200",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "flex-col justify-center hero-content lg:flex-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "text-center lg:text-left",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
            className: "mb-5 text-5xl font-bold",
            children: "Anchor Account Data"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            className: "mb-5",
            children: user.data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletDisconnectButton, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "form-control",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
                className: "label",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                  className: "label-text",
                  children: "Data"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                ref: ref,
                name: "big_number",
                type: "text",
                placeholder: "1234",
                className: "input input-bordered"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "form-control mt-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
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
                lineNumber: 268,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 5
    }, this)
  );
}

_s2(HomePage, "WMbxmRcSOWFiBhQzysKRMi7+Ljg=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet, useUser];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2YwNDQ1NDdkOGIwNzM3NjY3NDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxJQUFNRSxNQUFNLEdBQUdDLG1CQUFPLENBQUMscUZBQUQsQ0FBdEI7O0FBQ0Esa0JBQ0VELE1BQU0sQ0FBQ0UsSUFEVDtBQUFBLElBQVFDLGFBQVIsZUFBUUEsYUFBUjtBQUFBLElBQXVCQyxPQUF2QixlQUF1QkEsT0FBdkI7QUFBQSxJQUFnQ0MsVUFBaEMsZUFBZ0NBLFVBQWhDO0FBQUEsSUFBNENDLFNBQTVDLGVBQTRDQSxTQUE1QztBQUFBLElBQXVEQyxnQkFBdkQsZUFBdURBLGdCQUF2RDtBQUVBLElBQU1DLE1BQU0sR0FBR0MsdUJBQWY7QUFDQSxJQUFNRyxVQUFVLEdBQUcsSUFBSVAsVUFBSixDQUFlRyxNQUFmLEVBQXVCLFFBQXZCLENBQW5CO0FBQ0EsSUFBTUssR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDViw2T0FEVSxDQUFaO0FBR0EsSUFBTUMsT0FBTyxHQUFHWixPQUFPLENBQUNhLGFBQVIsQ0FBc0IsSUFBSUMsVUFBSixDQUFlTCxHQUFmLENBQXRCLENBQWhCO0FBQ0EsSUFBTU0sTUFBTSxHQUFHLElBQUluQixNQUFNLENBQUNvQixNQUFYLENBQWtCSixPQUFsQixDQUFmO0FBQ0EsSUFBTUssTUFBTSxHQUFHckIsTUFBTSxDQUFDc0IsUUFBUCxDQUFnQkMsY0FBaEIsRUFBZjtBQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJeEIsTUFBTSxDQUFDc0IsUUFBWCxDQUFvQlYsVUFBcEIsRUFBZ0NPLE1BQWhDLEVBQXdDRSxNQUF4QyxDQUFqQjtBQUNBckIsTUFBTSxDQUFDeUIsV0FBUCxDQUFtQkQsUUFBbkI7QUFFQSxJQUFNRSxTQUFTLEdBQUd0QixPQUFPLENBQUN1QixRQUFSLEVBQWxCO0FBRUEsSUFBTUMsR0FBRyxHQUFHO0FB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QU07QUFkSDtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQ0FnQkd6QixlQUFlLENBQ25CLGFBRG1CLEVBRW5CLFFBRm1CLEVBR25CRyxVQUFVLENBQUNzQyxLQUhRLENBaEJsQjs7QUFBQTtBQXFCSGhCLDRCQUFBQSxNQUFNOztBQXJCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVDtBQTBCRSxvQkFBSSxFQUFDLFFBMUJQO0FBMkJFLHFCQUFLLEVBQUMsUUEzQlI7QUE0QkUseUJBQVMsRUFBQztBQTVCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkY7QUFrRkQ7O0lBeElRTTtVQVNRSCxxRUFpQ21CSjs7O0tBMUMzQk87QUEwSVQsK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbi8vYW5jaG9yIGJvaWxlcnBsYXRlIHNldHVwXHJcbmNvbnN0IGFuY2hvciA9IHJlcXVpcmUoXCJAcHJvamVjdC1zZXJ1bS9hbmNob3JcIik7XHJcbmNvbnN0IHsgU3lzdGVtUHJvZ3JhbSwgS2V5cGFpciwgQ29ubmVjdGlvbiwgUHVibGljS2V5LCBMQU1QT1JUU19QRVJfU09MIH0gPVxyXG4gIGFuY2hvci53ZWIzO1xyXG5jb25zdCBycGNVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SUENfVVJMO1xyXG5jb25zdCBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24ocnBjVXJsLCBcInJlY2VudFwiKTtcclxuY29uc3Qga2V5ID0gSlNPTi5wYXJzZShcclxuICBcIlsxMTUsMjIwLDI0OCwxNjQsMTc5LDc2LDI4LDE5Nyw5MywxMDcsNzAsMTUwLDE2OCwyMTEsMjUsMTg2LDIyNSw3OSw2OCw5MCwxODIsMTM1LDIxNiwxNzcsMTIzLDIyOSwxMiwxNDUsMTgzLDE5NywxMjMsNjksMTExLDEyLDE0MSwxMDIsMTE3LDE2MCwyMywxNTEsMTkwLDc0LDE1MCwxNzksMTg0LDIzMSw3MCwxMTksMTIyLDEzMiwyMTQsMTY3LDU1LDI1NCwxNDMsMTEzLDg5LDU2LDY3LDExNSwyNSwyMSw0MCw2M11cIlxyXG4pO1xyXG5jb25zdCBrZXlwYWlyID0gS2V5cGFpci5mcm9tU2VjcmV0S2V5KG5ldyBVaW50OEFycmF5KGtleSkpO1xyXG5jb25zdCB3YWxsZXQgPSBuZXcgYW5jaG9yLldhbGxldChrZXlwYWlyKTtcclxuY29uc3Qgb3B0aW9uID0gYW5jaG9yLlByb3ZpZGVyLmRlZmF1bHRPcHRpb25zKCk7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGFuY2hvci5Qcm92aWRlcihjb25uZWN0aW9uLCB3YWxsZXQsIG9wdGlvbik7XHJcbmFuY2hvci5zZXRQcm92aWRlcihwcm92aWRlcik7XHJcblxyXG5jb25zdCBteUFjY291bnQgPSBLZXlwYWlyLmdlbmVyYXRlKCk7XHJcblxyXG5jb25zdCBpZGwgPSB7XHJcbiAgdmVyc2lvbjogXCIwLjAuMFwiLFxyXG4gIG5hbWU6IFwibmV4dF9jb3VudGVyXCIsXHJcbiAgaW5zdHJ1Y3Rpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiaW5pdGlhbGl6ZVwiLFxyXG4gICAgICBhY2NvdW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwibXlBY2NvdW50XCIsXHJcbiAgICAgICAgICBpc011dDogdHJ1ZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgICAgICAgICBpc011dDogZmFsc2UsXHJcbiAgICAgICAgICBpc1NpZ25lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInN5c3RlbVByb2dyYW1cIixcclxuICAgICAgICAgIGlzTXV0OiBmYWxzZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBhcmdzOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwidXBkYXRlXCIsXHJcbiAgICAgIGFjY291bnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJteUFjY291bnRcIixcclxuICAgICAgICAgIGlzTXV0OiB0cnVlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGFyZ3M6IFtdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGFjY291bnRzOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTXlBY2NvdW50XCIsXHJcbiAgICAgIHR5cGU6IHtcclxuICAgICAgICBraW5kOiBcInN0cnVjdFwiLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImNvdW50XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwidTY0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbWV0YWRhdGE6IHtcclxuICAgIGFkZHJlc3M6IFwiOW1UdnRIbU1tRFRrbVg2Y1VvWFF3enA5NzdFQXpZaWR5bkFOZlA5TnpQVUdcIixcclxuICB9LFxyXG59O1xyXG5jb25zdCBwcm9ncmFtSWQgPSBuZXcgUHVibGljS2V5KFwiOW1UdnRIbU1tRFRrbVg2Y1VvWFF3enA5NzdFQXpZaWR5bkFOZlA5TnpQVUdcIik7XHJcbmNvbnN0IHByb2dyYW0gPSBuZXcgYW5jaG9yLlByb2dyYW0oaWRsLCBwcm9ncmFtSWQpO1xyXG4vL2VuZCBhbmNob3IgYm9pbGVycGxhdGUgc2V0dXBcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb2dyYW1fZmV0Y2hlcihcclxuICBfYXBpOiBzdHJpbmcsXHJcbiAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgYmlnX251bWJlcjogc3RyaW5nXHJcbikge1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgYGZldGNoaW5nIHByb2dyYW0gd2l0aCBtZXRob2Q6ICR7bWV0aG9kfSBhbmQgYmlnX251bWJlcjogJHtiaWdfbnVtYmVyfWBcclxuICApO1xyXG5cclxuICBpZiAobWV0aG9kID09IFwiaW5pdGlhbGl6ZVwiKSB7XHJcbiAgICBhd2FpdCBwcm9ncmFtLnJwY1xyXG4gICAgICAuaW5pdGlhbGl6ZShcclxuICAgICAgICAvKm5ldyBhbmNob3IuQk4oYmlnX251bWJlciksKi8ge1xyXG4gICAgICAgICAgYWNjb3VudHM6IHtcclxuICAgICAgICAgICAgbXlBY2NvdW50OiBteUFjY291bnQucHVibGljS2V5LFxyXG4gICAgICAgICAgICB1c2VyOiBwcm92aWRlci53YWxsZXQucHVibGljS2V5LFxyXG4gICAgICAgICAgICBzeXN0ZW1Qcm9ncmFtOiBTeXN0ZW1Qcm9ncmFtLnByb2dyYW1JZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaWduZXJzOiBbbXlBY2NvdW50XSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAobWV0aG9kID09IFwidXBkYXRlXCIpIHtcclxuICAgIGF3YWl0IHByb2dyYW0ucnBjXHJcbiAgICAgIC51cGRhdGUoXHJcbiAgICAgICAgLypuZXcgYW5jaG9yLkJOKGJpZ19udW1iZXIpLCovIHtcclxuICAgICAgICAgIGFjY291bnRzOiB7XHJcbiAgICAgICAgICAgIG15QWNjb3VudDogbXlBY2NvdW50LnB1YmxpY0tleSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHByb2dyYW0uYWNjb3VudC5teUFjY291bnRcclxuICAgIC5mZXRjaChteUFjY291bnQucHVibGljS2V5KVxyXG4gICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfSk7XHJcbiAgY29uc29sZS5sb2coXCJhY2NvdW50XCIsIGFjY291bnQpO1xyXG4gIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldEJhbGFuY2UobXlBY2NvdW50LnB1YmxpY0tleSk7XHJcbiAgY29uc29sZS5sb2coXCJiYWxhbmNlXCIsIGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MKTtcclxuICBjb25zb2xlLmxvZyhcInB1YmtleTogXCIsIG15QWNjb3VudC5wdWJsaWNLZXkudG9TdHJpbmcoKSk7XHJcbiAgaWYgKGFjY291bnQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4geyBkYXRhOiBhY2NvdW50LmNvdW50LnRvU3RyaW5nKCkgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgY29ubmVjdGlvblxyXG4gICAgICAucmVxdWVzdEFpcmRyb3AobXlBY2NvdW50LnB1YmxpY0tleSwgTEFNUE9SVFNfUEVSX1NPTClcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gYXdhaXQgY29ubmVjdGlvbi5jb25maXJtVHJhbnNhY3Rpb24oc2lnbmF0dXJlKTtcclxuICAgIC8vIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldEJhbGFuY2UobXlBY2NvdW50LnB1YmxpY0tleSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImJhbGFuY2VcIiwgYmFsYW5jZSAvIExBTVBPUlRTX1BFUl9TT0wpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJwdWJrZXk6IFwiLCBteUFjY291bnQucHVibGljS2V5LnRvU3RyaW5nKCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJhaXJkcm9wIGNvbmZpcm1lZFwiLCBzaWduYXR1cmUpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogXCJJbml0aWFsaXplIGFuIGFjY291bnQgd2l0aCB0aGUgZm9ybSB0byB0aGUgcmlnaHQgdG8gZ2V0IHN0YXJ0ZWQuIFRoZSBhY2NvdW50IGRhdGEgd2lsbCBzaG93IHVwIGluIHRoaXMgYm94IGFmdGVyd2FyZHMuXCIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXNlVXNlcihtZXRob2Q/OiBzdHJpbmcsIGJpZ19udW1iZXI/OiBzdHJpbmcpIHtcclxuICBjb25zb2xlLmxvZyhtZXRob2QsIGJpZ19udW1iZXIpO1xyXG4gIG1ldGhvZCA9IG1ldGhvZCB8fCBcIk5vIEFjY291bnRcIjtcclxuICBiaWdfbnVtYmVyID0gYmlnX251bWJlciB8fCBcIjAwMDBcIjtcclxuICBjb25zdCB7IGRhdGEsIG11dGF0ZSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIFtcInByb2dyYW1fcnBjXCIsIG1ldGhvZCwgYmlnX251bWJlcl0sXHJcbiAgICBwcm9ncmFtX2ZldGNoZXJcclxuICApO1xyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3I7XHJcbiAgY29uc29sZS5sb2coXCJkYXRhIGluIHVzZVVzZXI6IFwiLCBkYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGluZyxcclxuICAgIHVzZXI6IGRhdGEsXHJcbiAgICBtdXRhdGUsXHJcbiAgfTtcclxufVxyXG4vL3BoYW50b20gd2FsbGV0XHJcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgV2FsbGV0TXVsdGlCdXR0b24sXHJcbiAgV2FsbGV0RGlzY29ubmVjdEJ1dHRvbixcclxufSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aVwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgLy8gaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gIC8vICAgY29uc3Qgd2FsbGV0cyA9IHVzZU1lbW8oXHJcbiAgLy8gICAgICgpID0+IFtnZXRQaGFudG9tV2FsbGV0KCldLFxyXG4gIC8vICAgICBbXCJodHRwOi8vMTI3LjAuMC4xOjg4OTlcIl1cclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBwaGFudG9tIHdhbGxldCBmaXhlZFxyXG4gIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xyXG5cclxuICBpZiAoIXdhbGxldC5jb25uZWN0ZWQpIHtcclxuICAgIC8qIElmIHRoZSB1c2VyJ3Mgd2FsbGV0IGlzIG5vdCBjb25uZWN0ZWQsIGRpc3BsYXkgY29ubmVjdCB3YWxsZXQgYnV0dG9uLiAqL1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxXYWxsZXRNdWx0aUJ1dHRvbiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gIC8vIGJhc2ljIGFuY2hvciBycGMgaW5pdCBjYWxsIGFuZCByZXR1cm4gb24gcGFnZSBsb2FkXHJcbiAgLy8gY29uc3QgW3R4LCBzZXRUeF0gPSB1c2VTdGF0ZSh7IHR4OiBcIi4uLmxvYWRpbmdcIiB9KTtcclxuICAvLyBjb25zdCBmZXRjaFR4ID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgdHggPSBhd2FpdCBwcm9ncmFtLnJwYy5pbml0aWFsaXplKCk7XHJcbiAgLy8gICByZXR1cm4gdHg7XHJcbiAgLy8gfTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgZ2V0VHggPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IHR4ID0gYXdhaXQgZmV0Y2hUeCgpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcInR4XCIsIHR4KTtcclxuICAvLyAgICAgc2V0VHgoeyB0eDogdHggfSk7XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgZ2V0VHgoKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIC8vIE5ldyBuZXh0anMgc3dyIHNldHVwIGZvciBtb3JlIGFkdmFuY2VkIHJwYyBjYWxsc1xyXG4gIGNvbnN0IHsgdXNlciwgbXV0YXRlLCBsb2FkaW5nIH0gPSB1c2VVc2VyKCk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgfVxyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCI1ZW1cIiB9fT5cclxuICAgICAgICBbRVJST1JdOiB1c2VyIGlzIHJldHVyaW5nIHVuZGVmaW5lZFxyXG4gICAgICA8L3A+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgLy8gQmFzaWMgYWxlcnQgc2V0dXAgZm9yIGludGlhbGl6aW5nIGFuIGFuIGFjbmhvciBSUEMgYW5kIHJldHVybmluZyB0aGUgdHhcclxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtLThcIj5cclxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+XHJcbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgIC8vICAgICAgIDxzdmdcclxuICAgIC8vICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAvLyAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgIC8vICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAvLyAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgbXgtMiBzdHJva2UtY3VycmVudFwiXHJcbiAgICAvLyAgICAgICA+XHJcbiAgICAvLyAgICAgICAgIDxwYXRoXHJcbiAgICAvLyAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIC8vICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIC8vICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgLy8gICAgICAgICAgIGQ9XCJNMTMgMTZoLTF2LTRoLTFtMS00aC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxyXG4gICAgLy8gICAgICAgICA+PC9wYXRoPlxyXG4gICAgLy8gICAgICAgPC9zdmc+XHJcbiAgICAvLyAgICAgICA8bGFiZWw+e3R4LnR4fTwvbGFiZWw+XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyAgIDwvZGl2PlxyXG4gICAgLy8gPC9kaXY+XHJcblxyXG4gICAgLy8gSW50ZXJtZWRpYXRlIHNldHVwIGZvciBhZGRpbmcgZGF0YSB0byB5b3VyIGFjY291bnQgYW5kIHRoZW4gdXBkYXRpbmcgdGhlIGRhdGFcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyBtaW4taC1zY3JlZW4gYmctYmFzZS0yMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoZXJvLWNvbnRlbnQgbGc6ZmxleC1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC01eGwgZm9udC1ib2xkXCI+QW5jaG9yIEFjY291bnQgRGF0YTwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01XCI+e3VzZXIuZGF0YX08L3A+XHJcbiAgICAgICAgICA8V2FsbGV0RGlzY29ubmVjdEJ1dHRvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmbGV4LXNocmluay0wIHctZnVsbCBtYXgtdy1zbSBzaGFkb3ctMnhsIGJnLWJhc2UtMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPkRhdGE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJpZ19udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMjM0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIuZGF0YTogXCIsIHVzZXIuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmlnX251bWJlcjogYW55ID0gcmVmLmN1cnJlbnQgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YSA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJJbml0aWFsaXplIGFuIGFjY291bnQgd2l0aCB0aGUgZm9ybSB0byB0aGUgcmlnaHQgdG8gZ2V0IHN0YXJ0ZWQuIFRoZSBhY2NvdW50IGRhdGEgd2lsbCBzaG93IHVwIGluIHRoaXMgYm94IGFmdGVyd2FyZHMuXCJcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb2dyYW1fZmV0Y2hlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmFtX3JwY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImluaXRpYWxpemVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlnX251bWJlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG11dGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3JhbV9ycGNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlnX251bWJlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG11dGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU1dSIiwiYW5jaG9yIiwicmVxdWlyZSIsIndlYjMiLCJTeXN0ZW1Qcm9ncmFtIiwiS2V5cGFpciIsIkNvbm5lY3Rpb24iLCJQdWJsaWNLZXkiLCJMQU1QT1JUU19QRVJfU09MIiwicnBjVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JQQ19VUkwiLCJjb25uZWN0aW9uIiwia2V5IiwiSlNPTiIsInBhcnNlIiwia2V5cGFpciIsImZyb21TZWNyZXRLZXkiLCJVaW50OEFycmF5Iiwid2FsbGV0IiwiV2FsbGV0Iiwib3B0aW9uIiwiUHJvdmlkZXIiLCJkZWZhdWx0T3B0aW9ucyIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJteUFjY291bnQiLCJnZW5lcmF0ZSIsImlkbCIsInZlcnNpb24iLCJuYW1lIiwiaW5zdHJ1Y3Rpb25zIiwiYWNjb3VudHMiLCJpc011dCIsImlzU2lnbmVyIiwiYXJncyIsInR5cGUiLCJraW5kIiwiZmllbGRzIiwibWV0YWRhdGEiLCJhZGRyZXNzIiwicHJvZ3JhbUlkIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJwcm9ncmFtX2ZldGNoZXIiLCJfYXBpIiwibWV0aG9kIiwiYmlnX251bWJlciIsImNvbnNvbGUiLCJsb2ciLCJycGMiLCJpbml0aWFsaXplIiwicHVibGljS2V5IiwidXNlciIsInN5c3RlbVByb2dyYW0iLCJzaWduZXJzIiwiZSIsInVwZGF0ZSIsImFjY291bnQiLCJmZXRjaCIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJkYXRhIiwiY291bnQiLCJyZXF1ZXN0QWlyZHJvcCIsInNpZ25hdHVyZSIsInVzZVVzZXIiLCJtdXRhdGUiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VXYWxsZXQiLCJXYWxsZXRNdWx0aUJ1dHRvbiIsIldhbGxldERpc2Nvbm5lY3RCdXR0b24iLCJIb21lUGFnZSIsImNvbm5lY3RlZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsInJlZiIsImNvbG9yIiwibWFyZ2luIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9