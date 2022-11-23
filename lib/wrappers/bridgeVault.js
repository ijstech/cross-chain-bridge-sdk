"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeVault = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const contracts_1 = require("../contracts");
class BridgeVault {
    constructor(wallet, address, tokenList) {
        this.address = address;
        this._bridgeVault = new contracts_1.OSWAP_BridgeVault(wallet, address);
        this.__tokenList = tokenList;
    }
    async deploy(params) {
        this.address = await this._bridgeVault.deploy(params);
        return this.address;
    }
    toNumber(f) {
        return (async () => (await f).toNumber());
    }
    getTokenDecimals(chainId, tokenAddress) {
        if (tokenAddress == eth_wallet_1.Utils.nullAddress) {
            return 18;
        }
        else {
            let token = this.__tokenList[chainId].find(e => e.address == tokenAddress);
            if (!token) {
                throw new Error("unknown token");
            }
            return token.decimals;
        }
    }
    async addLiquidity(amount) {
        let assetDecimals = await (await this.asset).decimals;
        amount = eth_wallet_1.Utils.toDecimals(amount, assetDecimals);
        let receipt = await this._bridgeVault.addLiquidity(amount);
        let event = this._bridgeVault.parseAddLiquidityEvent(receipt)[0];
        event.amount = eth_wallet_1.Utils.fromDecimals(event.amount, assetDecimals);
        event.mintAmount = eth_wallet_1.Utils.fromDecimals(event.mintAmount);
        event.newBalance = eth_wallet_1.Utils.fromDecimals(event.newBalance);
        event.newLpAssetBalance = eth_wallet_1.Utils.fromDecimals(event.newLpAssetBalance, assetDecimals);
        let mintEvent = this._bridgeVault.parseTransferEvent(receipt)[0];
        mintEvent.value = eth_wallet_1.Utils.fromDecimals(mintEvent.value);
        let assetTransferEvent = (await this.asset).parseTransferEvent(receipt)[0];
        assetTransferEvent.value = eth_wallet_1.Utils.fromDecimals(assetTransferEvent.value, assetDecimals);
        return { addLiquidityEvent: event, mintEvent: mintEvent, assetTransferEvent: assetTransferEvent };
    }
    async allowance(params) {
        return eth_wallet_1.Utils.fromDecimals(await this._bridgeVault.allowance(params));
    }
    async approve(params) {
        let clone = Object.assign({}, params);
        clone.amount = eth_wallet_1.Utils.toDecimals(clone.amount);
        let receipt = await this._bridgeVault.approve(clone);
        let event = this._bridgeVault.parseApprovalEvent(receipt)[0];
        event.value = eth_wallet_1.Utils.fromDecimals(event.value);
        return event;
    }
    get asset() {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.__asset)
                    this.__asset = new eth_wallet_1.Erc20(this._bridgeVault.wallet, await this._bridgeVault.asset());
                resolve(this.__asset);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    get assetDecimalsScale() {
        return (async () => (await this._bridgeVault.assetDecimalsScale()).toNumber())();
    }
    async assetPriceAgainstGovToken(params) {
        return eth_wallet_1.Utils.fromDecimals(await this._bridgeVault.assetPriceAgainstGovToken(params));
    }
    async balanceOf(account) {
        return eth_wallet_1.Utils.fromDecimals(await this._bridgeVault.balanceOf(account));
    }
    async cancelOrder(params) {
        let clone = Object.assign({}, params);
        let assetDecimals = await (await this.asset).decimals;
        clone.protocolFee = eth_wallet_1.Utils.toDecimals(clone.protocolFee, assetDecimals);
        let receipt = await this._bridgeVault.cancelOrder(clone);
        let event = this._bridgeVault.parseOrderCanceledEvent(receipt)[0];
        event.newProtocolFeeBalance = eth_wallet_1.Utils.fromDecimals(event.newProtocolFeeBalance, assetDecimals);
        event.newImbalance = eth_wallet_1.Utils.fromDecimals(event.newImbalance, assetDecimals);
        return event;
    }
    get configStore() {
        return this._bridgeVault.configStore();
    }
    get decimals() {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.__decimals)
                    this.__decimals = (await this._bridgeVault.decimals()).toNumber();
                resolve(this.__decimals);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    async decreaseAllowance(params) {
        let clone = Object.assign({}, params);
        clone.subtractedValue = eth_wallet_1.Utils.toDecimals(clone.subtractedValue);
        let receipt = await this._bridgeVault.decreaseAllowance(clone);
        let event = this._bridgeVault.parseApprovalEvent(receipt)[0];
        event.value = eth_wallet_1.Utils.fromDecimals(event.value);
        return event;
    }
    get getChainId() {
        return (async () => (await this._bridgeVault.getChainId()).toNumber())();
    }
    async getOrders(params) {
        let assetDecimals = await (await this.asset).decimals;
        let orders = await this._bridgeVault.getOrders(params);
        orders.forEach(order => {
            order.inAmount = eth_wallet_1.Utils.fromDecimals(order.inAmount, assetDecimals);
            let outTokenDecimals = this.getTokenDecimals(order.peerChain.toNumber(), order.outToken);
            order.minOutAmount = eth_wallet_1.Utils.fromDecimals(order.minOutAmount, outTokenDecimals);
        });
        return orders;
    }
    get govToken() {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.__govToken)
                    this.__govToken = new eth_wallet_1.Erc20(this._bridgeVault.wallet, await this._bridgeVault.govToken());
                resolve(this.__govToken);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    async hashCancelOrderParams(params) {
        return this._bridgeVault.hashCancelOrderParams(params);
    }
    async hashOrder(params) {
        return this._bridgeVault.hashOrder(params);
    }
    async hashSwapParams(params) {
        let clone = Object.assign({}, params);
        clone.order = Object.assign({}, clone.order);
        let assetDecimals = await (await this.asset).decimals;
        clone.order.inAmount = eth_wallet_1.Utils.toDecimals(clone.order.inAmount, assetDecimals);
        let chainId = typeof clone.order.peerChain === "number" ? clone.order.peerChain : clone.order.peerChain.toNumber();
        let outTokenDecimals = this.getTokenDecimals(chainId, clone.order.outToken);
        clone.order.minOutAmount = eth_wallet_1.Utils.toDecimals(clone.order.minOutAmount, outTokenDecimals);
        return this._bridgeVault.hashSwapParams(clone);
    }
    async hashVoidOrderParams(orderId) {
        return this._bridgeVault.hashVoidOrderParams(orderId);
    }
    async hashWithdrawParams(params) {
        let clone = Object.assign({}, params);
        let assetDecimals = await (await this.asset).decimals;
        clone.amount = eth_wallet_1.Utils.toDecimals(clone.amount, assetDecimals);
        return this._bridgeVault.hashWithdrawParams(clone);
    }
    get imbalance() {
        return (async () => { return eth_wallet_1.Utils.fromDecimals(await this._bridgeVault.imbalance(), await (await this.asset).decimals); })();
    }
    async increaseAllowance(params) {
        let clone = Object.assign({}, params);
        clone.addedValue = eth_wallet_1.Utils.toDecimals(clone.addedValue);
        let receipt = await this._bridgeVault.increaseAllowance(clone);
        let event = this._bridgeVault.parseApprovalEvent(receipt)[0];
        event.value = eth_wallet_1.Utils.fromDecimals(event.value);
        return event;
    }
    async initAddress(vaultRegistry) {
        return this._bridgeVault.initAddress(vaultRegistry);
    }
    get lastKnownBalance() {
        return (async () => { return eth_wallet_1.Utils.fromDecimals(await this._bridgeVault.lastKnownBalance(), await (await this.asset).decimals); })();
    }
    get lpAssetBalance() {
        return (async () => { return eth_wallet_1.Utils.fromDecimals(await this._bridgeVault.lpAssetBalance(), await (await this.asset).decimals); })();
    }
    get name() {
        return this._bridgeVault.govToken();
    }
    async newOrder(order) {
        let clone = Object.assign({}, order);
        let assetDecimals = await (await this.asset).decimals;
        clone.inAmount = eth_wallet_1.Utils.toDecimals(clone.inAmount, assetDecimals);
        let peerChainId = typeof clone.peerChain === "number" ? clone.peerChain : clone.peerChain.toNumber();
        let outTokenDecimals = this.getTokenDecimals(peerChainId, clone.outToken);
        clone.minOutAmount = eth_wallet_1.Utils.toDecimals(clone.minOutAmount, outTokenDecimals);
        let receipt = await this._bridgeVault.newOrder(clone);
        let event = this._bridgeVault.parseNewOrderEvent(receipt)[0];
        event.order.inAmount = eth_wallet_1.Utils.fromDecimals(event.order.inAmount, assetDecimals);
        event.order.minOutAmount = eth_wallet_1.Utils.fromDecimals(event.order.minOutAmount, outTokenDecimals);
        event.newImbalance = eth_wallet_1.Utils.fromDecimals(event.newImbalance, assetDecimals);
        let assetTransferEvent = (await this.asset).parseTransferEvent(receipt)[0];
        assetTransferEvent.value = eth_wallet_1.Utils.fromDecimals(assetTransferEvent.value, assetDecimals);
        return { newOrderEvent: event, assetTransferEvent: assetTransferEvent };
    }
    async parseNewOrderEvent(receipt) {
        let event = this._bridgeVault.parseNewOrderEvent(receipt)[0];
        event.order = await this._decodeNewOrder(event.order);
        return event;
    }
    async decodeNewOrderEvent(event) {
        let newOrderEvent = this._bridgeVault.decodeNewOrderEvent(event);
        newOrderEvent.order = await this._decodeNewOrder(newOrderEvent.order);
        newOrderEvent.newImbalance = eth_wallet_1.Utils.fromDecimals(newOrderEvent.newImbalance, await (await this.asset).decimals);
        return newOrderEvent;
    }
    async decodeAmendOrderRequestEvent(event) {
        let amendOrderRequestEvent = this._bridgeVault.decodeAmendOrderRequestEvent(event);
        amendOrderRequestEvent.order = await this._decodeNewOrder(amendOrderRequestEvent.order);
        return amendOrderRequestEvent;
    }
    async _decodeNewOrder(order) {
        let assetDecimals = await (await this.asset).decimals;
        let dstChainId = typeof order.peerChain === "number" ? order.peerChain : order.peerChain.toNumber();
        let outTokenDecimals = this.getTokenDecimals(dstChainId, order.outToken);
        order.inAmount = eth_wallet_1.Utils.fromDecimals(order.inAmount, assetDecimals);
        order.minOutAmount = eth_wallet_1.Utils.fromDecimals(order.minOutAmount, outTokenDecimals);
        return order;
    }
    async decodeSwapEvent(event) {
        let swapEvent = this._bridgeVault.decodeSwapEvent(event);
        let assetDecimals = await (await this.asset).decimals;
        swapEvent.order.peerChain = new eth_wallet_1.BigNumber(swapEvent.order.peerChain);
        let srcChainId = swapEvent.order.peerChain.toNumber();
        let outTokenDecimals = this.getTokenDecimals(await this._bridgeVault.wallet.getChainId(), swapEvent.order.outToken);
        swapEvent.order.inAmount = eth_wallet_1.Utils.fromDecimals(swapEvent.order.inAmount, assetDecimals);
        swapEvent.order.minOutAmount = eth_wallet_1.Utils.fromDecimals(swapEvent.order.minOutAmount, outTokenDecimals);
        swapEvent.outAmount = eth_wallet_1.Utils.fromDecimals(swapEvent.outAmount, outTokenDecimals);
        swapEvent.newImbalance = eth_wallet_1.Utils.fromDecimals(swapEvent.newImbalance, assetDecimals);
        swapEvent.newLpAssetBalance = eth_wallet_1.Utils.fromDecimals(swapEvent.newLpAssetBalance, assetDecimals);
        swapEvent.newProtocolFeeBalance = eth_wallet_1.Utils.fromDecimals(swapEvent.newProtocolFeeBalance, assetDecimals);
        return swapEvent;
    }
    async decodeOrderCanceledEvent(event) {
        let cancelEvent = this._bridgeVault.decodeOrderCanceledEvent(event);
        let assetDecimals = await (await this.asset).decimals;
        cancelEvent.newImbalance = eth_wallet_1.Utils.fromDecimals(cancelEvent.newImbalance, assetDecimals);
        cancelEvent.newProtocolFeeBalance = eth_wallet_1.Utils.fromDecimals(cancelEvent.newProtocolFeeBalance, assetDecimals);
        return cancelEvent;
    }
    async newOrderFromRouterWei(params) {
        let receipt = await this._bridgeVault.newOrderFromRouter(params);
        return this._bridgeVault.parseNewOrderEvent(receipt)[0];
    }
    async orderAmendments(params) {
        let order = await this._bridgeVault.orderAmendments({ param1: params.orderId, param2: params.amendment });
        let assetDecimals = await (await this.asset).decimals;
        let chainId = typeof order.peerChain === "number" ? order.peerChain : order.peerChain.toNumber();
        let outTokenDecimals = this.getTokenDecimals(chainId, order.outToken);
        let minOutAmount = eth_wallet_1.Utils.fromDecimals(order.minOutAmount, outTokenDecimals);
        ;
        return {
            peerChain: order.peerChain,
            inAmount: eth_wallet_1.Utils.fromDecimals(order.inAmount, assetDecimals),
            outToken: order.outToken,
            minOutAmount: minOutAmount,
            to: order.to,
            expire: new eth_wallet_1.BigNumber(order.expire)
        };
    }
    async orderAmendmentsLength(orderId) {
        return (async () => { return (await this._bridgeVault.orderAmendmentsLength(orderId)).toNumber(); })();
    }
    async orderOwner(orderId) {
        return this._bridgeVault.orderOwner(orderId);
    }
    async orderRefunds(orderId) {
        return (async () => { return eth_wallet_1.Utils.fromDecimals(await this._bridgeVault.orderRefunds(orderId), await (await this.asset).decimals); })();
    }
    async orderStatus(orderId) {
        return this._bridgeVault.orderStatus(orderId);
    }
    async orders(orderId) {
        let order = await this._bridgeVault.orders(orderId);
        let assetDecimals = await (await this.asset).decimals;
        let chainId = typeof order.peerChain === "number" ? order.peerChain : order.peerChain.toNumber();
        let outTokenDecimals = this.getTokenDecimals(chainId, order.outToken);
        let minOutAmount = eth_wallet_1.Utils.fromDecimals(order.minOutAmount, outTokenDecimals);
        return {
            peerChain: order.peerChain,
            inAmount: eth_wallet_1.Utils.fromDecimals(order.inAmount, assetDecimals),
            outToken: order.outToken,
            minOutAmount: minOutAmount,
            to: order.to,
            expire: new Date(order.expire.toNumber() * 1000)
        };
    }
    get ordersLength() {
        return (async () => { return (await this._bridgeVault.ordersLength()).toNumber(); })();
    }
    async pendingWithdrawalAmount(liquidityProvider) {
        return eth_wallet_1.Utils.fromDecimals(await this._bridgeVault.pendingWithdrawalAmount(liquidityProvider), await (await this.asset).decimals);
    }
    async pendingWithdrawalTimeout(liquidityProvider) {
        return new Date((await this._bridgeVault.pendingWithdrawalTimeout(liquidityProvider)).toNumber() * 1000);
    }
    get protocolFeeBalance() {
        return (async () => { return eth_wallet_1.Utils.fromDecimals(await this._bridgeVault.protocolFeeBalance(), await (await this.asset).decimals); })();
    }
    async rebalancerDeposit(assetAmount) {
        let assetDecimals = await (await this.asset).decimals;
        assetAmount = eth_wallet_1.Utils.toDecimals(assetAmount, assetDecimals);
        let receipt = await this._bridgeVault.rebalancerDeposit(assetAmount);
        let rebalanceEvent = this._bridgeVault.parseRebalanceEvent(receipt)[0];
        rebalanceEvent.amount = eth_wallet_1.Utils.fromDecimals(rebalanceEvent.amount, assetDecimals);
        rebalanceEvent.newImbalance = eth_wallet_1.Utils.fromDecimals(rebalanceEvent.newImbalance, assetDecimals);
        let transferEvent = (await this.asset).parseTransferEvent(receipt)[0];
        transferEvent.value = eth_wallet_1.Utils.fromDecimals(transferEvent.value, assetDecimals);
        return { rebalanceEvent, transferEvent };
    }
    async rebalancerWithdraw(params) {
        let clone = Object.assign({}, params);
        let assetDecimals = await (await this.asset).decimals;
        clone.assetAmount = eth_wallet_1.Utils.toDecimals(clone.assetAmount, assetDecimals);
        let receipt = await this._bridgeVault.rebalancerWithdraw(clone);
        let rebalanceEvent = this._bridgeVault.parseRebalanceEvent(receipt)[0];
        rebalanceEvent.amount = eth_wallet_1.Utils.fromDecimals(rebalanceEvent.amount, assetDecimals);
        rebalanceEvent.newImbalance = eth_wallet_1.Utils.fromDecimals(rebalanceEvent.newImbalance, assetDecimals);
        let transferEvent = (await this.asset).parseTransferEvent(receipt)[0];
        transferEvent.value = eth_wallet_1.Utils.fromDecimals(transferEvent.value, assetDecimals);
        return { rebalanceEvent, transferEvent };
    }
    async removeLiquidity(params) {
        let clone = Object.assign({}, params);
        let assetDecimals = await (await this.asset).decimals;
        clone.assetAmount = eth_wallet_1.Utils.toDecimals(clone.assetAmount, assetDecimals);
        let receipt = await this._bridgeVault.removeLiquidity(clone);
        let event = this._bridgeVault.parseRemoveLiquidityEvent(receipt)[0];
        event.amount = eth_wallet_1.Utils.fromDecimals(event.amount, assetDecimals);
        event.newPendingWithdrawal = eth_wallet_1.Utils.fromDecimals(event.newPendingWithdrawal, assetDecimals);
        let assetTransferEvent = (await this.asset).parseTransferEvent(receipt)[0];
        assetTransferEvent.value = eth_wallet_1.Utils.fromDecimals(assetTransferEvent.value, assetDecimals);
        return { removeLiquidityEvent: event, assetTransferEvent: assetTransferEvent };
    }
    async removeLiquidityRequest(lpTokenAmount) {
        let assetDecimals = await (await this.asset).decimals;
        lpTokenAmount = eth_wallet_1.Utils.toDecimals(lpTokenAmount);
        let receipt = await this._bridgeVault.removeLiquidityRequest(lpTokenAmount);
        let event = this._bridgeVault.parseRemoveLiquidityRequestEvent(receipt)[0];
        event.amount = eth_wallet_1.Utils.fromDecimals(event.amount, assetDecimals);
        event.burnAmount = eth_wallet_1.Utils.fromDecimals(event.burnAmount);
        event.newBalance = eth_wallet_1.Utils.fromDecimals(event.newBalance);
        event.newLpAssetBalance = eth_wallet_1.Utils.fromDecimals(event.newLpAssetBalance, assetDecimals);
        event.newPendingWithdrawal = eth_wallet_1.Utils.fromDecimals(event.newPendingWithdrawal, assetDecimals);
        let burnEvent = this._bridgeVault.parseTransferEvent(receipt)[0];
        burnEvent.value = eth_wallet_1.Utils.fromDecimals(burnEvent.value);
        let assetTransferEvents = (await this.asset).parseTransferEvent(receipt);
        if (assetTransferEvents && assetTransferEvents[0])
            assetTransferEvents[0].value = eth_wallet_1.Utils.fromDecimals(assetTransferEvents[0].value, assetDecimals);
        return { RemoveLiquidityRequestEvent: event, burnEvent: burnEvent, assetTransferEvent: assetTransferEvents[0] };
        ;
    }
    async requestCancelOrder(params) {
        let receipt = await this._bridgeVault.requestCancelOrder(params);
        let event = this._bridgeVault.parseRequestCancelOrderEvent(receipt)[0];
        return event;
    }
    async requestAmendOrder(params) {
        let clone = Object.assign({}, params);
        clone.order = Object.assign({}, clone.order);
        let assetDecimals = await (await this.asset).decimals;
        let order = clone.order;
        order.inAmount = eth_wallet_1.Utils.toDecimals(order.inAmount, assetDecimals);
        let peerChainId = typeof order.peerChain === "number" ? order.peerChain : order.peerChain.toNumber();
        let outTokenDecimals = this.getTokenDecimals(peerChainId, order.outToken);
        order.minOutAmount = eth_wallet_1.Utils.toDecimals(order.minOutAmount, outTokenDecimals);
        let receipt = await this._bridgeVault.requestAmendOrder({ orderId: clone.orderId, order: order });
        let amendOrderEvent = this._bridgeVault.parseAmendOrderRequestEvent(receipt)[0];
        amendOrderEvent.order.inAmount = eth_wallet_1.Utils.fromDecimals(amendOrderEvent.order.inAmount, assetDecimals);
        amendOrderEvent.order.minOutAmount = eth_wallet_1.Utils.fromDecimals(amendOrderEvent.order.minOutAmount, outTokenDecimals);
        return amendOrderEvent;
    }
    async swap(params) {
        let clone = Object.assign({}, params);
        clone.order = Object.assign({}, clone.order);
        let assetDecimals = await (await this.asset).decimals;
        let chainId = await this._bridgeVault.wallet.getChainId();
        let outTokenDecimals = this.getTokenDecimals(chainId, params.order.outToken);
        clone.order.inAmount = eth_wallet_1.Utils.toDecimals(clone.order.inAmount, assetDecimals);
        clone.order.minOutAmount = eth_wallet_1.Utils.toDecimals(clone.order.minOutAmount, outTokenDecimals);
        clone.protocolFee = eth_wallet_1.Utils.toDecimals(clone.protocolFee, assetDecimals);
        let receipt = await this._bridgeVault.swap(clone);
        let swapEvent = this._bridgeVault.parseSwapEvent(receipt)[0];
        swapEvent.newImbalance = eth_wallet_1.Utils.fromDecimals(swapEvent.newImbalance, assetDecimals);
        swapEvent.newLpAssetBalance = eth_wallet_1.Utils.fromDecimals(swapEvent.newLpAssetBalance, assetDecimals);
        swapEvent.newProtocolFeeBalance = eth_wallet_1.Utils.fromDecimals(swapEvent.newProtocolFeeBalance, assetDecimals);
        let transferEvent;
        if (params.order.outToken != eth_wallet_1.Utils.nullAddress) {
            transferEvent = new eth_wallet_1.Erc20(this._bridgeVault.wallet, params.order.outToken).parseTransferEvent(receipt)[0];
            transferEvent.value = eth_wallet_1.Utils.fromDecimals(transferEvent.value, assetDecimals);
        }
        return { swapEvent, transferEvent };
    }
    async swapOrderStatus(orderId) {
        return (await this._bridgeVault.swapOrderStatus(orderId)).toNumber();
    }
    get symbol() {
        return this._bridgeVault.symbol();
    }
    async sync() {
        let assetDecimals = await (await this.asset).decimals;
        let receipt = await this._bridgeVault.sync();
        let syncEvent = this._bridgeVault.parseSyncEvent(receipt)[0];
        syncEvent.excess = eth_wallet_1.Utils.fromDecimals(syncEvent.excess, assetDecimals);
        syncEvent.newProtocolFeeBalance = eth_wallet_1.Utils.fromDecimals(syncEvent.newProtocolFeeBalance, assetDecimals);
        return syncEvent;
    }
    get totalPendingWithdrawal() {
        return (async () => { return eth_wallet_1.Utils.fromDecimals(await this._bridgeVault.totalPendingWithdrawal(), await (await this.asset).decimals); })();
    }
    get totalSupply() {
        return (async () => { return eth_wallet_1.Utils.fromDecimals(await this._bridgeVault.totalSupply()); })();
    }
    async transfer(params) {
        let clone = Object.assign({}, params);
        clone.amount = eth_wallet_1.Utils.toDecimals(clone.amount);
        let receipt = await this._bridgeVault.transfer(clone);
        let event = this._bridgeVault.parseTransferEvent(receipt)[0];
        event.value = eth_wallet_1.Utils.fromDecimals(event.value);
        return event;
    }
    async transferFrom(params) {
        let clone = Object.assign({}, params);
        clone.amount = eth_wallet_1.Utils.toDecimals(clone.amount);
        let receipt = await this._bridgeVault.transferFrom(clone);
        let transfer = this._bridgeVault.parseTransferEvent(receipt)[0];
        transfer.value = eth_wallet_1.Utils.fromDecimals(transfer.value);
        let approval = this._bridgeVault.parseApprovalEvent(receipt)[0];
        approval.value = eth_wallet_1.Utils.fromDecimals(approval.value);
        return { transfer, approval };
    }
    get trollRegistry() {
        return this._bridgeVault.trollRegistry();
    }
    async updateConfigStore() {
        let receipt = await this._bridgeVault.updateConfigStore();
        let event = this._bridgeVault.parseUpdateConfigStoreEvent(receipt)[0];
        return event;
    }
    async updateTrollRegistry() {
        let receipt = await this._bridgeVault.updateTrollRegistry();
        let event = this._bridgeVault.parseUpdateTrollRegistryEvent(receipt)[0];
        return event;
    }
    get vaultRegistry() {
        return this._bridgeVault.vaultRegistry();
    }
    async voidOrder(params) {
        let receipt = await this._bridgeVault.voidOrder(params);
        let event = this._bridgeVault.parseVoidOrderEvent(receipt)[0];
        return event;
    }
    async withdrawUnexecutedOrder(orderId) {
        let assetDecimals = await (await this.asset).decimals;
        let receipt = await this._bridgeVault.withdrawUnexecutedOrder(orderId);
        let withdrawUnexecutedOrderEvent = this._bridgeVault.parseWithdrawUnexecutedOrderEvent(receipt)[0];
        withdrawUnexecutedOrderEvent.newImbalance = eth_wallet_1.Utils.fromDecimals(withdrawUnexecutedOrderEvent.newImbalance, assetDecimals);
        let assetTransferEvent = (await this.asset).parseTransferEvent(receipt)[0];
        assetTransferEvent.value = eth_wallet_1.Utils.fromDecimals(assetTransferEvent.value, assetDecimals);
        return { withdrawUnexecutedOrderEvent, assetTransferEvent };
    }
    async withdrawlTrollFee(amount) {
        let assetDecimals = await (await this.asset).decimals;
        amount = eth_wallet_1.Utils.toDecimals(amount, assetDecimals);
        let receipt = await this._bridgeVault.withdrawlTrollFee(amount);
        let widhdrawEvent = this._bridgeVault.parseWithdrawlTrollFeeEvent(receipt)[0];
        widhdrawEvent.amount = eth_wallet_1.Utils.fromDecimals(widhdrawEvent.amount, assetDecimals);
        widhdrawEvent.newProtocolFeeBalance = eth_wallet_1.Utils.fromDecimals(widhdrawEvent.newProtocolFeeBalance, assetDecimals);
        let transferEvent = (await this.asset).parseTransferEvent(receipt)[0];
        transferEvent.value = eth_wallet_1.Utils.fromDecimals(transferEvent.value, assetDecimals);
        return { widhdrawEvent, transferEvent };
    }
}
exports.BridgeVault = BridgeVault;
