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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
            children: "Disconnect Wallet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletDisconnectButton, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
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
                  lineNumber: 258,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                ref: ref,
                name: "big_number",
                type: "text",
                placeholder: "1234",
                className: "input input-bordered"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 256,
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
                lineNumber: 269,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2ZmNjYxZTU0MzcwMjIwM2ZjMjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxJQUFNRSxNQUFNLEdBQUdDLG1CQUFPLENBQUMscUZBQUQsQ0FBdEI7O0FBQ0Esa0JBQ0VELE1BQU0sQ0FBQ0UsSUFEVDtBQUFBLElBQVFDLGFBQVIsZUFBUUEsYUFBUjtBQUFBLElBQXVCQyxPQUF2QixlQUF1QkEsT0FBdkI7QUFBQSxJQUFnQ0MsVUFBaEMsZUFBZ0NBLFVBQWhDO0FBQUEsSUFBNENDLFNBQTVDLGVBQTRDQSxTQUE1QztBQUFBLElBQXVEQyxnQkFBdkQsZUFBdURBLGdCQUF2RDtBQUVBLElBQU1DLE1BQU0sR0FBR0MsdUJBQWY7QUFDQSxJQUFNRyxVQUFVLEdBQUcsSUFBSVAsVUFBSixDQUFlRyxNQUFmLEVBQXVCLFFBQXZCLENBQW5CO0FBQ0EsSUFBTUssR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDViw2T0FEVSxDQUFaO0FBR0EsSUFBTUMsT0FBTyxHQUFHWixPQUFPLENBQUNhLGFBQVIsQ0FBc0IsSUFBSUMsVUFBSixDQUFlTCxHQUFmLENBQXRCLENBQWhCO0FBQ0EsSUFBTU0sTUFBTSxHQUFHLElBQUluQixNQUFNLENBQUNvQixNQUFYLENBQWtCSixPQUFsQixDQUFmO0FBQ0EsSUFBTUssTUFBTSxHQUFHckIsTUFBTSxDQUFDc0IsUUFBUCxDQUFnQkMsY0FBaEIsRUFBZjtBQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJeEIsTUFBTSxDQUFDc0IsUUFBWCxDQUFvQlYsVUFBcEIsRUFBZ0NPLE1BQWhDLEVBQXdDRSxNQUF4QyxDQUFqQjtBQUNBckIsTUFBTSxDQUFDeUIsV0FBUCxDQUFtQkQsUUFBbkI7QUFFQSxJQUFNRSxTQUFTLEdBQUd0QixPQUFPLENBQUN1QixRQUFSLEVBQWxCO0FBRUEsSUFBTUMsR0FBRyxHQUFHO0FB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LENBQUNzQyxLQUhRLENBVGxCOztBQUFBO0FBY0hoQiw0QkFBQUEsTUFBTTtBQWRIO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1DQWdCR3pCLGVBQWUsQ0FDbkIsYUFEbUIsRUFFbkIsUUFGbUIsRUFHbkJHLFVBQVUsQ0FBQ3NDLEtBSFEsQ0FoQmxCOztBQUFBO0FBcUJIaEIsNEJBQUFBLE1BQU07O0FBckJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURUO0FBMEJFLG9CQUFJLEVBQUMsUUExQlA7QUEyQkUscUJBQUssRUFBQyxRQTNCUjtBQTRCRSx5QkFBUyxFQUFDO0FBNUJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCRjtBQW1GRDs7SUF6SVFNO1VBU1FILHFFQWlDbUJKOzs7S0ExQzNCTztBQTJJVCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuLy9hbmNob3IgYm9pbGVycGxhdGUgc2V0dXBcclxuY29uc3QgYW5jaG9yID0gcmVxdWlyZShcIkBwcm9qZWN0LXNlcnVtL2FuY2hvclwiKTtcclxuY29uc3QgeyBTeXN0ZW1Qcm9ncmFtLCBLZXlwYWlyLCBDb25uZWN0aW9uLCBQdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wgfSA9XHJcbiAgYW5jaG9yLndlYjM7XHJcbmNvbnN0IHJwY1VybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JQQ19VUkw7XHJcbmNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihycGNVcmwsIFwicmVjZW50XCIpO1xyXG5jb25zdCBrZXkgPSBKU09OLnBhcnNlKFxyXG4gIFwiWzExNSwyMjAsMjQ4LDE2NCwxNzksNzYsMjgsMTk3LDkzLDEwNyw3MCwxNTAsMTY4LDIxMSwyNSwxODYsMjI1LDc5LDY4LDkwLDE4MiwxMzUsMjE2LDE3NywxMjMsMjI5LDEyLDE0NSwxODMsMTk3LDEyMyw2OSwxMTEsMTIsMTQxLDEwMiwxMTcsMTYwLDIzLDE1MSwxOTAsNzQsMTUwLDE3OSwxODQsMjMxLDcwLDExOSwxMjIsMTMyLDIxNCwxNjcsNTUsMjU0LDE0MywxMTMsODksNTYsNjcsMTE1LDI1LDIxLDQwLDYzXVwiXHJcbik7XHJcbmNvbnN0IGtleXBhaXIgPSBLZXlwYWlyLmZyb21TZWNyZXRLZXkobmV3IFVpbnQ4QXJyYXkoa2V5KSk7XHJcbmNvbnN0IHdhbGxldCA9IG5ldyBhbmNob3IuV2FsbGV0KGtleXBhaXIpO1xyXG5jb25zdCBvcHRpb24gPSBhbmNob3IuUHJvdmlkZXIuZGVmYXVsdE9wdGlvbnMoKTtcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgYW5jaG9yLlByb3ZpZGVyKGNvbm5lY3Rpb24sIHdhbGxldCwgb3B0aW9uKTtcclxuYW5jaG9yLnNldFByb3ZpZGVyKHByb3ZpZGVyKTtcclxuXHJcbmNvbnN0IG15QWNjb3VudCA9IEtleXBhaXIuZ2VuZXJhdGUoKTtcclxuXHJcbmNvbnN0IGlkbCA9IHtcclxuICB2ZXJzaW9uOiBcIjAuMC4wXCIsXHJcbiAgbmFtZTogXCJuZXh0X2NvdW50ZXJcIixcclxuICBpbnN0cnVjdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJpbml0aWFsaXplXCIsXHJcbiAgICAgIGFjY291bnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJteUFjY291bnRcIixcclxuICAgICAgICAgIGlzTXV0OiB0cnVlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInVzZXJcIixcclxuICAgICAgICAgIGlzTXV0OiBmYWxzZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwic3lzdGVtUHJvZ3JhbVwiLFxyXG4gICAgICAgICAgaXNNdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGFyZ3M6IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJ1cGRhdGVcIixcclxuICAgICAgYWNjb3VudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIm15QWNjb3VudFwiLFxyXG4gICAgICAgICAgaXNNdXQ6IHRydWUsXHJcbiAgICAgICAgICBpc1NpZ25lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgYXJnczogW10sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgYWNjb3VudHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNeUFjY291bnRcIixcclxuICAgICAgdHlwZToge1xyXG4gICAgICAgIGtpbmQ6IFwic3RydWN0XCIsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiY291bnRcIixcclxuICAgICAgICAgICAgdHlwZTogXCJ1NjRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBtZXRhZGF0YToge1xyXG4gICAgYWRkcmVzczogXCI5bVR2dEhtTW1EVGttWDZjVW9YUXd6cDk3N0VBellpZHluQU5mUDlOelBVR1wiLFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IHByb2dyYW1JZCA9IG5ldyBQdWJsaWNLZXkoXCI5bVR2dEhtTW1EVGttWDZjVW9YUXd6cDk3N0VBellpZHluQU5mUDlOelBVR1wiKTtcclxuY29uc3QgcHJvZ3JhbSA9IG5ldyBhbmNob3IuUHJvZ3JhbShpZGwsIHByb2dyYW1JZCk7XHJcbi8vZW5kIGFuY2hvciBib2lsZXJwbGF0ZSBzZXR1cFxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJvZ3JhbV9mZXRjaGVyKFxyXG4gIF9hcGk6IHN0cmluZyxcclxuICBtZXRob2Q6IHN0cmluZyxcclxuICBiaWdfbnVtYmVyOiBzdHJpbmdcclxuKSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBgZmV0Y2hpbmcgcHJvZ3JhbSB3aXRoIG1ldGhvZDogJHttZXRob2R9IGFuZCBiaWdfbnVtYmVyOiAke2JpZ19udW1iZXJ9YFxyXG4gICk7XHJcblxyXG4gIGlmIChtZXRob2QgPT0gXCJpbml0aWFsaXplXCIpIHtcclxuICAgIGF3YWl0IHByb2dyYW0ucnBjXHJcbiAgICAgIC5pbml0aWFsaXplKFxyXG4gICAgICAgIC8qbmV3IGFuY2hvci5CTihiaWdfbnVtYmVyKSwqLyB7XHJcbiAgICAgICAgICBhY2NvdW50czoge1xyXG4gICAgICAgICAgICBteUFjY291bnQ6IG15QWNjb3VudC5wdWJsaWNLZXksXHJcbiAgICAgICAgICAgIHVzZXI6IHByb3ZpZGVyLndhbGxldC5wdWJsaWNLZXksXHJcbiAgICAgICAgICAgIHN5c3RlbVByb2dyYW06IFN5c3RlbVByb2dyYW0ucHJvZ3JhbUlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNpZ25lcnM6IFtteUFjY291bnRdLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIGlmIChtZXRob2QgPT0gXCJ1cGRhdGVcIikge1xyXG4gICAgYXdhaXQgcHJvZ3JhbS5ycGNcclxuICAgICAgLnVwZGF0ZShcclxuICAgICAgICAvKm5ldyBhbmNob3IuQk4oYmlnX251bWJlciksKi8ge1xyXG4gICAgICAgICAgYWNjb3VudHM6IHtcclxuICAgICAgICAgICAgbXlBY2NvdW50OiBteUFjY291bnQucHVibGljS2V5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcHJvZ3JhbS5hY2NvdW50Lm15QWNjb3VudFxyXG4gICAgLmZldGNoKG15QWNjb3VudC5wdWJsaWNLZXkpXHJcbiAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuICBjb25zb2xlLmxvZyhcImFjY291bnRcIiwgYWNjb3VudCk7XHJcbiAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShteUFjY291bnQucHVibGljS2V5KTtcclxuICBjb25zb2xlLmxvZyhcImJhbGFuY2VcIiwgYmFsYW5jZSAvIExBTVBPUlRTX1BFUl9TT0wpO1xyXG4gIGNvbnNvbGUubG9nKFwicHVia2V5OiBcIiwgbXlBY2NvdW50LnB1YmxpY0tleS50b1N0cmluZygpKTtcclxuICBpZiAoYWNjb3VudCAhPSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB7IGRhdGE6IGFjY291bnQuY291bnQudG9TdHJpbmcoKSB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBjb25uZWN0aW9uXHJcbiAgICAgIC5yZXF1ZXN0QWlyZHJvcChteUFjY291bnQucHVibGljS2V5LCBMQU1QT1JUU19QRVJfU09MKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgICAvLyBhd2FpdCBjb25uZWN0aW9uLmNvbmZpcm1UcmFuc2FjdGlvbihzaWduYXR1cmUpO1xyXG4gICAgLy8gY29uc3QgYmFsYW5jZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShteUFjY291bnQucHVibGljS2V5KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYmFsYW5jZVwiLCBiYWxhbmNlIC8gTEFNUE9SVFNfUEVSX1NPTCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInB1YmtleTogXCIsIG15QWNjb3VudC5wdWJsaWNLZXkudG9TdHJpbmcoKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImFpcmRyb3AgY29uZmlybWVkXCIsIHNpZ25hdHVyZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBcIkluaXRpYWxpemUgYW4gYWNjb3VudCB3aXRoIHRoZSBmb3JtIHRvIHRoZSByaWdodCB0byBnZXQgc3RhcnRlZC4gVGhlIGFjY291bnQgZGF0YSB3aWxsIHNob3cgdXAgaW4gdGhpcyBib3ggYWZ0ZXJ3YXJkcy5cIixcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VVc2VyKG1ldGhvZD86IHN0cmluZywgYmlnX251bWJlcj86IHN0cmluZykge1xyXG4gIGNvbnNvbGUubG9nKG1ldGhvZCwgYmlnX251bWJlcik7XHJcbiAgbWV0aG9kID0gbWV0aG9kIHx8IFwiTm8gQWNjb3VudFwiO1xyXG4gIGJpZ19udW1iZXIgPSBiaWdfbnVtYmVyIHx8IFwiMDAwMFwiO1xyXG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgW1wicHJvZ3JhbV9ycGNcIiwgbWV0aG9kLCBiaWdfbnVtYmVyXSxcclxuICAgIHByb2dyYW1fZmV0Y2hlclxyXG4gICk7XHJcbiAgY29uc3QgbG9hZGluZyA9ICFkYXRhICYmICFlcnJvcjtcclxuICBjb25zb2xlLmxvZyhcImRhdGEgaW4gdXNlVXNlcjogXCIsIGRhdGEpO1xyXG4gIHJldHVybiB7XHJcbiAgICBsb2FkaW5nLFxyXG4gICAgdXNlcjogZGF0YSxcclxuICAgIG11dGF0ZSxcclxuICB9O1xyXG59XHJcbi8vcGhhbnRvbSB3YWxsZXRcclxuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBXYWxsZXRNdWx0aUJ1dHRvbixcclxuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxyXG59IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpXCI7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAvLyBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgLy8gICBjb25zdCB3YWxsZXRzID0gdXNlTWVtbyhcclxuICAvLyAgICAgKCkgPT4gW2dldFBoYW50b21XYWxsZXQoKV0sXHJcbiAgLy8gICAgIFtcImh0dHA6Ly8xMjcuMC4wLjE6ODg5OVwiXVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHBoYW50b20gd2FsbGV0IGZpeGVkXHJcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XHJcblxyXG4gIGlmICghd2FsbGV0LmNvbm5lY3RlZCkge1xyXG4gICAgLyogSWYgdGhlIHVzZXIncyB3YWxsZXQgaXMgbm90IGNvbm5lY3RlZCwgZGlzcGxheSBjb25uZWN0IHdhbGxldCBidXR0b24uICovXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTAwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgLy8gYmFzaWMgYW5jaG9yIHJwYyBpbml0IGNhbGwgYW5kIHJldHVybiBvbiBwYWdlIGxvYWRcclxuICAvLyBjb25zdCBbdHgsIHNldFR4XSA9IHVzZVN0YXRlKHsgdHg6IFwiLi4ubG9hZGluZ1wiIH0pO1xyXG4gIC8vIGNvbnN0IGZldGNoVHggPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICBjb25zdCB0eCA9IGF3YWl0IHByb2dyYW0ucnBjLmluaXRpYWxpemUoKTtcclxuICAvLyAgIHJldHVybiB0eDtcclxuICAvLyB9O1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBnZXRUeCA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgY29uc3QgdHggPSBhd2FpdCBmZXRjaFR4KCk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwidHhcIiwgdHgpO1xyXG4gIC8vICAgICBzZXRUeCh7IHR4OiB0eCB9KTtcclxuICAvLyAgIH07XHJcbiAgLy8gICBnZXRUeCgpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy8gTmV3IG5leHRqcyBzd3Igc2V0dXAgZm9yIG1vcmUgYWR2YW5jZWQgcnBjIGNhbGxzXHJcbiAgY29uc3QgeyB1c2VyLCBtdXRhdGUsIGxvYWRpbmcgfSA9IHVzZVVzZXIoKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgbWFyZ2luOiBcIjVlbVwiIH19PlxyXG4gICAgICAgIFtFUlJPUl06IHVzZXIgaXMgcmV0dXJpbmcgdW5kZWZpbmVkXHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAvLyBCYXNpYyBhbGVydCBzZXR1cCBmb3IgaW50aWFsaXppbmcgYW4gYW4gYWNuaG9yIFJQQyBhbmQgcmV0dXJuaW5nIHRoZSB0eFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG0tOFwiPlxyXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj5cclxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgLy8gICAgICAgPHN2Z1xyXG4gICAgLy8gICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIC8vICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgLy8gICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIC8vICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiBteC0yIHN0cm9rZS1jdXJyZW50XCJcclxuICAgIC8vICAgICAgID5cclxuICAgIC8vICAgICAgICAgPHBhdGhcclxuICAgIC8vICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgLy8gICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgLy8gICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAvLyAgICAgICAgICAgZD1cIk0xMyAxNmgtMXYtNGgtMW0xLTRoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiXHJcbiAgICAvLyAgICAgICAgID48L3BhdGg+XHJcbiAgICAvLyAgICAgICA8L3N2Zz5cclxuICAgIC8vICAgICAgIDxsYWJlbD57dHgudHh9PC9sYWJlbD5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgPC9kaXY+XHJcbiAgICAvLyA8L2Rpdj5cclxuXHJcbiAgICAvLyBJbnRlcm1lZGlhdGUgc2V0dXAgZm9yIGFkZGluZyBkYXRhIHRvIHlvdXIgYWNjb3VudCBhbmQgdGhlbiB1cGRhdGluZyB0aGUgZGF0YVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIG1pbi1oLXNjcmVlbiBiZy1iYXNlLTIwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIGp1c3RpZnktY2VudGVyIGhlcm8tY29udGVudCBsZzpmbGV4LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNSB0ZXh0LTV4bCBmb250LWJvbGRcIj5BbmNob3IgQWNjb3VudCBEYXRhPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTVcIj57dXNlci5kYXRhfTwvcD5cclxuICAgICAgICAgIDxoMj5EaXNjb25uZWN0IFdhbGxldDwvaDI+XHJcbiAgICAgICAgICA8V2FsbGV0RGlzY29ubmVjdEJ1dHRvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmbGV4LXNocmluay0wIHctZnVsbCBtYXgtdy1zbSBzaGFkb3ctMnhsIGJnLWJhc2UtMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPkRhdGE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJpZ19udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMjM0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIuZGF0YTogXCIsIHVzZXIuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmlnX251bWJlcjogYW55ID0gcmVmLmN1cnJlbnQgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YSA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJJbml0aWFsaXplIGFuIGFjY291bnQgd2l0aCB0aGUgZm9ybSB0byB0aGUgcmlnaHQgdG8gZ2V0IHN0YXJ0ZWQuIFRoZSBhY2NvdW50IGRhdGEgd2lsbCBzaG93IHVwIGluIHRoaXMgYm94IGFmdGVyd2FyZHMuXCJcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb2dyYW1fZmV0Y2hlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmFtX3JwY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImluaXRpYWxpemVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlnX251bWJlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG11dGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3JhbV9ycGNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlnX251bWJlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG11dGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU1dSIiwiYW5jaG9yIiwicmVxdWlyZSIsIndlYjMiLCJTeXN0ZW1Qcm9ncmFtIiwiS2V5cGFpciIsIkNvbm5lY3Rpb24iLCJQdWJsaWNLZXkiLCJMQU1QT1JUU19QRVJfU09MIiwicnBjVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JQQ19VUkwiLCJjb25uZWN0aW9uIiwia2V5IiwiSlNPTiIsInBhcnNlIiwia2V5cGFpciIsImZyb21TZWNyZXRLZXkiLCJVaW50OEFycmF5Iiwid2FsbGV0IiwiV2FsbGV0Iiwib3B0aW9uIiwiUHJvdmlkZXIiLCJkZWZhdWx0T3B0aW9ucyIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJteUFjY291bnQiLCJnZW5lcmF0ZSIsImlkbCIsInZlcnNpb24iLCJuYW1lIiwiaW5zdHJ1Y3Rpb25zIiwiYWNjb3VudHMiLCJpc011dCIsImlzU2lnbmVyIiwiYXJncyIsInR5cGUiLCJraW5kIiwiZmllbGRzIiwibWV0YWRhdGEiLCJhZGRyZXNzIiwicHJvZ3JhbUlkIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJwcm9ncmFtX2ZldGNoZXIiLCJfYXBpIiwibWV0aG9kIiwiYmlnX251bWJlciIsImNvbnNvbGUiLCJsb2ciLCJycGMiLCJpbml0aWFsaXplIiwicHVibGljS2V5IiwidXNlciIsInN5c3RlbVByb2dyYW0iLCJzaWduZXJzIiwiZSIsInVwZGF0ZSIsImFjY291bnQiLCJmZXRjaCIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJkYXRhIiwiY291bnQiLCJyZXF1ZXN0QWlyZHJvcCIsInNpZ25hdHVyZSIsInVzZVVzZXIiLCJtdXRhdGUiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VXYWxsZXQiLCJXYWxsZXRNdWx0aUJ1dHRvbiIsIldhbGxldERpc2Nvbm5lY3RCdXR0b24iLCJIb21lUGFnZSIsImNvbm5lY3RlZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsInJlZiIsImNvbG9yIiwibWFyZ2luIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9