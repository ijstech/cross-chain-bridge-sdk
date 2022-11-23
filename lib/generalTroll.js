"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralTroll = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
;
class GeneralTroll {
    constructor(address, crosschain, isSuperTroll, config, trollProfileIndex) {
        this.address = address;
        this.crosschain = crosschain;
        this.trollProfileIndex = trollProfileIndex;
        this.isSuperTroll = isSuperTroll;
        this.vaults = {};
        let vaults;
        let sideChains = crosschain.crossChainContracts.sideChain;
        for (let chain in sideChains) {
            this.vaults[chain] = {};
            vaults = sideChains[chain].bridgeVault;
            for (let vault in vaults)
                this.vaults[chain][vaults[vault].address] = vaults[vault];
        }
        this.config = config;
    }
    init(trollProfileIndex) {
        this.trollProfileIndex = trollProfileIndex;
    }
    async _isGeneralTroll(params) {
        let chain = this.getChain(params.chainId);
        return await chain.trollRegistry.isGeneralTroll({ troll: this.address, returnFalseIfBlocked: params.returnFalseIfBlocked });
    }
    getChain(chainId) {
        return this.crosschain.crossChainContracts.sideChain[chainId];
    }
    async getTargetOrderId2(params) {
        let srcVault = this.crosschain.crossChainContracts.sideChain[params.sourceChain].bridgeVault[params.srcToken];
        let order = await srcVault.orders(params.orderId);
        let owner = await srcVault.orderOwner(params.orderId);
        let targetChain = order.peerChain.toNumber();
        let inToken = this.crosschain.tokenPair[params.sourceChain][(await srcVault.asset).address][targetChain];
        let targetVault = this.crosschain.crossChainContracts.sideChain[targetChain].bridgeVault[inToken];
        let wallet = this.crosschain.wallets[targetChain];
        let targetOrderId = wallet.web3.utils.soliditySha3({ t: 'address', v: owner }, { t: 'uint256', v: await wallet.getChainId() }, { t: 'address', v: targetVault.address }, { t: 'uint256', v: params.sourceChain.toString() }, { t: 'uint256', v: params.orderId.toString() });
        return { targetChain: targetChain, targetVault: targetVault.address, targetOrderId: targetOrderId };
    }
    async getTargetOrderId(order) {
        let wallet = this.crosschain.wallets[order.targetChain];
        let chainId = order.targetChain;
        let targetVault = this.getChain(chainId).bridgeVault[order.inToken];
        let orderId = wallet.web3.utils.soliditySha3({ t: 'address', v: order.owner }, { t: 'uint256', v: await wallet.getChainId() }, { t: 'address', v: targetVault.address }, { t: 'uint256', v: order.sourceChain.toString() }, { t: 'uint256', v: order.orderId.toString() });
        return orderId;
    }
    async signAddress(params) {
        let wallet = this.crosschain.wallets[params.chainId];
        let signatures = await wallet.signMessage(wallet.web3.utils.soliditySha3({ t: 'address', v: params.address }));
        return signatures;
    }
    async hashOrderForSigning(params) {
        let wallet = this.crosschain.wallets[params.order.targetChain];
        let chainId = params.order.targetChain;
        let chain = this.getChain(chainId);
        let vault = chain.bridgeVault[params.order.inToken];
        let decimals = await (await vault.asset).decimals;
        let outTokenDecimals = params.order.outToken == eth_wallet_1.Utils.nullAddress ? this.crosschain.wrappedTokens[chainId].decimals : this.crosschain.tokenList[chainId].find(e => e.address == params.order.outToken).decimals;
        let hash = wallet.web3.utils.soliditySha3({ t: 'uint', v: await wallet.getChainId() }, { t: 'address', v: vault.address }, { t: 'bytes32', v: eth_wallet_1.Utils.stringToBytes32(await this.getTargetOrderId(params.order)) }, { t: 'uint', v: params.order.amendment.toFixed() }, { t: 'uint', v: eth_wallet_1.Utils.toDecimals(params.order.inAmount, decimals).toFixed() }, { t: 'address', v: params.order.outToken }, { t: 'uint', v: eth_wallet_1.Utils.toDecimals(params.order.minOutAmount, outTokenDecimals).toFixed() }, { t: 'uint', v: eth_wallet_1.Utils.toDecimals(params.order.protocolFee, decimals).toFixed() }, { t: 'address[]', v: params.pair }, { t: 'address', v: params.order.to }, { t: 'uint', v: params.order.expire.toFixed() });
        return hash;
    }
    async hashCancelOrderForSigning(cancelOrder) {
        let wallet = this.crosschain.wallets[cancelOrder.sourceChainId];
        let chain = this.getChain(cancelOrder.sourceChainId);
        let vault = chain.bridgeVault[cancelOrder.srcToken];
        let hash = wallet.web3.utils.soliditySha3({ t: 'uint', v: await wallet.getChainId() }, { t: 'address', v: vault.address }, { t: 'uint', v: cancelOrder.orderId.toString() }, { t: 'uint8', v: cancelOrder.canceledByOrderOwner ? 1 : 0 }, { t: 'uint', v: eth_wallet_1.Utils.toDecimals(cancelOrder.protocolFee.toFixed(), await (await vault.asset).decimals).toFixed() });
        return hash;
    }
    async hashUnstakeBondRequestForSigning(params) {
        let wallet = this.crosschain.wallets[params.chainId];
        let hash = wallet.web3.utils.soliditySha3({ t: 'uint', v: await wallet.getChainId() }, { t: 'address', v: params.event._event.address }, { t: 'address', v: params.event.backer }, { t: 'uint', v: params.event.trollProfileIndex.toFixed() }, { t: 'uint', v: eth_wallet_1.Utils.toDecimals(params.event.shares).toFixed() }, { t: 'uint', v: "0x" + params.nonce.toString(16) });
        return hash;
    }
    async hashRebalancerWithdrawForSigning(params) {
        let chain = this.getChain(params.chainId);
        let to = await chain.configStore.rebalancer();
        let wallet = this.crosschain.wallets[params.chainId];
        let vault = chain.bridgeVault[params.asset];
        let hash = wallet.web3.utils.soliditySha3({ t: 'uint256', v: await wallet.getChainId() }, { t: 'address', v: vault.address }, { t: 'address', v: to }, { t: 'uint256', v: eth_wallet_1.Utils.toDecimals(params.assetAmount, await (await vault.asset).decimals).toString() }, { t: 'uint256', v: "0x" + params.nonce.toString(16) });
        return hash;
    }
    async hashVoidOrderForSigning(params) {
        let wallet = this.crosschain.wallets[params.targetChain];
        let hash = wallet.web3.utils.soliditySha3({ t: 'uint256', v: params.targetChain }, { t: 'address', v: params.targetVault }, { t: 'bytes32', v: params.targetOrderId });
        return hash;
    }
}
exports.GeneralTroll = GeneralTroll;
