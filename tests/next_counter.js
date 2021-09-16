const assert = require("assert");
const anchor = require("@project-serum/anchor");
const { SystemProgram, Connection, Keypair, LAMPORTS_PER_SOL } = anchor.web3;

describe("next_counter", () => {
  // Create custom provider
  const rpcUrl = "http://127.0.0.1:8899";
  const connection = new Connection(rpcUrl, "recent");
  const key = JSON.parse(
    "[115,220,248,164,179,76,28,197,93,107,70,150,168,211,25,186,225,79,68,90,182,135,216,177,123,229,12,145,183,197,123,69,111,12,141,102,117,160,23,151,190,74,150,179,184,231,70,119,122,132,214,167,55,254,143,113,89,56,67,115,25,21,40,63]"
  );
  const keypair = Keypair.fromSecretKey(new Uint8Array(key));
  const wallet = new anchor.Wallet(keypair);
  const option = anchor.Provider.defaultOptions();
  const provider = new anchor.Provider(connection, wallet, option);

  // Use a local provider.
  // const provider = anchor.Provider.local();
  // console.log("provider local", provider.wallet.publicKey.toString());

  // Configure the client to use the local cluster.
  anchor.setProvider(provider);

  it("Creates and initializes an account in a single atomic transaction (simplified)", async () => {
    // #region code-simplified
    // The program to execute.
    const program = anchor.workspace.NextCounter;
    // The Account to create.
    const myAccount = anchor.web3.Keypair.generate();

    // Create the new account and initialize it with the program.
    // #region code-simplified
    await program.rpc.initialize({
      accounts: {
        myAccount: myAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [myAccount],
    });
    // #endregion code-simplified

    // Fetch the newly created account from the cluster.
    const account = await program.account.myAccount.fetch(myAccount.publicKey);

    // Check it's state was initialized.
    assert.ok(account.count.eq(new anchor.BN(0)));

    // Store the account for the next test.
    _myAccount = myAccount;
  });

  it("Updates a previously created account", async () => {
    const myAccount = _myAccount;

    // const balance = await connection.getBalance(myAccount.publicKey);
    // console.log("balance", balance / LAMPORTS_PER_SOL);

    // #region update-test

    // The program to execute.
    const program = anchor.workspace.NextCounter;

    // Invoke the update rpc.
    await program.rpc.update({
      accounts: {
        myAccount: myAccount.publicKey,
      },
    });
    // console.log(myAccount);
    // console.log(myAccount.publicKey.toString());
    // Fetch the newly updated account.
    const account = await program.account.myAccount.fetch(myAccount.publicKey);

    // Check it's state was mutated.
    assert.ok(account.count.eq(new anchor.BN(1)));

    // #endregion update-test
  });
});
