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

    pub fn initialize(ctx: Context<Initialize>, data: u64) -> ProgramResult {
        let my_account = &mut ctx.accounts.my_account;
        my_account.data = data;
        Ok(())
    }

    pub fn update(ctx: Context<Update>, data: u64) -> ProgramResult {
        let my_account = &mut ctx.accounts.my_account;
        my_account.data = data;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space=8+8)]
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
    pub data: u64,
}
