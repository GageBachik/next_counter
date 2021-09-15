"use strict";
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
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
const programId = new PublicKey("9mTvtHmMmDTkmX6cUoXQwzp977EAzYidynANfP9NzPUG");
const program = new anchor.Program(idl, programId); //end anchor boilerplate setup

async function program_fetcher(_api, method, big_number) {
  console.log(`fetching program with method: ${method} and big_number: ${big_number}`);

  if (method == "initialize") {
    await program.rpc.initialize(new anchor.BN(big_number), {
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
    await program.rpc.update(new anchor.BN(big_number), {
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
}

function HomePage() {
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 12
    }, this);
  }

  if (!user) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      style: {
        color: "red",
        margin: "5em"
      },
      children: "[ERROR]: user is returing undefined"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
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
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "hero min-h-screen bg-base-200",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "flex-col justify-center hero-content lg:flex-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "text-center lg:text-left",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
            className: "mb-5 text-5xl font-bold",
            children: "Anchor Account Data"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "mb-5",
            children: user.data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "form-control",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                className: "label",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  className: "label-text",
                  children: "Data"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                ref: ref,
                name: "big_number",
                type: "text",
                placeholder: "1234",
                className: "input input-bordered"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "form-control mt-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
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
                lineNumber: 243,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 5
    }, this)
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "@project-serum/anchor":
/*!****************************************!*\
  !*** external "@project-serum/anchor" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@project-serum/anchor");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUNBQ0U7QUFDRSx1QkFBTyxFQUFFLE1BQU9oQixDQUFQLElBQWE7QUFDcEJBLGtCQUFBQSxDQUFDLENBQUNtQixjQUFGO0FBQ0E3QixrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkssSUFBSSxDQUFDWSxJQUFoQzs7QUFDQSxzQkFBSVEsR0FBRyxDQUFDSSxPQUFKLElBQWUsV0FBbkIsRUFBZ0M7QUFDOUIsMEJBQU0vQixVQUFlLEdBQUcyQixHQUFHLENBQUNJLE9BQTVCOztBQUNBLHdCQUNFeEIsSUFBSSxDQUFDWSxJQUFMLElBQ0Esd0hBRkYsRUFHRTtBQUNBLDRCQUFNdEIsZUFBZSxDQUNuQixhQURtQixFQUVuQixZQUZtQixFQUduQkcsVUFBVSxDQUFDZ0MsS0FIUSxDQUFyQjtBQUtBVCxzQkFBQUEsTUFBTTtBQUNQLHFCQVZELE1BVU87QUFDTCw0QkFBTTFCLGVBQWUsQ0FDbkIsYUFEbUIsRUFFbkIsUUFGbUIsRUFHbkJHLFVBQVUsQ0FBQ2dDLEtBSFEsQ0FBckI7QUFLQVQsc0JBQUFBLE1BQU07QUFDUDtBQUNGO0FBQ0YsaUJBekJIO0FBMEJFLG9CQUFJLEVBQUMsUUExQlA7QUEyQkUscUJBQUssRUFBQyxRQTNCUjtBQTRCRSx5QkFBUyxFQUFDO0FBNUJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCRjtBQWlGRDs7QUFFRCxpRUFBZUcsUUFBZjs7Ozs7Ozs7OztBQ3hSQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJvamVjdC1zZXJ1bS9hbmNob3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbi8vYW5jaG9yIGJvaWxlcnBsYXRlIHNldHVwXHJcbmNvbnN0IGFuY2hvciA9IHJlcXVpcmUoXCJAcHJvamVjdC1zZXJ1bS9hbmNob3JcIik7XHJcbmNvbnN0IHsgU3lzdGVtUHJvZ3JhbSwgS2V5cGFpciwgQ29ubmVjdGlvbiwgUHVibGljS2V5LCBMQU1QT1JUU19QRVJfU09MIH0gPVxyXG4gIGFuY2hvci53ZWIzO1xyXG5jb25zdCBycGNVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SUENfVVJMO1xyXG5jb25zdCBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24ocnBjVXJsLCBcInJlY2VudFwiKTtcclxuY29uc3Qga2V5ID0gSlNPTi5wYXJzZShcclxuICBcIlsxMTUsMjIwLDI0OCwxNjQsMTc5LDc2LDI4LDE5Nyw5MywxMDcsNzAsMTUwLDE2OCwyMTEsMjUsMTg2LDIyNSw3OSw2OCw5MCwxODIsMTM1LDIxNiwxNzcsMTIzLDIyOSwxMiwxNDUsMTgzLDE5NywxMjMsNjksMTExLDEyLDE0MSwxMDIsMTE3LDE2MCwyMywxNTEsMTkwLDc0LDE1MCwxNzksMTg0LDIzMSw3MCwxMTksMTIyLDEzMiwyMTQsMTY3LDU1LDI1NCwxNDMsMTEzLDg5LDU2LDY3LDExNSwyNSwyMSw0MCw2M11cIlxyXG4pO1xyXG5jb25zdCBrZXlwYWlyID0gS2V5cGFpci5mcm9tU2VjcmV0S2V5KG5ldyBVaW50OEFycmF5KGtleSkpO1xyXG5jb25zdCB3YWxsZXQgPSBuZXcgYW5jaG9yLldhbGxldChrZXlwYWlyKTtcclxuY29uc3Qgb3B0aW9uID0gYW5jaG9yLlByb3ZpZGVyLmRlZmF1bHRPcHRpb25zKCk7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGFuY2hvci5Qcm92aWRlcihjb25uZWN0aW9uLCB3YWxsZXQsIG9wdGlvbik7XHJcbmFuY2hvci5zZXRQcm92aWRlcihwcm92aWRlcik7XHJcblxyXG5jb25zdCBteUFjY291bnQgPSBLZXlwYWlyLmdlbmVyYXRlKCk7XHJcblxyXG5jb25zdCBpZGwgPSB7XHJcbiAgdmVyc2lvbjogXCIwLjAuMFwiLFxyXG4gIG5hbWU6IFwibmV4dF9jb3VudGVyXCIsXHJcbiAgaW5zdHJ1Y3Rpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiaW5pdGlhbGl6ZVwiLFxyXG4gICAgICBhY2NvdW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwibXlBY2NvdW50XCIsXHJcbiAgICAgICAgICBpc011dDogdHJ1ZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgICAgICAgICBpc011dDogZmFsc2UsXHJcbiAgICAgICAgICBpc1NpZ25lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInN5c3RlbVByb2dyYW1cIixcclxuICAgICAgICAgIGlzTXV0OiBmYWxzZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJkYXRhXCIsXHJcbiAgICAgICAgICB0eXBlOiBcInU2NFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInVwZGF0ZVwiLFxyXG4gICAgICBhY2NvdW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwibXlBY2NvdW50XCIsXHJcbiAgICAgICAgICBpc011dDogdHJ1ZSxcclxuICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJkYXRhXCIsXHJcbiAgICAgICAgICB0eXBlOiBcInU2NFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgYWNjb3VudHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNeUFjY291bnRcIixcclxuICAgICAgdHlwZToge1xyXG4gICAgICAgIGtpbmQ6IFwic3RydWN0XCIsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZGF0YVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInU2NFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIG1ldGFkYXRhOiB7XHJcbiAgICBhZGRyZXNzOiBcIjltVHZ0SG1NbURUa21YNmNVb1hRd3pwOTc3RUF6WWlkeW5BTmZQOU56UFVHXCIsXHJcbiAgfSxcclxufTtcclxuY29uc3QgcHJvZ3JhbUlkID0gbmV3IFB1YmxpY0tleShcIjltVHZ0SG1NbURUa21YNmNVb1hRd3pwOTc3RUF6WWlkeW5BTmZQOU56UFVHXCIpO1xyXG5jb25zdCBwcm9ncmFtID0gbmV3IGFuY2hvci5Qcm9ncmFtKGlkbCwgcHJvZ3JhbUlkKTtcclxuLy9lbmQgYW5jaG9yIGJvaWxlcnBsYXRlIHNldHVwXHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9ncmFtX2ZldGNoZXIoXHJcbiAgX2FwaTogc3RyaW5nLFxyXG4gIG1ldGhvZDogc3RyaW5nLFxyXG4gIGJpZ19udW1iZXI6IHN0cmluZ1xyXG4pIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIGBmZXRjaGluZyBwcm9ncmFtIHdpdGggbWV0aG9kOiAke21ldGhvZH0gYW5kIGJpZ19udW1iZXI6ICR7YmlnX251bWJlcn1gXHJcbiAgKTtcclxuXHJcbiAgaWYgKG1ldGhvZCA9PSBcImluaXRpYWxpemVcIikge1xyXG4gICAgYXdhaXQgcHJvZ3JhbS5ycGNcclxuICAgICAgLmluaXRpYWxpemUobmV3IGFuY2hvci5CTihiaWdfbnVtYmVyKSwge1xyXG4gICAgICAgIGFjY291bnRzOiB7XHJcbiAgICAgICAgICBteUFjY291bnQ6IG15QWNjb3VudC5wdWJsaWNLZXksXHJcbiAgICAgICAgICB1c2VyOiBwcm92aWRlci53YWxsZXQucHVibGljS2V5LFxyXG4gICAgICAgICAgc3lzdGVtUHJvZ3JhbTogU3lzdGVtUHJvZ3JhbS5wcm9ncmFtSWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaWduZXJzOiBbbXlBY2NvdW50XSxcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAobWV0aG9kID09IFwidXBkYXRlXCIpIHtcclxuICAgIGF3YWl0IHByb2dyYW0ucnBjXHJcbiAgICAgIC51cGRhdGUobmV3IGFuY2hvci5CTihiaWdfbnVtYmVyKSwge1xyXG4gICAgICAgIGFjY291bnRzOiB7XHJcbiAgICAgICAgICBteUFjY291bnQ6IG15QWNjb3VudC5wdWJsaWNLZXksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcHJvZ3JhbS5hY2NvdW50Lm15QWNjb3VudFxyXG4gICAgLmZldGNoKG15QWNjb3VudC5wdWJsaWNLZXkpXHJcbiAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuICBjb25zb2xlLmxvZyhcImFjY291bnRcIiwgYWNjb3VudCk7XHJcbiAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShteUFjY291bnQucHVibGljS2V5KTtcclxuICBjb25zb2xlLmxvZyhcImJhbGFuY2VcIiwgYmFsYW5jZSAvIExBTVBPUlRTX1BFUl9TT0wpO1xyXG4gIGNvbnNvbGUubG9nKFwicHVia2V5OiBcIiwgbXlBY2NvdW50LnB1YmxpY0tleS50b1N0cmluZygpKTtcclxuICBpZiAoYWNjb3VudCAhPSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB7IGRhdGE6IGFjY291bnQuZGF0YS50b1N0cmluZygpIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGNvbm5lY3Rpb25cclxuICAgICAgLnJlcXVlc3RBaXJkcm9wKG15QWNjb3VudC5wdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICAgIC8vIGF3YWl0IGNvbm5lY3Rpb24uY29uZmlybVRyYW5zYWN0aW9uKHNpZ25hdHVyZSk7XHJcbiAgICAvLyBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKG15QWNjb3VudC5wdWJsaWNLZXkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJiYWxhbmNlXCIsIGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicHVia2V5OiBcIiwgbXlBY2NvdW50LnB1YmxpY0tleS50b1N0cmluZygpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYWlyZHJvcCBjb25maXJtZWRcIiwgc2lnbmF0dXJlKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFwiSW5pdGlhbGl6ZSBhbiBhY2NvdW50IHdpdGggdGhlIGZvcm0gdG8gdGhlIHJpZ2h0IHRvIGdldCBzdGFydGVkLiBUaGUgYWNjb3VudCBkYXRhIHdpbGwgc2hvdyB1cCBpbiB0aGlzIGJveCBhZnRlcndhcmRzLlwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVVzZXIobWV0aG9kPzogc3RyaW5nLCBiaWdfbnVtYmVyPzogc3RyaW5nKSB7XHJcbiAgY29uc29sZS5sb2cobWV0aG9kLCBiaWdfbnVtYmVyKTtcclxuICBtZXRob2QgPSBtZXRob2QgfHwgXCJObyBBY2NvdW50XCI7XHJcbiAgYmlnX251bWJlciA9IGJpZ19udW1iZXIgfHwgXCIwMDAwXCI7XHJcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBbXCJwcm9ncmFtX3JwY1wiLCBtZXRob2QsIGJpZ19udW1iZXJdLFxyXG4gICAgcHJvZ3JhbV9mZXRjaGVyXHJcbiAgKTtcclxuICBjb25zdCBsb2FkaW5nID0gIWRhdGEgJiYgIWVycm9yO1xyXG4gIGNvbnNvbGUubG9nKFwiZGF0YSBpbiB1c2VVc2VyOiBcIiwgZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICB1c2VyOiBkYXRhLFxyXG4gICAgbXV0YXRlLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gIC8vIGJhc2ljIGFuY2hvciBycGMgaW5pdCBjYWxsIGFuZCByZXR1cm4gb24gcGFnZSBsb2FkXHJcbiAgLy8gY29uc3QgW3R4LCBzZXRUeF0gPSB1c2VTdGF0ZSh7IHR4OiBcIi4uLmxvYWRpbmdcIiB9KTtcclxuICAvLyBjb25zdCBmZXRjaFR4ID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgdHggPSBhd2FpdCBwcm9ncmFtLnJwYy5pbml0aWFsaXplKCk7XHJcbiAgLy8gICByZXR1cm4gdHg7XHJcbiAgLy8gfTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgZ2V0VHggPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IHR4ID0gYXdhaXQgZmV0Y2hUeCgpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcInR4XCIsIHR4KTtcclxuICAvLyAgICAgc2V0VHgoeyB0eDogdHggfSk7XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgZ2V0VHgoKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIC8vIE5ldyBuZXh0anMgc3dyIHNldHVwIGZvciBtb3JlIGFkdmFuY2VkIHJwYyBjYWxsc1xyXG4gIGNvbnN0IHsgdXNlciwgbXV0YXRlLCBsb2FkaW5nIH0gPSB1c2VVc2VyKCk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgfVxyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCI1ZW1cIiB9fT5cclxuICAgICAgICBbRVJST1JdOiB1c2VyIGlzIHJldHVyaW5nIHVuZGVmaW5lZFxyXG4gICAgICA8L3A+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgLy8gQmFzaWMgYWxlcnQgc2V0dXAgZm9yIGludGlhbGl6aW5nIGFuIGFuIGFjbmhvciBSUEMgYW5kIHJldHVybmluZyB0aGUgdHhcclxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtLThcIj5cclxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+XHJcbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgIC8vICAgICAgIDxzdmdcclxuICAgIC8vICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAvLyAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgIC8vICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAvLyAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgbXgtMiBzdHJva2UtY3VycmVudFwiXHJcbiAgICAvLyAgICAgICA+XHJcbiAgICAvLyAgICAgICAgIDxwYXRoXHJcbiAgICAvLyAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIC8vICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIC8vICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgLy8gICAgICAgICAgIGQ9XCJNMTMgMTZoLTF2LTRoLTFtMS00aC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxyXG4gICAgLy8gICAgICAgICA+PC9wYXRoPlxyXG4gICAgLy8gICAgICAgPC9zdmc+XHJcbiAgICAvLyAgICAgICA8bGFiZWw+e3R4LnR4fTwvbGFiZWw+XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyAgIDwvZGl2PlxyXG4gICAgLy8gPC9kaXY+XHJcblxyXG4gICAgLy8gSW50ZXJtZWRpYXRlIHNldHVwIGZvciBhZGRpbmcgZGF0YSB0byB5b3VyIGFjY291bnQgYW5kIHRoZW4gdXBkYXRpbmcgdGhlIGRhdGFcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyBtaW4taC1zY3JlZW4gYmctYmFzZS0yMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoZXJvLWNvbnRlbnQgbGc6ZmxleC1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC01eGwgZm9udC1ib2xkXCI+QW5jaG9yIEFjY291bnQgRGF0YTwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01XCI+e3VzZXIuZGF0YX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGZsZXgtc2hyaW5rLTAgdy1mdWxsIG1heC13LXNtIHNoYWRvdy0yeGwgYmctYmFzZS0xMDBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+RGF0YTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYmlnX251bWJlclwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyMzRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtdC02XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlci5kYXRhOiBcIiwgdXNlci5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlZi5jdXJyZW50ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaWdfbnVtYmVyOiBhbnkgPSByZWYuY3VycmVudCBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhID09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkluaXRpYWxpemUgYW4gYWNjb3VudCB3aXRoIHRoZSBmb3JtIHRvIHRoZSByaWdodCB0byBnZXQgc3RhcnRlZC4gVGhlIGFjY291bnQgZGF0YSB3aWxsIHNob3cgdXAgaW4gdGhpcyBib3ggYWZ0ZXJ3YXJkcy5cIlxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJvZ3JhbV9mZXRjaGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2dyYW1fcnBjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5pdGlhbGl6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaWdfbnVtYmVyLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXV0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb2dyYW1fZmV0Y2hlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmFtX3JwY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaWdfbnVtYmVyLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXV0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcm9qZWN0LXNlcnVtL2FuY2hvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOyJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTV1IiLCJhbmNob3IiLCJyZXF1aXJlIiwiU3lzdGVtUHJvZ3JhbSIsIktleXBhaXIiLCJDb25uZWN0aW9uIiwiUHVibGljS2V5IiwiTEFNUE9SVFNfUEVSX1NPTCIsIndlYjMiLCJycGNVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUlBDX1VSTCIsImNvbm5lY3Rpb24iLCJrZXkiLCJKU09OIiwicGFyc2UiLCJrZXlwYWlyIiwiZnJvbVNlY3JldEtleSIsIlVpbnQ4QXJyYXkiLCJ3YWxsZXQiLCJXYWxsZXQiLCJvcHRpb24iLCJQcm92aWRlciIsImRlZmF1bHRPcHRpb25zIiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsIm15QWNjb3VudCIsImdlbmVyYXRlIiwiaWRsIiwidmVyc2lvbiIsIm5hbWUiLCJpbnN0cnVjdGlvbnMiLCJhY2NvdW50cyIsImlzTXV0IiwiaXNTaWduZXIiLCJhcmdzIiwidHlwZSIsImtpbmQiLCJmaWVsZHMiLCJtZXRhZGF0YSIsImFkZHJlc3MiLCJwcm9ncmFtSWQiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsInByb2dyYW1fZmV0Y2hlciIsIl9hcGkiLCJtZXRob2QiLCJiaWdfbnVtYmVyIiwiY29uc29sZSIsImxvZyIsInJwYyIsImluaXRpYWxpemUiLCJCTiIsInB1YmxpY0tleSIsInVzZXIiLCJzeXN0ZW1Qcm9ncmFtIiwic2lnbmVycyIsImNhdGNoIiwiZSIsInVwZGF0ZSIsImFjY291bnQiLCJmZXRjaCIsImJhbGFuY2UiLCJnZXRCYWxhbmNlIiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJkYXRhIiwic2lnbmF0dXJlIiwicmVxdWVzdEFpcmRyb3AiLCJ1c2VVc2VyIiwibXV0YXRlIiwiZXJyb3IiLCJsb2FkaW5nIiwiSG9tZVBhZ2UiLCJyZWYiLCJjb2xvciIsIm1hcmdpbiIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==