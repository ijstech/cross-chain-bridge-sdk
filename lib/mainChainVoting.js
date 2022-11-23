"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainChainVoting = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Contracts = __importStar(require("./contracts"));
class MainChainVoting {
    constructor(wallet, votingManager, votingRegistry, votingExecutor) {
        this.wallet = wallet;
        this.votingManager = votingManager;
        this.votingRegistry = votingRegistry;
        this.votingExecutor = votingExecutor;
    }
    async setTransactionsGap(params) {
        return await this.newVote(params.delay, "setConfig", params.quorum, [eth_wallet_1.Utils.numberToBytes32(params.chainId.length, true), ...params.chainId.map(e => eth_wallet_1.Utils.numberToBytes32(e, true)), eth_wallet_1.Utils.stringToBytes32("transactionsGap"), eth_wallet_1.Utils.numberToBytes32(params.count, true)]);
    }
    async setSuperTrollMinCount(params) {
        return await this.newVote(params.delay, "setConfig", params.quorum, [eth_wallet_1.Utils.numberToBytes32(params.chainId.length, true), ...params.chainId.map(e => eth_wallet_1.Utils.numberToBytes32(e, true)), eth_wallet_1.Utils.stringToBytes32("superTrollMinCount"), eth_wallet_1.Utils.numberToBytes32(params.count, true)]);
    }
    async setGeneralTrollMinCount(params) {
        return await this.newVote(params.delay, "setConfig", params.quorum, [eth_wallet_1.Utils.numberToBytes32(params.chainId.length, true), ...params.chainId.map(e => eth_wallet_1.Utils.numberToBytes32(e, true)), eth_wallet_1.Utils.stringToBytes32("generalTrollMinCount"), eth_wallet_1.Utils.numberToBytes32(params.count, true)]);
    }
    async setRouter(params) {
        return await this.newVote(params.delay, "setConfigAddress", params.quorum, [eth_wallet_1.Utils.numberToBytes32(1, true), eth_wallet_1.Utils.numberToBytes32(params.chainId, true), eth_wallet_1.Utils.stringToBytes32("router"), eth_wallet_1.Utils.addressToBytes32Right(params.router, true)]);
    }
    async shutdown(params) {
        return await this.newVote(params.delay, "shutdown", params.quorum, []);
    }
    async resume(params) {
        return await this.newVote(params.delay, "resume", params.quorum, []);
    }
    async newVote(delay, type, quorum, param, executor) {
        let now = (await this.wallet.web3.eth.getBlock('latest')).timestamp;
        let votingConfig = (await this.votingManager.votingConfigs(eth_wallet_1.Utils.stringToBytes32("vote")));
        if (!quorum)
            quorum = votingConfig.minQuorum;
        else {
            quorum = eth_wallet_1.Utils.toDecimals(quorum);
            if (quorum.lt(votingConfig.minQuorum)) {
                throw new Error("quorum too small");
            }
        }
        let threshold = eth_wallet_1.Utils.toDecimals("0.5");
        let voteEndTime = now + votingConfig.minVoteDuration.toNumber() + delay;
        let exeDelay = votingConfig.minExeDelay.toNumber();
        let executeParam = param;
        let name;
        if (type.startsWith("setConfig")) {
            executeParam = [eth_wallet_1.Utils.stringToBytes32("sideChainConfig"), eth_wallet_1.Utils.stringToBytes32(type)].concat(executeParam);
            name = "sideChainConfig_" + type;
        }
        else {
            executeParam = [eth_wallet_1.Utils.stringToBytes32(type)].concat(param);
            name = type;
        }
        let receipt = await this.votingRegistry.newVote({
            executor: executor || this.votingExecutor.address,
            name: eth_wallet_1.Utils.stringToBytes32(name),
            options: [eth_wallet_1.Utils.stringToBytes32('Y'), eth_wallet_1.Utils.stringToBytes32('N')],
            quorum: quorum,
            threshold: threshold,
            voteEndTime: voteEndTime,
            executeDelay: exeDelay,
            executeParam: executeParam
        });
        let event = this.votingManager.parseNewVoteEvent(receipt)[0];
        let voteAddr = event.vote;
        console.log("voting address " + voteAddr);
        let voting = new Contracts.OSWAP_VotingContract(this.wallet, voteAddr);
        return voting;
    }
}
exports.MainChainVoting = MainChainVoting;
