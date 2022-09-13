"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_MainChainVotingExecutor = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_MainChainVotingExecutor_json_1 = __importDefault(require("./OSWAP_MainChainVotingExecutor.json"));
class OSWAP_MainChainVotingExecutor extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_MainChainVotingExecutor_json_1.default.abi, OSWAP_MainChainVotingExecutor_json_1.default.bytecode);
        this.assign();
    }
    deploy(votingManager) {
        return this.__deploy([votingManager]);
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
        let trollRegistry_call = async () => {
            let result = await this.call('trollRegistry');
            return result;
        };
        this.trollRegistry = trollRegistry_call;
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
        let initAddress_send = async (chainRegistry) => {
            let result = await this.send('initAddress', [chainRegistry]);
            return result;
        };
        let initAddress_call = async (chainRegistry) => {
            let result = await this.call('initAddress', [chainRegistry]);
            return;
        };
        this.initAddress = Object.assign(initAddress_send, {
            call: initAddress_call
        });
    }
}
exports.OSWAP_MainChainVotingExecutor = OSWAP_MainChainVotingExecutor;
