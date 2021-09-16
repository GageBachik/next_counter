// How to setup your declare_id:
// 1. build only
// 2. solana address -k <the-program-keypair-in-target-deploy-folder>
// 3. Update lib.rs
// 4. build and deploy

use anchor_lang::prelude::*;

declare_id!("9mTvtHmMmDTkmX6cUoXQwzp977EAzYidynANfP9NzPUG");

#[program]
pub mod next_counter {

    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        let my_account = &mut ctx.accounts.my_account;
        my_account.count = 0;
        Ok(())
    }

    pub fn update(ctx: Context<Update>) -> ProgramResult {
        let my_account = &mut ctx.accounts.my_account;
        my_account.count += 1;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 16 + 16)]
    pub my_account: Account<'info, MyAccount>,
    pub user: AccountInfo<'info>,
    pub system_program: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct Update<'info> {
    #[account(mut)]
    pub my_account: Account<'info, MyAccount>,
}

#[account]
pub struct MyAccount {
    pub count: u64,
}
