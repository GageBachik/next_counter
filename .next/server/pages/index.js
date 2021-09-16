(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ "./node_modules/@solana/wallet-adapter-react/lib/index.js");
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ "./node_modules/@solana/wallet-adapter-react-ui/lib/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/gagebachik/projects/next_counter/pages/index.tsx";

 //anchor boilerplate setup

const anchor = __webpack_require__(/*! @project-serum/anchor */ "@project-serum/anchor");

const {
  SystemProgram,
  Keypair,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL
} = anchor.web3;
const rpcUrl = "http://127.0.0.1:8899";
const connection = new Connection(rpcUrl, "recent");
const key = JSON.parse("[115,220,248,164,179,76,28,197,93,107,70,150,168,211,25,186,225,79,68,90,182,135,216,177,123,229,12,145,183,197,123,69,111,12,141,102,117,160,23,151,190,74,150,179,184,231,70,119,122,132,214,167,55,254,143,113,89,56,67,115,25,21,40,63]");
const keypair = Keypair.fromSecretKey(new Uint8Array(key));
const wallet = new anchor.Wallet(keypair);
const option = anchor.Provider.defaultOptions();
const provider = new anchor.Provider(connection, wallet, option);
anchor.setProvider(provider);
const myAccount = Keypair.generate();
const idl = {
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
const programId = new PublicKey("9mTvtHmMmDTkmX6cUoXQwzp977EAzYidynANfP9NzPUG");
const program = new anchor.Program(idl, programId); //end anchor boilerplate setup

async function program_fetcher(_api, method, big_number) {
  console.log(`fetching program with method: ${method} and big_number: ${big_number}`);

  if (method == "initialize") {
    await program.rpc.initialize(
    /*new anchor.BN(big_number),*/
    {
      accounts: {
        myAccount: myAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId
      },
      signers: [myAccount]
    }).catch(e => {
      console.log(e);
    });
  } else if (method == "update") {
    await program.rpc.update(
    /*new anchor.BN(big_number),*/
    {
      accounts: {
        myAccount: myAccount.publicKey
      }
    }).catch(e => {
      console.log(e);
    });
  }

  const account = await program.account.myAccount.fetch(myAccount.publicKey).catch(e => {
    console.log(e);
  });
  console.log("account", account);
  const balance = await connection.getBalance(myAccount.publicKey);
  console.log("balance", balance / LAMPORTS_PER_SOL);
  console.log("pubkey: ", myAccount.publicKey.toString());

  if (account != undefined) {
    return {
      data: account.count.toString()
    };
  } else {
    const signature = await connection.requestAirdrop(myAccount.publicKey, LAMPORTS_PER_SOL).catch(e => {
      console.log(e);
    }); // await connection.confirmTransaction(signature);
    // const balance = await connection.getBalance(myAccount.publicKey);
    // console.log("balance", balance / LAMPORTS_PER_SOL);
    // console.log("pubkey: ", myAccount.publicKey.toString());
    // console.log("airdrop confirmed", signature);

    return {
      data: "Initialize an account with the form to the right to get started. The account data will show up in this box afterwards."
    };
  }
}

function useUser(method, big_number) {
  console.log(method, big_number);
  method = method || "No Account";
  big_number = big_number || "0000";
  const {
    data,
    mutate,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_1___default()(["program_rpc", method, big_number], program_fetcher);
  const loading = !data && !error;
  console.log("data in useUser: ", data);
  return {
    loading,
    user: data,
    mutate
  };
} //phantom wallet






function HomePage() {
  // if (process.browser) {
  //   const wallets = useMemo(
  //     () => [getPhantomWallet()],
  //     ["http://127.0.0.1:8899"]
  //   );
  // }
  // phantom wallet fixed
  const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();

  if (!wallet.connected) {
    /* If the user's wallet is not connected, display connect wallet button. */
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: "100px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletMultiButton, {}, void 0, false, {
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

  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // basic anchor rpc init call and return on page load
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

  const {
    user,
    mutate,
    loading
  } = useUser();

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
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
            lineNumber: 249,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "mb-5",
            children: user.data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletDisconnectButton, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 248,
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
                  lineNumber: 257,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
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
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "form-control mt-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                onClick: async e => {
                  e.preventDefault();
                  console.log("user.data: ", user.data);

                  if (ref.current != "undefined") {
                    const big_number = ref.current;

                    if (user.data == "Initialize an account with the form to the right to get started. The account data will show up in this box afterwards.") {
                      await program_fetcher("program_rpc", "initialize", big_number.value);
                      mutate();
                    } else {
                      await program_fetcher("program_rpc", "update", big_number.value);
                      mutate();
                    }
                  }
                },
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-base/lib/adapter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-base/lib/adapter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventEmitter": () => (/* reexport default from dynamic */ eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "BaseWalletAdapter": () => (/* binding */ BaseWalletAdapter),
/* harmony export */   "WalletAdapterNetwork": () => (/* binding */ WalletAdapterNetwork)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "eventemitter3");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);


class BaseWalletAdapter extends (eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()) {}
var WalletAdapterNetwork;

(function (WalletAdapterNetwork) {
  WalletAdapterNetwork["Mainnet"] = "mainnet-beta";
  WalletAdapterNetwork["Testnet"] = "testnet";
  WalletAdapterNetwork["Devnet"] = "devnet";
})(WalletAdapterNetwork || (WalletAdapterNetwork = {}));

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-base/lib/errors.js":
/*!****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-base/lib/errors.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletError": () => (/* binding */ WalletError),
/* harmony export */   "WalletNotFoundError": () => (/* binding */ WalletNotFoundError),
/* harmony export */   "WalletNotInstalledError": () => (/* binding */ WalletNotInstalledError),
/* harmony export */   "WalletNotReadyError": () => (/* binding */ WalletNotReadyError),
/* harmony export */   "WalletConnectionError": () => (/* binding */ WalletConnectionError),
/* harmony export */   "WalletDisconnectedError": () => (/* binding */ WalletDisconnectedError),
/* harmony export */   "WalletDisconnectionError": () => (/* binding */ WalletDisconnectionError),
/* harmony export */   "WalletAccountError": () => (/* binding */ WalletAccountError),
/* harmony export */   "WalletPublicKeyError": () => (/* binding */ WalletPublicKeyError),
/* harmony export */   "WalletKeypairError": () => (/* binding */ WalletKeypairError),
/* harmony export */   "WalletNotConnectedError": () => (/* binding */ WalletNotConnectedError),
/* harmony export */   "WalletSendTransactionError": () => (/* binding */ WalletSendTransactionError),
/* harmony export */   "WalletSignMessageError": () => (/* binding */ WalletSignMessageError),
/* harmony export */   "WalletSignTransactionError": () => (/* binding */ WalletSignTransactionError),
/* harmony export */   "WalletTimeoutError": () => (/* binding */ WalletTimeoutError),
/* harmony export */   "WalletWindowBlockedError": () => (/* binding */ WalletWindowBlockedError),
/* harmony export */   "WalletWindowClosedError": () => (/* binding */ WalletWindowClosedError)
/* harmony export */ });
class WalletError extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message, error) {
    super(message);
    this.error = error;
  }

}
class WalletNotFoundError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotFoundError';
  }

}
class WalletNotInstalledError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotInstalledError';
  }

}
class WalletNotReadyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotReadyError';
  }

}
class WalletConnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletConnectionError';
  }

}
class WalletDisconnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectedError';
  }

}
class WalletDisconnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectionError';
  }

}
class WalletAccountError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletAccountError';
  }

}
class WalletPublicKeyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletPublicKeyError';
  }

}
class WalletKeypairError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletKeypairError';
  }

}
class WalletNotConnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotConnectedError';
  }

}
class WalletSendTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSendTransactionError';
  }

}
class WalletSignMessageError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignMessageError';
  }

}
class WalletSignTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignTransactionError';
  }

}
class WalletTimeoutError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletTimeoutError';
  }

}
class WalletWindowBlockedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowBlockedError';
  }

}
class WalletWindowClosedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowClosedError';
  }

}

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-base/lib/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-base/lib/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./node_modules/@solana/wallet-adapter-base/lib/adapter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _adapter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _adapter__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/@solana/wallet-adapter-base/lib/errors.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _errors__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _errors__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _poll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poll */ "./node_modules/@solana/wallet-adapter-base/lib/poll.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _poll__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _poll__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _signer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signer */ "./node_modules/@solana/wallet-adapter-base/lib/signer.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _signer__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _signer__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-base/lib/poll.js":
/*!**************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-base/lib/poll.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "poll": () => (/* binding */ poll),
/* harmony export */   "pollUntilReady": () => (/* binding */ pollUntilReady)
/* harmony export */ });
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

function poll(callback, interval, count) {
  if (count > 0) {
    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
      const done = yield callback();
      if (!done) poll(callback, interval, count - 1);
    }), interval);
  }
}
function pollUntilReady(adapter, pollInterval, pollCount) {
  poll(() => {
    const {
      ready
    } = adapter;

    if (ready) {
      if (!adapter.emit('ready')) {
        console.warn(`${adapter.constructor.name} is ready but no listener was registered`);
      }
    }

    return ready;
  }, pollInterval, pollCount);
}

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-base/lib/signer.js":
/*!****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-base/lib/signer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseSignerWalletAdapter": () => (/* binding */ BaseSignerWalletAdapter),
/* harmony export */   "BaseMessageSignerWalletAdapter": () => (/* binding */ BaseMessageSignerWalletAdapter)
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./node_modules/@solana/wallet-adapter-base/lib/adapter.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/@solana/wallet-adapter-base/lib/errors.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



class BaseSignerWalletAdapter extends _adapter__WEBPACK_IMPORTED_MODULE_0__.BaseWalletAdapter {
  sendTransaction(transaction, connection, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        try {
          transaction.feePayer || (transaction.feePayer = this.publicKey || undefined);
          transaction.recentBlockhash || (transaction.recentBlockhash = (yield connection.getRecentBlockhash('finalized')).blockhash);

          const {
            signers
          } = options,
                sendOptions = __rest(options, ["signers"]);

          (signers === null || signers === void 0 ? void 0 : signers.length) && transaction.partialSign(...signers);
          transaction = yield this.signTransaction(transaction);
          const rawTransaction = transaction.serialize();
          return yield connection.sendRawTransaction(rawTransaction, sendOptions);
        } catch (error) {
          if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_1__.WalletError) throw error;
          throw new _errors__WEBPACK_IMPORTED_MODULE_1__.WalletSendTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}
class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {}

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/Button.js":
/*!********************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/Button.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Button = props => {
  const justifyContent = props.endIcon || props.startIcon ? 'space-between' : 'center';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `wallet-adapter-button ${props.className || ''}`,
    disabled: props.disabled,
    onClick: props.onClick,
    style: Object.assign({
      justifyContent
    }, props.style),
    tabIndex: props.tabIndex || 0
  }, props.startIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "wallet-adapter-button-start-icon"
  }, props.startIcon), props.children, props.endIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "wallet-adapter-button-end-icon"
  }, props.endIcon));
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/Collapse.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/Collapse.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collapse": () => (/* binding */ Collapse)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Collapse = ({
  id,
  children,
  expanded = false
}) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const instant = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  const transition = 'height 250ms ease-out';

  const openCollapse = () => {
    const node = ref.current;
    if (!node) return;
    requestAnimationFrame(() => {
      node.style.height = node.scrollHeight + 'px';
    });
  };

  const closeCollapse = () => {
    const node = ref.current;
    if (!node) return;
    requestAnimationFrame(() => {
      node.style.height = node.offsetHeight + 'px';
      node.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        node.style.height = '0';
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (expanded) {
      openCollapse();
    } else {
      closeCollapse();
    }
  }, [expanded]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const node = ref.current;
    if (!node) return;

    function handleComplete() {
      if (!node) return;
      node.style.overflow = expanded ? 'initial' : 'hidden';

      if (expanded) {
        node.style.height = 'auto';
      }
    }

    function handleTransitionEnd(event) {
      if (node && event.target === node && event.propertyName === 'height') {
        handleComplete();
      }
    }

    if (instant.current) {
      handleComplete();
      instant.current = false;
    }

    node.addEventListener('transitionend', handleTransitionEnd);
    return () => node.removeEventListener('transitionend', handleTransitionEnd);
  }, [expanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    children: children,
    className: "wallet-adapter-collapse",
    id: id,
    ref: ref,
    role: "region",
    style: {
      height: 0,
      transition: instant.current ? undefined : transition
    }
  });
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletConnectButton.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletConnectButton.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletConnectButton": () => (/* binding */ WalletConnectButton)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-react */ "./node_modules/@solana/wallet-adapter-react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./node_modules/@solana/wallet-adapter-react-ui/lib/Button.js");
/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WalletIcon */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletIcon.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const WalletConnectButton = _a => {
  var {
    children,
    disabled,
    onClick
  } = _a,
      props = __rest(_a, ["children", "disabled", "onClick"]);

  const {
    wallet,
    connect,
    connecting,
    connected
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useWallet)();
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event => {
    if (onClick) onClick(event); // eslint-disable-next-line @typescript-eslint/no-empty-function

    if (!event.defaultPrevented) connect().catch(() => {});
  }, [onClick, connect]);
  const content = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (children) return children;
    if (connecting) return 'Connecting ...';
    if (connected) return 'Connected';
    if (wallet) return 'Connect';
    return 'Connect Wallet';
  }, [children, connecting, connected, wallet]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, Object.assign({
    className: "wallet-adapter-button-trigger",
    disabled: disabled || !wallet || connecting || connected,
    startIcon: wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_WalletIcon__WEBPACK_IMPORTED_MODULE_3__.WalletIcon, {
      wallet: wallet
    }) : undefined,
    onClick: handleClick
  }, props), content);
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletDisconnectButton.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletDisconnectButton.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletDisconnectButton": () => (/* binding */ WalletDisconnectButton)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-react */ "./node_modules/@solana/wallet-adapter-react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./node_modules/@solana/wallet-adapter-react-ui/lib/Button.js");
/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WalletIcon */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletIcon.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const WalletDisconnectButton = _a => {
  var {
    children,
    disabled,
    onClick
  } = _a,
      props = __rest(_a, ["children", "disabled", "onClick"]);

  const {
    wallet,
    disconnect,
    disconnecting
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useWallet)();
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event => {
    if (onClick) onClick(event); // eslint-disable-next-line @typescript-eslint/no-empty-function

    if (!event.defaultPrevented) disconnect().catch(() => {});
  }, [onClick, disconnect]);
  const content = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (children) return children;
    if (disconnecting) return 'Disconnecting ...';
    if (wallet) return 'Disconnect';
    return 'Disconnect Wallet';
  }, [children, disconnecting, wallet]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, Object.assign({
    className: "wallet-adapter-button-trigger",
    disabled: disabled || !wallet,
    startIcon: wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_WalletIcon__WEBPACK_IMPORTED_MODULE_3__.WalletIcon, {
      wallet: wallet
    }) : undefined,
    onClick: handleClick
  }, props), content);
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletIcon": () => (/* binding */ WalletIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


const WalletIcon = _a => {
  var {
    wallet
  } = _a,
      props = __rest(_a, ["wallet"]);

  return wallet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", Object.assign({
    src: wallet.icon,
    alt: `${wallet.name} icon`
  }, props));
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletListItem.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletListItem.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletListItem": () => (/* binding */ WalletListItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./node_modules/@solana/wallet-adapter-react-ui/lib/Button.js");
/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WalletIcon */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletIcon.js");



const WalletListItem = ({
  handleClick,
  tabIndex,
  wallet
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: handleClick,
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_WalletIcon__WEBPACK_IMPORTED_MODULE_2__.WalletIcon, {
      wallet: wallet
    }),
    tabIndex: tabIndex
  }, wallet.name));
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModal.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModal": () => (/* binding */ WalletModal)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-react */ "./node_modules/@solana/wallet-adapter-react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./node_modules/@solana/wallet-adapter-react-ui/lib/Button.js");
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Collapse */ "./node_modules/@solana/wallet-adapter-react-ui/lib/Collapse.js");
/* harmony import */ var _useWalletModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useWalletModal */ "./node_modules/@solana/wallet-adapter-react-ui/lib/useWalletModal.js");
/* harmony import */ var _WalletListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WalletListItem */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletListItem.js");







const WalletModal = ({
  className = '',
  logo,
  featuredWallets = 3,
  container = 'body'
}) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    wallets,
    select
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useWallet)();
  const {
    setVisible
  } = (0,_useWalletModal__WEBPACK_IMPORTED_MODULE_5__.useWalletModal)();
  const {
    0: expanded,
    1: setExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: fadeIn,
    1: setFadeIn
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: portal,
    1: setPortal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: featured,
    1: more
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [wallets.slice(0, featuredWallets), wallets.slice(featuredWallets)], [wallets, featuredWallets]);
  const hideModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setFadeIn(false);
    setTimeout(() => setVisible(false), 150);
  }, [setFadeIn, setVisible]);
  const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event => {
    event.preventDefault();
    hideModal();
  }, [hideModal]);
  const handleWalletClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event, walletName) => {
    select(walletName);
    handleClose(event);
  }, [select, handleClose]);
  const handleCollapseClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setExpanded(!expanded), [setExpanded, expanded]);
  const handleTabKey = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event => {
    const node = ref.current;
    if (!node) return; // here we query all focusable elements

    const focusableElements = node.querySelectorAll('button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      // if going backward by pressing tab and firstElement is active, shift focus to last focusable element
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      // if going forward by pressing tab and lastElement is active, shift focus to first focusable element
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }, [ref]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        hideModal();
      } else if (event.key === 'Tab') {
        handleTabKey(event);
      }
    }; // Get original overflow


    const {
      overflow
    } = window.getComputedStyle(document.body); // Hack to enable fade in animation after mount

    setTimeout(() => setFadeIn(true), 0); // Prevent scrolling on mount

    document.body.style.overflow = 'hidden'; // Listen for keydown events

    window.addEventListener('keydown', handleKeyDown, false);
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [hideModal, handleTabKey]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => setPortal(document.querySelector(container)), [setPortal, container]);
  return portal && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    "aria-labelledby": "wallet-adapter-modal-title",
    "aria-modal": "true",
    className: `wallet-adapter-modal ${fadeIn && 'wallet-adapter-modal-fade-in'} ${className}`,
    ref: ref,
    role: "dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "wallet-adapter-modal-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: `wallet-adapter-modal-wrapper ${!logo && 'wallet-adapter-modal-wrapper-no-logo'}`
  }, logo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "wallet-adapter-modal-logo-wrapper"
  }, typeof logo === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    alt: "logo",
    className: "wallet-adapter-modal-logo",
    src: logo
  }) : logo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
    className: "wallet-adapter-modal-title",
    id: "wallet-adapter-modal-title"
  }, "Connect Wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    onClick: handleClose,
    className: "wallet-adapter-modal-button-close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
    width: "14",
    height: "14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "wallet-adapter-modal-list"
  }, featured.map(wallet => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_WalletListItem__WEBPACK_IMPORTED_MODULE_6__.WalletListItem, {
    key: wallet.name,
    handleClick: event => handleWalletClick(event, wallet.name),
    wallet: wallet
  }))), more.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Collapse__WEBPACK_IMPORTED_MODULE_4__.Collapse, {
    expanded: expanded,
    id: "wallet-adapter-modal-collapse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "wallet-adapter-modal-list"
  }, more.map(wallet => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_WalletListItem__WEBPACK_IMPORTED_MODULE_6__.WalletListItem, {
    key: wallet.name,
    handleClick: event => handleWalletClick(event, wallet.name),
    tabIndex: expanded ? 0 : -1,
    wallet: wallet
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
    "aria-controls": "wallet-adapter-modal-collapse",
    "aria-expanded": expanded,
    className: `wallet-adapter-modal-collapse-button ${expanded && 'wallet-adapter-modal-collapse-button-active'}`,
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
      width: "11",
      height: "6",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
      d: "m5.938 5.73 4.28-4.126a.915.915 0 0 0 0-1.322 1 1 0 0 0-1.371 0L5.253 3.736 1.659.272a1 1 0 0 0-1.371 0A.93.93 0 0 0 0 .932c0 .246.1.48.288.662l4.28 4.125a.99.99 0 0 0 1.37.01z"
    })),
    onClick: handleCollapseClick
  }, expanded ? 'Less' : 'More', " options")) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "wallet-adapter-modal-overlay",
    onMouseDown: handleClose
  })), portal);
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModalButton.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModalButton.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModalButton": () => (/* binding */ WalletModalButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./node_modules/@solana/wallet-adapter-react-ui/lib/Button.js");
/* harmony import */ var _useWalletModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWalletModal */ "./node_modules/@solana/wallet-adapter-react-ui/lib/useWalletModal.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const WalletModalButton = _a => {
  var {
    children = 'Select Wallet',
    onClick
  } = _a,
      props = __rest(_a, ["children", "onClick"]);

  const {
    visible,
    setVisible
  } = (0,_useWalletModal__WEBPACK_IMPORTED_MODULE_2__.useWalletModal)();
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) setVisible(!visible);
  }, [onClick, setVisible, visible]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({
    className: "wallet-adapter-button-trigger",
    onClick: handleClick
  }, props), children);
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModalProvider.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModalProvider.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModalProvider": () => (/* binding */ WalletModalProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./node_modules/@solana/wallet-adapter-react-ui/lib/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useWalletModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWalletModal */ "./node_modules/@solana/wallet-adapter-react-ui/lib/useWalletModal.js");
/* harmony import */ var _WalletModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WalletModal */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModal.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const WalletModalProvider = _a => {
  var {
    children
  } = _a,
      props = __rest(_a, ["children"]);

  const {
    0: visible,
    1: setVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_useWalletModal__WEBPACK_IMPORTED_MODULE_2__.WalletModalContext.Provider, {
    value: {
      visible,
      setVisible
    }
  }, children, visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_WalletModal__WEBPACK_IMPORTED_MODULE_3__.WalletModal, Object.assign({}, props)));
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletMultiButton.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletMultiButton.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletMultiButton": () => (/* binding */ WalletMultiButton)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-react */ "./node_modules/@solana/wallet-adapter-react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./node_modules/@solana/wallet-adapter-react-ui/lib/Button.js");
/* harmony import */ var _useWalletModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWalletModal */ "./node_modules/@solana/wallet-adapter-react-ui/lib/useWalletModal.js");
/* harmony import */ var _WalletConnectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WalletConnectButton */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletConnectButton.js");
/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WalletIcon */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletIcon.js");
/* harmony import */ var _WalletModalButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WalletModalButton */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModalButton.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








const WalletMultiButton = _a => {
  var {
    children
  } = _a,
      props = __rest(_a, ["children"]);

  const {
    publicKey,
    wallet,
    disconnect
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useWallet)();
  const {
    setVisible
  } = (0,_useWalletModal__WEBPACK_IMPORTED_MODULE_3__.useWalletModal)();
  const {
    0: copied,
    1: setCopied
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const base58 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), [publicKey]);
  const content = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (children) return children;
    if (!wallet || !base58) return null;
    return base58.slice(0, 4) + '..' + base58.slice(-4);
  }, [children, wallet, base58]);
  const copyAddress = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (base58) {
      yield navigator.clipboard.writeText(base58);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }), [base58]);
  const openDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setActive(true), [setActive]);
  const closeDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setActive(false), [setActive]);
  const openModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setVisible(true);
    closeDropdown();
  }, [setVisible, closeDropdown]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const listener = event => {
      const node = ref.current; // Do nothing if clicking dropdown or its descendants

      if (!node || node.contains(event.target)) return;
      closeDropdown();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, closeDropdown]);
  if (!wallet) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_WalletModalButton__WEBPACK_IMPORTED_MODULE_6__.WalletModalButton, Object.assign({}, props));
  if (!base58) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_WalletConnectButton__WEBPACK_IMPORTED_MODULE_4__.WalletConnectButton, Object.assign({}, props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "wallet-adapter-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, Object.assign({
    "aria-expanded": active,
    className: "wallet-adapter-button-trigger",
    style: Object.assign({
      pointerEvents: active ? 'none' : 'auto'
    }, props.style),
    onClick: openDropdown,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_WalletIcon__WEBPACK_IMPORTED_MODULE_5__.WalletIcon, {
      wallet: wallet
    })
  }, props), content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    "aria-label": "dropdown-list",
    className: `wallet-adapter-dropdown-list ${active && 'wallet-adapter-dropdown-list-active'}`,
    ref: ref,
    role: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    onClick: copyAddress,
    className: "wallet-adapter-dropdown-list-item",
    role: "menuitem"
  }, copied ? 'Copied' : 'Copy address'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    onClick: openModal,
    className: "wallet-adapter-dropdown-list-item",
    role: "menuitem"
  }, "Connect a different wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    onClick: disconnect,
    className: "wallet-adapter-dropdown-list-item",
    role: "menuitem"
  }, "Disconnect")));
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useWalletModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useWalletModal */ "./node_modules/@solana/wallet-adapter-react-ui/lib/useWalletModal.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _useWalletModal__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _useWalletModal__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _WalletConnectButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WalletConnectButton */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletConnectButton.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _WalletConnectButton__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _WalletConnectButton__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _WalletModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WalletModal */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModal.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _WalletModal__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _WalletModal__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _WalletModalButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WalletModalButton */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModalButton.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _WalletModalButton__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _WalletModalButton__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _WalletModalProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WalletModalProvider */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModalProvider.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _WalletModalProvider__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _WalletModalProvider__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _WalletDisconnectButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WalletDisconnectButton */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletDisconnectButton.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _WalletDisconnectButton__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _WalletDisconnectButton__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WalletIcon */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletIcon.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _WalletIcon__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _WalletIcon__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _WalletMultiButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WalletMultiButton */ "./node_modules/@solana/wallet-adapter-react-ui/lib/WalletMultiButton.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _WalletMultiButton__WEBPACK_IMPORTED_MODULE_7__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _WalletMultiButton__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);









/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/useWalletModal.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/useWalletModal.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModalContext": () => (/* binding */ WalletModalContext),
/* harmony export */   "useWalletModal": () => (/* binding */ useWalletModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WalletModalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useWalletModal() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WalletModalContext);
}

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react/lib/ConnectionProvider.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react/lib/ConnectionProvider.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionProvider": () => (/* binding */ ConnectionProvider)
/* harmony export */ });
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ "@solana/web3.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useConnection */ "./node_modules/@solana/wallet-adapter-react/lib/useConnection.js");



const ConnectionProvider = ({
  children,
  endpoint,
  config = {
    commitment: 'confirmed'
  }
}) => {
  const connection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Connection(endpoint, config), [endpoint, config]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_useConnection__WEBPACK_IMPORTED_MODULE_2__.ConnectionContext.Provider, {
    value: {
      connection
    }
  }, children);
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react/lib/WalletProvider.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react/lib/WalletProvider.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletProvider": () => (/* binding */ WalletProvider)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-base */ "./node_modules/@solana/wallet-adapter-base/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./node_modules/@solana/wallet-adapter-react/lib/errors.js");
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useLocalStorage */ "./node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js");
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useWallet */ "./node_modules/@solana/wallet-adapter-react/lib/useWallet.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};






const initialState = {
  wallet: null,
  adapter: null,
  ready: false,
  publicKey: null,
  connected: false
};
const WalletProvider = ({
  children,
  wallets,
  autoConnect = false,
  onError = error => console.error(error),
  localStorageKey = 'walletName'
}) => {
  const [name, setName] = (0,_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage)(localStorageKey, null);
  const {
    0: {
      wallet,
      adapter,
      ready,
      publicKey,
      connected
    },
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
  const {
    0: connecting,
    1: setConnecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: disconnecting,
    1: setDisconnecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Map of wallet names to wallets

  const walletsByName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => wallets.reduce((walletsByName, wallet) => {
    walletsByName[wallet.name] = wallet;
    return walletsByName;
  }, {}), [wallets]); // When the selected wallet changes, initialize the state

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const wallet = name && walletsByName[name] || null;
    const adapter = wallet && wallet.adapter();

    if (adapter) {
      const {
        ready,
        publicKey,
        connected
      } = adapter;
      setState({
        wallet,
        adapter,
        connected,
        publicKey,
        ready
      });
    } else {
      setState(initialState);
    }
  }, [name, walletsByName, setState]); // If autoConnect is enabled, try to connect when the adapter changes and is ready

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (autoConnect && adapter && ready && !connecting && !connected) {
      (function () {
        return __awaiter(this, void 0, void 0, function* () {
          setConnecting(true);

          try {
            yield adapter.connect();
          } catch (error) {
            // Clear the selected wallet
            setName(null); // Don't throw error, but onError will still be called
          } finally {
            setConnecting(false);
          }
        });
      })();
    }
  }, [autoConnect, adapter, ready, connecting, connected, setConnecting, setName]); // Select a wallet by name

  const select = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newName => __awaiter(void 0, void 0, void 0, function* () {
    if (name === newName) return;
    if (adapter) yield adapter.disconnect();
    setName(newName);
  }), [name, adapter, setName]); // Handle the adapter's ready event

  const onReady = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setState(state => Object.assign(Object.assign({}, state), {
    ready: true
  })), [setState]); // Handle the adapter's connect event

  const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (!adapter) return;
    const {
      connected,
      publicKey,
      ready
    } = adapter;
    setState(state => Object.assign(Object.assign({}, state), {
      connected,
      publicKey,
      ready
    }));
  }, [adapter, setState]); // Handle the adapter's disconnect event

  const onDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setName(null), [setName]); // Connect the adapter to the wallet

  const connect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (connecting || disconnecting || connected) return;

    if (!wallet || !adapter) {
      const error = new _errors__WEBPACK_IMPORTED_MODULE_2__.WalletNotSelectedError();
      onError(error);
      throw error;
    }

    if (!ready) {
      setName(null);

      if (false) {}

      const error = new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotReadyError();
      onError(error);
      throw error;
    }

    setConnecting(true);

    try {
      yield adapter.connect();
    } catch (error) {
      setName(null);
      throw error;
    } finally {
      setConnecting(false);
    }
  }), [connecting, disconnecting, connected, wallet, adapter, onError, ready, setName, setConnecting]); // Disconnect the adapter from the wallet

  const disconnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (disconnecting) return;
    if (!adapter) return setName(null);
    setDisconnecting(true);

    try {
      yield adapter.disconnect();
    } finally {
      setName(null);
      setDisconnecting(false);
    }
  }), [disconnecting, adapter, setName, setDisconnecting]); // Send a transaction using the provided connection

  const sendTransaction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((transaction, connection, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!adapter) {
      const error = new _errors__WEBPACK_IMPORTED_MODULE_2__.WalletNotSelectedError();
      onError(error);
      throw error;
    }

    if (!connected) {
      const error = new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.sendTransaction(transaction, connection, options);
  }), [adapter, onError, connected]); // Sign a transaction if the wallet supports it

  const signTransaction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => adapter && 'signTransaction' in adapter ? transaction => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signTransaction(transaction);
  }) : undefined, [adapter, onError, connected]); // Sign multiple transactions if the wallet supports it

  const signAllTransactions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => adapter && 'signAllTransactions' in adapter ? transactions => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signAllTransactions(transactions);
  }) : undefined, [adapter, onError, connected]); // Sign an arbitrary message if the wallet supports it

  const signMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => adapter && 'signMessage' in adapter ? message => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signMessage(message);
  }) : undefined, [adapter, onError, connected]); // Setup and teardown event listeners when the adapter changes

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (adapter) {
      adapter.on('ready', onReady);
      adapter.on('connect', onConnect);
      adapter.on('disconnect', onDisconnect);
      adapter.on('error', onError);
      return () => {
        adapter.off('ready', onReady);
        adapter.off('connect', onConnect);
        adapter.off('disconnect', onDisconnect);
        adapter.off('error', onError);
      };
    }
  }, [adapter, onReady, onConnect, onDisconnect, onError]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_useWallet__WEBPACK_IMPORTED_MODULE_4__.WalletContext.Provider, {
    value: {
      wallets,
      autoConnect,
      select,
      wallet,
      adapter,
      publicKey,
      ready,
      connecting,
      disconnecting,
      connected,
      connect,
      disconnect,
      sendTransaction,
      signTransaction,
      signAllTransactions,
      signMessage
    }
  }, children);
};

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react/lib/errors.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react/lib/errors.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletNotSelectedError": () => (/* binding */ WalletNotSelectedError)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-base */ "./node_modules/@solana/wallet-adapter-base/lib/index.js");

class WalletNotSelectedError extends _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotSelectedError';
  }

}

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react/lib/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useAnchorWallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAnchorWallet */ "./node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _useAnchorWallet__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _useAnchorWallet__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _ConnectionProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectionProvider */ "./node_modules/@solana/wallet-adapter-react/lib/ConnectionProvider.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _ConnectionProvider__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _ConnectionProvider__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./node_modules/@solana/wallet-adapter-react/lib/errors.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _errors__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _errors__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useConnection */ "./node_modules/@solana/wallet-adapter-react/lib/useConnection.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _useConnection__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _useConnection__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useLocalStorage */ "./node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useWallet */ "./node_modules/@solana/wallet-adapter-react/lib/useWallet.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _useWallet__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _useWallet__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _WalletProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WalletProvider */ "./node_modules/@solana/wallet-adapter-react/lib/WalletProvider.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _WalletProvider__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _WalletProvider__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);








/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAnchorWallet": () => (/* binding */ useAnchorWallet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useWallet */ "./node_modules/@solana/wallet-adapter-react/lib/useWallet.js");


function useAnchorWallet() {
  const {
    publicKey,
    signTransaction,
    signAllTransactions
  } = (0,_useWallet__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => publicKey && signTransaction && signAllTransactions ? {
    publicKey,
    signTransaction,
    signAllTransactions
  } : undefined, [publicKey, signTransaction, signAllTransactions]);
}

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react/lib/useConnection.js":
/*!************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react/lib/useConnection.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionContext": () => (/* binding */ ConnectionContext),
/* harmony export */   "useConnection": () => (/* binding */ useConnection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ConnectionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useConnection() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ConnectionContext);
}

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLocalStorage": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLocalStorage(key, defaultState) {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    if (typeof localStorage === 'undefined') return defaultState;
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return defaultState;
  });
  const setLocalStorage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue => {
    if (newValue === value) return;
    setValue(newValue);

    if (newValue === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  }, [value, setValue, key]);
  return [value, setLocalStorage];
}

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react/lib/useWallet.js":
/*!********************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletContext": () => (/* binding */ WalletContext),
/* harmony export */   "useWallet": () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WalletContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useWallet() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WalletContext);
}

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/lib/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/lib/styles.css ***!
  \*********************************************************************/
/***/ (() => {



/***/ }),

/***/ "@project-serum/anchor":
/*!****************************************!*\
  !*** external "@project-serum/anchor" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@project-serum/anchor");

/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("eventemitter3");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJuVCxHQUFyQixDQUFkO0FBQ0EsUUFBSXlFLEtBQUosRUFDSSxPQUFPeEUsSUFBSSxDQUFDQyxLQUFMLENBQVd1RSxLQUFYLENBQVA7QUFDSixXQUFPdU8sWUFBUDtBQUNILEdBUGlDLENBQWxDO0FBUUEsUUFBTUksZUFBZSxHQUFHdkgsa0RBQVcsQ0FBRXdILFFBQUQsSUFBYztBQUM5QyxRQUFJQSxRQUFRLEtBQUs1TyxLQUFqQixFQUNJO0FBQ0p3TyxJQUFBQSxRQUFRLENBQUNJLFFBQUQsQ0FBUjs7QUFDQSxRQUFJQSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkJILE1BQUFBLFlBQVksQ0FBQ0ksVUFBYixDQUF3QnRULEdBQXhCO0FBQ0gsS0FGRCxNQUdLO0FBQ0RrVCxNQUFBQSxZQUFZLENBQUNLLE9BQWIsQ0FBcUJ2VCxHQUFyQixFQUEwQkMsSUFBSSxDQUFDdVQsU0FBTCxDQUFlSCxRQUFmLENBQTFCO0FBQ0g7QUFDSixHQVZrQyxFQVVoQyxDQUFDNU8sS0FBRCxFQUFRd08sUUFBUixFQUFrQmpULEdBQWxCLENBVmdDLENBQW5DO0FBV0EsU0FBTyxDQUFDeUUsS0FBRCxFQUFRMk8sZUFBUixDQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRDtBQUNPLE1BQU05QixhQUFhLGdCQUFHVCxvREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFDQSxTQUFTak4sU0FBVCxHQUFxQjtBQUN4QixTQUFPa04saURBQVUsQ0FBQ1EsYUFBRCxDQUFqQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2UvbGliL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9wb2xsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2UvbGliL3NpZ25lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9Db2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0Q29ubmVjdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0RGlzY29ubmVjdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0SWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL1dhbGxldE1vZGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9XYWxsZXRNb2RhbEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0TW9kYWxQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0TXVsdGlCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi91c2VXYWxsZXRNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvQ29ubmVjdGlvblByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9XYWxsZXRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvZXJyb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvdXNlQW5jaG9yV2FsbGV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi91c2VDb25uZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi91c2VMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL3VzZVdhbGxldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJvamVjdC1zZXJ1bS9hbmNob3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc29sYW5hL3dlYjMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudGVtaXR0ZXIzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG4vL2FuY2hvciBib2lsZXJwbGF0ZSBzZXR1cFxyXG5jb25zdCBhbmNob3IgPSByZXF1aXJlKFwiQHByb2plY3Qtc2VydW0vYW5jaG9yXCIpO1xyXG5jb25zdCB7IFN5c3RlbVByb2dyYW0sIEtleXBhaXIsIENvbm5lY3Rpb24sIFB1YmxpY0tleSwgTEFNUE9SVFNfUEVSX1NPTCB9ID1cclxuICBhbmNob3Iud2ViMztcclxuY29uc3QgcnBjVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUlBDX1VSTDtcclxuY29uc3QgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKHJwY1VybCwgXCJyZWNlbnRcIik7XHJcbmNvbnN0IGtleSA9IEpTT04ucGFyc2UoXHJcbiAgXCJbMTE1LDIyMCwyNDgsMTY0LDE3OSw3NiwyOCwxOTcsOTMsMTA3LDcwLDE1MCwxNjgsMjExLDI1LDE4NiwyMjUsNzksNjgsOTAsMTgyLDEzNSwyMTYsMTc3LDEyMywyMjksMTIsMTQ1LDE4MywxOTcsMTIzLDY5LDExMSwxMiwxNDEsMTAyLDExNywxNjAsMjMsMTUxLDE5MCw3NCwxNTAsMTc5LDE4NCwyMzEsNzAsMTE5LDEyMiwxMzIsMjE0LDE2Nyw1NSwyNTQsMTQzLDExMyw4OSw1Niw2NywxMTUsMjUsMjEsNDAsNjNdXCJcclxuKTtcclxuY29uc3Qga2V5cGFpciA9IEtleXBhaXIuZnJvbVNlY3JldEtleShuZXcgVWludDhBcnJheShrZXkpKTtcclxuY29uc3Qgd2FsbGV0ID0gbmV3IGFuY2hvci5XYWxsZXQoa2V5cGFpcik7XHJcbmNvbnN0IG9wdGlvbiA9IGFuY2hvci5Qcm92aWRlci5kZWZhdWx0T3B0aW9ucygpO1xyXG5jb25zdCBwcm92aWRlciA9IG5ldyBhbmNob3IuUHJvdmlkZXIoY29ubmVjdGlvbiwgd2FsbGV0LCBvcHRpb24pO1xyXG5hbmNob3Iuc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xyXG5cclxuY29uc3QgbXlBY2NvdW50ID0gS2V5cGFpci5nZW5lcmF0ZSgpO1xyXG5cclxuY29uc3QgaWRsID0ge1xyXG4gIHZlcnNpb246IFwiMC4wLjBcIixcclxuICBuYW1lOiBcIm5leHRfY291bnRlclwiLFxyXG4gIGluc3RydWN0aW9uczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImluaXRpYWxpemVcIixcclxuICAgICAgYWNjb3VudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIm15QWNjb3VudFwiLFxyXG4gICAgICAgICAgaXNNdXQ6IHRydWUsXHJcbiAgICAgICAgICBpc1NpZ25lcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgICAgICAgaXNNdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJzeXN0ZW1Qcm9ncmFtXCIsXHJcbiAgICAgICAgICBpc011dDogZmFsc2UsXHJcbiAgICAgICAgICBpc1NpZ25lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgYXJnczogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInVwZGF0ZVwiLFxyXG4gICAgICBhY2NvdW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwibXlBY2NvdW50XCIsXHJcbiAgICAgICAgICBpc011dDogdHJ1ZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBhcmdzOiBbXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBhY2NvdW50czogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk15QWNjb3VudFwiLFxyXG4gICAgICB0eXBlOiB7XHJcbiAgICAgICAga2luZDogXCJzdHJ1Y3RcIixcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJjb3VudFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInU2NFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIG1ldGFkYXRhOiB7XHJcbiAgICBhZGRyZXNzOiBcIjltVHZ0SG1NbURUa21YNmNVb1hRd3pwOTc3RUF6WWlkeW5BTmZQOU56UFVHXCIsXHJcbiAgfSxcclxufTtcclxuY29uc3QgcHJvZ3JhbUlkID0gbmV3IFB1YmxpY0tleShcIjltVHZ0SG1NbURUa21YNmNVb1hRd3pwOTc3RUF6WWlkeW5BTmZQOU56UFVHXCIpO1xyXG5jb25zdCBwcm9ncmFtID0gbmV3IGFuY2hvci5Qcm9ncmFtKGlkbCwgcHJvZ3JhbUlkKTtcclxuLy9lbmQgYW5jaG9yIGJvaWxlcnBsYXRlIHNldHVwXHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgX2FwaTogc3RyaW5nLFxyXG4gIG1ldGhvZDogc3RyaW5nLFxyXG4gIGJpZ19udW1iZXI6IHN0cmluZ1xyXG4pIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIGBmZXRjaGluZyBwcm9ncmFtIHdpdGggbWV0aG9kOiAke21ldGhvZH0gYW5kIGJpZ19udW1iZXI6ICR7YmlnX251bWJlcn1gXHJcbiAgKTtcclxuXHJcbiAgaWYgKG1ldGhvZCA9PSBcImluaXRpYWxpemVcIikge1xyXG4gICAgYXdhaXQgcHJvZ3JhbS5ycGNcclxuICAgICAgLmluaXRpYWxpemUoXHJcbiAgICAgICAgLypuZXcgYW5jaG9yLkJOKGJpZ19udW1iZXIpLCovIHtcclxuICAgICAgICAgIGFjY291bnRzOiB7XHJcbiAgICAgICAgICAgIG15QWNjb3VudDogbXlBY2NvdW50LnB1YmxpY0tleSxcclxuICAgICAgICAgICAgdXNlcjogcHJvdmlkZXIud2FsbGV0LnB1YmxpY0tleSxcclxuICAgICAgICAgICAgc3lzdGVtUHJvZ3JhbTogU3lzdGVtUHJvZ3JhbS5wcm9ncmFtSWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2lnbmVyczogW215QWNjb3VudF0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2UgaWYgKG1ldGhvZCA9PSBcInVwZGF0ZVwiKSB7XHJcbiAgICBhd2FpdCBwcm9ncmFtLnJwY1xyXG4gICAgICAudXBkYXRlKFxyXG4gICAgICAgIC8qbmV3IGFuY2hvci5CTihiaWdfbnVtYmVyKSwqLyB7XHJcbiAgICAgICAgICBhY2NvdW50czoge1xyXG4gICAgICAgICAgICBteUFjY291bnQ6IG15QWNjb3VudC5wdWJsaWNLZXksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFjY291bnQgPSBhd2FpdCBwcm9ncmFtLmFjY291bnQubXlBY2NvdW50XHJcbiAgICAuZmV0Y2gobXlBY2NvdW50LnB1YmxpY0tleSlcclxuICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIGNvbnNvbGUubG9nKFwiYWNjb3VudFwiLCBhY2NvdW50KTtcclxuICBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKG15QWNjb3VudC5wdWJsaWNLZXkpO1xyXG4gIGNvbnNvbGUubG9nKFwiYmFsYW5jZVwiLCBiYWxhbmNlIC8gTEFNUE9SVFNfUEVSX1NPTCk7XHJcbiAgY29uc29sZS5sb2coXCJwdWJrZXk6IFwiLCBteUFjY291bnQucHVibGljS2V5LnRvU3RyaW5nKCkpO1xyXG4gIGlmIChhY2NvdW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHsgZGF0YTogYWNjb3VudC5jb3VudC50b1N0cmluZygpIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGNvbm5lY3Rpb25cclxuICAgICAgLnJlcXVlc3RBaXJkcm9wKG15QWNjb3VudC5wdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICAgIC8vIGF3YWl0IGNvbm5lY3Rpb24uY29uZmlybVRyYW5zYWN0aW9uKHNpZ25hdHVyZSk7XHJcbiAgICAvLyBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKG15QWNjb3VudC5wdWJsaWNLZXkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJiYWxhbmNlXCIsIGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicHVia2V5OiBcIiwgbXlBY2NvdW50LnB1YmxpY0tleS50b1N0cmluZygpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYWlyZHJvcCBjb25maXJtZWRcIiwgc2lnbmF0dXJlKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFwiSW5pdGlhbGl6ZSBhbiBhY2NvdW50IHdpdGggdGhlIGZvcm0gdG8gdGhlIHJpZ2h0IHRvIGdldCBzdGFydGVkLiBUaGUgYWNjb3VudCBkYXRhIHdpbGwgc2hvdyB1cCBpbiB0aGlzIGJveCBhZnRlcndhcmRzLlwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVVzZXIobWV0aG9kPzogc3RyaW5nLCBiaWdfbnVtYmVyPzogc3RyaW5nKSB7XHJcbiAgY29uc29sZS5sb2cobWV0aG9kLCBiaWdfbnVtYmVyKTtcclxuICBtZXRob2QgPSBtZXRob2QgfHwgXCJObyBBY2NvdW50XCI7XHJcbiAgYmlnX251bWJlciA9IGJpZ19udW1iZXIgfHwgXCIwMDAwXCI7XHJcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBbXCJwcm9ncmFtX3JwY1wiLCBtZXRob2QsIGJpZ19udW1iZXJdLFxyXG4gICAgcHJvZ3JhbV9mZXRjaGVyXHJcbiAgKTtcclxuICBjb25zdCBsb2FkaW5nID0gIWRhdGEgJiYgIWVycm9yO1xyXG4gIGNvbnNvbGUubG9nKFwiZGF0YSBpbiB1c2VVc2VyOiBcIiwgZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICB1c2VyOiBkYXRhLFxyXG4gICAgbXV0YXRlLFxyXG4gIH07XHJcbn1cclxuLy9waGFudG9tIHdhbGxldFxyXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG4gIFdhbGxldERpc2Nvbm5lY3RCdXR0b24sXHJcbn0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIC8vIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAvLyAgIGNvbnN0IHdhbGxldHMgPSB1c2VNZW1vKFxyXG4gIC8vICAgICAoKSA9PiBbZ2V0UGhhbnRvbVdhbGxldCgpXSxcclxuICAvLyAgICAgW1wiaHR0cDovLzEyNy4wLjAuMTo4ODk5XCJdXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gcGhhbnRvbSB3YWxsZXQgZml4ZWRcclxuICBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKTtcclxuXHJcbiAgaWYgKCF3YWxsZXQuY29ubmVjdGVkKSB7XHJcbiAgICAvKiBJZiB0aGUgdXNlcidzIHdhbGxldCBpcyBub3QgY29ubmVjdGVkLCBkaXNwbGF5IGNvbm5lY3Qgd2FsbGV0IGJ1dHRvbi4gKi9cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIG1hcmdpblRvcDogXCIxMDBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICAvLyBiYXNpYyBhbmNob3IgcnBjIGluaXQgY2FsbCBhbmQgcmV0dXJuIG9uIHBhZ2UgbG9hZFxyXG4gIC8vIGNvbnN0IFt0eCwgc2V0VHhdID0gdXNlU3RhdGUoeyB0eDogXCIuLi5sb2FkaW5nXCIgfSk7XHJcbiAgLy8gY29uc3QgZmV0Y2hUeCA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgIGNvbnN0IHR4ID0gYXdhaXQgcHJvZ3JhbS5ycGMuaW5pdGlhbGl6ZSgpO1xyXG4gIC8vICAgcmV0dXJuIHR4O1xyXG4gIC8vIH07XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGdldFR4ID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBjb25zdCB0eCA9IGF3YWl0IGZldGNoVHgoKTtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJ0eFwiLCB0eCk7XHJcbiAgLy8gICAgIHNldFR4KHsgdHg6IHR4IH0pO1xyXG4gIC8vICAgfTtcclxuICAvLyAgIGdldFR4KCk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICAvLyBOZXcgbmV4dGpzIHN3ciBzZXR1cCBmb3IgbW9yZSBhZHZhbmNlZCBycGMgY2FsbHNcclxuICBjb25zdCB7IHVzZXIsIG11dGF0ZSwgbG9hZGluZyB9ID0gdXNlVXNlcigpO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiNWVtXCIgfX0+XHJcbiAgICAgICAgW0VSUk9SXTogdXNlciBpcyByZXR1cmluZyB1bmRlZmluZWRcclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIEJhc2ljIGFsZXJ0IHNldHVwIGZvciBpbnRpYWxpemluZyBhbiBhbiBhY25ob3IgUlBDIGFuZCByZXR1cm5pbmcgdGhlIHR4XHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbS04XCI+XHJcbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAvLyAgICAgICA8c3ZnXHJcbiAgICAvLyAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgLy8gICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAvLyAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgLy8gICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IG14LTIgc3Ryb2tlLWN1cnJlbnRcIlxyXG4gICAgLy8gICAgICAgPlxyXG4gICAgLy8gICAgICAgICA8cGF0aFxyXG4gICAgLy8gICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAvLyAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAvLyAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgIC8vICAgICAgICAgICBkPVwiTTEzIDE2aC0xdi00aC0xbTEtNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcclxuICAgIC8vICAgICAgICAgPjwvcGF0aD5cclxuICAgIC8vICAgICAgIDwvc3ZnPlxyXG4gICAgLy8gICAgICAgPGxhYmVsPnt0eC50eH08L2xhYmVsPlxyXG4gICAgLy8gICAgIDwvZGl2PlxyXG4gICAgLy8gICA8L2Rpdj5cclxuICAgIC8vIDwvZGl2PlxyXG5cclxuICAgIC8vIEludGVybWVkaWF0ZSBzZXR1cCBmb3IgYWRkaW5nIGRhdGEgdG8geW91ciBhY2NvdW50IGFuZCB0aGVuIHVwZGF0aW5nIHRoZSBkYXRhXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8gbWluLWgtc2NyZWVuIGJnLWJhc2UtMjAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaGVyby1jb250ZW50IGxnOmZsZXgtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IHRleHQtNXhsIGZvbnQtYm9sZFwiPkFuY2hvciBBY2NvdW50IERhdGE8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNVwiPnt1c2VyLmRhdGF9PC9wPlxyXG4gICAgICAgICAgPFdhbGxldERpc2Nvbm5lY3RCdXR0b24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZmxleC1zaHJpbmstMCB3LWZ1bGwgbWF4LXctc20gc2hhZG93LTJ4bCBiZy1iYXNlLTEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5EYXRhPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJiaWdfbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzNFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTZcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyLmRhdGE6IFwiLCB1c2VyLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpZ19udW1iZXI6IGFueSA9IHJlZi5jdXJyZW50IGFzIGFueTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEgPT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiSW5pdGlhbGl6ZSBhbiBhY2NvdW50IHdpdGggdGhlIGZvcm0gdG8gdGhlIHJpZ2h0IHRvIGdldCBzdGFydGVkLiBUaGUgYWNjb3VudCBkYXRhIHdpbGwgc2hvdyB1cCBpbiB0aGlzIGJveCBhZnRlcndhcmRzLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3JhbV9ycGNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbml0aWFsaXplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpZ19udW1iZXIudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtdXRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJvZ3JhbV9mZXRjaGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2dyYW1fcnBjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpZ19udW1iZXIudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtdXRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmV4cG9ydCB7IEV2ZW50RW1pdHRlciB9O1xuZXhwb3J0IGNsYXNzIEJhc2VXYWxsZXRBZGFwdGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbn1cbmV4cG9ydCB2YXIgV2FsbGV0QWRhcHRlck5ldHdvcms7XG4oZnVuY3Rpb24gKFdhbGxldEFkYXB0ZXJOZXR3b3JrKSB7XG4gICAgV2FsbGV0QWRhcHRlck5ldHdvcmtbXCJNYWlubmV0XCJdID0gXCJtYWlubmV0LWJldGFcIjtcbiAgICBXYWxsZXRBZGFwdGVyTmV0d29ya1tcIlRlc3RuZXRcIl0gPSBcInRlc3RuZXRcIjtcbiAgICBXYWxsZXRBZGFwdGVyTmV0d29ya1tcIkRldm5ldFwiXSA9IFwiZGV2bmV0XCI7XG59KShXYWxsZXRBZGFwdGVyTmV0d29yayB8fCAoV2FsbGV0QWRhcHRlck5ldHdvcmsgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRhcHRlci5qcy5tYXAiLCJleHBvcnQgY2xhc3MgV2FsbGV0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBlcnJvcikge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RGb3VuZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90Rm91bmRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdEluc3RhbGxlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RSZWFkeUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90UmVhZHlFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldENvbm5lY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldENvbm5lY3Rpb25FcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldERpc2Nvbm5lY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0RGlzY29ubmVjdGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXREaXNjb25uZWN0aW9uRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRBY2NvdW50RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRBY2NvdW50RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRQdWJsaWNLZXlFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFB1YmxpY0tleUVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0S2V5cGFpckVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0S2V5cGFpckVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RDb25uZWN0ZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0U2VuZFRyYW5zYWN0aW9uRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRTaWduTWVzc2FnZUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0U2lnbk1lc3NhZ2VFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRUaW1lb3V0RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRUaW1lb3V0RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRXaW5kb3dCbG9ja2VkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRXaW5kb3dCbG9ja2VkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRXaW5kb3dDbG9zZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFdpbmRvd0Nsb3NlZEVycm9yJztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvcnMuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vcG9sbCc7XG5leHBvcnQgKiBmcm9tICcuL3NpZ25lcic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBwb2xsKGNhbGxiYWNrLCBpbnRlcnZhbCwgY291bnQpIHtcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgZG9uZSA9IHlpZWxkIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBpZiAoIWRvbmUpXG4gICAgICAgICAgICAgICAgcG9sbChjYWxsYmFjaywgaW50ZXJ2YWwsIGNvdW50IC0gMSk7XG4gICAgICAgIH0pLCBpbnRlcnZhbCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBvbGxVbnRpbFJlYWR5KGFkYXB0ZXIsIHBvbGxJbnRlcnZhbCwgcG9sbENvdW50KSB7XG4gICAgcG9sbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhZHkgfSA9IGFkYXB0ZXI7XG4gICAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICAgICAgaWYgKCFhZGFwdGVyLmVtaXQoJ3JlYWR5JykpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7YWRhcHRlci5jb25zdHJ1Y3Rvci5uYW1lfSBpcyByZWFkeSBidXQgbm8gbGlzdGVuZXIgd2FzIHJlZ2lzdGVyZWRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVhZHk7XG4gICAgfSwgcG9sbEludGVydmFsLCBwb2xsQ291bnQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9sbC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IEJhc2VXYWxsZXRBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7IFdhbGxldEVycm9yLCBXYWxsZXRTZW5kVHJhbnNhY3Rpb25FcnJvciB9IGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCBjbGFzcyBCYXNlU2lnbmVyV2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VXYWxsZXRBZGFwdGVyIHtcbiAgICBzZW5kVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24sIGNvbm5lY3Rpb24sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5mZWVQYXllciB8fCAodHJhbnNhY3Rpb24uZmVlUGF5ZXIgPSB0aGlzLnB1YmxpY0tleSB8fCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5yZWNlbnRCbG9ja2hhc2ggfHwgKHRyYW5zYWN0aW9uLnJlY2VudEJsb2NraGFzaCA9ICh5aWVsZCBjb25uZWN0aW9uLmdldFJlY2VudEJsb2NraGFzaCgnZmluYWxpemVkJykpLmJsb2NraGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2lnbmVycyB9ID0gb3B0aW9ucywgc2VuZE9wdGlvbnMgPSBfX3Jlc3Qob3B0aW9ucywgW1wic2lnbmVyc1wiXSk7XG4gICAgICAgICAgICAgICAgICAgIChzaWduZXJzID09PSBudWxsIHx8IHNpZ25lcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNpZ25lcnMubGVuZ3RoKSAmJiB0cmFuc2FjdGlvbi5wYXJ0aWFsU2lnbiguLi5zaWduZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSB5aWVsZCB0aGlzLnNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhd1RyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb24uc2VyaWFsaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjb25uZWN0aW9uLnNlbmRSYXdUcmFuc2FjdGlvbihyYXdUcmFuc2FjdGlvbiwgc2VuZE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgV2FsbGV0RXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VTaWduZXJXYWxsZXRBZGFwdGVyIHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25lci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGp1c3RpZnlDb250ZW50ID0gcHJvcHMuZW5kSWNvbiB8fCBwcm9wcy5zdGFydEljb24gPyAnc3BhY2UtYmV0d2VlbicgOiAnY2VudGVyJztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1idXR0b24gJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YCwgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLCBvbkNsaWNrOiBwcm9wcy5vbkNsaWNrLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7IGp1c3RpZnlDb250ZW50IH0sIHByb3BzLnN0eWxlKSwgdGFiSW5kZXg6IHByb3BzLnRhYkluZGV4IHx8IDAgfSxcbiAgICAgICAgcHJvcHMuc3RhcnRJY29uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi1zdGFydC1pY29uXCIgfSwgcHJvcHMuc3RhcnRJY29uKSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIHByb3BzLmVuZEljb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLWVuZC1pY29uXCIgfSwgcHJvcHMuZW5kSWNvbikpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CdXR0b24uanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IENvbGxhcHNlID0gKHsgaWQsIGNoaWxkcmVuLCBleHBhbmRlZCA9IGZhbHNlIH0pID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgaW5zdGFudCA9IHVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJ2hlaWdodCAyNTBtcyBlYXNlLW91dCc7XG4gICAgY29uc3Qgb3BlbkNvbGxhcHNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gbm9kZS5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGNsb3NlQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICBub2RlLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgICBvcGVuQ29sbGFwc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlQ29sbGFwc2UoKTtcbiAgICAgICAgfVxuICAgIH0sIFtleHBhbmRlZF0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDb21wbGV0ZSgpIHtcbiAgICAgICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBub2RlLnN0eWxlLm92ZXJmbG93ID0gZXhwYW5kZWQgPyAnaW5pdGlhbCcgOiAnaGlkZGVuJztcbiAgICAgICAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChub2RlICYmIGV2ZW50LnRhcmdldCA9PT0gbm9kZSAmJiBldmVudC5wcm9wZXJ0eU5hbWUgPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5zdGFudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgaW5zdGFudC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKTtcbiAgICB9LCBbZXhwYW5kZWRdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjaGlsZHJlbjogY2hpbGRyZW4sIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1jb2xsYXBzZVwiLCBpZDogaWQsIHJlZjogcmVmLCByb2xlOiBcInJlZ2lvblwiLCBzdHlsZTogeyBoZWlnaHQ6IDAsIHRyYW5zaXRpb246IGluc3RhbnQuY3VycmVudCA/IHVuZGVmaW5lZCA6IHRyYW5zaXRpb24gfSB9KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29sbGFwc2UuanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSAnLi9XYWxsZXRJY29uJztcbmV4cG9ydCBjb25zdCBXYWxsZXRDb25uZWN0QnV0dG9uID0gKF9hKSA9PiB7XG4gICAgdmFyIHsgY2hpbGRyZW4sIGRpc2FibGVkLCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCJdKTtcbiAgICBjb25zdCB7IHdhbGxldCwgY29ubmVjdCwgY29ubmVjdGluZywgY29ubmVjdGVkIH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DbGljaylcbiAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gICAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcbiAgICAgICAgICAgIGNvbm5lY3QoKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIH0sIFtvbkNsaWNrLCBjb25uZWN0XSk7XG4gICAgY29uc3QgY29udGVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW4pXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIGlmIChjb25uZWN0aW5nKVxuICAgICAgICAgICAgcmV0dXJuICdDb25uZWN0aW5nIC4uLic7XG4gICAgICAgIGlmIChjb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm4gJ0Nvbm5lY3RlZCc7XG4gICAgICAgIGlmICh3YWxsZXQpXG4gICAgICAgICAgICByZXR1cm4gJ0Nvbm5lY3QnO1xuICAgICAgICByZXR1cm4gJ0Nvbm5lY3QgV2FsbGV0JztcbiAgICB9LCBbY2hpbGRyZW4sIGNvbm5lY3RpbmcsIGNvbm5lY3RlZCwgd2FsbGV0XSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tdHJpZ2dlclwiLCBkaXNhYmxlZDogZGlzYWJsZWQgfHwgIXdhbGxldCB8fCBjb25uZWN0aW5nIHx8IGNvbm5lY3RlZCwgc3RhcnRJY29uOiB3YWxsZXQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEljb24sIHsgd2FsbGV0OiB3YWxsZXQgfSkgOiB1bmRlZmluZWQsIG9uQ2xpY2s6IGhhbmRsZUNsaWNrIH0sIHByb3BzKSwgY29udGVudCkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdhbGxldENvbm5lY3RCdXR0b24uanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSAnLi9XYWxsZXRJY29uJztcbmV4cG9ydCBjb25zdCBXYWxsZXREaXNjb25uZWN0QnV0dG9uID0gKF9hKSA9PiB7XG4gICAgdmFyIHsgY2hpbGRyZW4sIGRpc2FibGVkLCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCJdKTtcbiAgICBjb25zdCB7IHdhbGxldCwgZGlzY29ubmVjdCwgZGlzY29ubmVjdGluZyB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spXG4gICAgICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICBkaXNjb25uZWN0KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICB9LCBbb25DbGljaywgZGlzY29ubmVjdF0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBpZiAoZGlzY29ubmVjdGluZylcbiAgICAgICAgICAgIHJldHVybiAnRGlzY29ubmVjdGluZyAuLi4nO1xuICAgICAgICBpZiAod2FsbGV0KVxuICAgICAgICAgICAgcmV0dXJuICdEaXNjb25uZWN0JztcbiAgICAgICAgcmV0dXJuICdEaXNjb25uZWN0IFdhbGxldCc7XG4gICAgfSwgW2NoaWxkcmVuLCBkaXNjb25uZWN0aW5nLCB3YWxsZXRdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi10cmlnZ2VyXCIsIGRpc2FibGVkOiBkaXNhYmxlZCB8fCAhd2FsbGV0LCBzdGFydEljb246IHdhbGxldCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSA6IHVuZGVmaW5lZCwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjb250ZW50KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2FsbGV0RGlzY29ubmVjdEJ1dHRvbi5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldEljb24gPSAoX2EpID0+IHtcbiAgICB2YXIgeyB3YWxsZXQgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wid2FsbGV0XCJdKTtcbiAgICByZXR1cm4gd2FsbGV0ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7IHNyYzogd2FsbGV0Lmljb24sIGFsdDogYCR7d2FsbGV0Lm5hbWV9IGljb25gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2FsbGV0SWNvbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vV2FsbGV0SWNvbic7XG5leHBvcnQgY29uc3QgV2FsbGV0TGlzdEl0ZW0gPSAoeyBoYW5kbGVDbGljaywgdGFiSW5kZXgsIHdhbGxldCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgb25DbGljazogaGFuZGxlQ2xpY2ssIGVuZEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSwgdGFiSW5kZXg6IHRhYkluZGV4IH0sIHdhbGxldC5uYW1lKSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdhbGxldExpc3RJdGVtLmpzLm1hcCIsImltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tICcuL0NvbGxhcHNlJztcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSAnLi91c2VXYWxsZXRNb2RhbCc7XG5pbXBvcnQgeyBXYWxsZXRMaXN0SXRlbSB9IGZyb20gJy4vV2FsbGV0TGlzdEl0ZW0nO1xuZXhwb3J0IGNvbnN0IFdhbGxldE1vZGFsID0gKHsgY2xhc3NOYW1lID0gJycsIGxvZ28sIGZlYXR1cmVkV2FsbGV0cyA9IDMsIGNvbnRhaW5lciA9ICdib2R5JywgfSkgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB7IHdhbGxldHMsIHNlbGVjdCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmYWRlSW4sIHNldEZhZGVJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3BvcnRhbCwgc2V0UG9ydGFsXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtmZWF0dXJlZCwgbW9yZV0gPSB1c2VNZW1vKCgpID0+IFt3YWxsZXRzLnNsaWNlKDAsIGZlYXR1cmVkV2FsbGV0cyksIHdhbGxldHMuc2xpY2UoZmVhdHVyZWRXYWxsZXRzKV0sIFt3YWxsZXRzLCBmZWF0dXJlZFdhbGxldHNdKTtcbiAgICBjb25zdCBoaWRlTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldEZhZGVJbihmYWxzZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VmlzaWJsZShmYWxzZSksIDE1MCk7XG4gICAgfSwgW3NldEZhZGVJbiwgc2V0VmlzaWJsZV0pO1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhpZGVNb2RhbCgpO1xuICAgIH0sIFtoaWRlTW9kYWxdKTtcbiAgICBjb25zdCBoYW5kbGVXYWxsZXRDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCwgd2FsbGV0TmFtZSkgPT4ge1xuICAgICAgICBzZWxlY3Qod2FsbGV0TmFtZSk7XG4gICAgICAgIGhhbmRsZUNsb3NlKGV2ZW50KTtcbiAgICB9LCBbc2VsZWN0LCBoYW5kbGVDbG9zZV0pO1xuICAgIGNvbnN0IGhhbmRsZUNvbGxhcHNlQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpLCBbc2V0RXhwYW5kZWQsIGV4cGFuZGVkXSk7XG4gICAgY29uc3QgaGFuZGxlVGFiS2V5ID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBoZXJlIHdlIHF1ZXJ5IGFsbCBmb2N1c2FibGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBmaXJzdEVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbGFzdEVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAvLyBpZiBnb2luZyBiYWNrd2FyZCBieSBwcmVzc2luZyB0YWIgYW5kIGZpcnN0RWxlbWVudCBpcyBhY3RpdmUsIHNoaWZ0IGZvY3VzIHRvIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsYXN0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBnb2luZyBmb3J3YXJkIGJ5IHByZXNzaW5nIHRhYiBhbmQgbGFzdEVsZW1lbnQgaXMgYWN0aXZlLCBzaGlmdCBmb2N1cyB0byBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyc3RFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtyZWZdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGhpZGVNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZVRhYktleShldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIEdldCBvcmlnaW5hbCBvdmVyZmxvd1xuICAgICAgICBjb25zdCB7IG92ZXJmbG93IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgLy8gSGFjayB0byBlbmFibGUgZmFkZSBpbiBhbmltYXRpb24gYWZ0ZXIgbW91bnRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRGYWRlSW4odHJ1ZSksIDApO1xuICAgICAgICAvLyBQcmV2ZW50IHNjcm9sbGluZyBvbiBtb3VudFxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIC8vIExpc3RlbiBmb3Iga2V5ZG93biBldmVudHNcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZS1lbmFibGUgc2Nyb2xsaW5nIHdoZW4gY29tcG9uZW50IHVubW91bnRzXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaGlkZU1vZGFsLCBoYW5kbGVUYWJLZXldKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4gc2V0UG9ydGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSksIFtzZXRQb3J0YWwsIGNvbnRhaW5lcl0pO1xuICAgIHJldHVybiAocG9ydGFsICYmXG4gICAgICAgIGNyZWF0ZVBvcnRhbChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC10aXRsZVwiLCBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsIGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLW1vZGFsICR7ZmFkZUluICYmICd3YWxsZXQtYWRhcHRlci1tb2RhbC1mYWRlLWluJ30gJHtjbGFzc05hbWV9YCwgcmVmOiByZWYsIHJvbGU6IFwiZGlhbG9nXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItbW9kYWwtd3JhcHBlciAkeyFsb2dvICYmICd3YWxsZXQtYWRhcHRlci1tb2RhbC13cmFwcGVyLW5vLWxvZ28nfWAgfSxcbiAgICAgICAgICAgICAgICAgICAgbG9nbyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1sb2dvLXdyYXBwZXJcIiB9LCB0eXBlb2YgbG9nbyA9PT0gJ3N0cmluZycgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGFsdDogXCJsb2dvXCIsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1sb2dvXCIsIHNyYzogbG9nbyB9KSkgOiAobG9nbykpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLXRpdGxlXCIsIGlkOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLXRpdGxlXCIgfSwgXCJDb25uZWN0IFdhbGxldFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IGhhbmRsZUNsb3NlLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtYnV0dG9uLWNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB3aWR0aDogXCIxNFwiLCBoZWlnaHQ6IFwiMTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMTQgMTIuNDYxIDguMyA2Ljc3Mmw1LjIzNC01LjIzM0wxMi4wMDYgMCA2Ljc3MiA1LjIzNCAxLjU0IDAgMCAxLjUzOWw1LjIzNCA1LjIzM0wwIDEyLjAwNmwxLjUzOSAxLjUyOEw2Ljc3MiA4LjNsNS42OSA1LjdMMTQgMTIuNDYxelwiIH0pKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1saXN0XCIgfSwgZmVhdHVyZWQubWFwKCh3YWxsZXQpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldExpc3RJdGVtLCB7IGtleTogd2FsbGV0Lm5hbWUsIGhhbmRsZUNsaWNrOiAoZXZlbnQpID0+IGhhbmRsZVdhbGxldENsaWNrKGV2ZW50LCB3YWxsZXQubmFtZSksIHdhbGxldDogd2FsbGV0IH0pKSkpLFxuICAgICAgICAgICAgICAgICAgICBtb3JlLmxlbmd0aCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2xsYXBzZSwgeyBleHBhbmRlZDogZXhwYW5kZWQsIGlkOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWNvbGxhcHNlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtbGlzdFwiIH0sIG1vcmUubWFwKCh3YWxsZXQpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldExpc3RJdGVtLCB7IGtleTogd2FsbGV0Lm5hbWUsIGhhbmRsZUNsaWNrOiAoZXZlbnQpID0+IGhhbmRsZVdhbGxldENsaWNrKGV2ZW50LCB3YWxsZXQubmFtZSksIHRhYkluZGV4OiBleHBhbmRlZCA/IDAgOiAtMSwgd2FsbGV0OiB3YWxsZXQgfSkpKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgXCJhcmlhLWNvbnRyb2xzXCI6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtY29sbGFwc2VcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IGV4cGFuZGVkLCBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1tb2RhbC1jb2xsYXBzZS1idXR0b24gJHtleHBhbmRlZCAmJiAnd2FsbGV0LWFkYXB0ZXItbW9kYWwtY29sbGFwc2UtYnV0dG9uLWFjdGl2ZSd9YCwgZW5kSWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHdpZHRoOiBcIjExXCIsIGhlaWdodDogXCI2XCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIm01LjkzOCA1LjczIDQuMjgtNC4xMjZhLjkxNS45MTUgMCAwIDAgMC0xLjMyMiAxIDEgMCAwIDAtMS4zNzEgMEw1LjI1MyAzLjczNiAxLjY1OS4yNzJhMSAxIDAgMCAwLTEuMzcxIDBBLjkzLjkzIDAgMCAwIDAgLjkzMmMwIC4yNDYuMS40OC4yODguNjYybDQuMjggNC4xMjVhLjk5Ljk5IDAgMCAwIDEuMzcuMDF6XCIgfSkpLCBvbkNsaWNrOiBoYW5kbGVDb2xsYXBzZUNsaWNrIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQgPyAnTGVzcycgOiAnTW9yZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgb3B0aW9uc1wiKSkpIDogbnVsbCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1vdmVybGF5XCIsIG9uTW91c2VEb3duOiBoYW5kbGVDbG9zZSB9KSksIHBvcnRhbCkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdhbGxldE1vZGFsLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSAnLi91c2VXYWxsZXRNb2RhbCc7XG5leHBvcnQgY29uc3QgV2FsbGV0TW9kYWxCdXR0b24gPSAoX2EpID0+IHtcbiAgICB2YXIgeyBjaGlsZHJlbiA9ICdTZWxlY3QgV2FsbGV0Jywgb25DbGljayB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcIm9uQ2xpY2tcIl0pO1xuICAgIGNvbnN0IHsgdmlzaWJsZSwgc2V0VmlzaWJsZSB9ID0gdXNlV2FsbGV0TW9kYWwoKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DbGljaylcbiAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKTtcbiAgICB9LCBbb25DbGljaywgc2V0VmlzaWJsZSwgdmlzaWJsZV0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXRyaWdnZXJcIiwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjaGlsZHJlbikpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdhbGxldE1vZGFsQnV0dG9uLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IFdhbGxldE1vZGFsQ29udGV4dCB9IGZyb20gJy4vdXNlV2FsbGV0TW9kYWwnO1xuaW1wb3J0IHsgV2FsbGV0TW9kYWwgfSBmcm9tICcuL1dhbGxldE1vZGFsJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbFByb3ZpZGVyID0gKF9hKSA9PiB7XG4gICAgdmFyIHsgY2hpbGRyZW4gfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIl0pO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TW9kYWxDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7XG4gICAgICAgICAgICB2aXNpYmxlLFxuICAgICAgICAgICAgc2V0VmlzaWJsZSxcbiAgICAgICAgfSB9LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdmlzaWJsZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldE1vZGFsLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2FsbGV0TW9kYWxQcm92aWRlci5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VXYWxsZXRNb2RhbCB9IGZyb20gJy4vdXNlV2FsbGV0TW9kYWwnO1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdEJ1dHRvbiB9IGZyb20gJy4vV2FsbGV0Q29ubmVjdEJ1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSAnLi9XYWxsZXRJY29uJztcbmltcG9ydCB7IFdhbGxldE1vZGFsQnV0dG9uIH0gZnJvbSAnLi9XYWxsZXRNb2RhbEJ1dHRvbic7XG5leHBvcnQgY29uc3QgV2FsbGV0TXVsdGlCdXR0b24gPSAoX2EpID0+IHtcbiAgICB2YXIgeyBjaGlsZHJlbiB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiXSk7XG4gICAgY29uc3QgeyBwdWJsaWNLZXksIHdhbGxldCwgZGlzY29ubmVjdCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgYmFzZTU4ID0gdXNlTWVtbygoKSA9PiBwdWJsaWNLZXkgPT09IG51bGwgfHwgcHVibGljS2V5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwdWJsaWNLZXkudG9CYXNlNTgoKSwgW3B1YmxpY0tleV0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBpZiAoIXdhbGxldCB8fCAhYmFzZTU4KVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBiYXNlNTguc2xpY2UoMCwgNCkgKyAnLi4nICsgYmFzZTU4LnNsaWNlKC00KTtcbiAgICB9LCBbY2hpbGRyZW4sIHdhbGxldCwgYmFzZTU4XSk7XG4gICAgY29uc3QgY29weUFkZHJlc3MgPSB1c2VDYWxsYmFjaygoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKGJhc2U1OCkge1xuICAgICAgICAgICAgeWllbGQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYmFzZTU4KTtcbiAgICAgICAgICAgIHNldENvcGllZCh0cnVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkKGZhbHNlKSwgNDAwKTtcbiAgICAgICAgfVxuICAgIH0pLCBbYmFzZTU4XSk7XG4gICAgY29uc3Qgb3BlbkRyb3Bkb3duID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0QWN0aXZlKHRydWUpLCBbc2V0QWN0aXZlXSk7XG4gICAgY29uc3QgY2xvc2VEcm9wZG93biA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEFjdGl2ZShmYWxzZSksIFtzZXRBY3RpdmVdKTtcbiAgICBjb25zdCBvcGVuTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICB9LCBbc2V0VmlzaWJsZSwgY2xvc2VEcm9wZG93bl0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGNsaWNraW5nIGRyb3Bkb3duIG9yIGl0cyBkZXNjZW5kYW50c1xuICAgICAgICAgICAgaWYgKCFub2RlIHx8IG5vZGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfSwgW3JlZiwgY2xvc2VEcm9wZG93bl0pO1xuICAgIGlmICghd2FsbGV0KVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRNb2RhbEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbiAgICBpZiAoIWJhc2U1OClcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0Q29ubmVjdEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd25cIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IFwiYXJpYS1leHBhbmRlZFwiOiBhY3RpdmUsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tdHJpZ2dlclwiLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7IHBvaW50ZXJFdmVudHM6IGFjdGl2ZSA/ICdub25lJyA6ICdhdXRvJyB9LCBwcm9wcy5zdHlsZSksIG9uQ2xpY2s6IG9wZW5Ecm9wZG93biwgc3RhcnRJY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEljb24sIHsgd2FsbGV0OiB3YWxsZXQgfSkgfSwgcHJvcHMpLCBjb250ZW50KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgXCJhcmlhLWxhYmVsXCI6IFwiZHJvcGRvd24tbGlzdFwiLCBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0ICR7YWN0aXZlICYmICd3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWFjdGl2ZSd9YCwgcmVmOiByZWYsIHJvbGU6IFwibWVudVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBjb3B5QWRkcmVzcywgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QtaXRlbVwiLCByb2xlOiBcIm1lbnVpdGVtXCIgfSwgY29waWVkID8gJ0NvcGllZCcgOiAnQ29weSBhZGRyZXNzJyksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBvcGVuTW9kYWwsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWl0ZW1cIiwgcm9sZTogXCJtZW51aXRlbVwiIH0sIFwiQ29ubmVjdCBhIGRpZmZlcmVudCB3YWxsZXRcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBkaXNjb25uZWN0LCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd24tbGlzdC1pdGVtXCIsIHJvbGU6IFwibWVudWl0ZW1cIiB9LCBcIkRpc2Nvbm5lY3RcIikpKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2FsbGV0TXVsdGlCdXR0b24uanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi91c2VXYWxsZXRNb2RhbCc7XG5leHBvcnQgKiBmcm9tICcuL1dhbGxldENvbm5lY3RCdXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9XYWxsZXRNb2RhbCc7XG5leHBvcnQgKiBmcm9tICcuL1dhbGxldE1vZGFsQnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vV2FsbGV0TW9kYWxQcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL1dhbGxldERpc2Nvbm5lY3RCdXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9XYWxsZXRJY29uJztcbmV4cG9ydCAqIGZyb20gJy4vV2FsbGV0TXVsdGlCdXR0b24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VXYWxsZXRNb2RhbCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChXYWxsZXRNb2RhbENvbnRleHQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlV2FsbGV0TW9kYWwuanMubWFwIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbm5lY3Rpb25Db250ZXh0IH0gZnJvbSAnLi91c2VDb25uZWN0aW9uJztcbmV4cG9ydCBjb25zdCBDb25uZWN0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgZW5kcG9pbnQsIGNvbmZpZyA9IHsgY29tbWl0bWVudDogJ2NvbmZpcm1lZCcgfSwgfSkgPT4ge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB1c2VNZW1vKCgpID0+IG5ldyBDb25uZWN0aW9uKGVuZHBvaW50LCBjb25maWcpLCBbZW5kcG9pbnQsIGNvbmZpZ10pO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3Rpb25Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7IGNvbm5lY3Rpb24gfSB9LCBjaGlsZHJlbik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29ubmVjdGlvblByb3ZpZGVyLmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIFdhbGxldE5vdFJlYWR5RXJyb3IsIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3VzZUxvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyBXYWxsZXRDb250ZXh0IH0gZnJvbSAnLi91c2VXYWxsZXQnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHdhbGxldDogbnVsbCxcbiAgICBhZGFwdGVyOiBudWxsLFxuICAgIHJlYWR5OiBmYWxzZSxcbiAgICBwdWJsaWNLZXk6IG51bGwsXG4gICAgY29ubmVjdGVkOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgV2FsbGV0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgd2FsbGV0cywgYXV0b0Nvbm5lY3QgPSBmYWxzZSwgb25FcnJvciA9IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksIGxvY2FsU3RvcmFnZUtleSA9ICd3YWxsZXROYW1lJywgfSkgPT4ge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZUxvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXksIG51bGwpO1xuICAgIGNvbnN0IFt7IHdhbGxldCwgYWRhcHRlciwgcmVhZHksIHB1YmxpY0tleSwgY29ubmVjdGVkIH0sIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgW2Nvbm5lY3RpbmcsIHNldENvbm5lY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkaXNjb25uZWN0aW5nLCBzZXREaXNjb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBNYXAgb2Ygd2FsbGV0IG5hbWVzIHRvIHdhbGxldHNcbiAgICBjb25zdCB3YWxsZXRzQnlOYW1lID0gdXNlTWVtbygoKSA9PiB3YWxsZXRzLnJlZHVjZSgod2FsbGV0c0J5TmFtZSwgd2FsbGV0KSA9PiB7XG4gICAgICAgIHdhbGxldHNCeU5hbWVbd2FsbGV0Lm5hbWVdID0gd2FsbGV0O1xuICAgICAgICByZXR1cm4gd2FsbGV0c0J5TmFtZTtcbiAgICB9LCB7fSksIFt3YWxsZXRzXSk7XG4gICAgLy8gV2hlbiB0aGUgc2VsZWN0ZWQgd2FsbGV0IGNoYW5nZXMsIGluaXRpYWxpemUgdGhlIHN0YXRlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2FsbGV0ID0gKG5hbWUgJiYgd2FsbGV0c0J5TmFtZVtuYW1lXSkgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgYWRhcHRlciA9IHdhbGxldCAmJiB3YWxsZXQuYWRhcHRlcigpO1xuICAgICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICAgICAgY29uc3QgeyByZWFkeSwgcHVibGljS2V5LCBjb25uZWN0ZWQgfSA9IGFkYXB0ZXI7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IHdhbGxldCwgYWRhcHRlciwgY29ubmVjdGVkLCBwdWJsaWNLZXksIHJlYWR5IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0U3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sIFtuYW1lLCB3YWxsZXRzQnlOYW1lLCBzZXRTdGF0ZV0pO1xuICAgIC8vIElmIGF1dG9Db25uZWN0IGlzIGVuYWJsZWQsIHRyeSB0byBjb25uZWN0IHdoZW4gdGhlIGFkYXB0ZXIgY2hhbmdlcyBhbmQgaXMgcmVhZHlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoYXV0b0Nvbm5lY3QgJiYgYWRhcHRlciAmJiByZWFkeSAmJiAhY29ubmVjdGluZyAmJiAhY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbm5lY3RpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCB0aHJvdyBlcnJvciwgYnV0IG9uRXJyb3Igd2lsbCBzdGlsbCBiZSBjYWxsZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgfSwgW2F1dG9Db25uZWN0LCBhZGFwdGVyLCByZWFkeSwgY29ubmVjdGluZywgY29ubmVjdGVkLCBzZXRDb25uZWN0aW5nLCBzZXROYW1lXSk7XG4gICAgLy8gU2VsZWN0IGEgd2FsbGV0IGJ5IG5hbWVcbiAgICBjb25zdCBzZWxlY3QgPSB1c2VDYWxsYmFjaygobmV3TmFtZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBuZXdOYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoYWRhcHRlcilcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICBzZXROYW1lKG5ld05hbWUpO1xuICAgIH0pLCBbbmFtZSwgYWRhcHRlciwgc2V0TmFtZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIHJlYWR5IGV2ZW50XG4gICAgY29uc3Qgb25SZWFkeSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFN0YXRlKChzdGF0ZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IHJlYWR5OiB0cnVlIH0pKSksIFtzZXRTdGF0ZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIGNvbm5lY3QgZXZlbnRcbiAgICBjb25zdCBvbkNvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgeyBjb25uZWN0ZWQsIHB1YmxpY0tleSwgcmVhZHkgfSA9IGFkYXB0ZXI7XG4gICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IGNvbm5lY3RlZCxcbiAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgIHJlYWR5IH0pKSk7XG4gICAgfSwgW2FkYXB0ZXIsIHNldFN0YXRlXSk7XG4gICAgLy8gSGFuZGxlIHRoZSBhZGFwdGVyJ3MgZGlzY29ubmVjdCBldmVudFxuICAgIGNvbnN0IG9uRGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldE5hbWUobnVsbCksIFtzZXROYW1lXSk7XG4gICAgLy8gQ29ubmVjdCB0aGUgYWRhcHRlciB0byB0aGUgd2FsbGV0XG4gICAgY29uc3QgY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoY29ubmVjdGluZyB8fCBkaXNjb25uZWN0aW5nIHx8IGNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF3YWxsZXQgfHwgIWFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZWFkeSkge1xuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHdhbGxldC51cmwsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFdhbGxldE5vdFJlYWR5RXJyb3IoKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q29ubmVjdGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9KSwgW2Nvbm5lY3RpbmcsIGRpc2Nvbm5lY3RpbmcsIGNvbm5lY3RlZCwgd2FsbGV0LCBhZGFwdGVyLCBvbkVycm9yLCByZWFkeSwgc2V0TmFtZSwgc2V0Q29ubmVjdGluZ10pO1xuICAgIC8vIERpc2Nvbm5lY3QgdGhlIGFkYXB0ZXIgZnJvbSB0aGUgd2FsbGV0XG4gICAgY29uc3QgZGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoZGlzY29ubmVjdGluZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgcmV0dXJuIHNldE5hbWUobnVsbCk7XG4gICAgICAgIHNldERpc2Nvbm5lY3RpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICBzZXREaXNjb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0pLCBbZGlzY29ubmVjdGluZywgYWRhcHRlciwgc2V0TmFtZSwgc2V0RGlzY29ubmVjdGluZ10pO1xuICAgIC8vIFNlbmQgYSB0cmFuc2FjdGlvbiB1c2luZyB0aGUgcHJvdmlkZWQgY29ubmVjdGlvblxuICAgIGNvbnN0IHNlbmRUcmFuc2FjdGlvbiA9IHVzZUNhbGxiYWNrKCh0cmFuc2FjdGlvbiwgY29ubmVjdGlvbiwgb3B0aW9ucykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcikge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbm5lY3RlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBjb25uZWN0aW9uLCBvcHRpb25zKTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIC8vIFNpZ24gYSB0cmFuc2FjdGlvbiBpZiB0aGUgd2FsbGV0IHN1cHBvcnRzIGl0XG4gICAgY29uc3Qgc2lnblRyYW5zYWN0aW9uID0gdXNlTWVtbygoKSA9PiBhZGFwdGVyICYmICdzaWduVHJhbnNhY3Rpb24nIGluIGFkYXB0ZXJcbiAgICAgICAgPyAodHJhbnNhY3Rpb24pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuc2lnblRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgOiB1bmRlZmluZWQsIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICAvLyBTaWduIG11bHRpcGxlIHRyYW5zYWN0aW9ucyBpZiB0aGUgd2FsbGV0IHN1cHBvcnRzIGl0XG4gICAgY29uc3Qgc2lnbkFsbFRyYW5zYWN0aW9ucyA9IHVzZU1lbW8oKCkgPT4gYWRhcHRlciAmJiAnc2lnbkFsbFRyYW5zYWN0aW9ucycgaW4gYWRhcHRlclxuICAgICAgICA/ICh0cmFuc2FjdGlvbnMpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuc2lnbkFsbFRyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnMpO1xuICAgICAgICB9KVxuICAgICAgICA6IHVuZGVmaW5lZCwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIC8vIFNpZ24gYW4gYXJiaXRyYXJ5IG1lc3NhZ2UgaWYgdGhlIHdhbGxldCBzdXBwb3J0cyBpdFxuICAgIGNvbnN0IHNpZ25NZXNzYWdlID0gdXNlTWVtbygoKSA9PiBhZGFwdGVyICYmICdzaWduTWVzc2FnZScgaW4gYWRhcHRlclxuICAgICAgICA/IChtZXNzYWdlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLnNpZ25NZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB9KVxuICAgICAgICA6IHVuZGVmaW5lZCwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIC8vIFNldHVwIGFuZCB0ZWFyZG93biBldmVudCBsaXN0ZW5lcnMgd2hlbiB0aGUgYWRhcHRlciBjaGFuZ2VzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ3JlYWR5Jywgb25SZWFkeSk7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QpO1xuICAgICAgICAgICAgYWRhcHRlci5vbignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ3JlYWR5Jywgb25SZWFkeSk7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ2Nvbm5lY3QnLCBvbkNvbm5lY3QpO1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdkaXNjb25uZWN0Jywgb25EaXNjb25uZWN0KTtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCBbYWRhcHRlciwgb25SZWFkeSwgb25Db25uZWN0LCBvbkRpc2Nvbm5lY3QsIG9uRXJyb3JdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0Q29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZToge1xuICAgICAgICAgICAgd2FsbGV0cyxcbiAgICAgICAgICAgIGF1dG9Db25uZWN0LFxuICAgICAgICAgICAgc2VsZWN0LFxuICAgICAgICAgICAgd2FsbGV0LFxuICAgICAgICAgICAgYWRhcHRlcixcbiAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgIHJlYWR5LFxuICAgICAgICAgICAgY29ubmVjdGluZyxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RpbmcsXG4gICAgICAgICAgICBjb25uZWN0ZWQsXG4gICAgICAgICAgICBjb25uZWN0LFxuICAgICAgICAgICAgZGlzY29ubmVjdCxcbiAgICAgICAgICAgIHNlbmRUcmFuc2FjdGlvbixcbiAgICAgICAgICAgIHNpZ25UcmFuc2FjdGlvbixcbiAgICAgICAgICAgIHNpZ25BbGxUcmFuc2FjdGlvbnMsXG4gICAgICAgICAgICBzaWduTWVzc2FnZSxcbiAgICAgICAgfSB9LCBjaGlsZHJlbikpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdhbGxldFByb3ZpZGVyLmpzLm1hcCIsImltcG9ydCB7IFdhbGxldEVycm9yIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlJztcbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RTZWxlY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcic7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JzLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vdXNlQW5jaG9yV2FsbGV0JztcbmV4cG9ydCAqIGZyb20gJy4vQ29ubmVjdGlvblByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlQ29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3VzZUxvY2FsU3RvcmFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZVdhbGxldCc7XG5leHBvcnQgKiBmcm9tICcuL1dhbGxldFByb3ZpZGVyJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICcuL3VzZVdhbGxldCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlQW5jaG9yV2FsbGV0KCkge1xuICAgIGNvbnN0IHsgcHVibGljS2V5LCBzaWduVHJhbnNhY3Rpb24sIHNpZ25BbGxUcmFuc2FjdGlvbnMgfSA9IHVzZVdhbGxldCgpO1xuICAgIHJldHVybiB1c2VNZW1vKCgpID0+IHB1YmxpY0tleSAmJiBzaWduVHJhbnNhY3Rpb24gJiYgc2lnbkFsbFRyYW5zYWN0aW9uc1xuICAgICAgICA/IHsgcHVibGljS2V5LCBzaWduVHJhbnNhY3Rpb24sIHNpZ25BbGxUcmFuc2FjdGlvbnMgfVxuICAgICAgICA6IHVuZGVmaW5lZCwgW3B1YmxpY0tleSwgc2lnblRyYW5zYWN0aW9uLCBzaWduQWxsVHJhbnNhY3Rpb25zXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VBbmNob3JXYWxsZXQuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBDb25uZWN0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbm5lY3Rpb24oKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQ29ubmVjdGlvbkNvbnRleHQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlQ29ubmVjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlKGtleSwgZGVmYXVsdFN0YXRlKSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0U3RhdGU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdFN0YXRlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNldExvY2FsU3RvcmFnZSA9IHVzZUNhbGxiYWNrKChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBpZiAobmV3VmFsdWUgPT09IHZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkobmV3VmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH0sIFt2YWx1ZSwgc2V0VmFsdWUsIGtleV0pO1xuICAgIHJldHVybiBbdmFsdWUsIHNldExvY2FsU3RvcmFnZV07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VMb2NhbFN0b3JhZ2UuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5leHBvcnQgZnVuY3Rpb24gdXNlV2FsbGV0KCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFdhbGxldENvbnRleHQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlV2FsbGV0LmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcm9qZWN0LXNlcnVtL2FuY2hvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc29sYW5hL3dlYjMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRlbWl0dGVyM1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU1dSIiwiYW5jaG9yIiwicmVxdWlyZSIsIlN5c3RlbVByb2dyYW0iLCJLZXlwYWlyIiwiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsIkxBTVBPUlRTX1BFUl9TT0wiLCJ3ZWIzIiwicnBjVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JQQ19VUkwiLCJjb25uZWN0aW9uIiwia2V5IiwiSlNPTiIsInBhcnNlIiwia2V5cGFpciIsImZyb21TZWNyZXRLZXkiLCJVaW50OEFycmF5Iiwid2FsbGV0IiwiV2FsbGV0Iiwib3B0aW9uIiwiUHJvdmlkZXIiLCJkZWZhdWx0T3B0aW9ucyIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJteUFjY291bnQiLCJnZW5lcmF0ZSIsImlkbCIsInZlcnNpb24iLCJuYW1lIiwiaW5zdHJ1Y3Rpb25zIiwiYWNjb3VudHMiLCJpc011dCIsImlzU2lnbmVyIiwiYXJncyIsInR5cGUiLCJraW5kIiwiZmllbGRzIiwibWV0YWRhdGEiLCJhZGRyZXNzIiwicHJvZ3JhbUlkIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJwcm9ncmFtX2ZldGNoZXIiLCJfYXBpIiwibWV0aG9kIiwiYmlnX251bWJlciIsImNvbnNvbGUiLCJsb2ciLCJycGMiLCJpbml0aWFsaXplIiwicHVibGljS2V5IiwidXNlciIsInN5c3RlbVByb2dyYW0iLCJzaWduZXJzIiwiY2F0Y2giLCJlIiwidXBkYXRlIiwiYWNjb3VudCIsImZldGNoIiwiYmFsYW5jZSIsImdldEJhbGFuY2UiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsImRhdGEiLCJjb3VudCIsInNpZ25hdHVyZSIsInJlcXVlc3RBaXJkcm9wIiwidXNlVXNlciIsIm11dGF0ZSIsImVycm9yIiwibG9hZGluZyIsInVzZVdhbGxldCIsIldhbGxldE11bHRpQnV0dG9uIiwiV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiIsIkhvbWVQYWdlIiwiY29ubmVjdGVkIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwicmVmIiwiY29sb3IiLCJtYXJnaW4iLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsIkV2ZW50RW1pdHRlciIsIkJhc2VXYWxsZXRBZGFwdGVyIiwiV2FsbGV0QWRhcHRlck5ldHdvcmsiLCJXYWxsZXRFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwiV2FsbGV0Tm90Rm91bmRFcnJvciIsImFyZ3VtZW50cyIsIldhbGxldE5vdEluc3RhbGxlZEVycm9yIiwiV2FsbGV0Tm90UmVhZHlFcnJvciIsIldhbGxldENvbm5lY3Rpb25FcnJvciIsIldhbGxldERpc2Nvbm5lY3RlZEVycm9yIiwiV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yIiwiV2FsbGV0QWNjb3VudEVycm9yIiwiV2FsbGV0UHVibGljS2V5RXJyb3IiLCJXYWxsZXRLZXlwYWlyRXJyb3IiLCJXYWxsZXROb3RDb25uZWN0ZWRFcnJvciIsIldhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yIiwiV2FsbGV0U2lnbk1lc3NhZ2VFcnJvciIsIldhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yIiwiV2FsbGV0VGltZW91dEVycm9yIiwiV2FsbGV0V2luZG93QmxvY2tlZEVycm9yIiwiV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJwb2xsIiwiY2FsbGJhY2siLCJpbnRlcnZhbCIsInNldFRpbWVvdXQiLCJwb2xsVW50aWxSZWFkeSIsImFkYXB0ZXIiLCJwb2xsSW50ZXJ2YWwiLCJwb2xsQ291bnQiLCJyZWFkeSIsImVtaXQiLCJ3YXJuIiwiX19yZXN0IiwicyIsInQiLCJwIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsImkiLCJsZW5ndGgiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIkJhc2VTaWduZXJXYWxsZXRBZGFwdGVyIiwic2VuZFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb24iLCJvcHRpb25zIiwiZmVlUGF5ZXIiLCJyZWNlbnRCbG9ja2hhc2giLCJnZXRSZWNlbnRCbG9ja2hhc2giLCJibG9ja2hhc2giLCJzZW5kT3B0aW9ucyIsInBhcnRpYWxTaWduIiwic2lnblRyYW5zYWN0aW9uIiwicmF3VHJhbnNhY3Rpb24iLCJzZXJpYWxpemUiLCJzZW5kUmF3VHJhbnNhY3Rpb24iLCJCYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXIiLCJSZWFjdCIsIkJ1dHRvbiIsInByb3BzIiwiZW5kSWNvbiIsInN0YXJ0SWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJzdHlsZSIsImFzc2lnbiIsInRhYkluZGV4IiwiY2hpbGRyZW4iLCJ1c2VMYXlvdXRFZmZlY3QiLCJDb2xsYXBzZSIsImlkIiwiZXhwYW5kZWQiLCJpbnN0YW50IiwidHJhbnNpdGlvbiIsIm9wZW5Db2xsYXBzZSIsIm5vZGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbG9zZUNvbGxhcHNlIiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJoYW5kbGVDb21wbGV0ZSIsImhhbmRsZVRyYW5zaXRpb25FbmQiLCJldmVudCIsInRhcmdldCIsInByb3BlcnR5TmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicm9sZSIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsIldhbGxldEljb24iLCJXYWxsZXRDb25uZWN0QnV0dG9uIiwiX2EiLCJjb25uZWN0IiwiY29ubmVjdGluZyIsImhhbmRsZUNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsImNvbnRlbnQiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsInNyYyIsImljb24iLCJhbHQiLCJXYWxsZXRMaXN0SXRlbSIsInVzZVN0YXRlIiwiY3JlYXRlUG9ydGFsIiwidXNlV2FsbGV0TW9kYWwiLCJXYWxsZXRNb2RhbCIsImxvZ28iLCJmZWF0dXJlZFdhbGxldHMiLCJjb250YWluZXIiLCJ3YWxsZXRzIiwic2VsZWN0Iiwic2V0VmlzaWJsZSIsInNldEV4cGFuZGVkIiwiZmFkZUluIiwic2V0RmFkZUluIiwicG9ydGFsIiwic2V0UG9ydGFsIiwiZmVhdHVyZWQiLCJtb3JlIiwic2xpY2UiLCJoaWRlTW9kYWwiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVdhbGxldENsaWNrIiwid2FsbGV0TmFtZSIsImhhbmRsZUNvbGxhcHNlQ2xpY2siLCJoYW5kbGVUYWJLZXkiLCJmb2N1c2FibGVFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaXJzdEVsZW1lbnQiLCJsYXN0RWxlbWVudCIsInNoaWZ0S2V5IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJkIiwibWFwIiwiRnJhZ21lbnQiLCJ4bWxucyIsIm9uTW91c2VEb3duIiwiV2FsbGV0TW9kYWxCdXR0b24iLCJ2aXNpYmxlIiwiV2FsbGV0TW9kYWxDb250ZXh0IiwiV2FsbGV0TW9kYWxQcm92aWRlciIsInVzZUVmZmVjdCIsImNvcGllZCIsInNldENvcGllZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImJhc2U1OCIsInRvQmFzZTU4IiwiY29weUFkZHJlc3MiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJvcGVuRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwib3Blbk1vZGFsIiwibGlzdGVuZXIiLCJjb250YWlucyIsInBvaW50ZXJFdmVudHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbm5lY3Rpb25Db250ZXh0IiwiQ29ubmVjdGlvblByb3ZpZGVyIiwiZW5kcG9pbnQiLCJjb25maWciLCJjb21taXRtZW50IiwiV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciIsInVzZUxvY2FsU3RvcmFnZSIsIldhbGxldENvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJXYWxsZXRQcm92aWRlciIsImF1dG9Db25uZWN0Iiwib25FcnJvciIsImxvY2FsU3RvcmFnZUtleSIsInNldE5hbWUiLCJzZXRTdGF0ZSIsInNldENvbm5lY3RpbmciLCJzZXREaXNjb25uZWN0aW5nIiwid2FsbGV0c0J5TmFtZSIsInJlZHVjZSIsIm5ld05hbWUiLCJvblJlYWR5Iiwic3RhdGUiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJvcGVuIiwidXJsIiwic2lnbkFsbFRyYW5zYWN0aW9ucyIsInRyYW5zYWN0aW9ucyIsInNpZ25NZXNzYWdlIiwib24iLCJvZmYiLCJ1c2VBbmNob3JXYWxsZXQiLCJ1c2VDb25uZWN0aW9uIiwiZGVmYXVsdFN0YXRlIiwic2V0VmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0TG9jYWxTdG9yYWdlIiwibmV3VmFsdWUiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=