import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_VotingContract.json";

export class OSWAP_VotingContract extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{executor:string,id:number|BigNumber,name:string,options:string[],quorum:number|BigNumber,threshold:number|BigNumber,voteEndTime:number|BigNumber,executeDelay:number|BigNumber,executeParam:string[]}): Promise<string>{
        return this.__deploy([[params.executor,this.wallet.utils.toString(params.id),this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.stringToBytes32(params.options),this.wallet.utils.toString(params.quorum),this.wallet.utils.toString(params.threshold),this.wallet.utils.toString(params.voteEndTime),this.wallet.utils.toString(params.executeDelay),this.wallet.utils.stringToBytes32(params.executeParam)]]);
    }
    accountVoteOption: {
        (param1:string): Promise<BigNumber>;
    }
    accountVoteWeight: {
        (param1:string): Promise<BigNumber>;
    }
    allExecuteParam: {
        (): Promise<string[]>;
    }
    allOptions: {
        (): Promise<string[]>;
    }
    allOptionsWeight: {
        (): Promise<BigNumber[]>;
    }
    execute: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    executeDelay: {
        (): Promise<BigNumber>;
    }
    executeParam: {
        (param1:number|BigNumber): Promise<string>;
    }
    executeParamLength: {
        (): Promise<BigNumber>;
    }
    executed: {
        (): Promise<boolean>;
    }
    executor: {
        (): Promise<string>;
    }
    getParams: {
        (): Promise<{executor_:string,id_:BigNumber,name_:string,options_:string[],voteStartTime_:BigNumber,voteEndTime_:BigNumber,executeDelay_:BigNumber,status_:boolean[],optionsWeight_:BigNumber[],quorum_:BigNumber[],executeParam_:string[]}>;
    }
    id: {
        (): Promise<BigNumber>;
    }
    name: {
        (): Promise<string>;
    }
    options: {
        (param1:number|BigNumber): Promise<string>;
    }
    optionsLength: {
        (): Promise<BigNumber>;
    }
    optionsWeight: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    quorum: {
        (): Promise<BigNumber>;
    }
    threshold: {
        (): Promise<BigNumber>;
    }
    totalVoteWeight: {
        (): Promise<BigNumber>;
    }
    totalWeight: {
        (): Promise<BigNumber>;
    }
    trollRegistry: {
        (): Promise<string>;
    }
    updateWeight: {
        (account:string): Promise<TransactionReceipt>;
        call: (account:string) => Promise<void>;
    }
    veto: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    vetoed: {
        (): Promise<boolean>;
    }
    vote: {
        (option:number|BigNumber): Promise<TransactionReceipt>;
        call: (option:number|BigNumber) => Promise<void>;
    }
    voteEndTime: {
        (): Promise<BigNumber>;
    }
    voteStartTime: {
        (): Promise<BigNumber>;
    }
    votingManager: {
        (): Promise<string>;
    }
    private assign(){
        let accountVoteOption_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('accountVoteOption',[param1]);
            return new BigNumber(result);
        }
        this.accountVoteOption = accountVoteOption_call
        let accountVoteWeight_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('accountVoteWeight',[param1]);
            return new BigNumber(result);
        }
        this.accountVoteWeight = accountVoteWeight_call
        let allExecuteParam_call = async (): Promise<string[]> => {
            let result = await this.call('allExecuteParam');
            return result;
        }
        this.allExecuteParam = allExecuteParam_call
        let allOptions_call = async (): Promise<string[]> => {
            let result = await this.call('allOptions');
            return result;
        }
        this.allOptions = allOptions_call
        let allOptionsWeight_call = async (): Promise<BigNumber[]> => {
            let result = await this.call('allOptionsWeight');
            return result.map(e=>new BigNumber(e));
        }
        this.allOptionsWeight = allOptionsWeight_call
        let executeDelay_call = async (): Promise<BigNumber> => {
            let result = await this.call('executeDelay');
            return new BigNumber(result);
        }
        this.executeDelay = executeDelay_call
        let executeParam_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('executeParam',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.executeParam = executeParam_call
        let executeParamLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('executeParamLength');
            return new BigNumber(result);
        }
        this.executeParamLength = executeParamLength_call
        let executed_call = async (): Promise<boolean> => {
            let result = await this.call('executed');
            return result;
        }
        this.executed = executed_call
        let executor_call = async (): Promise<string> => {
            let result = await this.call('executor');
            return result;
        }
        this.executor = executor_call
        let getParams_call = async (): Promise<{executor_:string,id_:BigNumber,name_:string,options_:string[],voteStartTime_:BigNumber,voteEndTime_:BigNumber,executeDelay_:BigNumber,status_:boolean[],optionsWeight_:BigNumber[],quorum_:BigNumber[],executeParam_:string[]}> => {
            let result = await this.call('getParams');
            return {
                executor_: result.executor_,
                id_: new BigNumber(result.id_),
                name_: result.name_,
                options_: result.options_,
                voteStartTime_: new BigNumber(result.voteStartTime_),
                voteEndTime_: new BigNumber(result.voteEndTime_),
                executeDelay_: new BigNumber(result.executeDelay_),
                status_: result.status_,
                optionsWeight_: result.optionsWeight_.map(e=>new BigNumber(e)),
                quorum_: result.quorum_.map(e=>new BigNumber(e)),
                executeParam_: result.executeParam_
            };
        }
        this.getParams = getParams_call
        let id_call = async (): Promise<BigNumber> => {
            let result = await this.call('id');
            return new BigNumber(result);
        }
        this.id = id_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let options_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('options',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.options = options_call
        let optionsLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('optionsLength');
            return new BigNumber(result);
        }
        this.optionsLength = optionsLength_call
        let optionsWeight_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('optionsWeight',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.optionsWeight = optionsWeight_call
        let quorum_call = async (): Promise<BigNumber> => {
            let result = await this.call('quorum');
            return new BigNumber(result);
        }
        this.quorum = quorum_call
        let threshold_call = async (): Promise<BigNumber> => {
            let result = await this.call('threshold');
            return new BigNumber(result);
        }
        this.threshold = threshold_call
        let totalVoteWeight_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalVoteWeight');
            return new BigNumber(result);
        }
        this.totalVoteWeight = totalVoteWeight_call
        let totalWeight_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalWeight');
            return new BigNumber(result);
        }
        this.totalWeight = totalWeight_call
        let trollRegistry_call = async (): Promise<string> => {
            let result = await this.call('trollRegistry');
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let vetoed_call = async (): Promise<boolean> => {
            let result = await this.call('vetoed');
            return result;
        }
        this.vetoed = vetoed_call
        let voteEndTime_call = async (): Promise<BigNumber> => {
            let result = await this.call('voteEndTime');
            return new BigNumber(result);
        }
        this.voteEndTime = voteEndTime_call
        let voteStartTime_call = async (): Promise<BigNumber> => {
            let result = await this.call('voteStartTime');
            return new BigNumber(result);
        }
        this.voteStartTime = voteStartTime_call
        let votingManager_call = async (): Promise<string> => {
            let result = await this.call('votingManager');
            return result;
        }
        this.votingManager = votingManager_call
        let execute_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('execute');
            return result;
        }
        let execute_call = async (): Promise<void> => {
            let result = await this.call('execute');
            return;
        }
        this.execute = Object.assign(execute_send, {
            call:execute_call
        });
        let updateWeight_send = async (account:string): Promise<TransactionReceipt> => {
            let result = await this.send('updateWeight',[account]);
            return result;
        }
        let updateWeight_call = async (account:string): Promise<void> => {
            let result = await this.call('updateWeight',[account]);
            return;
        }
        this.updateWeight = Object.assign(updateWeight_send, {
            call:updateWeight_call
        });
        let veto_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('veto');
            return result;
        }
        let veto_call = async (): Promise<void> => {
            let result = await this.call('veto');
            return;
        }
        this.veto = Object.assign(veto_send, {
            call:veto_call
        });
        let vote_send = async (option:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('vote',[this.wallet.utils.toString(option)]);
            return result;
        }
        let vote_call = async (option:number|BigNumber): Promise<void> => {
            let result = await this.call('vote',[this.wallet.utils.toString(option)]);
            return;
        }
        this.vote = Object.assign(vote_send, {
            call:vote_call
        });
    }
}