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
                  lineNumber: 256,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                ref: ref,
                name: "big_number",
                type: "text",
                placeholder: "1234",
                className: "input input-bordered"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 254,
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
                lineNumber: 267,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDljNDZhMDFiOGFlOGQ5MWRiOWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxJQUFNRSxNQUFNLEdBQUdDLG1CQUFPLENBQUMscUZBQUQsQ0FBdEI7O0FBQ0Esa0JBQ0VELE1BQU0sQ0FBQ0UsSUFEVDtBQUFBLElBQVFDLGFBQVIsZUFBUUEsYUFBUjtBQUFBLElBQXVCQyxPQUF2QixlQUF1QkEsT0FBdkI7QUFBQSxJQUFnQ0MsVUFBaEMsZUFBZ0NBLFVBQWhDO0FBQUEsSUFBNENDLFNBQTVDLGVBQTRDQSxTQUE1QztBQUFBLElBQXVEQyxnQkFBdkQsZUFBdURBLGdCQUF2RDtBQUVBLElBQU1DLE1BQU0sR0FBR0MsdUJBQWY7QUFDQSxJQUFNRyxVQUFVLEdBQUcsSUFBSVAsVUFBSixDQUFlRyxNQUFmLEVBQXVCLFFBQXZCLENBQW5CO0FBQ0EsSUFBTUssR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDViw2T0FEVSxDQUFaO0FBR0EsSUFBTUMsT0FBTyxHQUFHWixPQUFPLENBQUNhLGFBQVIsQ0FBc0IsSUFBSUMsVUFBSixDQUFlTCxHQUFmLENBQXRCLENBQWhCO0FBQ0EsSUFBTU0sTUFBTSxHQUFHLElBQUluQixNQUFNLENBQUNvQixNQUFYLENBQWtCSixPQUFsQixDQUFmO0FBQ0EsSUFBTUssTUFBTSxHQUFHckIsTUFBTSxDQUFDc0IsUUFBUCxDQUFnQkMsY0FBaEIsRUFBZjtBQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJeEIsTUFBTSxDQUFDc0IsUUFBWCxDQUFvQlYsVUFBcEIsRUFBZ0NPLE1BQWhDLEVBQXdDRSxNQUF4QyxDQUFqQjtBQUNBckIsTUFBTSxDQUFDeUIsV0FBUCxDQUFtQkQsUUFBbkI7QUFFQSxJQUFNRSxTQUFTLEdBQUd0QixPQUFPLENBQUN1QixRQUFSLEVBQWxCO0FBRUEsSUFBTUMsR0FBRyxHQUFHO0FB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bkIsYUFEbUIsRUFFbkIsUUFGbUIsRUFHbkJHLFVBQVUsQ0FBQ3FDLEtBSFEsQ0FoQmxCOztBQUFBO0FBcUJIZiw0QkFBQUEsTUFBTTs7QUFyQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFQ7QUEwQkUsb0JBQUksRUFBQyxRQTFCUDtBQTJCRSxxQkFBSyxFQUFDLFFBM0JSO0FBNEJFLHlCQUFTLEVBQUM7QUE1Qlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJGO0FBaUZEOztJQXZJUUs7VUFTUUYscUVBaUNtQko7OztLQTFDM0JNO0FBeUlULCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG4vL2FuY2hvciBib2lsZXJwbGF0ZSBzZXR1cFxyXG5jb25zdCBhbmNob3IgPSByZXF1aXJlKFwiQHByb2plY3Qtc2VydW0vYW5jaG9yXCIpO1xyXG5jb25zdCB7IFN5c3RlbVByb2dyYW0sIEtleXBhaXIsIENvbm5lY3Rpb24sIFB1YmxpY0tleSwgTEFNUE9SVFNfUEVSX1NPTCB9ID1cclxuICBhbmNob3Iud2ViMztcclxuY29uc3QgcnBjVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUlBDX1VSTDtcclxuY29uc3QgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKHJwY1VybCwgXCJyZWNlbnRcIik7XHJcbmNvbnN0IGtleSA9IEpTT04ucGFyc2UoXHJcbiAgXCJbMTE1LDIyMCwyNDgsMTY0LDE3OSw3NiwyOCwxOTcsOTMsMTA3LDcwLDE1MCwxNjgsMjExLDI1LDE4NiwyMjUsNzksNjgsOTAsMTgyLDEzNSwyMTYsMTc3LDEyMywyMjksMTIsMTQ1LDE4MywxOTcsMTIzLDY5LDExMSwxMiwxNDEsMTAyLDExNywxNjAsMjMsMTUxLDE5MCw3NCwxNTAsMTc5LDE4NCwyMzEsNzAsMTE5LDEyMiwxMzIsMjE0LDE2Nyw1NSwyNTQsMTQzLDExMyw4OSw1Niw2NywxMTUsMjUsMjEsNDAsNjNdXCJcclxuKTtcclxuY29uc3Qga2V5cGFpciA9IEtleXBhaXIuZnJvbVNlY3JldEtleShuZXcgVWludDhBcnJheShrZXkpKTtcclxuY29uc3Qgd2FsbGV0ID0gbmV3IGFuY2hvci5XYWxsZXQoa2V5cGFpcik7XHJcbmNvbnN0IG9wdGlvbiA9IGFuY2hvci5Qcm92aWRlci5kZWZhdWx0T3B0aW9ucygpO1xyXG5jb25zdCBwcm92aWRlciA9IG5ldyBhbmNob3IuUHJvdmlkZXIoY29ubmVjdGlvbiwgd2FsbGV0LCBvcHRpb24pO1xyXG5hbmNob3Iuc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xyXG5cclxuY29uc3QgbXlBY2NvdW50ID0gS2V5cGFpci5nZW5lcmF0ZSgpO1xyXG5cclxuY29uc3QgaWRsID0ge1xyXG4gIHZlcnNpb246IFwiMC4wLjBcIixcclxuICBuYW1lOiBcIm5leHRfY291bnRlclwiLFxyXG4gIGluc3RydWN0aW9uczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImluaXRpYWxpemVcIixcclxuICAgICAgYWNjb3VudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIm15QWNjb3VudFwiLFxyXG4gICAgICAgICAgaXNNdXQ6IHRydWUsXHJcbiAgICAgICAgICBpc1NpZ25lcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgICAgICAgaXNNdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJzeXN0ZW1Qcm9ncmFtXCIsXHJcbiAgICAgICAgICBpc011dDogZmFsc2UsXHJcbiAgICAgICAgICBpc1NpZ25lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgYXJnczogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInVwZGF0ZVwiLFxyXG4gICAgICBhY2NvdW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwibXlBY2NvdW50XCIsXHJcbiAgICAgICAgICBpc011dDogdHJ1ZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBhcmdzOiBbXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBhY2NvdW50czogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk15QWNjb3VudFwiLFxyXG4gICAgICB0eXBlOiB7XHJcbiAgICAgICAga2luZDogXCJzdHJ1Y3RcIixcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJjb3VudFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInU2NFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIG1ldGFkYXRhOiB7XHJcbiAgICBhZGRyZXNzOiBcIjltVHZ0SG1NbURUa21YNmNVb1hRd3pwOTc3RUF6WWlkeW5BTmZQOU56UFVHXCIsXHJcbiAgfSxcclxufTtcclxuY29uc3QgcHJvZ3JhbUlkID0gbmV3IFB1YmxpY0tleShcIjltVHZ0SG1NbURUa21YNmNVb1hRd3pwOTc3RUF6WWlkeW5BTmZQOU56UFVHXCIpO1xyXG5jb25zdCBwcm9ncmFtID0gbmV3IGFuY2hvci5Qcm9ncmFtKGlkbCwgcHJvZ3JhbUlkKTtcclxuLy9lbmQgYW5jaG9yIGJvaWxlcnBsYXRlIHNldHVwXHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgX2FwaTogc3RyaW5nLFxyXG4gIG1ldGhvZDogc3RyaW5nLFxyXG4gIGJpZ19udW1iZXI6IHN0cmluZ1xyXG4pIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIGBmZXRjaGluZyBwcm9ncmFtIHdpdGggbWV0aG9kOiAke21ldGhvZH0gYW5kIGJpZ19udW1iZXI6ICR7YmlnX251bWJlcn1gXHJcbiAgKTtcclxuXHJcbiAgaWYgKG1ldGhvZCA9PSBcImluaXRpYWxpemVcIikge1xyXG4gICAgYXdhaXQgcHJvZ3JhbS5ycGNcclxuICAgICAgLmluaXRpYWxpemUoXHJcbiAgICAgICAgLypuZXcgYW5jaG9yLkJOKGJpZ19udW1iZXIpLCovIHtcclxuICAgICAgICAgIGFjY291bnRzOiB7XHJcbiAgICAgICAgICAgIG15QWNjb3VudDogbXlBY2NvdW50LnB1YmxpY0tleSxcclxuICAgICAgICAgICAgdXNlcjogcHJvdmlkZXIud2FsbGV0LnB1YmxpY0tleSxcclxuICAgICAgICAgICAgc3lzdGVtUHJvZ3JhbTogU3lzdGVtUHJvZ3JhbS5wcm9ncmFtSWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2lnbmVyczogW215QWNjb3VudF0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2UgaWYgKG1ldGhvZCA9PSBcInVwZGF0ZVwiKSB7XHJcbiAgICBhd2FpdCBwcm9ncmFtLnJwY1xyXG4gICAgICAudXBkYXRlKFxyXG4gICAgICAgIC8qbmV3IGFuY2hvci5CTihiaWdfbnVtYmVyKSwqLyB7XHJcbiAgICAgICAgICBhY2NvdW50czoge1xyXG4gICAgICAgICAgICBteUFjY291bnQ6IG15QWNjb3VudC5wdWJsaWNLZXksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFjY291bnQgPSBhd2FpdCBwcm9ncmFtLmFjY291bnQubXlBY2NvdW50XHJcbiAgICAuZmV0Y2gobXlBY2NvdW50LnB1YmxpY0tleSlcclxuICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIGNvbnNvbGUubG9nKFwiYWNjb3VudFwiLCBhY2NvdW50KTtcclxuICBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKG15QWNjb3VudC5wdWJsaWNLZXkpO1xyXG4gIGNvbnNvbGUubG9nKFwiYmFsYW5jZVwiLCBiYWxhbmNlIC8gTEFNUE9SVFNfUEVSX1NPTCk7XHJcbiAgY29uc29sZS5sb2coXCJwdWJrZXk6IFwiLCBteUFjY291bnQucHVibGljS2V5LnRvU3RyaW5nKCkpO1xyXG4gIGlmIChhY2NvdW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHsgZGF0YTogYWNjb3VudC5jb3VudC50b1N0cmluZygpIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGNvbm5lY3Rpb25cclxuICAgICAgLnJlcXVlc3RBaXJkcm9wKG15QWNjb3VudC5wdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICAgIC8vIGF3YWl0IGNvbm5lY3Rpb24uY29uZmlybVRyYW5zYWN0aW9uKHNpZ25hdHVyZSk7XHJcbiAgICAvLyBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKG15QWNjb3VudC5wdWJsaWNLZXkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJiYWxhbmNlXCIsIGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicHVia2V5OiBcIiwgbXlBY2NvdW50LnB1YmxpY0tleS50b1N0cmluZygpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYWlyZHJvcCBjb25maXJtZWRcIiwgc2lnbmF0dXJlKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFwiSW5pdGlhbGl6ZSBhbiBhY2NvdW50IHdpdGggdGhlIGZvcm0gdG8gdGhlIHJpZ2h0IHRvIGdldCBzdGFydGVkLiBUaGUgYWNjb3VudCBkYXRhIHdpbGwgc2hvdyB1cCBpbiB0aGlzIGJveCBhZnRlcndhcmRzLlwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVVzZXIobWV0aG9kPzogc3RyaW5nLCBiaWdfbnVtYmVyPzogc3RyaW5nKSB7XHJcbiAgY29uc29sZS5sb2cobWV0aG9kLCBiaWdfbnVtYmVyKTtcclxuICBtZXRob2QgPSBtZXRob2QgfHwgXCJObyBBY2NvdW50XCI7XHJcbiAgYmlnX251bWJlciA9IGJpZ19udW1iZXIgfHwgXCIwMDAwXCI7XHJcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBbXCJwcm9ncmFtX3JwY1wiLCBtZXRob2QsIGJpZ19udW1iZXJdLFxyXG4gICAgcHJvZ3JhbV9mZXRjaGVyXHJcbiAgKTtcclxuICBjb25zdCBsb2FkaW5nID0gIWRhdGEgJiYgIWVycm9yO1xyXG4gIGNvbnNvbGUubG9nKFwiZGF0YSBpbiB1c2VVc2VyOiBcIiwgZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICB1c2VyOiBkYXRhLFxyXG4gICAgbXV0YXRlLFxyXG4gIH07XHJcbn1cclxuLy9waGFudG9tIHdhbGxldFxyXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG4gIFdhbGxldERpc2Nvbm5lY3RCdXR0b24sXHJcbn0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIC8vIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAvLyAgIGNvbnN0IHdhbGxldHMgPSB1c2VNZW1vKFxyXG4gIC8vICAgICAoKSA9PiBbZ2V0UGhhbnRvbVdhbGxldCgpXSxcclxuICAvLyAgICAgW1wiaHR0cDovLzEyNy4wLjAuMTo4ODk5XCJdXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gcGhhbnRvbSB3YWxsZXQgZml4ZWRcclxuICBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKTtcclxuXHJcbiAgaWYgKCF3YWxsZXQuY29ubmVjdGVkKSB7XHJcbiAgICAvKiBJZiB0aGUgdXNlcidzIHdhbGxldCBpcyBub3QgY29ubmVjdGVkLCBkaXNwbGF5IGNvbm5lY3Qgd2FsbGV0IGJ1dHRvbi4gKi9cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIG1hcmdpblRvcDogXCIxMDBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICAvLyBiYXNpYyBhbmNob3IgcnBjIGluaXQgY2FsbCBhbmQgcmV0dXJuIG9uIHBhZ2UgbG9hZFxyXG4gIC8vIGNvbnN0IFt0eCwgc2V0VHhdID0gdXNlU3RhdGUoeyB0eDogXCIuLi5sb2FkaW5nXCIgfSk7XHJcbiAgLy8gY29uc3QgZmV0Y2hUeCA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgIGNvbnN0IHR4ID0gYXdhaXQgcHJvZ3JhbS5ycGMuaW5pdGlhbGl6ZSgpO1xyXG4gIC8vICAgcmV0dXJuIHR4O1xyXG4gIC8vIH07XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGdldFR4ID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBjb25zdCB0eCA9IGF3YWl0IGZldGNoVHgoKTtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJ0eFwiLCB0eCk7XHJcbiAgLy8gICAgIHNldFR4KHsgdHg6IHR4IH0pO1xyXG4gIC8vICAgfTtcclxuICAvLyAgIGdldFR4KCk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICAvLyBOZXcgbmV4dGpzIHN3ciBzZXR1cCBmb3IgbW9yZSBhZHZhbmNlZCBycGMgY2FsbHNcclxuICBjb25zdCB7IHVzZXIsIG11dGF0ZSwgbG9hZGluZyB9ID0gdXNlVXNlcigpO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiNWVtXCIgfX0+XHJcbiAgICAgICAgW0VSUk9SXTogdXNlciBpcyByZXR1cmluZyB1bmRlZmluZWRcclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIEJhc2ljIGFsZXJ0IHNldHVwIGZvciBpbnRpYWxpemluZyBhbiBhbiBhY25ob3IgUlBDIGFuZCByZXR1cm5pbmcgdGhlIHR4XHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbS04XCI+XHJcbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAvLyAgICAgICA8c3ZnXHJcbiAgICAvLyAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgLy8gICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAvLyAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgLy8gICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IG14LTIgc3Ryb2tlLWN1cnJlbnRcIlxyXG4gICAgLy8gICAgICAgPlxyXG4gICAgLy8gICAgICAgICA8cGF0aFxyXG4gICAgLy8gICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAvLyAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAvLyAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgIC8vICAgICAgICAgICBkPVwiTTEzIDE2aC0xdi00aC0xbTEtNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcclxuICAgIC8vICAgICAgICAgPjwvcGF0aD5cclxuICAgIC8vICAgICAgIDwvc3ZnPlxyXG4gICAgLy8gICAgICAgPGxhYmVsPnt0eC50eH08L2xhYmVsPlxyXG4gICAgLy8gICAgIDwvZGl2PlxyXG4gICAgLy8gICA8L2Rpdj5cclxuICAgIC8vIDwvZGl2PlxyXG5cclxuICAgIC8vIEludGVybWVkaWF0ZSBzZXR1cCBmb3IgYWRkaW5nIGRhdGEgdG8geW91ciBhY2NvdW50IGFuZCB0aGVuIHVwZGF0aW5nIHRoZSBkYXRhXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8gbWluLWgtc2NyZWVuIGJnLWJhc2UtMjAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaGVyby1jb250ZW50IGxnOmZsZXgtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IHRleHQtNXhsIGZvbnQtYm9sZFwiPkFuY2hvciBBY2NvdW50IERhdGE8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNVwiPnt1c2VyLmRhdGF9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmbGV4LXNocmluay0wIHctZnVsbCBtYXgtdy1zbSBzaGFkb3ctMnhsIGJnLWJhc2UtMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPkRhdGE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJpZ19udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMjM0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIuZGF0YTogXCIsIHVzZXIuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmlnX251bWJlcjogYW55ID0gcmVmLmN1cnJlbnQgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YSA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJJbml0aWFsaXplIGFuIGFjY291bnQgd2l0aCB0aGUgZm9ybSB0byB0aGUgcmlnaHQgdG8gZ2V0IHN0YXJ0ZWQuIFRoZSBhY2NvdW50IGRhdGEgd2lsbCBzaG93IHVwIGluIHRoaXMgYm94IGFmdGVyd2FyZHMuXCJcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb2dyYW1fZmV0Y2hlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmFtX3JwY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImluaXRpYWxpemVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlnX251bWJlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG11dGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3JhbV9ycGNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlnX251bWJlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG11dGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU1dSIiwiYW5jaG9yIiwicmVxdWlyZSIsIndlYjMiLCJTeXN0ZW1Qcm9ncmFtIiwiS2V5cGFpciIsIkNvbm5lY3Rpb24iLCJQdWJsaWNLZXkiLCJMQU1QT1JUU19QRVJfU09MIiwicnBjVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JQQ19VUkwiLCJjb25uZWN0aW9uIiwia2V5IiwiSlNPTiIsInBhcnNlIiwia2V5cGFpciIsImZyb21TZWNyZXRLZXkiLCJVaW50OEFycmF5Iiwid2FsbGV0IiwiV2FsbGV0Iiwib3B0aW9uIiwiUHJvdmlkZXIiLCJkZWZhdWx0T3B0aW9ucyIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJteUFjY291bnQiLCJnZW5lcmF0ZSIsImlkbCIsInZlcnNpb24iLCJuYW1lIiwiaW5zdHJ1Y3Rpb25zIiwiYWNjb3VudHMiLCJpc011dCIsImlzU2lnbmVyIiwiYXJncyIsInR5cGUiLCJraW5kIiwiZmllbGRzIiwibWV0YWRhdGEiLCJhZGRyZXNzIiwicHJvZ3JhbUlkIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJwcm9ncmFtX2ZldGNoZXIiLCJfYXBpIiwibWV0aG9kIiwiYmlnX251bWJlciIsImNvbnNvbGUiLCJsb2ciLCJycGMiLCJpbml0aWFsaXplIiwicHVibGljS2V5IiwidXNlciIsInN5c3RlbVByb2dyYW0iLCJzaWduZXJzIiwiZSIsInVwZGF0ZSIsImFjY291bnQiLCJmZXRjaCIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJkYXRhIiwiY291bnQiLCJyZXF1ZXN0QWlyZHJvcCIsInNpZ25hdHVyZSIsInVzZVVzZXIiLCJtdXRhdGUiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VXYWxsZXQiLCJXYWxsZXRNdWx0aUJ1dHRvbiIsIkhvbWVQYWdlIiwiY29ubmVjdGVkIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwicmVmIiwiY29sb3IiLCJtYXJnaW4iLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=