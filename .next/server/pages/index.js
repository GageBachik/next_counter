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
      data: account.data.toString()
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
        lineNumber: 185,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
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
      lineNumber: 209,
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
      lineNumber: 213,
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
            lineNumber: 245,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "mb-5",
            children: user.data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
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
                  lineNumber: 252,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                ref: ref,
                name: "big_number",
                type: "text",
                placeholder: "1234",
                className: "input input-bordered"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 250,
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
                lineNumber: 263,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxPQUFPdEUsSUFBSSxDQUFDQyxLQUFMLENBQVdxRSxLQUFYLENBQVA7QUFDSixXQUFPeU8sWUFBUDtBQUNILEdBUGlDLENBQWxDO0FBUUEsUUFBTUksZUFBZSxHQUFHeEgsa0RBQVcsQ0FBRXlILFFBQUQsSUFBYztBQUM5QyxRQUFJQSxRQUFRLEtBQUs5TyxLQUFqQixFQUNJO0FBQ0owTyxJQUFBQSxRQUFRLENBQUNJLFFBQUQsQ0FBUjs7QUFDQSxRQUFJQSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkJILE1BQUFBLFlBQVksQ0FBQ0ksVUFBYixDQUF3QnRULEdBQXhCO0FBQ0gsS0FGRCxNQUdLO0FBQ0RrVCxNQUFBQSxZQUFZLENBQUNLLE9BQWIsQ0FBcUJ2VCxHQUFyQixFQUEwQkMsSUFBSSxDQUFDdVQsU0FBTCxDQUFlSCxRQUFmLENBQTFCO0FBQ0g7QUFDSixHQVZrQyxFQVVoQyxDQUFDOU8sS0FBRCxFQUFRME8sUUFBUixFQUFrQmpULEdBQWxCLENBVmdDLENBQW5DO0FBV0EsU0FBTyxDQUFDdUUsS0FBRCxFQUFRNk8sZUFBUixDQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRDtBQUNPLE1BQU05QixhQUFhLGdCQUFHVCxvREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFDQSxTQUFTbE4sU0FBVCxHQUFxQjtBQUN4QixTQUFPbU4saURBQVUsQ0FBQ1EsYUFBRCxDQUFqQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVKRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2UvbGliL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9wb2xsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2UvbGliL3NpZ25lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9Db2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0Q29ubmVjdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0RGlzY29ubmVjdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0SWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL1dhbGxldE1vZGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9XYWxsZXRNb2RhbEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0TW9kYWxQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvV2FsbGV0TXVsdGlCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi91c2VXYWxsZXRNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvQ29ubmVjdGlvblByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9XYWxsZXRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvZXJyb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvdXNlQW5jaG9yV2FsbGV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi91c2VDb25uZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi91c2VMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL3VzZVdhbGxldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJvamVjdC1zZXJ1bS9hbmNob3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc29sYW5hL3dlYjMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudGVtaXR0ZXIzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG4vL2FuY2hvciBib2lsZXJwbGF0ZSBzZXR1cFxyXG5jb25zdCBhbmNob3IgPSByZXF1aXJlKFwiQHByb2plY3Qtc2VydW0vYW5jaG9yXCIpO1xyXG5jb25zdCB7IFN5c3RlbVByb2dyYW0sIEtleXBhaXIsIENvbm5lY3Rpb24sIFB1YmxpY0tleSwgTEFNUE9SVFNfUEVSX1NPTCB9ID1cclxuICBhbmNob3Iud2ViMztcclxuY29uc3QgcnBjVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUlBDX1VSTDtcclxuY29uc3QgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKHJwY1VybCwgXCJyZWNlbnRcIik7XHJcbmNvbnN0IGtleSA9IEpTT04ucGFyc2UoXHJcbiAgXCJbMTE1LDIyMCwyNDgsMTY0LDE3OSw3NiwyOCwxOTcsOTMsMTA3LDcwLDE1MCwxNjgsMjExLDI1LDE4NiwyMjUsNzksNjgsOTAsMTgyLDEzNSwyMTYsMTc3LDEyMywyMjksMTIsMTQ1LDE4MywxOTcsMTIzLDY5LDExMSwxMiwxNDEsMTAyLDExNywxNjAsMjMsMTUxLDE5MCw3NCwxNTAsMTc5LDE4NCwyMzEsNzAsMTE5LDEyMiwxMzIsMjE0LDE2Nyw1NSwyNTQsMTQzLDExMyw4OSw1Niw2NywxMTUsMjUsMjEsNDAsNjNdXCJcclxuKTtcclxuY29uc3Qga2V5cGFpciA9IEtleXBhaXIuZnJvbVNlY3JldEtleShuZXcgVWludDhBcnJheShrZXkpKTtcclxuY29uc3Qgd2FsbGV0ID0gbmV3IGFuY2hvci5XYWxsZXQoa2V5cGFpcik7XHJcbmNvbnN0IG9wdGlvbiA9IGFuY2hvci5Qcm92aWRlci5kZWZhdWx0T3B0aW9ucygpO1xyXG5jb25zdCBwcm92aWRlciA9IG5ldyBhbmNob3IuUHJvdmlkZXIoY29ubmVjdGlvbiwgd2FsbGV0LCBvcHRpb24pO1xyXG5hbmNob3Iuc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xyXG5cclxuY29uc3QgbXlBY2NvdW50ID0gS2V5cGFpci5nZW5lcmF0ZSgpO1xyXG5cclxuY29uc3QgaWRsID0ge1xyXG4gIHZlcnNpb246IFwiMC4wLjBcIixcclxuICBuYW1lOiBcIm5leHRfY291bnRlclwiLFxyXG4gIGluc3RydWN0aW9uczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImluaXRpYWxpemVcIixcclxuICAgICAgYWNjb3VudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIm15QWNjb3VudFwiLFxyXG4gICAgICAgICAgaXNNdXQ6IHRydWUsXHJcbiAgICAgICAgICBpc1NpZ25lcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgICAgICAgaXNNdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNTaWduZXI6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJzeXN0ZW1Qcm9ncmFtXCIsXHJcbiAgICAgICAgICBpc011dDogZmFsc2UsXHJcbiAgICAgICAgICBpc1NpZ25lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgYXJnczogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInVwZGF0ZVwiLFxyXG4gICAgICBhY2NvdW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwibXlBY2NvdW50XCIsXHJcbiAgICAgICAgICBpc011dDogdHJ1ZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBhcmdzOiBbXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBhY2NvdW50czogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk15QWNjb3VudFwiLFxyXG4gICAgICB0eXBlOiB7XHJcbiAgICAgICAga2luZDogXCJzdHJ1Y3RcIixcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJjb3VudFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInU2NFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIG1ldGFkYXRhOiB7XHJcbiAgICBhZGRyZXNzOiBcIjltVHZ0SG1NbURUa21YNmNVb1hRd3pwOTc3RUF6WWlkeW5BTmZQOU56UFVHXCIsXHJcbiAgfSxcclxufTtcclxuY29uc3QgcHJvZ3JhbUlkID0gbmV3IFB1YmxpY0tleShcIjltVHZ0SG1NbURUa21YNmNVb1hRd3pwOTc3RUF6WWlkeW5BTmZQOU56UFVHXCIpO1xyXG5jb25zdCBwcm9ncmFtID0gbmV3IGFuY2hvci5Qcm9ncmFtKGlkbCwgcHJvZ3JhbUlkKTtcclxuLy9lbmQgYW5jaG9yIGJvaWxlcnBsYXRlIHNldHVwXHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgX2FwaTogc3RyaW5nLFxyXG4gIG1ldGhvZDogc3RyaW5nLFxyXG4gIGJpZ19udW1iZXI6IHN0cmluZ1xyXG4pIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIGBmZXRjaGluZyBwcm9ncmFtIHdpdGggbWV0aG9kOiAke21ldGhvZH0gYW5kIGJpZ19udW1iZXI6ICR7YmlnX251bWJlcn1gXHJcbiAgKTtcclxuXHJcbiAgaWYgKG1ldGhvZCA9PSBcImluaXRpYWxpemVcIikge1xyXG4gICAgYXdhaXQgcHJvZ3JhbS5ycGNcclxuICAgICAgLmluaXRpYWxpemUoXHJcbiAgICAgICAgLypuZXcgYW5jaG9yLkJOKGJpZ19udW1iZXIpLCovIHtcclxuICAgICAgICAgIGFjY291bnRzOiB7XHJcbiAgICAgICAgICAgIG15QWNjb3VudDogbXlBY2NvdW50LnB1YmxpY0tleSxcclxuICAgICAgICAgICAgdXNlcjogcHJvdmlkZXIud2FsbGV0LnB1YmxpY0tleSxcclxuICAgICAgICAgICAgc3lzdGVtUHJvZ3JhbTogU3lzdGVtUHJvZ3JhbS5wcm9ncmFtSWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2lnbmVyczogW215QWNjb3VudF0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2UgaWYgKG1ldGhvZCA9PSBcInVwZGF0ZVwiKSB7XHJcbiAgICBhd2FpdCBwcm9ncmFtLnJwY1xyXG4gICAgICAudXBkYXRlKFxyXG4gICAgICAgIC8qbmV3IGFuY2hvci5CTihiaWdfbnVtYmVyKSwqLyB7XHJcbiAgICAgICAgICBhY2NvdW50czoge1xyXG4gICAgICAgICAgICBteUFjY291bnQ6IG15QWNjb3VudC5wdWJsaWNLZXksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFjY291bnQgPSBhd2FpdCBwcm9ncmFtLmFjY291bnQubXlBY2NvdW50XHJcbiAgICAuZmV0Y2gobXlBY2NvdW50LnB1YmxpY0tleSlcclxuICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIGNvbnNvbGUubG9nKFwiYWNjb3VudFwiLCBhY2NvdW50KTtcclxuICBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKG15QWNjb3VudC5wdWJsaWNLZXkpO1xyXG4gIGNvbnNvbGUubG9nKFwiYmFsYW5jZVwiLCBiYWxhbmNlIC8gTEFNUE9SVFNfUEVSX1NPTCk7XHJcbiAgY29uc29sZS5sb2coXCJwdWJrZXk6IFwiLCBteUFjY291bnQucHVibGljS2V5LnRvU3RyaW5nKCkpO1xyXG4gIGlmIChhY2NvdW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHsgZGF0YTogYWNjb3VudC5kYXRhLnRvU3RyaW5nKCkgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgY29ubmVjdGlvblxyXG4gICAgICAucmVxdWVzdEFpcmRyb3AobXlBY2NvdW50LnB1YmxpY0tleSwgTEFNUE9SVFNfUEVSX1NPTClcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gYXdhaXQgY29ubmVjdGlvbi5jb25maXJtVHJhbnNhY3Rpb24oc2lnbmF0dXJlKTtcclxuICAgIC8vIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldEJhbGFuY2UobXlBY2NvdW50LnB1YmxpY0tleSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImJhbGFuY2VcIiwgYmFsYW5jZSAvIExBTVBPUlRTX1BFUl9TT0wpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJwdWJrZXk6IFwiLCBteUFjY291bnQucHVibGljS2V5LnRvU3RyaW5nKCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJhaXJkcm9wIGNvbmZpcm1lZFwiLCBzaWduYXR1cmUpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogXCJJbml0aWFsaXplIGFuIGFjY291bnQgd2l0aCB0aGUgZm9ybSB0byB0aGUgcmlnaHQgdG8gZ2V0IHN0YXJ0ZWQuIFRoZSBhY2NvdW50IGRhdGEgd2lsbCBzaG93IHVwIGluIHRoaXMgYm94IGFmdGVyd2FyZHMuXCIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXNlVXNlcihtZXRob2Q/OiBzdHJpbmcsIGJpZ19udW1iZXI/OiBzdHJpbmcpIHtcclxuICBjb25zb2xlLmxvZyhtZXRob2QsIGJpZ19udW1iZXIpO1xyXG4gIG1ldGhvZCA9IG1ldGhvZCB8fCBcIk5vIEFjY291bnRcIjtcclxuICBiaWdfbnVtYmVyID0gYmlnX251bWJlciB8fCBcIjAwMDBcIjtcclxuICBjb25zdCB7IGRhdGEsIG11dGF0ZSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIFtcInByb2dyYW1fcnBjXCIsIG1ldGhvZCwgYmlnX251bWJlcl0sXHJcbiAgICBwcm9ncmFtX2ZldGNoZXJcclxuICApO1xyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3I7XHJcbiAgY29uc29sZS5sb2coXCJkYXRhIGluIHVzZVVzZXI6IFwiLCBkYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGluZyxcclxuICAgIHVzZXI6IGRhdGEsXHJcbiAgICBtdXRhdGUsXHJcbiAgfTtcclxufVxyXG4vL3BoYW50b20gd2FsbGV0XHJcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7IFdhbGxldE11bHRpQnV0dG9uIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIC8vIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAvLyAgIGNvbnN0IHdhbGxldHMgPSB1c2VNZW1vKFxyXG4gIC8vICAgICAoKSA9PiBbZ2V0UGhhbnRvbVdhbGxldCgpXSxcclxuICAvLyAgICAgW1wiaHR0cDovLzEyNy4wLjAuMTo4ODk5XCJdXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XHJcblxyXG4gIGlmICghd2FsbGV0LmNvbm5lY3RlZCkge1xyXG4gICAgLyogSWYgdGhlIHVzZXIncyB3YWxsZXQgaXMgbm90IGNvbm5lY3RlZCwgZGlzcGxheSBjb25uZWN0IHdhbGxldCBidXR0b24uICovXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTAwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgLy8gYmFzaWMgYW5jaG9yIHJwYyBpbml0IGNhbGwgYW5kIHJldHVybiBvbiBwYWdlIGxvYWRcclxuICAvLyBjb25zdCBbdHgsIHNldFR4XSA9IHVzZVN0YXRlKHsgdHg6IFwiLi4ubG9hZGluZ1wiIH0pO1xyXG4gIC8vIGNvbnN0IGZldGNoVHggPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICBjb25zdCB0eCA9IGF3YWl0IHByb2dyYW0ucnBjLmluaXRpYWxpemUoKTtcclxuICAvLyAgIHJldHVybiB0eDtcclxuICAvLyB9O1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBnZXRUeCA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgY29uc3QgdHggPSBhd2FpdCBmZXRjaFR4KCk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwidHhcIiwgdHgpO1xyXG4gIC8vICAgICBzZXRUeCh7IHR4OiB0eCB9KTtcclxuICAvLyAgIH07XHJcbiAgLy8gICBnZXRUeCgpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy8gTmV3IG5leHRqcyBzd3Igc2V0dXAgZm9yIG1vcmUgYWR2YW5jZWQgcnBjIGNhbGxzXHJcbiAgY29uc3QgeyB1c2VyLCBtdXRhdGUsIGxvYWRpbmcgfSA9IHVzZVVzZXIoKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgbWFyZ2luOiBcIjVlbVwiIH19PlxyXG4gICAgICAgIFtFUlJPUl06IHVzZXIgaXMgcmV0dXJpbmcgdW5kZWZpbmVkXHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAvLyBCYXNpYyBhbGVydCBzZXR1cCBmb3IgaW50aWFsaXppbmcgYW4gYW4gYWNuaG9yIFJQQyBhbmQgcmV0dXJuaW5nIHRoZSB0eFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG0tOFwiPlxyXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj5cclxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgLy8gICAgICAgPHN2Z1xyXG4gICAgLy8gICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIC8vICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgLy8gICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIC8vICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiBteC0yIHN0cm9rZS1jdXJyZW50XCJcclxuICAgIC8vICAgICAgID5cclxuICAgIC8vICAgICAgICAgPHBhdGhcclxuICAgIC8vICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgLy8gICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgLy8gICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAvLyAgICAgICAgICAgZD1cIk0xMyAxNmgtMXYtNGgtMW0xLTRoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiXHJcbiAgICAvLyAgICAgICAgID48L3BhdGg+XHJcbiAgICAvLyAgICAgICA8L3N2Zz5cclxuICAgIC8vICAgICAgIDxsYWJlbD57dHgudHh9PC9sYWJlbD5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgPC9kaXY+XHJcbiAgICAvLyA8L2Rpdj5cclxuXHJcbiAgICAvLyBJbnRlcm1lZGlhdGUgc2V0dXAgZm9yIGFkZGluZyBkYXRhIHRvIHlvdXIgYWNjb3VudCBhbmQgdGhlbiB1cGRhdGluZyB0aGUgZGF0YVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIG1pbi1oLXNjcmVlbiBiZy1iYXNlLTIwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIGp1c3RpZnktY2VudGVyIGhlcm8tY29udGVudCBsZzpmbGV4LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNSB0ZXh0LTV4bCBmb250LWJvbGRcIj5BbmNob3IgQWNjb3VudCBEYXRhPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTVcIj57dXNlci5kYXRhfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZmxleC1zaHJpbmstMCB3LWZ1bGwgbWF4LXctc20gc2hhZG93LTJ4bCBiZy1iYXNlLTEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5EYXRhPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJiaWdfbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzNFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTZcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyLmRhdGE6IFwiLCB1c2VyLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpZ19udW1iZXI6IGFueSA9IHJlZi5jdXJyZW50IGFzIGFueTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEgPT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiSW5pdGlhbGl6ZSBhbiBhY2NvdW50IHdpdGggdGhlIGZvcm0gdG8gdGhlIHJpZ2h0IHRvIGdldCBzdGFydGVkLiBUaGUgYWNjb3VudCBkYXRhIHdpbGwgc2hvdyB1cCBpbiB0aGlzIGJveCBhZnRlcndhcmRzLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3JhbV9ycGNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbml0aWFsaXplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpZ19udW1iZXIudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtdXRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJvZ3JhbV9mZXRjaGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2dyYW1fcnBjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpZ19udW1iZXIudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtdXRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmV4cG9ydCB7IEV2ZW50RW1pdHRlciB9O1xuZXhwb3J0IGNsYXNzIEJhc2VXYWxsZXRBZGFwdGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbn1cbmV4cG9ydCB2YXIgV2FsbGV0QWRhcHRlck5ldHdvcms7XG4oZnVuY3Rpb24gKFdhbGxldEFkYXB0ZXJOZXR3b3JrKSB7XG4gICAgV2FsbGV0QWRhcHRlck5ldHdvcmtbXCJNYWlubmV0XCJdID0gXCJtYWlubmV0LWJldGFcIjtcbiAgICBXYWxsZXRBZGFwdGVyTmV0d29ya1tcIlRlc3RuZXRcIl0gPSBcInRlc3RuZXRcIjtcbiAgICBXYWxsZXRBZGFwdGVyTmV0d29ya1tcIkRldm5ldFwiXSA9IFwiZGV2bmV0XCI7XG59KShXYWxsZXRBZGFwdGVyTmV0d29yayB8fCAoV2FsbGV0QWRhcHRlck5ldHdvcmsgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRhcHRlci5qcy5tYXAiLCJleHBvcnQgY2xhc3MgV2FsbGV0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBlcnJvcikge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RGb3VuZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90Rm91bmRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdEluc3RhbGxlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RSZWFkeUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90UmVhZHlFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldENvbm5lY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldENvbm5lY3Rpb25FcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldERpc2Nvbm5lY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0RGlzY29ubmVjdGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXREaXNjb25uZWN0aW9uRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRBY2NvdW50RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRBY2NvdW50RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRQdWJsaWNLZXlFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFB1YmxpY0tleUVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0S2V5cGFpckVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0S2V5cGFpckVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RDb25uZWN0ZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0U2VuZFRyYW5zYWN0aW9uRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRTaWduTWVzc2FnZUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0U2lnbk1lc3NhZ2VFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRUaW1lb3V0RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRUaW1lb3V0RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRXaW5kb3dCbG9ja2VkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRXaW5kb3dCbG9ja2VkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRXaW5kb3dDbG9zZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFdpbmRvd0Nsb3NlZEVycm9yJztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvcnMuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vcG9sbCc7XG5leHBvcnQgKiBmcm9tICcuL3NpZ25lcic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBwb2xsKGNhbGxiYWNrLCBpbnRlcnZhbCwgY291bnQpIHtcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgZG9uZSA9IHlpZWxkIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBpZiAoIWRvbmUpXG4gICAgICAgICAgICAgICAgcG9sbChjYWxsYmFjaywgaW50ZXJ2YWwsIGNvdW50IC0gMSk7XG4gICAgICAgIH0pLCBpbnRlcnZhbCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBvbGxVbnRpbFJlYWR5KGFkYXB0ZXIsIHBvbGxJbnRlcnZhbCwgcG9sbENvdW50KSB7XG4gICAgcG9sbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhZHkgfSA9IGFkYXB0ZXI7XG4gICAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICAgICAgaWYgKCFhZGFwdGVyLmVtaXQoJ3JlYWR5JykpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7YWRhcHRlci5jb25zdHJ1Y3Rvci5uYW1lfSBpcyByZWFkeSBidXQgbm8gbGlzdGVuZXIgd2FzIHJlZ2lzdGVyZWRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVhZHk7XG4gICAgfSwgcG9sbEludGVydmFsLCBwb2xsQ291bnQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9sbC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IEJhc2VXYWxsZXRBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7IFdhbGxldEVycm9yLCBXYWxsZXRTZW5kVHJhbnNhY3Rpb25FcnJvciB9IGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCBjbGFzcyBCYXNlU2lnbmVyV2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VXYWxsZXRBZGFwdGVyIHtcbiAgICBzZW5kVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24sIGNvbm5lY3Rpb24sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5mZWVQYXllciB8fCAodHJhbnNhY3Rpb24uZmVlUGF5ZXIgPSB0aGlzLnB1YmxpY0tleSB8fCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5yZWNlbnRCbG9ja2hhc2ggfHwgKHRyYW5zYWN0aW9uLnJlY2VudEJsb2NraGFzaCA9ICh5aWVsZCBjb25uZWN0aW9uLmdldFJlY2VudEJsb2NraGFzaCgnZmluYWxpemVkJykpLmJsb2NraGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2lnbmVycyB9ID0gb3B0aW9ucywgc2VuZE9wdGlvbnMgPSBfX3Jlc3Qob3B0aW9ucywgW1wic2lnbmVyc1wiXSk7XG4gICAgICAgICAgICAgICAgICAgIChzaWduZXJzID09PSBudWxsIHx8IHNpZ25lcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNpZ25lcnMubGVuZ3RoKSAmJiB0cmFuc2FjdGlvbi5wYXJ0aWFsU2lnbiguLi5zaWduZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSB5aWVsZCB0aGlzLnNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhd1RyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb24uc2VyaWFsaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjb25uZWN0aW9uLnNlbmRSYXdUcmFuc2FjdGlvbihyYXdUcmFuc2FjdGlvbiwgc2VuZE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgV2FsbGV0RXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VTaWduZXJXYWxsZXRBZGFwdGVyIHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25lci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGp1c3RpZnlDb250ZW50ID0gcHJvcHMuZW5kSWNvbiB8fCBwcm9wcy5zdGFydEljb24gPyAnc3BhY2UtYmV0d2VlbicgOiAnY2VudGVyJztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1idXR0b24gJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YCwgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLCBvbkNsaWNrOiBwcm9wcy5vbkNsaWNrLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7IGp1c3RpZnlDb250ZW50IH0sIHByb3BzLnN0eWxlKSwgdGFiSW5kZXg6IHByb3BzLnRhYkluZGV4IHx8IDAgfSxcbiAgICAgICAgcHJvcHMuc3RhcnRJY29uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi1zdGFydC1pY29uXCIgfSwgcHJvcHMuc3RhcnRJY29uKSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIHByb3BzLmVuZEljb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLWVuZC1pY29uXCIgfSwgcHJvcHMuZW5kSWNvbikpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CdXR0b24uanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IENvbGxhcHNlID0gKHsgaWQsIGNoaWxkcmVuLCBleHBhbmRlZCA9IGZhbHNlIH0pID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgaW5zdGFudCA9IHVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJ2hlaWdodCAyNTBtcyBlYXNlLW91dCc7XG4gICAgY29uc3Qgb3BlbkNvbGxhcHNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gbm9kZS5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGNsb3NlQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICBub2RlLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgICBvcGVuQ29sbGFwc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlQ29sbGFwc2UoKTtcbiAgICAgICAgfVxuICAgIH0sIFtleHBhbmRlZF0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDb21wbGV0ZSgpIHtcbiAgICAgICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBub2RlLnN0eWxlLm92ZXJmbG93ID0gZXhwYW5kZWQgPyAnaW5pdGlhbCcgOiAnaGlkZGVuJztcbiAgICAgICAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChub2RlICYmIGV2ZW50LnRhcmdldCA9PT0gbm9kZSAmJiBldmVudC5wcm9wZXJ0eU5hbWUgPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5zdGFudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgaW5zdGFudC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKTtcbiAgICB9LCBbZXhwYW5kZWRdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjaGlsZHJlbjogY2hpbGRyZW4sIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1jb2xsYXBzZVwiLCBpZDogaWQsIHJlZjogcmVmLCByb2xlOiBcInJlZ2lvblwiLCBzdHlsZTogeyBoZWlnaHQ6IDAsIHRyYW5zaXRpb246IGluc3RhbnQuY3VycmVudCA/IHVuZGVmaW5lZCA6IHRyYW5zaXRpb24gfSB9KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29sbGFwc2UuanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSAnLi9XYWxsZXRJY29uJztcbmV4cG9ydCBjb25zdCBXYWxsZXRDb25uZWN0QnV0dG9uID0gKF9hKSA9PiB7XG4gICAgdmFyIHsgY2hpbGRyZW4sIGRpc2FibGVkLCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCJdKTtcbiAgICBjb25zdCB7IHdhbGxldCwgY29ubmVjdCwgY29ubmVjdGluZywgY29ubmVjdGVkIH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DbGljaylcbiAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gICAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcbiAgICAgICAgICAgIGNvbm5lY3QoKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIH0sIFtvbkNsaWNrLCBjb25uZWN0XSk7XG4gICAgY29uc3QgY29udGVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW4pXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIGlmIChjb25uZWN0aW5nKVxuICAgICAgICAgICAgcmV0dXJuICdDb25uZWN0aW5nIC4uLic7XG4gICAgICAgIGlmIChjb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm4gJ0Nvbm5lY3RlZCc7XG4gICAgICAgIGlmICh3YWxsZXQpXG4gICAgICAgICAgICByZXR1cm4gJ0Nvbm5lY3QnO1xuICAgICAgICByZXR1cm4gJ0Nvbm5lY3QgV2FsbGV0JztcbiAgICB9LCBbY2hpbGRyZW4sIGNvbm5lY3RpbmcsIGNvbm5lY3RlZCwgd2FsbGV0XSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tdHJpZ2dlclwiLCBkaXNhYmxlZDogZGlzYWJsZWQgfHwgIXdhbGxldCB8fCBjb25uZWN0aW5nIHx8IGNvbm5lY3RlZCwgc3RhcnRJY29uOiB3YWxsZXQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEljb24sIHsgd2FsbGV0OiB3YWxsZXQgfSkgOiB1bmRlZmluZWQsIG9uQ2xpY2s6IGhhbmRsZUNsaWNrIH0sIHByb3BzKSwgY29udGVudCkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdhbGxldENvbm5lY3RCdXR0b24uanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSAnLi9XYWxsZXRJY29uJztcbmV4cG9ydCBjb25zdCBXYWxsZXREaXNjb25uZWN0QnV0dG9uID0gKF9hKSA9PiB7XG4gICAgdmFyIHsgY2hpbGRyZW4sIGRpc2FibGVkLCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCJdKTtcbiAgICBjb25zdCB7IHdhbGxldCwgZGlzY29ubmVjdCwgZGlzY29ubmVjdGluZyB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spXG4gICAgICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICBkaXNjb25uZWN0KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICB9LCBbb25DbGljaywgZGlzY29ubmVjdF0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBpZiAoZGlzY29ubmVjdGluZylcbiAgICAgICAgICAgIHJldHVybiAnRGlzY29ubmVjdGluZyAuLi4nO1xuICAgICAgICBpZiAod2FsbGV0KVxuICAgICAgICAgICAgcmV0dXJuICdEaXNjb25uZWN0JztcbiAgICAgICAgcmV0dXJuICdEaXNjb25uZWN0IFdhbGxldCc7XG4gICAgfSwgW2NoaWxkcmVuLCBkaXNjb25uZWN0aW5nLCB3YWxsZXRdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi10cmlnZ2VyXCIsIGRpc2FibGVkOiBkaXNhYmxlZCB8fCAhd2FsbGV0LCBzdGFydEljb246IHdhbGxldCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSA6IHVuZGVmaW5lZCwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjb250ZW50KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2FsbGV0RGlzY29ubmVjdEJ1dHRvbi5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldEljb24gPSAoX2EpID0+IHtcbiAgICB2YXIgeyB3YWxsZXQgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wid2FsbGV0XCJdKTtcbiAgICByZXR1cm4gd2FsbGV0ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7IHNyYzogd2FsbGV0Lmljb24sIGFsdDogYCR7d2FsbGV0Lm5hbWV9IGljb25gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2FsbGV0SWNvbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vV2FsbGV0SWNvbic7XG5leHBvcnQgY29uc3QgV2FsbGV0TGlzdEl0ZW0gPSAoeyBoYW5kbGVDbGljaywgdGFiSW5kZXgsIHdhbGxldCB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgb25DbGljazogaGFuZGxlQ2xpY2ssIGVuZEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSwgdGFiSW5kZXg6IHRhYkluZGV4IH0sIHdhbGxldC5uYW1lKSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdhbGxldExpc3RJdGVtLmpzLm1hcCIsImltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tICcuL0NvbGxhcHNlJztcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSAnLi91c2VXYWxsZXRNb2RhbCc7XG5pbXBvcnQgeyBXYWxsZXRMaXN0SXRlbSB9IGZyb20gJy4vV2FsbGV0TGlzdEl0ZW0nO1xuZXhwb3J0IGNvbnN0IFdhbGxldE1vZGFsID0gKHsgY2xhc3NOYW1lID0gJycsIGxvZ28sIGZlYXR1cmVkV2FsbGV0cyA9IDMsIGNvbnRhaW5lciA9ICdib2R5JywgfSkgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB7IHdhbGxldHMsIHNlbGVjdCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmYWRlSW4sIHNldEZhZGVJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3BvcnRhbCwgc2V0UG9ydGFsXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtmZWF0dXJlZCwgbW9yZV0gPSB1c2VNZW1vKCgpID0+IFt3YWxsZXRzLnNsaWNlKDAsIGZlYXR1cmVkV2FsbGV0cyksIHdhbGxldHMuc2xpY2UoZmVhdHVyZWRXYWxsZXRzKV0sIFt3YWxsZXRzLCBmZWF0dXJlZFdhbGxldHNdKTtcbiAgICBjb25zdCBoaWRlTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldEZhZGVJbihmYWxzZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VmlzaWJsZShmYWxzZSksIDE1MCk7XG4gICAgfSwgW3NldEZhZGVJbiwgc2V0VmlzaWJsZV0pO1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhpZGVNb2RhbCgpO1xuICAgIH0sIFtoaWRlTW9kYWxdKTtcbiAgICBjb25zdCBoYW5kbGVXYWxsZXRDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCwgd2FsbGV0TmFtZSkgPT4ge1xuICAgICAgICBzZWxlY3Qod2FsbGV0TmFtZSk7XG4gICAgICAgIGhhbmRsZUNsb3NlKGV2ZW50KTtcbiAgICB9LCBbc2VsZWN0LCBoYW5kbGVDbG9zZV0pO1xuICAgIGNvbnN0IGhhbmRsZUNvbGxhcHNlQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpLCBbc2V0RXhwYW5kZWQsIGV4cGFuZGVkXSk7XG4gICAgY29uc3QgaGFuZGxlVGFiS2V5ID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBoZXJlIHdlIHF1ZXJ5IGFsbCBmb2N1c2FibGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBmaXJzdEVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbGFzdEVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAvLyBpZiBnb2luZyBiYWNrd2FyZCBieSBwcmVzc2luZyB0YWIgYW5kIGZpcnN0RWxlbWVudCBpcyBhY3RpdmUsIHNoaWZ0IGZvY3VzIHRvIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsYXN0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBnb2luZyBmb3J3YXJkIGJ5IHByZXNzaW5nIHRhYiBhbmQgbGFzdEVsZW1lbnQgaXMgYWN0aXZlLCBzaGlmdCBmb2N1cyB0byBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyc3RFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtyZWZdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGhpZGVNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZVRhYktleShldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIEdldCBvcmlnaW5hbCBvdmVyZmxvd1xuICAgICAgICBjb25zdCB7IG92ZXJmbG93IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgLy8gSGFjayB0byBlbmFibGUgZmFkZSBpbiBhbmltYXRpb24gYWZ0ZXIgbW91bnRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRGYWRlSW4odHJ1ZSksIDApO1xuICAgICAgICAvLyBQcmV2ZW50IHNjcm9sbGluZyBvbiBtb3VudFxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIC8vIExpc3RlbiBmb3Iga2V5ZG93biBldmVudHNcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZS1lbmFibGUgc2Nyb2xsaW5nIHdoZW4gY29tcG9uZW50IHVubW91bnRzXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaGlkZU1vZGFsLCBoYW5kbGVUYWJLZXldKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4gc2V0UG9ydGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSksIFtzZXRQb3J0YWwsIGNvbnRhaW5lcl0pO1xuICAgIHJldHVybiAocG9ydGFsICYmXG4gICAgICAgIGNyZWF0ZVBvcnRhbChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC10aXRsZVwiLCBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsIGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLW1vZGFsICR7ZmFkZUluICYmICd3YWxsZXQtYWRhcHRlci1tb2RhbC1mYWRlLWluJ30gJHtjbGFzc05hbWV9YCwgcmVmOiByZWYsIHJvbGU6IFwiZGlhbG9nXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItbW9kYWwtd3JhcHBlciAkeyFsb2dvICYmICd3YWxsZXQtYWRhcHRlci1tb2RhbC13cmFwcGVyLW5vLWxvZ28nfWAgfSxcbiAgICAgICAgICAgICAgICAgICAgbG9nbyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1sb2dvLXdyYXBwZXJcIiB9LCB0eXBlb2YgbG9nbyA9PT0gJ3N0cmluZycgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGFsdDogXCJsb2dvXCIsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1sb2dvXCIsIHNyYzogbG9nbyB9KSkgOiAobG9nbykpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLXRpdGxlXCIsIGlkOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLXRpdGxlXCIgfSwgXCJDb25uZWN0IFdhbGxldFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IGhhbmRsZUNsb3NlLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtYnV0dG9uLWNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB3aWR0aDogXCIxNFwiLCBoZWlnaHQ6IFwiMTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMTQgMTIuNDYxIDguMyA2Ljc3Mmw1LjIzNC01LjIzM0wxMi4wMDYgMCA2Ljc3MiA1LjIzNCAxLjU0IDAgMCAxLjUzOWw1LjIzNCA1LjIzM0wwIDEyLjAwNmwxLjUzOSAxLjUyOEw2Ljc3MiA4LjNsNS42OSA1LjdMMTQgMTIuNDYxelwiIH0pKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1saXN0XCIgfSwgZmVhdHVyZWQubWFwKCh3YWxsZXQpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldExpc3RJdGVtLCB7IGtleTogd2FsbGV0Lm5hbWUsIGhhbmRsZUNsaWNrOiAoZXZlbnQpID0+IGhhbmRsZVdhbGxldENsaWNrKGV2ZW50LCB3YWxsZXQubmFtZSksIHdhbGxldDogd2FsbGV0IH0pKSkpLFxuICAgICAgICAgICAgICAgICAgICBtb3JlLmxlbmd0aCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2xsYXBzZSwgeyBleHBhbmRlZDogZXhwYW5kZWQsIGlkOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWNvbGxhcHNlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtbGlzdFwiIH0sIG1vcmUubWFwKCh3YWxsZXQpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldExpc3RJdGVtLCB7IGtleTogd2FsbGV0Lm5hbWUsIGhhbmRsZUNsaWNrOiAoZXZlbnQpID0+IGhhbmRsZVdhbGxldENsaWNrKGV2ZW50LCB3YWxsZXQubmFtZSksIHRhYkluZGV4OiBleHBhbmRlZCA/IDAgOiAtMSwgd2FsbGV0OiB3YWxsZXQgfSkpKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgXCJhcmlhLWNvbnRyb2xzXCI6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtY29sbGFwc2VcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IGV4cGFuZGVkLCBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1tb2RhbC1jb2xsYXBzZS1idXR0b24gJHtleHBhbmRlZCAmJiAnd2FsbGV0LWFkYXB0ZXItbW9kYWwtY29sbGFwc2UtYnV0dG9uLWFjdGl2ZSd9YCwgZW5kSWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHdpZHRoOiBcIjExXCIsIGhlaWdodDogXCI2XCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIm01LjkzOCA1LjczIDQuMjgtNC4xMjZhLjkxNS45MTUgMCAwIDAgMC0xLjMyMiAxIDEgMCAwIDAtMS4zNzEgMEw1LjI1MyAzLjczNiAxLjY1OS4yNzJhMSAxIDAgMCAwLTEuMzcxIDBBLjkzLjkzIDAgMCAwIDAgLjkzMmMwIC4yNDYuMS40OC4yODguNjYybDQuMjggNC4xMjVhLjk5Ljk5IDAgMCAwIDEuMzcuMDF6XCIgfSkpLCBvbkNsaWNrOiBoYW5kbGVDb2xsYXBzZUNsaWNrIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQgPyAnTGVzcycgOiAnTW9yZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgb3B0aW9uc1wiKSkpIDogbnVsbCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1vdmVybGF5XCIsIG9uTW91c2VEb3duOiBoYW5kbGVDbG9zZSB9KSksIHBvcnRhbCkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdhbGxldE1vZGFsLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSAnLi91c2VXYWxsZXRNb2RhbCc7XG5leHBvcnQgY29uc3QgV2FsbGV0TW9kYWxCdXR0b24gPSAoX2EpID0+IHtcbiAgICB2YXIgeyBjaGlsZHJlbiA9ICdTZWxlY3QgV2FsbGV0Jywgb25DbGljayB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcIm9uQ2xpY2tcIl0pO1xuICAgIGNvbnN0IHsgdmlzaWJsZSwgc2V0VmlzaWJsZSB9ID0gdXNlV2FsbGV0TW9kYWwoKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DbGljaylcbiAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKTtcbiAgICB9LCBbb25DbGljaywgc2V0VmlzaWJsZSwgdmlzaWJsZV0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXRyaWdnZXJcIiwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjaGlsZHJlbikpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdhbGxldE1vZGFsQnV0dG9uLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IFdhbGxldE1vZGFsQ29udGV4dCB9IGZyb20gJy4vdXNlV2FsbGV0TW9kYWwnO1xuaW1wb3J0IHsgV2FsbGV0TW9kYWwgfSBmcm9tICcuL1dhbGxldE1vZGFsJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbFByb3ZpZGVyID0gKF9hKSA9PiB7XG4gICAgdmFyIHsgY2hpbGRyZW4gfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIl0pO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TW9kYWxDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7XG4gICAgICAgICAgICB2aXNpYmxlLFxuICAgICAgICAgICAgc2V0VmlzaWJsZSxcbiAgICAgICAgfSB9LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdmlzaWJsZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldE1vZGFsLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2FsbGV0TW9kYWxQcm92aWRlci5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VXYWxsZXRNb2RhbCB9IGZyb20gJy4vdXNlV2FsbGV0TW9kYWwnO1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdEJ1dHRvbiB9IGZyb20gJy4vV2FsbGV0Q29ubmVjdEJ1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSAnLi9XYWxsZXRJY29uJztcbmltcG9ydCB7IFdhbGxldE1vZGFsQnV0dG9uIH0gZnJvbSAnLi9XYWxsZXRNb2RhbEJ1dHRvbic7XG5leHBvcnQgY29uc3QgV2FsbGV0TXVsdGlCdXR0b24gPSAoX2EpID0+IHtcbiAgICB2YXIgeyBjaGlsZHJlbiB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiXSk7XG4gICAgY29uc3QgeyBwdWJsaWNLZXksIHdhbGxldCwgZGlzY29ubmVjdCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgYmFzZTU4ID0gdXNlTWVtbygoKSA9PiBwdWJsaWNLZXkgPT09IG51bGwgfHwgcHVibGljS2V5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwdWJsaWNLZXkudG9CYXNlNTgoKSwgW3B1YmxpY0tleV0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBpZiAoIXdhbGxldCB8fCAhYmFzZTU4KVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBiYXNlNTguc2xpY2UoMCwgNCkgKyAnLi4nICsgYmFzZTU4LnNsaWNlKC00KTtcbiAgICB9LCBbY2hpbGRyZW4sIHdhbGxldCwgYmFzZTU4XSk7XG4gICAgY29uc3QgY29weUFkZHJlc3MgPSB1c2VDYWxsYmFjaygoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKGJhc2U1OCkge1xuICAgICAgICAgICAgeWllbGQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYmFzZTU4KTtcbiAgICAgICAgICAgIHNldENvcGllZCh0cnVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkKGZhbHNlKSwgNDAwKTtcbiAgICAgICAgfVxuICAgIH0pLCBbYmFzZTU4XSk7XG4gICAgY29uc3Qgb3BlbkRyb3Bkb3duID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0QWN0aXZlKHRydWUpLCBbc2V0QWN0aXZlXSk7XG4gICAgY29uc3QgY2xvc2VEcm9wZG93biA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEFjdGl2ZShmYWxzZSksIFtzZXRBY3RpdmVdKTtcbiAgICBjb25zdCBvcGVuTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICB9LCBbc2V0VmlzaWJsZSwgY2xvc2VEcm9wZG93bl0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGNsaWNraW5nIGRyb3Bkb3duIG9yIGl0cyBkZXNjZW5kYW50c1xuICAgICAgICAgICAgaWYgKCFub2RlIHx8IG5vZGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfSwgW3JlZiwgY2xvc2VEcm9wZG93bl0pO1xuICAgIGlmICghd2FsbGV0KVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRNb2RhbEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbiAgICBpZiAoIWJhc2U1OClcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0Q29ubmVjdEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd25cIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IFwiYXJpYS1leHBhbmRlZFwiOiBhY3RpdmUsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tdHJpZ2dlclwiLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7IHBvaW50ZXJFdmVudHM6IGFjdGl2ZSA/ICdub25lJyA6ICdhdXRvJyB9LCBwcm9wcy5zdHlsZSksIG9uQ2xpY2s6IG9wZW5Ecm9wZG93biwgc3RhcnRJY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEljb24sIHsgd2FsbGV0OiB3YWxsZXQgfSkgfSwgcHJvcHMpLCBjb250ZW50KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgXCJhcmlhLWxhYmVsXCI6IFwiZHJvcGRvd24tbGlzdFwiLCBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0ICR7YWN0aXZlICYmICd3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWFjdGl2ZSd9YCwgcmVmOiByZWYsIHJvbGU6IFwibWVudVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBjb3B5QWRkcmVzcywgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QtaXRlbVwiLCByb2xlOiBcIm1lbnVpdGVtXCIgfSwgY29waWVkID8gJ0NvcGllZCcgOiAnQ29weSBhZGRyZXNzJyksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBvcGVuTW9kYWwsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWl0ZW1cIiwgcm9sZTogXCJtZW51aXRlbVwiIH0sIFwiQ29ubmVjdCBhIGRpZmZlcmVudCB3YWxsZXRcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBkaXNjb25uZWN0LCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd24tbGlzdC1pdGVtXCIsIHJvbGU6IFwibWVudWl0ZW1cIiB9LCBcIkRpc2Nvbm5lY3RcIikpKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2FsbGV0TXVsdGlCdXR0b24uanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi91c2VXYWxsZXRNb2RhbCc7XG5leHBvcnQgKiBmcm9tICcuL1dhbGxldENvbm5lY3RCdXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9XYWxsZXRNb2RhbCc7XG5leHBvcnQgKiBmcm9tICcuL1dhbGxldE1vZGFsQnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vV2FsbGV0TW9kYWxQcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL1dhbGxldERpc2Nvbm5lY3RCdXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9XYWxsZXRJY29uJztcbmV4cG9ydCAqIGZyb20gJy4vV2FsbGV0TXVsdGlCdXR0b24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VXYWxsZXRNb2RhbCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChXYWxsZXRNb2RhbENvbnRleHQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlV2FsbGV0TW9kYWwuanMubWFwIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbm5lY3Rpb25Db250ZXh0IH0gZnJvbSAnLi91c2VDb25uZWN0aW9uJztcbmV4cG9ydCBjb25zdCBDb25uZWN0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgZW5kcG9pbnQsIGNvbmZpZyA9IHsgY29tbWl0bWVudDogJ2NvbmZpcm1lZCcgfSwgfSkgPT4ge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB1c2VNZW1vKCgpID0+IG5ldyBDb25uZWN0aW9uKGVuZHBvaW50LCBjb25maWcpLCBbZW5kcG9pbnQsIGNvbmZpZ10pO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3Rpb25Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7IGNvbm5lY3Rpb24gfSB9LCBjaGlsZHJlbik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29ubmVjdGlvblByb3ZpZGVyLmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIFdhbGxldE5vdFJlYWR5RXJyb3IsIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3VzZUxvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyBXYWxsZXRDb250ZXh0IH0gZnJvbSAnLi91c2VXYWxsZXQnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHdhbGxldDogbnVsbCxcbiAgICBhZGFwdGVyOiBudWxsLFxuICAgIHJlYWR5OiBmYWxzZSxcbiAgICBwdWJsaWNLZXk6IG51bGwsXG4gICAgY29ubmVjdGVkOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgV2FsbGV0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgd2FsbGV0cywgYXV0b0Nvbm5lY3QgPSBmYWxzZSwgb25FcnJvciA9IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksIGxvY2FsU3RvcmFnZUtleSA9ICd3YWxsZXROYW1lJywgfSkgPT4ge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZUxvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXksIG51bGwpO1xuICAgIGNvbnN0IFt7IHdhbGxldCwgYWRhcHRlciwgcmVhZHksIHB1YmxpY0tleSwgY29ubmVjdGVkIH0sIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgW2Nvbm5lY3RpbmcsIHNldENvbm5lY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkaXNjb25uZWN0aW5nLCBzZXREaXNjb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBNYXAgb2Ygd2FsbGV0IG5hbWVzIHRvIHdhbGxldHNcbiAgICBjb25zdCB3YWxsZXRzQnlOYW1lID0gdXNlTWVtbygoKSA9PiB3YWxsZXRzLnJlZHVjZSgod2FsbGV0c0J5TmFtZSwgd2FsbGV0KSA9PiB7XG4gICAgICAgIHdhbGxldHNCeU5hbWVbd2FsbGV0Lm5hbWVdID0gd2FsbGV0O1xuICAgICAgICByZXR1cm4gd2FsbGV0c0J5TmFtZTtcbiAgICB9LCB7fSksIFt3YWxsZXRzXSk7XG4gICAgLy8gV2hlbiB0aGUgc2VsZWN0ZWQgd2FsbGV0IGNoYW5nZXMsIGluaXRpYWxpemUgdGhlIHN0YXRlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2FsbGV0ID0gKG5hbWUgJiYgd2FsbGV0c0J5TmFtZVtuYW1lXSkgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgYWRhcHRlciA9IHdhbGxldCAmJiB3YWxsZXQuYWRhcHRlcigpO1xuICAgICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICAgICAgY29uc3QgeyByZWFkeSwgcHVibGljS2V5LCBjb25uZWN0ZWQgfSA9IGFkYXB0ZXI7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IHdhbGxldCwgYWRhcHRlciwgY29ubmVjdGVkLCBwdWJsaWNLZXksIHJlYWR5IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0U3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sIFtuYW1lLCB3YWxsZXRzQnlOYW1lLCBzZXRTdGF0ZV0pO1xuICAgIC8vIElmIGF1dG9Db25uZWN0IGlzIGVuYWJsZWQsIHRyeSB0byBjb25uZWN0IHdoZW4gdGhlIGFkYXB0ZXIgY2hhbmdlcyBhbmQgaXMgcmVhZHlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoYXV0b0Nvbm5lY3QgJiYgYWRhcHRlciAmJiByZWFkeSAmJiAhY29ubmVjdGluZyAmJiAhY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbm5lY3RpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCB0aHJvdyBlcnJvciwgYnV0IG9uRXJyb3Igd2lsbCBzdGlsbCBiZSBjYWxsZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgfSwgW2F1dG9Db25uZWN0LCBhZGFwdGVyLCByZWFkeSwgY29ubmVjdGluZywgY29ubmVjdGVkLCBzZXRDb25uZWN0aW5nLCBzZXROYW1lXSk7XG4gICAgLy8gU2VsZWN0IGEgd2FsbGV0IGJ5IG5hbWVcbiAgICBjb25zdCBzZWxlY3QgPSB1c2VDYWxsYmFjaygobmV3TmFtZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBuZXdOYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoYWRhcHRlcilcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICBzZXROYW1lKG5ld05hbWUpO1xuICAgIH0pLCBbbmFtZSwgYWRhcHRlciwgc2V0TmFtZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIHJlYWR5IGV2ZW50XG4gICAgY29uc3Qgb25SZWFkeSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFN0YXRlKChzdGF0ZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IHJlYWR5OiB0cnVlIH0pKSksIFtzZXRTdGF0ZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIGNvbm5lY3QgZXZlbnRcbiAgICBjb25zdCBvbkNvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgeyBjb25uZWN0ZWQsIHB1YmxpY0tleSwgcmVhZHkgfSA9IGFkYXB0ZXI7XG4gICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IGNvbm5lY3RlZCxcbiAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgIHJlYWR5IH0pKSk7XG4gICAgfSwgW2FkYXB0ZXIsIHNldFN0YXRlXSk7XG4gICAgLy8gSGFuZGxlIHRoZSBhZGFwdGVyJ3MgZGlzY29ubmVjdCBldmVudFxuICAgIGNvbnN0IG9uRGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldE5hbWUobnVsbCksIFtzZXROYW1lXSk7XG4gICAgLy8gQ29ubmVjdCB0aGUgYWRhcHRlciB0byB0aGUgd2FsbGV0XG4gICAgY29uc3QgY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoY29ubmVjdGluZyB8fCBkaXNjb25uZWN0aW5nIHx8IGNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF3YWxsZXQgfHwgIWFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZWFkeSkge1xuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHdhbGxldC51cmwsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFdhbGxldE5vdFJlYWR5RXJyb3IoKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q29ubmVjdGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9KSwgW2Nvbm5lY3RpbmcsIGRpc2Nvbm5lY3RpbmcsIGNvbm5lY3RlZCwgd2FsbGV0LCBhZGFwdGVyLCBvbkVycm9yLCByZWFkeSwgc2V0TmFtZSwgc2V0Q29ubmVjdGluZ10pO1xuICAgIC8vIERpc2Nvbm5lY3QgdGhlIGFkYXB0ZXIgZnJvbSB0aGUgd2FsbGV0XG4gICAgY29uc3QgZGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoZGlzY29ubmVjdGluZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgcmV0dXJuIHNldE5hbWUobnVsbCk7XG4gICAgICAgIHNldERpc2Nvbm5lY3RpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICBzZXREaXNjb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0pLCBbZGlzY29ubmVjdGluZywgYWRhcHRlciwgc2V0TmFtZSwgc2V0RGlzY29ubmVjdGluZ10pO1xuICAgIC8vIFNlbmQgYSB0cmFuc2FjdGlvbiB1c2luZyB0aGUgcHJvdmlkZWQgY29ubmVjdGlvblxuICAgIGNvbnN0IHNlbmRUcmFuc2FjdGlvbiA9IHVzZUNhbGxiYWNrKCh0cmFuc2FjdGlvbiwgY29ubmVjdGlvbiwgb3B0aW9ucykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcikge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbm5lY3RlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBjb25uZWN0aW9uLCBvcHRpb25zKTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIC8vIFNpZ24gYSB0cmFuc2FjdGlvbiBpZiB0aGUgd2FsbGV0IHN1cHBvcnRzIGl0XG4gICAgY29uc3Qgc2lnblRyYW5zYWN0aW9uID0gdXNlTWVtbygoKSA9PiBhZGFwdGVyICYmICdzaWduVHJhbnNhY3Rpb24nIGluIGFkYXB0ZXJcbiAgICAgICAgPyAodHJhbnNhY3Rpb24pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuc2lnblRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgOiB1bmRlZmluZWQsIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICAvLyBTaWduIG11bHRpcGxlIHRyYW5zYWN0aW9ucyBpZiB0aGUgd2FsbGV0IHN1cHBvcnRzIGl0XG4gICAgY29uc3Qgc2lnbkFsbFRyYW5zYWN0aW9ucyA9IHVzZU1lbW8oKCkgPT4gYWRhcHRlciAmJiAnc2lnbkFsbFRyYW5zYWN0aW9ucycgaW4gYWRhcHRlclxuICAgICAgICA/ICh0cmFuc2FjdGlvbnMpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuc2lnbkFsbFRyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnMpO1xuICAgICAgICB9KVxuICAgICAgICA6IHVuZGVmaW5lZCwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIC8vIFNpZ24gYW4gYXJiaXRyYXJ5IG1lc3NhZ2UgaWYgdGhlIHdhbGxldCBzdXBwb3J0cyBpdFxuICAgIGNvbnN0IHNpZ25NZXNzYWdlID0gdXNlTWVtbygoKSA9PiBhZGFwdGVyICYmICdzaWduTWVzc2FnZScgaW4gYWRhcHRlclxuICAgICAgICA/IChtZXNzYWdlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLnNpZ25NZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB9KVxuICAgICAgICA6IHVuZGVmaW5lZCwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIC8vIFNldHVwIGFuZCB0ZWFyZG93biBldmVudCBsaXN0ZW5lcnMgd2hlbiB0aGUgYWRhcHRlciBjaGFuZ2VzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ3JlYWR5Jywgb25SZWFkeSk7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QpO1xuICAgICAgICAgICAgYWRhcHRlci5vbignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ3JlYWR5Jywgb25SZWFkeSk7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ2Nvbm5lY3QnLCBvbkNvbm5lY3QpO1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdkaXNjb25uZWN0Jywgb25EaXNjb25uZWN0KTtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCBbYWRhcHRlciwgb25SZWFkeSwgb25Db25uZWN0LCBvbkRpc2Nvbm5lY3QsIG9uRXJyb3JdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0Q29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZToge1xuICAgICAgICAgICAgd2FsbGV0cyxcbiAgICAgICAgICAgIGF1dG9Db25uZWN0LFxuICAgICAgICAgICAgc2VsZWN0LFxuICAgICAgICAgICAgd2FsbGV0LFxuICAgICAgICAgICAgYWRhcHRlcixcbiAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgIHJlYWR5LFxuICAgICAgICAgICAgY29ubmVjdGluZyxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RpbmcsXG4gICAgICAgICAgICBjb25uZWN0ZWQsXG4gICAgICAgICAgICBjb25uZWN0LFxuICAgICAgICAgICAgZGlzY29ubmVjdCxcbiAgICAgICAgICAgIHNlbmRUcmFuc2FjdGlvbixcbiAgICAgICAgICAgIHNpZ25UcmFuc2FjdGlvbixcbiAgICAgICAgICAgIHNpZ25BbGxUcmFuc2FjdGlvbnMsXG4gICAgICAgICAgICBzaWduTWVzc2FnZSxcbiAgICAgICAgfSB9LCBjaGlsZHJlbikpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdhbGxldFByb3ZpZGVyLmpzLm1hcCIsImltcG9ydCB7IFdhbGxldEVycm9yIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlJztcbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RTZWxlY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcic7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JzLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vdXNlQW5jaG9yV2FsbGV0JztcbmV4cG9ydCAqIGZyb20gJy4vQ29ubmVjdGlvblByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlQ29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3VzZUxvY2FsU3RvcmFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZVdhbGxldCc7XG5leHBvcnQgKiBmcm9tICcuL1dhbGxldFByb3ZpZGVyJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICcuL3VzZVdhbGxldCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlQW5jaG9yV2FsbGV0KCkge1xuICAgIGNvbnN0IHsgcHVibGljS2V5LCBzaWduVHJhbnNhY3Rpb24sIHNpZ25BbGxUcmFuc2FjdGlvbnMgfSA9IHVzZVdhbGxldCgpO1xuICAgIHJldHVybiB1c2VNZW1vKCgpID0+IHB1YmxpY0tleSAmJiBzaWduVHJhbnNhY3Rpb24gJiYgc2lnbkFsbFRyYW5zYWN0aW9uc1xuICAgICAgICA/IHsgcHVibGljS2V5LCBzaWduVHJhbnNhY3Rpb24sIHNpZ25BbGxUcmFuc2FjdGlvbnMgfVxuICAgICAgICA6IHVuZGVmaW5lZCwgW3B1YmxpY0tleSwgc2lnblRyYW5zYWN0aW9uLCBzaWduQWxsVHJhbnNhY3Rpb25zXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VBbmNob3JXYWxsZXQuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBDb25uZWN0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbm5lY3Rpb24oKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQ29ubmVjdGlvbkNvbnRleHQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlQ29ubmVjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlKGtleSwgZGVmYXVsdFN0YXRlKSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0U3RhdGU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdFN0YXRlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNldExvY2FsU3RvcmFnZSA9IHVzZUNhbGxiYWNrKChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBpZiAobmV3VmFsdWUgPT09IHZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkobmV3VmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH0sIFt2YWx1ZSwgc2V0VmFsdWUsIGtleV0pO1xuICAgIHJldHVybiBbdmFsdWUsIHNldExvY2FsU3RvcmFnZV07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VMb2NhbFN0b3JhZ2UuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5leHBvcnQgZnVuY3Rpb24gdXNlV2FsbGV0KCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFdhbGxldENvbnRleHQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlV2FsbGV0LmpzLm1hcCIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcm9qZWN0LXNlcnVtL2FuY2hvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc29sYW5hL3dlYjMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRlbWl0dGVyM1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU1dSIiwiYW5jaG9yIiwicmVxdWlyZSIsIlN5c3RlbVByb2dyYW0iLCJLZXlwYWlyIiwiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsIkxBTVBPUlRTX1BFUl9TT0wiLCJ3ZWIzIiwicnBjVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JQQ19VUkwiLCJjb25uZWN0aW9uIiwia2V5IiwiSlNPTiIsInBhcnNlIiwia2V5cGFpciIsImZyb21TZWNyZXRLZXkiLCJVaW50OEFycmF5Iiwid2FsbGV0IiwiV2FsbGV0Iiwib3B0aW9uIiwiUHJvdmlkZXIiLCJkZWZhdWx0T3B0aW9ucyIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJteUFjY291bnQiLCJnZW5lcmF0ZSIsImlkbCIsInZlcnNpb24iLCJuYW1lIiwiaW5zdHJ1Y3Rpb25zIiwiYWNjb3VudHMiLCJpc011dCIsImlzU2lnbmVyIiwiYXJncyIsInR5cGUiLCJraW5kIiwiZmllbGRzIiwibWV0YWRhdGEiLCJhZGRyZXNzIiwicHJvZ3JhbUlkIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJwcm9ncmFtX2ZldGNoZXIiLCJfYXBpIiwibWV0aG9kIiwiYmlnX251bWJlciIsImNvbnNvbGUiLCJsb2ciLCJycGMiLCJpbml0aWFsaXplIiwicHVibGljS2V5IiwidXNlciIsInN5c3RlbVByb2dyYW0iLCJzaWduZXJzIiwiY2F0Y2giLCJlIiwidXBkYXRlIiwiYWNjb3VudCIsImZldGNoIiwiYmFsYW5jZSIsImdldEJhbGFuY2UiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsImRhdGEiLCJzaWduYXR1cmUiLCJyZXF1ZXN0QWlyZHJvcCIsInVzZVVzZXIiLCJtdXRhdGUiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VXYWxsZXQiLCJXYWxsZXRNdWx0aUJ1dHRvbiIsIkhvbWVQYWdlIiwiY29ubmVjdGVkIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwicmVmIiwiY29sb3IiLCJtYXJnaW4iLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsIkV2ZW50RW1pdHRlciIsIkJhc2VXYWxsZXRBZGFwdGVyIiwiV2FsbGV0QWRhcHRlck5ldHdvcmsiLCJXYWxsZXRFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwiV2FsbGV0Tm90Rm91bmRFcnJvciIsImFyZ3VtZW50cyIsIldhbGxldE5vdEluc3RhbGxlZEVycm9yIiwiV2FsbGV0Tm90UmVhZHlFcnJvciIsIldhbGxldENvbm5lY3Rpb25FcnJvciIsIldhbGxldERpc2Nvbm5lY3RlZEVycm9yIiwiV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yIiwiV2FsbGV0QWNjb3VudEVycm9yIiwiV2FsbGV0UHVibGljS2V5RXJyb3IiLCJXYWxsZXRLZXlwYWlyRXJyb3IiLCJXYWxsZXROb3RDb25uZWN0ZWRFcnJvciIsIldhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yIiwiV2FsbGV0U2lnbk1lc3NhZ2VFcnJvciIsIldhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yIiwiV2FsbGV0VGltZW91dEVycm9yIiwiV2FsbGV0V2luZG93QmxvY2tlZEVycm9yIiwiV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJwb2xsIiwiY2FsbGJhY2siLCJpbnRlcnZhbCIsImNvdW50Iiwic2V0VGltZW91dCIsInBvbGxVbnRpbFJlYWR5IiwiYWRhcHRlciIsInBvbGxJbnRlcnZhbCIsInBvbGxDb3VudCIsInJlYWR5IiwiZW1pdCIsIndhcm4iLCJfX3Jlc3QiLCJzIiwidCIsInAiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiaSIsImxlbmd0aCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQmFzZVNpZ25lcldhbGxldEFkYXB0ZXIiLCJzZW5kVHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbiIsIm9wdGlvbnMiLCJmZWVQYXllciIsInJlY2VudEJsb2NraGFzaCIsImdldFJlY2VudEJsb2NraGFzaCIsImJsb2NraGFzaCIsInNlbmRPcHRpb25zIiwicGFydGlhbFNpZ24iLCJzaWduVHJhbnNhY3Rpb24iLCJyYXdUcmFuc2FjdGlvbiIsInNlcmlhbGl6ZSIsInNlbmRSYXdUcmFuc2FjdGlvbiIsIkJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlciIsIlJlYWN0IiwiQnV0dG9uIiwicHJvcHMiLCJlbmRJY29uIiwic3RhcnRJY29uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwib25DbGljayIsInN0eWxlIiwiYXNzaWduIiwidGFiSW5kZXgiLCJjaGlsZHJlbiIsInVzZUxheW91dEVmZmVjdCIsIkNvbGxhcHNlIiwiaWQiLCJleHBhbmRlZCIsImluc3RhbnQiLCJ0cmFuc2l0aW9uIiwib3BlbkNvbGxhcHNlIiwibm9kZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsb3NlQ29sbGFwc2UiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsImhhbmRsZUNvbXBsZXRlIiwiaGFuZGxlVHJhbnNpdGlvbkVuZCIsImV2ZW50IiwidGFyZ2V0IiwicHJvcGVydHlOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyb2xlIiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwiV2FsbGV0SWNvbiIsIldhbGxldENvbm5lY3RCdXR0b24iLCJfYSIsImNvbm5lY3QiLCJjb25uZWN0aW5nIiwiaGFuZGxlQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwiY29udGVudCIsIldhbGxldERpc2Nvbm5lY3RCdXR0b24iLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsInNyYyIsImljb24iLCJhbHQiLCJXYWxsZXRMaXN0SXRlbSIsInVzZVN0YXRlIiwiY3JlYXRlUG9ydGFsIiwidXNlV2FsbGV0TW9kYWwiLCJXYWxsZXRNb2RhbCIsImxvZ28iLCJmZWF0dXJlZFdhbGxldHMiLCJjb250YWluZXIiLCJ3YWxsZXRzIiwic2VsZWN0Iiwic2V0VmlzaWJsZSIsInNldEV4cGFuZGVkIiwiZmFkZUluIiwic2V0RmFkZUluIiwicG9ydGFsIiwic2V0UG9ydGFsIiwiZmVhdHVyZWQiLCJtb3JlIiwic2xpY2UiLCJoaWRlTW9kYWwiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVdhbGxldENsaWNrIiwid2FsbGV0TmFtZSIsImhhbmRsZUNvbGxhcHNlQ2xpY2siLCJoYW5kbGVUYWJLZXkiLCJmb2N1c2FibGVFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaXJzdEVsZW1lbnQiLCJsYXN0RWxlbWVudCIsInNoaWZ0S2V5IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJkIiwibWFwIiwiRnJhZ21lbnQiLCJ4bWxucyIsIm9uTW91c2VEb3duIiwiV2FsbGV0TW9kYWxCdXR0b24iLCJ2aXNpYmxlIiwiV2FsbGV0TW9kYWxDb250ZXh0IiwiV2FsbGV0TW9kYWxQcm92aWRlciIsInVzZUVmZmVjdCIsImNvcGllZCIsInNldENvcGllZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImJhc2U1OCIsInRvQmFzZTU4IiwiY29weUFkZHJlc3MiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJvcGVuRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwib3Blbk1vZGFsIiwibGlzdGVuZXIiLCJjb250YWlucyIsInBvaW50ZXJFdmVudHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbm5lY3Rpb25Db250ZXh0IiwiQ29ubmVjdGlvblByb3ZpZGVyIiwiZW5kcG9pbnQiLCJjb25maWciLCJjb21taXRtZW50IiwiV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciIsInVzZUxvY2FsU3RvcmFnZSIsIldhbGxldENvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJXYWxsZXRQcm92aWRlciIsImF1dG9Db25uZWN0Iiwib25FcnJvciIsImxvY2FsU3RvcmFnZUtleSIsInNldE5hbWUiLCJzZXRTdGF0ZSIsInNldENvbm5lY3RpbmciLCJzZXREaXNjb25uZWN0aW5nIiwid2FsbGV0c0J5TmFtZSIsInJlZHVjZSIsIm5ld05hbWUiLCJvblJlYWR5Iiwic3RhdGUiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJvcGVuIiwidXJsIiwic2lnbkFsbFRyYW5zYWN0aW9ucyIsInRyYW5zYWN0aW9ucyIsInNpZ25NZXNzYWdlIiwib24iLCJvZmYiLCJ1c2VBbmNob3JXYWxsZXQiLCJ1c2VDb25uZWN0aW9uIiwiZGVmYXVsdFN0YXRlIiwic2V0VmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0TG9jYWxTdG9yYWdlIiwibmV3VmFsdWUiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=