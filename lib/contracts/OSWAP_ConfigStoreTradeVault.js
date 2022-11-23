"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ConfigStoreTradeVault = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_ConfigStoreTradeVault_json_1 = __importDefault(require("./OSWAP_ConfigStoreTradeVault.json"));
class OSWAP_ConfigStoreTradeVault extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_ConfigStoreTradeVault_json_1.default.abi, OSWAP_ConfigStoreTradeVault_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([eth_wallet_1.Utils.toString(params.arbitrageFee), params.router]);
    }
    parseParamSet1Event(receipt) {
        return this.parseEvents(receipt, "ParamSet1").map(e => this.decodeParamSet1Event(e));
    }
    decodeParamSet1Event(event) {
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            _event: event
        };
    }
    assign() {
        let arbitrageFee_call = async () => {
            let result = await this.call('arbitrageFee');
            return new eth_wallet_1.BigNumber(result);
        };
        this.arbitrageFee = arbitrageFee_call;
        let feeTo_call = async () => {
            let result = await this.call('feeTo');
            return result;
        };
        this.feeTo = feeTo_call;
        let getTradeParam_call = async () => {
            let result = await this.call('getTradeParam');
            return {
                param1: result[0],
                param2: new eth_wallet_1.BigNumber(result[1])
            };
        };
        this.getTradeParam = getTradeParam_call;
        let newConfigStore_call = async () => {
            let result = await this.call('newConfigStore');
            return result;
        };
        this.newConfigStore = newConfigStore_call;
        let router_call = async () => {
            let result = await this.call('router');
            return result;
        };
        this.router = router_call;
        let setConfigParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.name), eth_wallet_1.Utils.stringToBytes32(params.value)];
        let setConfig_send = async (params) => {
            let result = await this.send('setConfig', setConfigParams(params));
            return result;
        };
        let setConfig_call = async (params) => {
            let result = await this.call('setConfig', setConfigParams(params));
            return;
        };
        this.setConfig = Object.assign(setConfig_send, {
            call: setConfig_call
        });
        let setConfigAddressParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.name), eth_wallet_1.Utils.stringToBytes32(params.value)];
        let setConfigAddress_send = async (params) => {
            let result = await this.send('setConfigAddress', setConfigAddressParams(params));
            return result;
        };
        let setConfigAddress_call = async (params) => {
            let result = await this.call('setConfigAddress', setConfigAddressParams(params));
            return;
        };
        this.setConfigAddress = Object.assign(setConfigAddress_send, {
            call: setConfigAddress_call
        });
    }
}
exports.OSWAP_ConfigStoreTradeVault = OSWAP_ConfigStoreTradeVault;
