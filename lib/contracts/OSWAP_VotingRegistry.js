"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_VotingRegistry = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_VotingRegistry_json_1 = __importDefault(require("./OSWAP_VotingRegistry.json"));
class OSWAP_VotingRegistry extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_VotingRegistry_json_1.default.abi, OSWAP_VotingRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy(votingManager) {
        return this.__deploy([votingManager]);
    }
    assign() {
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
        let newVoteParams = (params) => [params.executor, this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.options), this.wallet.utils.toString(params.quorum), this.wallet.utils.toString(params.threshold), this.wallet.utils.toString(params.voteEndTime), this.wallet.utils.toString(params.executeDelay), this.wallet.utils.stringToBytes32(params.executeParam)];
        let newVote_send = async (params) => {
            let result = await this.send('newVote', newVoteParams(params));
            return result;
        };
        let newVote_call = async (params) => {
            let result = await this.call('newVote', newVoteParams(params));
            return;
        };
        this.newVote = Object.assign(newVote_send, {
            call: newVote_call
        });
    }
}
exports.OSWAP_VotingRegistry = OSWAP_VotingRegistry;
