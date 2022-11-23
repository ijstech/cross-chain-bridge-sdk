"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_BridgeVault = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_BridgeVault_json_1 = __importDefault(require("./OSWAP_BridgeVault.json"));
class OSWAP_BridgeVault extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_BridgeVault_json_1.default.abi, OSWAP_BridgeVault_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.vaultRegistry, params.configStore, params.asset]);
    }
    parseAddLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "AddLiquidity").map(e => this.decodeAddLiquidityEvent(e));
    }
    decodeAddLiquidityEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            amount: new eth_contract_1.BigNumber(result.amount),
            mintAmount: new eth_contract_1.BigNumber(result.mintAmount),
            newBalance: new eth_contract_1.BigNumber(result.newBalance),
            newLpAssetBalance: new eth_contract_1.BigNumber(result.newLpAssetBalance),
            _event: event
        };
    }
    parseAmendOrderRequestEvent(receipt) {
        return this.parseEvents(receipt, "AmendOrderRequest").map(e => this.decodeAmendOrderRequestEvent(e));
    }
    decodeAmendOrderRequestEvent(event) {
        let result = event.data;
        return {
            orderId: new eth_contract_1.BigNumber(result.orderId),
            amendment: new eth_contract_1.BigNumber(result.amendment),
            order: {
                peerChain: new eth_contract_1.BigNumber(result.order.peerChain),
                inAmount: new eth_contract_1.BigNumber(result.order.inAmount),
                outToken: result.order.outToken,
                minOutAmount: new eth_contract_1.BigNumber(result.order.minOutAmount),
                to: result.order.to,
                expire: new eth_contract_1.BigNumber(result.order.expire)
            },
            _event: event
        };
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_contract_1.BigNumber(result.value),
            _event: event
        };
    }
    parseNewOrderEvent(receipt) {
        return this.parseEvents(receipt, "NewOrder").map(e => this.decodeNewOrderEvent(e));
    }
    decodeNewOrderEvent(event) {
        let result = event.data;
        return {
            orderId: new eth_contract_1.BigNumber(result.orderId),
            owner: result.owner,
            order: {
                peerChain: new eth_contract_1.BigNumber(result.order.peerChain),
                inAmount: new eth_contract_1.BigNumber(result.order.inAmount),
                outToken: result.order.outToken,
                minOutAmount: new eth_contract_1.BigNumber(result.order.minOutAmount),
                to: result.order.to,
                expire: new eth_contract_1.BigNumber(result.order.expire)
            },
            newImbalance: new eth_contract_1.BigNumber(result.newImbalance),
            _event: event
        };
    }
    parseOrderCanceledEvent(receipt) {
        return this.parseEvents(receipt, "OrderCanceled").map(e => this.decodeOrderCanceledEvent(e));
    }
    decodeOrderCanceledEvent(event) {
        let result = event.data;
        return {
            orderId: new eth_contract_1.BigNumber(result.orderId),
            sender: result.sender,
            signers: result.signers.map(e => new eth_contract_1.BigNumber(e)),
            canceledByOrderOwner: result.canceledByOrderOwner,
            newImbalance: new eth_contract_1.BigNumber(result.newImbalance),
            newProtocolFeeBalance: new eth_contract_1.BigNumber(result.newProtocolFeeBalance),
            _event: event
        };
    }
    parseRebalanceEvent(receipt) {
        return this.parseEvents(receipt, "Rebalance").map(e => this.decodeRebalanceEvent(e));
    }
    decodeRebalanceEvent(event) {
        let result = event.data;
        return {
            rebalancer: result.rebalancer,
            amount: new eth_contract_1.BigNumber(result.amount),
            newImbalance: new eth_contract_1.BigNumber(result.newImbalance),
            _event: event
        };
    }
    parseRemoveLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "RemoveLiquidity").map(e => this.decodeRemoveLiquidityEvent(e));
    }
    decodeRemoveLiquidityEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            amount: new eth_contract_1.BigNumber(result.amount),
            newPendingWithdrawal: new eth_contract_1.BigNumber(result.newPendingWithdrawal),
            _event: event
        };
    }
    parseRemoveLiquidityRequestEvent(receipt) {
        return this.parseEvents(receipt, "RemoveLiquidityRequest").map(e => this.decodeRemoveLiquidityRequestEvent(e));
    }
    decodeRemoveLiquidityRequestEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            amount: new eth_contract_1.BigNumber(result.amount),
            burnAmount: new eth_contract_1.BigNumber(result.burnAmount),
            newBalance: new eth_contract_1.BigNumber(result.newBalance),
            newLpAssetBalance: new eth_contract_1.BigNumber(result.newLpAssetBalance),
            newPendingWithdrawal: new eth_contract_1.BigNumber(result.newPendingWithdrawal),
            _event: event
        };
    }
    parseRequestCancelOrderEvent(receipt) {
        return this.parseEvents(receipt, "RequestCancelOrder").map(e => this.decodeRequestCancelOrderEvent(e));
    }
    decodeRequestCancelOrderEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            sourceChainId: new eth_contract_1.BigNumber(result.sourceChainId),
            orderId: new eth_contract_1.BigNumber(result.orderId),
            hashedOrderId: result.hashedOrderId,
            _event: event
        };
    }
    parseSwapEvent(receipt) {
        return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event) {
        let result = event.data;
        return {
            orderId: new eth_contract_1.BigNumber(result.orderId),
            sender: result.sender,
            signers: result.signers.map(e => new eth_contract_1.BigNumber(e)),
            owner: result.owner,
            amendment: new eth_contract_1.BigNumber(result.amendment),
            order: {
                peerChain: new eth_contract_1.BigNumber(result.order.peerChain),
                inAmount: new eth_contract_1.BigNumber(result.order.inAmount),
                outToken: result.order.outToken,
                minOutAmount: new eth_contract_1.BigNumber(result.order.minOutAmount),
                to: result.order.to,
                expire: new eth_contract_1.BigNumber(result.order.expire)
            },
            outAmount: new eth_contract_1.BigNumber(result.outAmount),
            newImbalance: new eth_contract_1.BigNumber(result.newImbalance),
            newLpAssetBalance: new eth_contract_1.BigNumber(result.newLpAssetBalance),
            newProtocolFeeBalance: new eth_contract_1.BigNumber(result.newProtocolFeeBalance),
            _event: event
        };
    }
    parseSyncEvent(receipt) {
        return this.parseEvents(receipt, "Sync").map(e => this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event) {
        let result = event.data;
        return {
            excess: new eth_contract_1.BigNumber(result.excess),
            newProtocolFeeBalance: new eth_contract_1.BigNumber(result.newProtocolFeeBalance),
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new eth_contract_1.BigNumber(result.value),
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt) {
        return this.parseEvents(receipt, "UpdateConfigStore").map(e => this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event) {
        let result = event.data;
        return {
            newConfigStore: result.newConfigStore,
            _event: event
        };
    }
    parseUpdateTrollRegistryEvent(receipt) {
        return this.parseEvents(receipt, "UpdateTrollRegistry").map(e => this.decodeUpdateTrollRegistryEvent(e));
    }
    decodeUpdateTrollRegistryEvent(event) {
        let result = event.data;
        return {
            newTrollRegistry: result.newTrollRegistry,
            _event: event
        };
    }
    parseVoidOrderEvent(receipt) {
        return this.parseEvents(receipt, "VoidOrder").map(e => this.decodeVoidOrderEvent(e));
    }
    decodeVoidOrderEvent(event) {
        let result = event.data;
        return {
            orderId: result.orderId,
            sender: result.sender,
            signers: result.signers.map(e => new eth_contract_1.BigNumber(e)),
            _event: event
        };
    }
    parseWithdrawUnexecutedOrderEvent(receipt) {
        return this.parseEvents(receipt, "WithdrawUnexecutedOrder").map(e => this.decodeWithdrawUnexecutedOrderEvent(e));
    }
    decodeWithdrawUnexecutedOrderEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            orderId: new eth_contract_1.BigNumber(result.orderId),
            newImbalance: new eth_contract_1.BigNumber(result.newImbalance),
            _event: event
        };
    }
    parseWithdrawlTrollFeeEvent(receipt) {
        return this.parseEvents(receipt, "WithdrawlTrollFee").map(e => this.decodeWithdrawlTrollFeeEvent(e));
    }
    decodeWithdrawlTrollFeeEvent(event) {
        let result = event.data;
        return {
            feeTo: result.feeTo,
            amount: new eth_contract_1.BigNumber(result.amount),
            newProtocolFeeBalance: new eth_contract_1.BigNumber(result.newProtocolFeeBalance),
            _event: event
        };
    }
    assign() {
        let allowanceParams = (params) => [params.owner, params.spender];
        let allowance_call = async (params) => {
            let result = await this.call('allowance', allowanceParams(params));
            return new eth_contract_1.BigNumber(result);
        };
        this.allowance = allowance_call;
        let asset_call = async () => {
            let result = await this.call('asset');
            return result;
        };
        this.asset = asset_call;
        let assetDecimalsScale_call = async () => {
            let result = await this.call('assetDecimalsScale');
            return new eth_contract_1.BigNumber(result);
        };
        this.assetDecimalsScale = assetDecimalsScale_call;
        let assetPriceAgainstGovTokenParams = (params) => [params.govTokenOracle, params.assetTokenOracle];
        let assetPriceAgainstGovToken_call = async (params) => {
            let result = await this.call('assetPriceAgainstGovToken', assetPriceAgainstGovTokenParams(params));
            return new eth_contract_1.BigNumber(result);
        };
        this.assetPriceAgainstGovToken = assetPriceAgainstGovToken_call;
        let balanceOf_call = async (account) => {
            let result = await this.call('balanceOf', [account]);
            return new eth_contract_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let configStore_call = async () => {
            let result = await this.call('configStore');
            return result;
        };
        this.configStore = configStore_call;
        let decimals_call = async () => {
            let result = await this.call('decimals');
            return new eth_contract_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let getChainId_call = async () => {
            let result = await this.call('getChainId');
            return new eth_contract_1.BigNumber(result);
        };
        this.getChainId = getChainId_call;
        let getOrdersParams = (params) => [this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
        let getOrders_call = async (params) => {
            let result = await this.call('getOrders', getOrdersParams(params));
            return (result.map(e => ({
                peerChain: new eth_contract_1.BigNumber(e.peerChain),
                inAmount: new eth_contract_1.BigNumber(e.inAmount),
                outToken: e.outToken,
                minOutAmount: new eth_contract_1.BigNumber(e.minOutAmount),
                to: e.to,
                expire: new eth_contract_1.BigNumber(e.expire)
            })));
        };
        this.getOrders = getOrders_call;
        let govToken_call = async () => {
            let result = await this.call('govToken');
            return result;
        };
        this.govToken = govToken_call;
        let hashCancelOrderParamsParams = (params) => [this.wallet.utils.toString(params.orderId), params.canceledByOrderOwner, this.wallet.utils.toString(params.protocolFee)];
        let hashCancelOrderParams_call = async (params) => {
            let result = await this.call('hashCancelOrderParams', hashCancelOrderParamsParams(params));
            return result;
        };
        this.hashCancelOrderParams = hashCancelOrderParams_call;
        let hashOrderParams = (params) => [params.owner, this.wallet.utils.toString(params.sourceChainId), this.wallet.utils.toString(params.orderId)];
        let hashOrder_call = async (params) => {
            let result = await this.call('hashOrder', hashOrderParams(params));
            return result;
        };
        this.hashOrder = hashOrder_call;
        let hashSwapParamsParams = (params) => [this.wallet.utils.stringToBytes32(params.orderId), this.wallet.utils.toString(params.amendment), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)], this.wallet.utils.toString(params.protocolFee), params.pair];
        let hashSwapParams_call = async (params) => {
            let result = await this.call('hashSwapParams', hashSwapParamsParams(params));
            return result;
        };
        this.hashSwapParams = hashSwapParams_call;
        let hashVoidOrderParams_call = async (orderId) => {
            let result = await this.call('hashVoidOrderParams', [this.wallet.utils.stringToBytes32(orderId)]);
            return result;
        };
        this.hashVoidOrderParams = hashVoidOrderParams_call;
        let hashWithdrawParamsParams = (params) => [params.owner, this.wallet.utils.toString(params.amount), this.wallet.utils.toString(params.nonce)];
        let hashWithdrawParams_call = async (params) => {
            let result = await this.call('hashWithdrawParams', hashWithdrawParamsParams(params));
            return result;
        };
        this.hashWithdrawParams = hashWithdrawParams_call;
        let imbalance_call = async () => {
            let result = await this.call('imbalance');
            return new eth_contract_1.BigNumber(result);
        };
        this.imbalance = imbalance_call;
        let lastKnownBalance_call = async () => {
            let result = await this.call('lastKnownBalance');
            return new eth_contract_1.BigNumber(result);
        };
        this.lastKnownBalance = lastKnownBalance_call;
        let lpAssetBalance_call = async () => {
            let result = await this.call('lpAssetBalance');
            return new eth_contract_1.BigNumber(result);
        };
        this.lpAssetBalance = lpAssetBalance_call;
        let name_call = async () => {
            let result = await this.call('name');
            return result;
        };
        this.name = name_call;
        let orderAmendmentsParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
        let orderAmendments_call = async (params) => {
            let result = await this.call('orderAmendments', orderAmendmentsParams(params));
            return {
                peerChain: new eth_contract_1.BigNumber(result.peerChain),
                inAmount: new eth_contract_1.BigNumber(result.inAmount),
                outToken: result.outToken,
                minOutAmount: new eth_contract_1.BigNumber(result.minOutAmount),
                to: result.to,
                expire: new eth_contract_1.BigNumber(result.expire)
            };
        };
        this.orderAmendments = orderAmendments_call;
        let orderAmendmentsLength_call = async (orderId) => {
            let result = await this.call('orderAmendmentsLength', [this.wallet.utils.toString(orderId)]);
            return new eth_contract_1.BigNumber(result);
        };
        this.orderAmendmentsLength = orderAmendmentsLength_call;
        let orderOwner_call = async (param1) => {
            let result = await this.call('orderOwner', [this.wallet.utils.toString(param1)]);
            return result;
        };
        this.orderOwner = orderOwner_call;
        let orderRefunds_call = async (param1) => {
            let result = await this.call('orderRefunds', [this.wallet.utils.toString(param1)]);
            return new eth_contract_1.BigNumber(result);
        };
        this.orderRefunds = orderRefunds_call;
        let orderStatus_call = async (param1) => {
            let result = await this.call('orderStatus', [this.wallet.utils.toString(param1)]);
            return new eth_contract_1.BigNumber(result);
        };
        this.orderStatus = orderStatus_call;
        let orders_call = async (param1) => {
            let result = await this.call('orders', [this.wallet.utils.toString(param1)]);
            return {
                peerChain: new eth_contract_1.BigNumber(result.peerChain),
                inAmount: new eth_contract_1.BigNumber(result.inAmount),
                outToken: result.outToken,
                minOutAmount: new eth_contract_1.BigNumber(result.minOutAmount),
                to: result.to,
                expire: new eth_contract_1.BigNumber(result.expire)
            };
        };
        this.orders = orders_call;
        let ordersLength_call = async () => {
            let result = await this.call('ordersLength');
            return new eth_contract_1.BigNumber(result);
        };
        this.ordersLength = ordersLength_call;
        let pendingWithdrawalAmount_call = async (param1) => {
            let result = await this.call('pendingWithdrawalAmount', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.pendingWithdrawalAmount = pendingWithdrawalAmount_call;
        let pendingWithdrawalTimeout_call = async (param1) => {
            let result = await this.call('pendingWithdrawalTimeout', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.pendingWithdrawalTimeout = pendingWithdrawalTimeout_call;
        let protocolFeeBalance_call = async () => {
            let result = await this.call('protocolFeeBalance');
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFeeBalance = protocolFeeBalance_call;
        let swapOrderStatus_call = async (param1) => {
            let result = await this.call('swapOrderStatus', [this.wallet.utils.stringToBytes32(param1)]);
            return new eth_contract_1.BigNumber(result);
        };
        this.swapOrderStatus = swapOrderStatus_call;
        let symbol_call = async () => {
            let result = await this.call('symbol');
            return result;
        };
        this.symbol = symbol_call;
        let totalPendingWithdrawal_call = async () => {
            let result = await this.call('totalPendingWithdrawal');
            return new eth_contract_1.BigNumber(result);
        };
        this.totalPendingWithdrawal = totalPendingWithdrawal_call;
        let totalSupply_call = async () => {
            let result = await this.call('totalSupply');
            return new eth_contract_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let trollRegistry_call = async () => {
            let result = await this.call('trollRegistry');
            return result;
        };
        this.trollRegistry = trollRegistry_call;
        let vaultRegistry_call = async () => {
            let result = await this.call('vaultRegistry');
            return result;
        };
        this.vaultRegistry = vaultRegistry_call;
        let addLiquidity_send = async (amount) => {
            let result = await this.send('addLiquidity', [this.wallet.utils.toString(amount)]);
            return result;
        };
        let addLiquidity_call = async (amount) => {
            let result = await this.call('addLiquidity', [this.wallet.utils.toString(amount)]);
            return;
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call
        });
        let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
        let approve_send = async (params) => {
            let result = await this.send('approve', approveParams(params));
            return result;
        };
        let approve_call = async (params) => {
            let result = await this.call('approve', approveParams(params));
            return result;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let cancelOrderParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.orderId), params.canceledByOrderOwner, this.wallet.utils.toString(params.protocolFee)];
        let cancelOrder_send = async (params) => {
            let result = await this.send('cancelOrder', cancelOrderParams(params));
            return result;
        };
        let cancelOrder_call = async (params) => {
            let result = await this.call('cancelOrder', cancelOrderParams(params));
            return;
        };
        this.cancelOrder = Object.assign(cancelOrder_send, {
            call: cancelOrder_call
        });
        let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params) => {
            let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params));
            return result;
        };
        let decreaseAllowance_call = async (params) => {
            let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params));
            return result;
        };
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call: decreaseAllowance_call
        });
        let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params) => {
            let result = await this.send('increaseAllowance', increaseAllowanceParams(params));
            return result;
        };
        let increaseAllowance_call = async (params) => {
            let result = await this.call('increaseAllowance', increaseAllowanceParams(params));
            return result;
        };
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call: increaseAllowance_call
        });
        let initAddress_send = async (vaultRegistry) => {
            let result = await this.send('initAddress', [vaultRegistry]);
            return result;
        };
        let initAddress_call = async (vaultRegistry) => {
            let result = await this.call('initAddress', [vaultRegistry]);
            return;
        };
        this.initAddress = Object.assign(initAddress_send, {
            call: initAddress_call
        });
        let newOrder_send = async (order) => {
            let result = await this.send('newOrder', [[this.wallet.utils.toString(order.peerChain), this.wallet.utils.toString(order.inAmount), order.outToken, this.wallet.utils.toString(order.minOutAmount), order.to, this.wallet.utils.toString(order.expire)]]);
            return result;
        };
        let newOrder_call = async (order) => {
            let result = await this.call('newOrder', [[this.wallet.utils.toString(order.peerChain), this.wallet.utils.toString(order.inAmount), order.outToken, this.wallet.utils.toString(order.minOutAmount), order.to, this.wallet.utils.toString(order.expire)]]);
            return new eth_contract_1.BigNumber(result);
        };
        this.newOrder = Object.assign(newOrder_send, {
            call: newOrder_call
        });
        let newOrderFromRouterParams = (params) => [[this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)], params.trader];
        let newOrderFromRouter_send = async (params) => {
            let result = await this.send('newOrderFromRouter', newOrderFromRouterParams(params));
            return result;
        };
        let newOrderFromRouter_call = async (params) => {
            let result = await this.call('newOrderFromRouter', newOrderFromRouterParams(params));
            return new eth_contract_1.BigNumber(result);
        };
        this.newOrderFromRouter = Object.assign(newOrderFromRouter_send, {
            call: newOrderFromRouter_call
        });
        let rebalancerDeposit_send = async (assetAmount) => {
            let result = await this.send('rebalancerDeposit', [this.wallet.utils.toString(assetAmount)]);
            return result;
        };
        let rebalancerDeposit_call = async (assetAmount) => {
            let result = await this.call('rebalancerDeposit', [this.wallet.utils.toString(assetAmount)]);
            return;
        };
        this.rebalancerDeposit = Object.assign(rebalancerDeposit_send, {
            call: rebalancerDeposit_call
        });
        let rebalancerWithdrawParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.assetAmount), this.wallet.utils.toString(params.nonce)];
        let rebalancerWithdraw_send = async (params) => {
            let result = await this.send('rebalancerWithdraw', rebalancerWithdrawParams(params));
            return result;
        };
        let rebalancerWithdraw_call = async (params) => {
            let result = await this.call('rebalancerWithdraw', rebalancerWithdrawParams(params));
            return;
        };
        this.rebalancerWithdraw = Object.assign(rebalancerWithdraw_send, {
            call: rebalancerWithdraw_call
        });
        let removeLiquidityParams = (params) => [params.provider, this.wallet.utils.toString(params.assetAmount)];
        let removeLiquidity_send = async (params) => {
            let result = await this.send('removeLiquidity', removeLiquidityParams(params));
            return result;
        };
        let removeLiquidity_call = async (params) => {
            let result = await this.call('removeLiquidity', removeLiquidityParams(params));
            return;
        };
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call: removeLiquidity_call
        });
        let removeLiquidityRequest_send = async (lpTokenAmount) => {
            let result = await this.send('removeLiquidityRequest', [this.wallet.utils.toString(lpTokenAmount)]);
            return result;
        };
        let removeLiquidityRequest_call = async (lpTokenAmount) => {
            let result = await this.call('removeLiquidityRequest', [this.wallet.utils.toString(lpTokenAmount)]);
            return;
        };
        this.removeLiquidityRequest = Object.assign(removeLiquidityRequest_send, {
            call: removeLiquidityRequest_call
        });
        let requestAmendOrderParams = (params) => [this.wallet.utils.toString(params.orderId), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
        let requestAmendOrder_send = async (params) => {
            let result = await this.send('requestAmendOrder', requestAmendOrderParams(params));
            return result;
        };
        let requestAmendOrder_call = async (params) => {
            let result = await this.call('requestAmendOrder', requestAmendOrderParams(params));
            return;
        };
        this.requestAmendOrder = Object.assign(requestAmendOrder_send, {
            call: requestAmendOrder_call
        });
        let requestCancelOrderParams = (params) => [this.wallet.utils.toString(params.sourceChainId), this.wallet.utils.toString(params.orderId)];
        let requestCancelOrder_send = async (params) => {
            let result = await this.send('requestCancelOrder', requestCancelOrderParams(params));
            return result;
        };
        let requestCancelOrder_call = async (params) => {
            let result = await this.call('requestCancelOrder', requestCancelOrderParams(params));
            return;
        };
        this.requestCancelOrder = Object.assign(requestCancelOrder_send, {
            call: requestCancelOrder_call
        });
        let swapParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), params.owner, this.wallet.utils.toString(params.orderId), this.wallet.utils.toString(params.amendment), this.wallet.utils.toString(params.protocolFee), params.pair, [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
        let swap_send = async (params) => {
            let result = await this.send('swap', swapParams(params));
            return result;
        };
        let swap_call = async (params) => {
            let result = await this.call('swap', swapParams(params));
            return new eth_contract_1.BigNumber(result);
        };
        this.swap = Object.assign(swap_send, {
            call: swap_call
        });
        let sync_send = async () => {
            let result = await this.send('sync');
            return result;
        };
        let sync_call = async () => {
            let result = await this.call('sync');
            return;
        };
        this.sync = Object.assign(sync_send, {
            call: sync_call
        });
        let transferParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
        let transfer_send = async (params) => {
            let result = await this.send('transfer', transferParams(params));
            return result;
        };
        let transfer_call = async (params) => {
            let result = await this.call('transfer', transferParams(params));
            return result;
        };
        this.transfer = Object.assign(transfer_send, {
            call: transfer_call
        });
        let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.amount)];
        let transferFrom_send = async (params) => {
            let result = await this.send('transferFrom', transferFromParams(params));
            return result;
        };
        let transferFrom_call = async (params) => {
            let result = await this.call('transferFrom', transferFromParams(params));
            return result;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
        let updateConfigStore_send = async () => {
            let result = await this.send('updateConfigStore');
            return result;
        };
        let updateConfigStore_call = async () => {
            let result = await this.call('updateConfigStore');
            return;
        };
        this.updateConfigStore = Object.assign(updateConfigStore_send, {
            call: updateConfigStore_call
        });
        let updateTrollRegistry_send = async () => {
            let result = await this.send('updateTrollRegistry');
            return result;
        };
        let updateTrollRegistry_call = async () => {
            let result = await this.call('updateTrollRegistry');
            return;
        };
        this.updateTrollRegistry = Object.assign(updateTrollRegistry_send, {
            call: updateTrollRegistry_call
        });
        let voidOrderParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.stringToBytes32(params.orderId)];
        let voidOrder_send = async (params) => {
            let result = await this.send('voidOrder', voidOrderParams(params));
            return result;
        };
        let voidOrder_call = async (params) => {
            let result = await this.call('voidOrder', voidOrderParams(params));
            return;
        };
        this.voidOrder = Object.assign(voidOrder_send, {
            call: voidOrder_call
        });
        let withdrawUnexecutedOrder_send = async (orderId) => {
            let result = await this.send('withdrawUnexecutedOrder', [this.wallet.utils.toString(orderId)]);
            return result;
        };
        let withdrawUnexecutedOrder_call = async (orderId) => {
            let result = await this.call('withdrawUnexecutedOrder', [this.wallet.utils.toString(orderId)]);
            return;
        };
        this.withdrawUnexecutedOrder = Object.assign(withdrawUnexecutedOrder_send, {
            call: withdrawUnexecutedOrder_call
        });
        let withdrawlTrollFee_send = async (amount) => {
            let result = await this.send('withdrawlTrollFee', [this.wallet.utils.toString(amount)]);
            return result;
        };
        let withdrawlTrollFee_call = async (amount) => {
            let result = await this.call('withdrawlTrollFee', [this.wallet.utils.toString(amount)]);
            return;
        };
        this.withdrawlTrollFee = Object.assign(withdrawlTrollFee_send, {
            call: withdrawlTrollFee_call
        });
    }
}
exports.OSWAP_BridgeVault = OSWAP_BridgeVault;
