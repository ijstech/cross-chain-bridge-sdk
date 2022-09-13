"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidityProvider = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
class LiquidityProvider {
    constructor(crosschain) {
        this.crosschain = crosschain;
    }
    async getLiquidityBalance(token) {
        let chain = this.crosschain.crossChainContracts;
        let vault = chain.bridgeVault[token.address];
        let lp = this.crosschain.wallet.defaultAccount;
        if (!vault) {
            throw new Error("vault not found");
        }
        let amount = await vault.balanceOf(lp);
        let totalSupply = await vault.totalSupply;
        let lpAssetBalance = await vault.lpAssetBalance;
        amount = totalSupply.eq(0) ? new eth_wallet_1.BigNumber(0) : amount.times(lpAssetBalance).idiv(totalSupply);
        return amount;
    }
    async approveToAddLiquidity(params) {
        let vault = this.crosschain.crossChainContracts.bridgeVault[params.asset.address];
        if (!vault) {
            throw new Error("Vault not found");
        }
        return params.asset.approve({ spender: vault.address, amount: params.amount });
    }
    async addLiquidity(params) {
        let chain = this.crosschain.crossChainContracts;
        let vault = chain.bridgeVault[params.token.address];
        let lp = this.crosschain.wallet.defaultAccount;
        if (!vault) {
            throw new Error("vault not found");
        }
        if ((await params.token.balanceOf(lp)).lt(params.amount)) {
            throw new Error("Insufficient balance");
        }
        if ((await params.token.allowance({ owner: lp, spender: vault.address })).lt(params.amount)) {
            throw new Error("Insufficient allowance");
        }
        let events = await vault.addLiquidity(params.amount);
        return events;
    }
    async removeLiquidityRequest(params) {
        let chain = this.crosschain.crossChainContracts;
        let vault = chain.bridgeVault[params.token.address];
        let lp = this.crosschain.wallet.defaultAccount;
        if ((await vault.balanceOf(lp)).lt(params.lpTokenAmount)) {
            throw new Error("Insufficient balance");
        }
        let events = await vault.removeLiquidityRequest(params.lpTokenAmount);
        return events;
    }
    async removeLiquidity(params) {
        let chain = this.crosschain.crossChainContracts;
        let vault = chain.bridgeVault[params.token.address];
        let lp = this.crosschain.wallet.defaultAccount;
        if ((await vault.pendingWithdrawalAmount(lp)).lt(params.amount)) {
            throw new Error("Request exceeded previous request");
        }
        if ((await vault.pendingWithdrawalTimeout(lp)).getTime() < Math.round(Date.now() / 1000)) {
            throw new Error("Timeout not passed yet");
        }
        let events = await vault.removeLiquidity({ provider: this.crosschain.wallet.defaultAccount, assetAmount: params.amount });
        return events;
    }
}
exports.LiquidityProvider = LiquidityProvider;
