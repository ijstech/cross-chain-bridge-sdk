"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trader = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
class Trader {
    constructor(crosschain) {
        this.crosschain = crosschain;
    }
    async approveToNewOrder(params) {
        let vault = this.crosschain.crossChainContracts.bridgeVault[params.inToken.address];
        if (!vault) {
            throw new Error("Vault not found");
        }
        params.amount = eth_wallet_1.Utils.toDecimals(params.amount, await params.inToken.decimals);
        return params.inToken.approve({ spender: vault.address, amount: params.amount });
    }
    async newOrder(params) {
        let sourceChain = this.crosschain.crossChainContracts;
        let vault = sourceChain.bridgeVault[params.inToken.address];
        let trader = this.crosschain.wallet.defaultAccount;
        if (!vault) {
            throw new Error("vault not found");
        }
        if ((await params.inToken.balanceOf(trader)).lt(params.inAmount)) {
            throw new Error("Insufficient balance");
        }
        if ((await params.inToken.allowance({ owner: trader, spender: vault.address })).lt(params.inAmount)) {
            throw new Error("Insufficient allowance");
        }
        let _params = {
            peerChain: params.targetChain,
            inAmount: params.inAmount,
            outToken: params.outToken ? params.outToken.address : eth_wallet_1.Utils.nullAddress,
            minOutAmount: params.minOutAmount,
            to: params.to,
            expire: params.expire
        };
        let events = await vault.newOrder(_params);
        return events;
    }
    async amendOrder(params) {
        let sourceChain = this.crosschain.crossChainContracts;
        let vault = sourceChain.bridgeVault[params.inToken.address];
        return await vault.requestAmendOrder(params);
    }
    async swapOrderStatus(params) {
        let targetChain = this.crosschain.crossChainContracts;
        let vault = targetChain.bridgeVault[params.inToken];
        let hash = await vault.hashOrder({ owner: this.crosschain.wallet.defaultAccount, sourceChainId: params.sourceChainId, orderId: params.orderId });
        return vault.swapOrderStatus(hash);
    }
    async cancelOrderOnSideChain(params) {
        let targetChain = this.crosschain.crossChainContracts;
        let vault = targetChain.bridgeVault[params.inToken];
        if (!vault) {
            new Error("vault not found");
        }
        let trader = this.crosschain.wallet.defaultAccount;
        let event = vault.requestCancelOrder(params);
        return event;
    }
    async withdrawUnexecutedOrder(params) {
        let targetChain = this.crosschain.crossChainContracts;
        let vault = targetChain.bridgeVault[params.srcToken];
        if (!vault) {
            new Error("vault not found");
        }
        if (await vault.orderOwner(params.orderId) != this.crosschain.wallet.defaultAccount) {
            new Error("not from the owner of order");
        }
        let event = await vault.withdrawUnexecutedOrder(params.orderId);
        return event;
    }
}
exports.Trader = Trader;
