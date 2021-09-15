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
      lineNumber: 187,
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
      lineNumber: 191,
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
            lineNumber: 223,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "mb-5",
            children: user.data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
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
                  lineNumber: 230,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                ref: ref,
                name: "big_number",
                type: "text",
                placeholder: "1234",
                className: "input input-bordered"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 228,
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
                lineNumber: 241,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 220,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjJlMTU0MTkxZmEyOWQxMTFiYTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOzs7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHFGQUFELENBQXRCOztBQUNBLGtCQUNFRCxNQUFNLENBQUNFLElBRFQ7QUFBQSxJQUFRQyxhQUFSLGVBQVFBLGFBQVI7QUFBQSxJQUF1QkMsT0FBdkIsZUFBdUJBLE9BQXZCO0FBQUEsSUFBZ0NDLFVBQWhDLGVBQWdDQSxVQUFoQztBQUFBLElBQTRDQyxTQUE1QyxlQUE0Q0EsU0FBNUM7QUFBQSxJQUF1REMsZ0JBQXZELGVBQXVEQSxnQkFBdkQ7QUFFQSxJQUFNQyxNQUFNLEdBQUdDLHVCQUFmO0FBQ0EsSUFBTUcsVUFBVSxHQUFHLElBQUlQLFVBQUosQ0FBZUcsTUFBZixFQUF1QixRQUF2QixDQUFuQjtBQUNBLElBQU1LLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU8sZ0JBQTNCLENBQVgsQ0FBWjtBQUNBLElBQU1DLE9BQU8sR0FBR2QsT0FBTyxDQUFDZSxhQUFSLENBQXNCLElBQUlDLFVBQUosQ0FBZVAsR0FBZixDQUF0QixDQUFoQjtBQUNBLElBQU1RLE1BQU0sR0FBRyxJQUFJckIsTUFBTSxDQUFDc0IsTUFBWCxDQUFrQkosT0FBbEIsQ0FBZjtBQUNBLElBQU1LLE1BQU0sR0FBR3ZCLE1BQU0sQ0FBQ3dCLFFBQVAsQ0FBZ0JDLGNBQWhCLEVBQWY7QUFDQSxJQUFNQyxRQUFRLEdBQUcsSUFBSTFCLE1BQU0sQ0FBQ3dCLFFBQVgsQ0FBb0JaLFVBQXBCLEVBQWdDUyxNQUFoQyxFQUF3Q0UsTUFBeEMsQ0FBakI7QUFDQXZCLE1BQU0sQ0FBQzJCLFdBQVAsQ0FBbUJELFFBQW5CO0FBRUEsSUFBTUUsU0FBUyxHQUFHeEIsT0FBTyxDQUFDeUIsUUFBUixFQUFsQjtBQUVBLElBQU1DLEdBQUcsR0FBRztBQUNWQyxFQUFBQSxPQUFPLEVBQUUsT0FEQztBQUVWQyxFQUFBQSxJQUFJLEVBQUUsY0FGSTtBQUdWQyxFQUFBQSxZQUFZLEVBQUUsQ0FDWjtBQUNFRCxJQUFBQSxJQUFJLEVBQUUsWUFEUjtBQUVFRSxJQUFBQSxRQUFRLEVBQUUsQ0FDUjtBQUNFRixNQUFBQSxJQUFJLEVBQUUsV0FEUjtBQUVFRyxNQUFBQSxLQUFLLEVBQUUsSUFGVDtBQUdFQyxNQUFBQSxRQUFRLEVBQUU7QUFIWixLQURRLEVBTVI7QUFDRUosTUFBQUEsSUFBSSxFQUFFLE1BRFI7QUFFRUcsTUFBQUEsS0FBSyxFQUFFLEtBRlQ7QUFHRUMsTUFBQUEsUUFBUSxFQUFFO0FBSFosS0FOUSxFQVdSO0FBQ0VKLE1BQUFBLElBQUksRUFBRSxlQURSO0FBRUVHLE1BQUFBLEtBQUssRUFBRSxLQUZUO0FBR0VDLE1BQUFBLFFBQVEsRUFBRTtBQUhaLEtBWFEsQ0FGWjtBQW1CRUMsSUFBQUEsSUFBSSxFQUFFLENBQ0o7QUFDRUwsTUFBQUEsSUFBSSxFQUFFLE1BRFI7QUFFRU0sTUFBQUEsSUFBSSxFQUFFO0FBRlIsS0FESTtBQW5CUixHQURZLEVBMkJaO0FBQ0VOLElBQUFBLElBQUksRUFBRSxRQURSO0FBRUVFLElBQUFBLFFBQVEsRUFBRSxDQUNSO0FBQ0VGLE1BQUFBLElBQUksRUFBRSxXQURSO0FBRUVHLE1BQUFBLEtBQUssRUFBRSxJQUZUO0FBR0VDLE1BQUFBLFFBQVEsRUFBRTtBQUhaLEtBRFEsQ0FGWjtBQVNFQyxJQUFBQSxJQUFJLEVBQUUsQ0FDSjtBQUNFTCxNQUFBQSxJQUFJLEVBQUUsTUFEUjtBQUVFTSxNQUFBQSxJQUFJLEVBQUU7QUFGUixLQURJO0FBVFIsR0EzQlksQ0FISjtBQStDVkosRUFBQUEsUUFBUSxFQUFFLENBQ1I7QUFDRUYsSUFBQUEsSUFBSSxFQUFFLFdBRFI7QUFFRU0sSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLElBQUksRUFBRSxRQURGO0FBRUpDLE1BQUFBLE1BQU0sRUFBRSxDQUNOO0FBQ0VSLFFBQUFBLElBQUksRUFBRSxNQURSO0FBRUVNLFFBQUFBLElBQUksRUFBRTtBQUZSLE9BRE07QUFGSjtBQUZSLEdBRFEsQ0EvQ0E7QUE2RFZHLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUU7QUFERDtBQTdEQSxDQUFaO0FBaUVBLElBQU1DLFNBQVMsR0FBRyxJQUFJckMsU0FBSixDQUFjLDhDQUFkLENBQWxCO0FBQ0EsSUFBTXNDLE9BQU8sR0FBRyxJQUFJNUMsTUFBTSxDQUFDNkMsT0FBWCxDQUFtQmYsR0FBbkIsRUFBd0JhLFNBQXhCLENBQWhCLEVBQ0E7O1NBRWVHOzs7Ozt5VUFBZixrQkFDRUMsSUFERixFQUVFQyxNQUZGLEVBR0VDLFVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0VDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUix5Q0FDbUNILE1BRG5DLDhCQUM2REMsVUFEN0Q7O0FBTEYsa0JBU01ELE1BQU0sSUFBSSxZQVRoQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQVVVSixPQUFPLENBQUNRLEdBQVIsQ0FDSEMsVUFERyxDQUNRLElBQUlyRCxNQUFNLENBQUNzRCxFQUFYLENBQWNMLFVBQWQsQ0FEUixFQUNtQztBQUNyQ2YsY0FBQUEsUUFBUSxFQUFFO0FBQ1JOLGdCQUFBQSxTQUFTLEVBQUVBLFNBQVMsQ0FBQzJCLFNBRGI7QUFFUkMsZ0JBQUFBLElBQUksRUFBRTlCLFFBQVEsQ0FBQ0wsTUFBVCxDQUFnQmtDLFNBRmQ7QUFHUkUsZ0JBQUFBLGFBQWEsRUFBRXRELGFBQWEsQ0FBQ3dDO0FBSHJCLGVBRDJCO0FBTXJDZSxjQUFBQSxPQUFPLEVBQUUsQ0FBQzlCLFNBQUQ7QUFONEIsYUFEbkMsV0FTRyxVQUFDK0IsQ0FBRCxFQUFPO0FBQ1pULGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxDQUFaO0FBQ0QsYUFYRyxDQVZWOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtCQXNCYVgsTUFBTSxJQUFJLFFBdEJ2QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQXVCVUosT0FBTyxDQUFDUSxHQUFSLENBQ0hRLE1BREcsQ0FDSSxJQUFJNUQsTUFBTSxDQUFDc0QsRUFBWCxDQUFjTCxVQUFkLENBREosRUFDK0I7QUFDakNmLGNBQUFBLFFBQVEsRUFBRTtBQUNSTixnQkFBQUEsU0FBUyxFQUFFQSxTQUFTLENBQUMyQjtBQURiO0FBRHVCLGFBRC9CLFdBTUcsVUFBQ0ksQ0FBRCxFQUFPO0FBQ1pULGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxDQUFaO0FBQ0QsYUFSRyxDQXZCVjs7QUFBQTtBQUFBO0FBQUEsbUJBaUN3QmYsT0FBTyxDQUFDaUIsT0FBUixDQUFnQmpDLFNBQWhCLENBQ25Ca0MsS0FEbUIsQ0FDYmxDLFNBQVMsQ0FBQzJCLFNBREcsV0FFYixVQUFDSSxDQUFELEVBQU87QUFDWlQsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlRLENBQVo7QUFDRCxhQUptQixDQWpDeEI7O0FBQUE7QUFpQ1FFLFlBQUFBLE9BakNSO0FBc0NFWCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCVSxPQUF2QjtBQXRDRjtBQUFBLG1CQXVDd0JqRCxVQUFVLENBQUNtRCxVQUFYLENBQXNCbkMsU0FBUyxDQUFDMkIsU0FBaEMsQ0F2Q3hCOztBQUFBO0FBdUNRUyxZQUFBQSxPQXZDUjtBQXdDRWQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QmEsT0FBTyxHQUFHekQsZ0JBQWpDO0FBQ0EyQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCdkIsU0FBUyxDQUFDMkIsU0FBVixDQUFvQlUsUUFBcEIsRUFBeEI7O0FBekNGLGtCQTBDTUosT0FBTyxJQUFJSyxTQTFDakI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBMkNXO0FBQUVDLGNBQUFBLElBQUksRUFBRU4sT0FBTyxDQUFDTSxJQUFSLENBQWFGLFFBQWI7QUFBUixhQTNDWDs7QUFBQTtBQUFBO0FBQUEsbUJBNkM0QnJELFVBQVUsQ0FDL0J3RCxjQURxQixDQUNOeEMsU0FBUyxDQUFDMkIsU0FESixFQUNlaEQsZ0JBRGYsV0FFZixVQUFDb0QsQ0FBRCxFQUFPO0FBQ1pULGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxDQUFaO0FBQ0QsYUFKcUIsQ0E3QzVCOztBQUFBO0FBNkNVVSxZQUFBQSxTQTdDVjtBQUFBLDhDQXVEVztBQUNMRixjQUFBQSxJQUFJLEVBQUU7QUFERCxhQXZEWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQTZEQSxTQUFTRyxPQUFULENBQWlCdEIsTUFBakIsRUFBa0NDLFVBQWxDLEVBQXVEO0FBQUE7O0FBQ3JEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWixFQUFvQkMsVUFBcEI7QUFDQUQsRUFBQUEsTUFBTSxHQUFHQSxNQUFNLElBQUksWUFBbkI7QUFDQUMsRUFBQUEsVUFBVSxHQUFHQSxVQUFVLElBQUksTUFBM0I7O0FBQ0EsZ0JBQWdDbEQsNENBQU0sQ0FDcEMsQ0FBQyxhQUFELEVBQWdCaUQsTUFBaEIsRUFBd0JDLFVBQXhCLENBRG9DLEVBRXBDSCxlQUZvQyxDQUF0QztBQUFBLE1BQVFxQixJQUFSLFdBQVFBLElBQVI7QUFBQSxNQUFjSSxNQUFkLFdBQWNBLE1BQWQ7QUFBQSxNQUFzQkMsS0FBdEIsV0FBc0JBLEtBQXRCOztBQUlBLE1BQU1DLE9BQU8sR0FBRyxDQUFDTixJQUFELElBQVMsQ0FBQ0ssS0FBMUI7QUFDQXRCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDZ0IsSUFBakM7QUFDQSxTQUFPO0FBQ0xNLElBQUFBLE9BQU8sRUFBUEEsT0FESztBQUVMakIsSUFBQUEsSUFBSSxFQUFFVyxJQUZEO0FBR0xJLElBQUFBLE1BQU0sRUFBTkE7QUFISyxHQUFQO0FBS0Q7O0dBZlFEO1VBSXlCdkU7OztBQWFsQyxTQUFTMkUsUUFBVCxHQUFvQjtBQUFBOztBQUNsQixNQUFNQyxHQUFHLEdBQUc3RSw2Q0FBTSxFQUFsQixDQURrQixDQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsaUJBQWtDd0UsT0FBTyxFQUF6QztBQUFBLE1BQVFkLElBQVIsWUFBUUEsSUFBUjtBQUFBLE1BQWNlLE1BQWQsWUFBY0EsTUFBZDtBQUFBLE1BQXNCRSxPQUF0QixZQUFzQkEsT0FBdEI7O0FBRUEsTUFBSUEsT0FBSixFQUFhO0FBQ1gsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNELE1BQUksQ0FBQ2pCLElBQUwsRUFBVztBQUNULHdCQUNFO0FBQUcsV0FBSyxFQUFFO0FBQUVvQixRQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsUUFBQUEsTUFBTSxFQUFFO0FBQXhCLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQUNEO0FBQUE7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGtEQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLDBCQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLE1BQWI7QUFBQSxzQkFBcUJyQixJQUFJLENBQUNXO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBSyxtQkFBUyxFQUFDLDJEQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHNDQUNFO0FBQU8seUJBQVMsRUFBQyxPQUFqQjtBQUFBLHVDQUNFO0FBQU0sMkJBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRTtBQUNFLG1CQUFHLEVBQUVRLEdBRFA7QUFFRSxvQkFBSSxFQUFDLFlBRlA7QUFHRSxvQkFBSSxFQUFDLE1BSFA7QUFJRSwyQkFBVyxFQUFDLE1BSmQ7QUFLRSx5QkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFhRTtBQUFLLHVCQUFTLEVBQUMsbUJBQWY7QUFBQSxxQ0FDRTtBQUNFLHVCQUFPO0FBQUEsaVZBQUUsaUJBQU9oQixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQQSw0QkFBQUEsQ0FBQyxDQUFDbUIsY0FBRjtBQUNBNUIsNEJBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJLLElBQUksQ0FBQ1csSUFBaEM7O0FBRk8sa0NBR0hRLEdBQUcsQ0FBQ0ksT0FBSixJQUFlLFdBSFo7QUFBQTtBQUFBO0FBQUE7O0FBSUM5Qiw0QkFBQUEsVUFKRCxHQUltQjBCLEdBQUcsQ0FBQ0ksT0FKdkI7O0FBQUEsa0NBTUh2QixJQUFJLENBQUNXLElBQUwsSUFDQSx3SEFQRztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1DQVNHckIsZUFBZSxDQUNuQixhQURtQixFQUVuQixZQUZtQixFQUduQkcsVUFBVSxDQUFDK0IsS0FIUSxDQVRsQjs7QUFBQTtBQWNIVCw0QkFBQUEsTUFBTTtBQWRIO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1DQWdCR3pCLGVBQWUsQ0FDbkIsYUFEbUIsRUFFbkIsUUFGbUIsRUFHbkJHLFVBQVUsQ0FBQytCLEtBSFEsQ0FoQmxCOztBQUFBO0FBcUJIVCw0QkFBQUEsTUFBTTs7QUFyQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFQ7QUEwQkUsb0JBQUksRUFBQyxRQTFCUDtBQTJCRSxxQkFBSyxFQUFDLFFBM0JSO0FBNEJFLHlCQUFTLEVBQUM7QUE1Qlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJGO0FBaUZEOztJQS9HUUc7VUFrQjJCSjs7O0tBbEIzQkk7QUFpSFQsK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbi8vYW5jaG9yIGJvaWxlcnBsYXRlIHNldHVwXHJcbmNvbnN0IGFuY2hvciA9IHJlcXVpcmUoXCJAcHJvamVjdC1zZXJ1bS9hbmNob3JcIik7XHJcbmNvbnN0IHsgU3lzdGVtUHJvZ3JhbSwgS2V5cGFpciwgQ29ubmVjdGlvbiwgUHVibGljS2V5LCBMQU1QT1JUU19QRVJfU09MIH0gPVxyXG4gIGFuY2hvci53ZWIzO1xyXG5jb25zdCBycGNVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SUENfVVJMO1xyXG5jb25zdCBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24ocnBjVXJsLCBcInJlY2VudFwiKTtcclxuY29uc3Qga2V5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5ORVhUX1BSSVZBVEVfS0VZKSk7XHJcbmNvbnN0IGtleXBhaXIgPSBLZXlwYWlyLmZyb21TZWNyZXRLZXkobmV3IFVpbnQ4QXJyYXkoa2V5KSk7XHJcbmNvbnN0IHdhbGxldCA9IG5ldyBhbmNob3IuV2FsbGV0KGtleXBhaXIpO1xyXG5jb25zdCBvcHRpb24gPSBhbmNob3IuUHJvdmlkZXIuZGVmYXVsdE9wdGlvbnMoKTtcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgYW5jaG9yLlByb3ZpZGVyKGNvbm5lY3Rpb24sIHdhbGxldCwgb3B0aW9uKTtcclxuYW5jaG9yLnNldFByb3ZpZGVyKHByb3ZpZGVyKTtcclxuXHJcbmNvbnN0IG15QWNjb3VudCA9IEtleXBhaXIuZ2VuZXJhdGUoKTtcclxuXHJcbmNvbnN0IGlkbCA9IHtcclxuICB2ZXJzaW9uOiBcIjAuMC4wXCIsXHJcbiAgbmFtZTogXCJuZXh0X2NvdW50ZXJcIixcclxuICBpbnN0cnVjdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJpbml0aWFsaXplXCIsXHJcbiAgICAgIGFjY291bnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJteUFjY291bnRcIixcclxuICAgICAgICAgIGlzTXV0OiB0cnVlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInVzZXJcIixcclxuICAgICAgICAgIGlzTXV0OiBmYWxzZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwic3lzdGVtUHJvZ3JhbVwiLFxyXG4gICAgICAgICAgaXNNdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGFyZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImRhdGFcIixcclxuICAgICAgICAgIHR5cGU6IFwidTY0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwidXBkYXRlXCIsXHJcbiAgICAgIGFjY291bnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJteUFjY291bnRcIixcclxuICAgICAgICAgIGlzTXV0OiB0cnVlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGFyZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImRhdGFcIixcclxuICAgICAgICAgIHR5cGU6IFwidTY0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBhY2NvdW50czogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk15QWNjb3VudFwiLFxyXG4gICAgICB0eXBlOiB7XHJcbiAgICAgICAga2luZDogXCJzdHJ1Y3RcIixcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJkYXRhXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwidTY0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbWV0YWRhdGE6IHtcclxuICAgIGFkZHJlc3M6IFwiOW1UdnRIbU1tRFRrbVg2Y1VvWFF3enA5NzdFQXpZaWR5bkFOZlA5TnpQVUdcIixcclxuICB9LFxyXG59O1xyXG5jb25zdCBwcm9ncmFtSWQgPSBuZXcgUHVibGljS2V5KFwiOW1UdnRIbU1tRFRrbVg2Y1VvWFF3enA5NzdFQXpZaWR5bkFOZlA5TnpQVUdcIik7XHJcbmNvbnN0IHByb2dyYW0gPSBuZXcgYW5jaG9yLlByb2dyYW0oaWRsLCBwcm9ncmFtSWQpO1xyXG4vL2VuZCBhbmNob3IgYm9pbGVycGxhdGUgc2V0dXBcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb2dyYW1fZmV0Y2hlcihcclxuICBfYXBpOiBzdHJpbmcsXHJcbiAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgYmlnX251bWJlcjogc3RyaW5nXHJcbikge1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgYGZldGNoaW5nIHByb2dyYW0gd2l0aCBtZXRob2Q6ICR7bWV0aG9kfSBhbmQgYmlnX251bWJlcjogJHtiaWdfbnVtYmVyfWBcclxuICApO1xyXG5cclxuICBpZiAobWV0aG9kID09IFwiaW5pdGlhbGl6ZVwiKSB7XHJcbiAgICBhd2FpdCBwcm9ncmFtLnJwY1xyXG4gICAgICAuaW5pdGlhbGl6ZShuZXcgYW5jaG9yLkJOKGJpZ19udW1iZXIpLCB7XHJcbiAgICAgICAgYWNjb3VudHM6IHtcclxuICAgICAgICAgIG15QWNjb3VudDogbXlBY2NvdW50LnB1YmxpY0tleSxcclxuICAgICAgICAgIHVzZXI6IHByb3ZpZGVyLndhbGxldC5wdWJsaWNLZXksXHJcbiAgICAgICAgICBzeXN0ZW1Qcm9ncmFtOiBTeXN0ZW1Qcm9ncmFtLnByb2dyYW1JZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpZ25lcnM6IFtteUFjY291bnRdLFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIGlmIChtZXRob2QgPT0gXCJ1cGRhdGVcIikge1xyXG4gICAgYXdhaXQgcHJvZ3JhbS5ycGNcclxuICAgICAgLnVwZGF0ZShuZXcgYW5jaG9yLkJOKGJpZ19udW1iZXIpLCB7XHJcbiAgICAgICAgYWNjb3VudHM6IHtcclxuICAgICAgICAgIG15QWNjb3VudDogbXlBY2NvdW50LnB1YmxpY0tleSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFjY291bnQgPSBhd2FpdCBwcm9ncmFtLmFjY291bnQubXlBY2NvdW50XHJcbiAgICAuZmV0Y2gobXlBY2NvdW50LnB1YmxpY0tleSlcclxuICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIGNvbnNvbGUubG9nKFwiYWNjb3VudFwiLCBhY2NvdW50KTtcclxuICBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKG15QWNjb3VudC5wdWJsaWNLZXkpO1xyXG4gIGNvbnNvbGUubG9nKFwiYmFsYW5jZVwiLCBiYWxhbmNlIC8gTEFNUE9SVFNfUEVSX1NPTCk7XHJcbiAgY29uc29sZS5sb2coXCJwdWJrZXk6IFwiLCBteUFjY291bnQucHVibGljS2V5LnRvU3RyaW5nKCkpO1xyXG4gIGlmIChhY2NvdW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHsgZGF0YTogYWNjb3VudC5kYXRhLnRvU3RyaW5nKCkgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgY29ubmVjdGlvblxyXG4gICAgICAucmVxdWVzdEFpcmRyb3AobXlBY2NvdW50LnB1YmxpY0tleSwgTEFNUE9SVFNfUEVSX1NPTClcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gYXdhaXQgY29ubmVjdGlvbi5jb25maXJtVHJhbnNhY3Rpb24oc2lnbmF0dXJlKTtcclxuICAgIC8vIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldEJhbGFuY2UobXlBY2NvdW50LnB1YmxpY0tleSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImJhbGFuY2VcIiwgYmFsYW5jZSAvIExBTVBPUlRTX1BFUl9TT0wpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJwdWJrZXk6IFwiLCBteUFjY291bnQucHVibGljS2V5LnRvU3RyaW5nKCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJhaXJkcm9wIGNvbmZpcm1lZFwiLCBzaWduYXR1cmUpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogXCJJbml0aWFsaXplIGFuIGFjY291bnQgd2l0aCB0aGUgZm9ybSB0byB0aGUgcmlnaHQgdG8gZ2V0IHN0YXJ0ZWQuIFRoZSBhY2NvdW50IGRhdGEgd2lsbCBzaG93IHVwIGluIHRoaXMgYm94IGFmdGVyd2FyZHMuXCIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXNlVXNlcihtZXRob2Q/OiBzdHJpbmcsIGJpZ19udW1iZXI/OiBzdHJpbmcpIHtcclxuICBjb25zb2xlLmxvZyhtZXRob2QsIGJpZ19udW1iZXIpO1xyXG4gIG1ldGhvZCA9IG1ldGhvZCB8fCBcIk5vIEFjY291bnRcIjtcclxuICBiaWdfbnVtYmVyID0gYmlnX251bWJlciB8fCBcIjAwMDBcIjtcclxuICBjb25zdCB7IGRhdGEsIG11dGF0ZSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIFtcInByb2dyYW1fcnBjXCIsIG1ldGhvZCwgYmlnX251bWJlcl0sXHJcbiAgICBwcm9ncmFtX2ZldGNoZXJcclxuICApO1xyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3I7XHJcbiAgY29uc29sZS5sb2coXCJkYXRhIGluIHVzZVVzZXI6IFwiLCBkYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGluZyxcclxuICAgIHVzZXI6IGRhdGEsXHJcbiAgICBtdXRhdGUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgLy8gYmFzaWMgYW5jaG9yIHJwYyBpbml0IGNhbGwgYW5kIHJldHVybiBvbiBwYWdlIGxvYWRcclxuICAvLyBjb25zdCBbdHgsIHNldFR4XSA9IHVzZVN0YXRlKHsgdHg6IFwiLi4ubG9hZGluZ1wiIH0pO1xyXG4gIC8vIGNvbnN0IGZldGNoVHggPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICBjb25zdCB0eCA9IGF3YWl0IHByb2dyYW0ucnBjLmluaXRpYWxpemUoKTtcclxuICAvLyAgIHJldHVybiB0eDtcclxuICAvLyB9O1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBnZXRUeCA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgY29uc3QgdHggPSBhd2FpdCBmZXRjaFR4KCk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwidHhcIiwgdHgpO1xyXG4gIC8vICAgICBzZXRUeCh7IHR4OiB0eCB9KTtcclxuICAvLyAgIH07XHJcbiAgLy8gICBnZXRUeCgpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy8gTmV3IG5leHRqcyBzd3Igc2V0dXAgZm9yIG1vcmUgYWR2YW5jZWQgcnBjIGNhbGxzXHJcbiAgY29uc3QgeyB1c2VyLCBtdXRhdGUsIGxvYWRpbmcgfSA9IHVzZVVzZXIoKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgbWFyZ2luOiBcIjVlbVwiIH19PlxyXG4gICAgICAgIFtFUlJPUl06IHVzZXIgaXMgcmV0dXJpbmcgdW5kZWZpbmVkXHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAvLyBCYXNpYyBhbGVydCBzZXR1cCBmb3IgaW50aWFsaXppbmcgYW4gYW4gYWNuaG9yIFJQQyBhbmQgcmV0dXJuaW5nIHRoZSB0eFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG0tOFwiPlxyXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj5cclxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgLy8gICAgICAgPHN2Z1xyXG4gICAgLy8gICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIC8vICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgLy8gICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIC8vICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiBteC0yIHN0cm9rZS1jdXJyZW50XCJcclxuICAgIC8vICAgICAgID5cclxuICAgIC8vICAgICAgICAgPHBhdGhcclxuICAgIC8vICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgLy8gICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgLy8gICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAvLyAgICAgICAgICAgZD1cIk0xMyAxNmgtMXYtNGgtMW0xLTRoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiXHJcbiAgICAvLyAgICAgICAgID48L3BhdGg+XHJcbiAgICAvLyAgICAgICA8L3N2Zz5cclxuICAgIC8vICAgICAgIDxsYWJlbD57dHgudHh9PC9sYWJlbD5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgPC9kaXY+XHJcbiAgICAvLyA8L2Rpdj5cclxuXHJcbiAgICAvLyBJbnRlcm1lZGlhdGUgc2V0dXAgZm9yIGFkZGluZyBkYXRhIHRvIHlvdXIgYWNjb3VudCBhbmQgdGhlbiB1cGRhdGluZyB0aGUgZGF0YVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIG1pbi1oLXNjcmVlbiBiZy1iYXNlLTIwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIGp1c3RpZnktY2VudGVyIGhlcm8tY29udGVudCBsZzpmbGV4LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNSB0ZXh0LTV4bCBmb250LWJvbGRcIj5BbmNob3IgQWNjb3VudCBEYXRhPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTVcIj57dXNlci5kYXRhfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZmxleC1zaHJpbmstMCB3LWZ1bGwgbWF4LXctc20gc2hhZG93LTJ4bCBiZy1iYXNlLTEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5EYXRhPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJiaWdfbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzNFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTZcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyLmRhdGE6IFwiLCB1c2VyLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpZ19udW1iZXI6IGFueSA9IHJlZi5jdXJyZW50IGFzIGFueTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEgPT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiSW5pdGlhbGl6ZSBhbiBhY2NvdW50IHdpdGggdGhlIGZvcm0gdG8gdGhlIHJpZ2h0IHRvIGdldCBzdGFydGVkLiBUaGUgYWNjb3VudCBkYXRhIHdpbGwgc2hvdyB1cCBpbiB0aGlzIGJveCBhZnRlcndhcmRzLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3JhbV9ycGNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbml0aWFsaXplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpZ19udW1iZXIudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtdXRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJvZ3JhbV9mZXRjaGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2dyYW1fcnBjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpZ19udW1iZXIudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtdXRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVNXUiIsImFuY2hvciIsInJlcXVpcmUiLCJ3ZWIzIiwiU3lzdGVtUHJvZ3JhbSIsIktleXBhaXIiLCJDb25uZWN0aW9uIiwiUHVibGljS2V5IiwiTEFNUE9SVFNfUEVSX1NPTCIsInJwY1VybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19SUENfVVJMIiwiY29ubmVjdGlvbiIsImtleSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIk5FWFRfUFJJVkFURV9LRVkiLCJrZXlwYWlyIiwiZnJvbVNlY3JldEtleSIsIlVpbnQ4QXJyYXkiLCJ3YWxsZXQiLCJXYWxsZXQiLCJvcHRpb24iLCJQcm92aWRlciIsImRlZmF1bHRPcHRpb25zIiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsIm15QWNjb3VudCIsImdlbmVyYXRlIiwiaWRsIiwidmVyc2lvbiIsIm5hbWUiLCJpbnN0cnVjdGlvbnMiLCJhY2NvdW50cyIsImlzTXV0IiwiaXNTaWduZXIiLCJhcmdzIiwidHlwZSIsImtpbmQiLCJmaWVsZHMiLCJtZXRhZGF0YSIsImFkZHJlc3MiLCJwcm9ncmFtSWQiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsInByb2dyYW1fZmV0Y2hlciIsIl9hcGkiLCJtZXRob2QiLCJiaWdfbnVtYmVyIiwiY29uc29sZSIsImxvZyIsInJwYyIsImluaXRpYWxpemUiLCJCTiIsInB1YmxpY0tleSIsInVzZXIiLCJzeXN0ZW1Qcm9ncmFtIiwic2lnbmVycyIsImUiLCJ1cGRhdGUiLCJhY2NvdW50IiwiZmV0Y2giLCJnZXRCYWxhbmNlIiwiYmFsYW5jZSIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwiZGF0YSIsInJlcXVlc3RBaXJkcm9wIiwic2lnbmF0dXJlIiwidXNlVXNlciIsIm11dGF0ZSIsImVycm9yIiwibG9hZGluZyIsIkhvbWVQYWdlIiwicmVmIiwiY29sb3IiLCJtYXJnaW4iLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=