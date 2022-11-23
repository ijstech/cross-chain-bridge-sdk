"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RouterVaultWrapper = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_RouterVaultWrapper_json_1 = __importDefault(require("./OSWAP_RouterVaultWrapper.json"));
class OSWAP_RouterVaultWrapper extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RouterVaultWrapper_json_1.default.abi, OSWAP_RouterVaultWrapper_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
    }
    parseSwapEvent(receipt) {
        return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event) {
        let result = event.data;
        return {
            vault: result.vault,
            orderId: new eth_contract_1.BigNumber(result.orderId),
            sender: result.sender,
            inToken: result.inToken,
            inAmount: new eth_contract_1.BigNumber(result.inAmount),
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
    assign() {
        let configStore_call = async () => {
            let result = await this.call('configStore');
            return result;
        };
        this.configStore = configStore_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let initAddress_send = async (configStore) => {
            let result = await this.send('initAddress', [configStore]);
            return result;
        };
        let initAddress_call = async (configStore) => {
            let result = await this.call('initAddress', [configStore]);
            return;
        };
        this.initAddress = Object.assign(initAddress_send, {
            call: initAddress_call
        });
        let swapETHForExactTokensParams = (params) => [params.pair, params.vault, this.wallet.utils.toString(params.deadline), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
        let swapETHForExactTokens_send = async (params, _value) => {
            let result = await this.send('swapETHForExactTokens', swapETHForExactTokensParams(params), { value: _value });
            return result;
        };
        let swapETHForExactTokens_call = async (params, _value) => {
            let result = await this.call('swapETHForExactTokens', swapETHForExactTokensParams(params), { value: _value });
            return new eth_contract_1.BigNumber(result);
        };
        this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
            call: swapETHForExactTokens_call
        });
        let swapExactETHForTokensParams = (params) => [params.pair, params.vault, this.wallet.utils.toString(params.deadline), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
        let swapExactETHForTokens_send = async (params, _value) => {
            let result = await this.send('swapExactETHForTokens', swapExactETHForTokensParams(params), { value: _value });
            return result;
        };
        let swapExactETHForTokens_call = async (params, _value) => {
            let result = await this.call('swapExactETHForTokens', swapExactETHForTokensParams(params), { value: _value });
            return new eth_contract_1.BigNumber(result);
        };
        this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
            call: swapExactETHForTokens_call
        });
        let swapExactTokensForTokensParams = (params) => [params.pair, params.vault, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.deadline), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
        let swapExactTokensForTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
            return result;
        };
        let swapExactTokensForTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
            return new eth_contract_1.BigNumber(result);
        };
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call: swapExactTokensForTokens_call
        });
        let swapTokensForExactTokensParams = (params) => [params.pair, params.vault, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.deadline), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
        let swapTokensForExactTokens_send = async (params) => {
            let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
            return result;
        };
        let swapTokensForExactTokens_call = async (params) => {
            let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
            return new eth_contract_1.BigNumber(result);
        };
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call: swapTokensForExactTokens_call
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
    }
}
exports.OSWAP_RouterVaultWrapper = OSWAP_RouterVaultWrapper;
