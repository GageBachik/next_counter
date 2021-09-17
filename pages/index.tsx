import { useState, useEffect, useRef } from "react";
import useSWR from "swr";

//anchor boilerplate setup
import idl from "./utils/idl";
const anchor = require("@project-serum/anchor");
const { SystemProgram, Keypair, Connection, PublicKey, LAMPORTS_PER_SOL } =
  anchor.web3;
const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL;
const connection = new Connection(rpcUrl, "recent");
const key = JSON.parse(
  "[115,220,248,164,179,76,28,197,93,107,70,150,168,211,25,186,225,79,68,90,182,135,216,177,123,229,12,145,183,197,123,69,111,12,141,102,117,160,23,151,190,74,150,179,184,231,70,119,122,132,214,167,55,254,143,113,89,56,67,115,25,21,40,63]"
);
const keypair = Keypair.fromSecretKey(new Uint8Array(key));
const wallet = new anchor.Wallet(keypair);
const option = anchor.Provider.defaultOptions();
const provider = new anchor.Provider(connection, wallet, option);
anchor.setProvider(provider);

// if not using a wallet generate random wallet for each page refresh
// const myAccount = Keypair.generate();

const programId = new PublicKey("9mTvtHmMmDTkmX6cUoXQwzp977EAzYidynANfP9NzPUG");
const program = new anchor.Program(idl, programId);
//end anchor boilerplate setup

async function program_fetcher(
  _api: string,
  myAccount: any,
  method: string,
  big_number: string
) {
  console.log(
    `fetching program with method: ${method} and big_number: ${big_number}`
  );

  const BaseAccount = Keypair.generate();

  if (method == "initialize") {
    await program.rpc
      .initialize(
        /*new anchor.BN(big_number),*/ {
          accounts: {
            myAccount: BaseAccount.publicKey,
            user: provider.wallet.publicKey,
            systemProgram: SystemProgram.programId,
          },
          signers: [BaseAccount],
        }
      )
      .catch((e) => {
        console.log("new tx failed");
        console.log(e);
      });
  } else if (method == "update") {
    await program.rpc
      .update(
        /*new anchor.BN(big_number),*/ {
          accounts: {
            myAccount: BaseAccount.publicKey,
          },
        }
      )
      .catch((e) => {
        console.log(e);
      });
  }
  const account = await program.account.myAccount
    .fetch(BaseAccount.publicKey)
    .catch((e) => {
      console.log(e);
    });
  console.log("account", account);
  const balance = await connection.getBalance(BaseAccount.publicKey);
  console.log("balance", balance / LAMPORTS_PER_SOL);
  console.log("pubkey: ", BaseAccount.publicKey.toString());
  if (account != undefined) {
    return { data: account.count.toString() };
  } else {
    // const signature = await connection
    //   .requestAirdrop(myAccount.publicKey, LAMPORTS_PER_SOL)
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // await connection.confirmTransaction(signature);
    // const balance = await connection.getBalance(myAccount.publicKey);
    // console.log("balance", balance / LAMPORTS_PER_SOL);
    // console.log("pubkey: ", myAccount.publicKey.toString());
    // console.log("airdrop confirmed", signature);
    return {
      data: "Initialize an account with the form to the right to get started. The account data will show up in this box afterwards.",
    };
  }
}

function useUser(myAccount: any, method?: string, big_number?: string) {
  console.log(method, big_number);
  method = method || "No Account";
  big_number = big_number || "0000";
  const { data, mutate, error } = useSWR(
    ["program_rpc", myAccount, method, big_number],
    program_fetcher
  );
  const loading = !data && !error;
  console.log("data in useUser: ", data);
  return {
    loading,
    user: data,
    mutate,
  };
}
//phantom wallet
import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";

function HomePage() {
  const ref = useRef();
  // phantom wallet fixed
  const phantomWallet = useWallet();
  const { user, mutate, loading } = useUser(phantomWallet);

  if (!phantomWallet.connected) {
    /* If the user's wallet is not connected, display connect wallet button. */
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <WalletMultiButton />
      </div>
    );
  }
  // New nextjs swr setup for more advanced rpc calls
  // const { user, mutate, loading } = useUser(myAccount); -- if not using phantom
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return (
      <p style={{ color: "red", margin: "5em" }}>
        [ERROR]: user is returing undefined
      </p>
    );
  }
  return (
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
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold">Anchor Account Data</h1>
          <p className="mb-5">{user.data}</p>
          <WalletDisconnectButton />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Data</span>
              </label>
              <input
                ref={ref}
                name="big_number"
                type="text"
                placeholder="1234"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                onClick={async (e) => {
                  e.preventDefault();
                  console.log("user.data: ", user.data);
                  if (ref.current != "undefined") {
                    const big_number: any = ref.current as any;
                    if (
                      user.data ==
                      "Initialize an account with the form to the right to get started. The account data will show up in this box afterwards."
                    ) {
                      // console.log("### NINININI ###");
                      await program_fetcher(
                        "program_rpc",
                        phantomWallet,
                        "initialize",
                        big_number.value
                      );
                      mutate();
                    } else {
                      await program_fetcher(
                        "program_rpc",
                        phantomWallet,
                        "update",
                        big_number.value
                      );
                      mutate();
                    }
                  }
                }}
                type="button"
                value="Submit"
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
