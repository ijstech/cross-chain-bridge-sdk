"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_VotingContract = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_VotingContract_json_1 = __importDefault(require("./OSWAP_VotingContract.json"));
class OSWAP_VotingContract extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_VotingContract_json_1.default.abi, OSWAP_VotingContract_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([[params.executor, this.wallet.utils.toString(params.id), this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.options), this.wallet.utils.toString(params.quorum), this.wallet.utils.toString(params.threshold), this.wallet.utils.toString(params.voteEndTime), this.wallet.utils.toString(params.executeDelay), this.wallet.utils.stringToBytes32(params.executeParam)]]);
    }
    assign() {
        let accountVoteOption_call = async (param1) => {
            let result = await this.call('accountVoteOption', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.accountVoteOption = accountVoteOption_call;
        let accountVoteWeight_call = async (param1) => {
            let result = await this.call('accountVoteWeight', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.accountVoteWeight = accountVoteWeight_call;
        let allExecuteParam_call = async () => {
            let result = await this.call('allExecuteParam');
            return result;
        };
        this.allExecuteParam = allExecuteParam_call;
        let allOptions_call = async () => {
            let result = await this.call('allOptions');
            return result;
        };
        this.allOptions = allOptions_call;
        let allOptionsWeight_call = async () => {
            let result = await this.call('allOptionsWeight');
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.allOptionsWeight = allOptionsWeight_call;
        let executeDelay_call = async () => {
            let result = await this.call('executeDelay');
            return new eth_contract_1.BigNumber(result);
        };
        this.executeDelay = executeDelay_call;
        let executeParam_call = async (param1) => {
            let result = await this.call('executeParam', [this.wallet.utils.toString(param1)]);
            return result;
        };
        this.executeParam = executeParam_call;
        let executeParamLength_call = async () => {
            let result = await this.call('executeParamLength');
            return new eth_contract_1.BigNumber(result);
        };
        this.executeParamLength = executeParamLength_call;
        let executed_call = async () => {
            let result = await this.call('executed');
            return result;
        };
        this.executed = executed_call;
        let executor_call = async () => {
            let result = await this.call('executor');
            return result;
        };
        this.executor = executor_call;
        let getParams_call = async () => {
            let result = await this.call('getParams');
            return {
                executor_: result.executor_,
                id_: new eth_contract_1.BigNumber(result.id_),
                name_: result.name_,
                options_: result.options_,
                voteStartTime_: new eth_contract_1.BigNumber(result.voteStartTime_),
                voteEndTime_: new eth_contract_1.BigNumber(result.voteEndTime_),
                executeDelay_: new eth_contract_1.BigNumber(result.executeDelay_),
                status_: result.status_,
                optionsWeight_: result.optionsWeight_.map(e => new eth_contract_1.BigNumber(e)),
                quorum_: result.quorum_.map(e => new eth_contract_1.BigNumber(e)),
                executeParam_: result.executeParam_
            };
        };
        this.getParams = getParams_call;
        let id_call = async () => {
            let result = await this.call('id');
            return new eth_contract_1.BigNumber(result);
        };
        this.id = id_call;
        let name_call = async () => {
            let result = await this.call('name');
            return result;
        };
        this.name = name_call;
        let options_call = async (param1) => {
            let result = await this.call('options', [this.wallet.utils.toString(param1)]);
            return result;
        };
        this.options = options_call;
        let optionsLength_call = async () => {
            let result = await this.call('optionsLength');
            return new eth_contract_1.BigNumber(result);
        };
        this.optionsLength = optionsLength_call;
        let optionsWeight_call = async (param1) => {
            let result = await this.call('optionsWeight', [this.wallet.utils.toString(param1)]);
            return new eth_contract_1.BigNumber(result);
        };
        this.optionsWeight = optionsWeight_call;
        let quorum_call = async () => {
            let result = await this.call('quorum');
            return new eth_contract_1.BigNumber(result);
        };
        this.quorum = quorum_call;
        let threshold_call = async () => {
            let result = await this.call('threshold');
            return new eth_contract_1.BigNumber(result);
        };
        this.threshold = threshold_call;
        let totalVoteWeight_call = async () => {
            let result = await this.call('totalVoteWeight');
            return new eth_contract_1.BigNumber(result);
        };
        this.totalVoteWeight = totalVoteWeight_call;
        let totalWeight_call = async () => {
            let result = await this.call('totalWeight');
            return new eth_contract_1.BigNumber(result);
        };
        this.totalWeight = totalWeight_call;
        let trollRegistry_call = async () => {
            let result = await this.call('trollRegistry');
            return result;
        };
        this.trollRegistry = trollRegistry_call;
        let vetoed_call = async () => {
            let result = await this.call('vetoed');
            return result;
        };
        this.vetoed = vetoed_call;
        let voteEndTime_call = async () => {
            let result = await this.call('voteEndTime');
            return new eth_contract_1.BigNumber(result);
        };
        this.voteEndTime = voteEndTime_call;
        let voteStartTime_call = async () => {
            let result = await this.call('voteStartTime');
            return new eth_contract_1.BigNumber(result);
        };
        this.voteStartTime = voteStartTime_call;
        let votingManager_call = async () => {
            let result = await this.call('votingManager');
            return result;
        };
        this.votingManager = votingManager_call;
        let execute_send = async () => {
            let result = await this.send('execute');
            return result;
        };
        let execute_call = async () => {
            let result = await this.call('execute');
            return;
        };
        this.execute = Object.assign(execute_send, {
            call: execute_call
        });
        let updateWeight_send = async (account) => {
            let result = await this.send('updateWeight', [account]);
            return result;
        };
        let updateWeight_call = async (account) => {
            let result = await this.call('updateWeight', [account]);
            return;
        };
        this.updateWeight = Object.assign(updateWeight_send, {
            call: updateWeight_call
        });
        let veto_send = async () => {
            let result = await this.send('veto');
            return result;
        };
        let veto_call = async () => {
            let result = await this.call('veto');
            return;
        };
        this.veto = Object.assign(veto_send, {
            call: veto_call
        });
        let vote_send = async (option) => {
            let result = await this.send('vote', [this.wallet.utils.toString(option)]);
            return result;
        };
        let vote_call = async (option) => {
            let result = await this.call('vote', [this.wallet.utils.toString(option)]);
            return;
        };
        this.vote = Object.assign(vote_send, {
            call: vote_call
        });
    }
}
exports.OSWAP_VotingContract = OSWAP_VotingContract;
