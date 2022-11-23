"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ChainRegistryExecutor = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_ChainRegistryExecutor_json_1 = __importDefault(require("./OSWAP_ChainRegistryExecutor.json"));
class OSWAP_ChainRegistryExecutor extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_ChainRegistryExecutor_json_1.default.abi, OSWAP_ChainRegistryExecutor_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.votingManager, params.chainRegistry]);
    }
    parseExecuteEvent(receipt) {
        return this.parseEvents(receipt, "Execute").map(e => this.decodeExecuteEvent(e));
    }
    decodeExecuteEvent(event) {
        let result = event.data;
        return {
            params: result.params,
            _event: event
        };
    }
    assign() {
        let chainRegistry_call = async () => {
            let result = await this.call('chainRegistry');
            return result;
        };
        this.chainRegistry = chainRegistry_call;
        let votingManager_call = async () => {
            let result = await this.call('votingManager');
            return result;
        };
        this.votingManager = votingManager_call;
        let execute_send = async (params) => {
            let result = await this.send('execute', [eth_wallet_1.Utils.stringToBytes32(params)]);
            return result;
        };
        let execute_call = async (params) => {
            let result = await this.call('execute', [eth_wallet_1.Utils.stringToBytes32(params)]);
            return;
        };
        this.execute = Object.assign(execute_send, {
            call: execute_call
        });
    }
}
exports.OSWAP_ChainRegistryExecutor = OSWAP_ChainRegistryExecutor;
