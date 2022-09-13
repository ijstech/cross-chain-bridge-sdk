"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_SideChainVotingExecutor = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_SideChainVotingExecutor_json_1 = __importDefault(require("./OSWAP_SideChainVotingExecutor.json"));
class OSWAP_SideChainVotingExecutor extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_SideChainVotingExecutor_json_1.default.abi, OSWAP_SideChainVotingExecutor_json_1.default.bytecode);
        this.assign();
    }
    deploy(trollRegistry) {
        return this.__deploy([trollRegistry]);
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
        let configStore_call = async () => {
            let result = await this.call('configStore');
            return result;
        };
        this.configStore = configStore_call;
        let executeHashParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.params), eth_wallet_1.Utils.toString(params.nonce)];
        let executeHash_call = async (params) => {
            let result = await this.call('executeHash', executeHashParams(params));
            return result;
        };
        this.executeHash = executeHash_call;
        let govToken_call = async () => {
            let result = await this.call('govToken');
            return result;
        };
        this.govToken = govToken_call;
        let trollRegistry_call = async () => {
            let result = await this.call('trollRegistry');
            return result;
        };
        this.trollRegistry = trollRegistry_call;
        let executeParams = (params) => [eth_wallet_1.Utils.stringToBytes(params.signatures), eth_wallet_1.Utils.stringToBytes32(params.params), eth_wallet_1.Utils.toString(params.nonce)];
        let execute_send = async (params) => {
            let result = await this.send('execute', executeParams(params));
            return result;
        };
        let execute_call = async (params) => {
            let result = await this.call('execute', executeParams(params));
            return;
        };
        this.execute = Object.assign(execute_send, {
            call: execute_call
        });
    }
}
exports.OSWAP_SideChainVotingExecutor = OSWAP_SideChainVotingExecutor;
