import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_MainChainVotingExecutor.json";

export class OSWAP_MainChainVotingExecutor extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(votingManager:string): Promise<string>{
        return this.__deploy([votingManager]);
    }
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_MainChainVotingExecutor.ExecuteEvent[]{
        return this.parseEvents(receipt, "Execute").map(e=>this.decodeExecuteEvent(e));
    }
    decodeExecuteEvent(event: Event): OSWAP_MainChainVotingExecutor.ExecuteEvent{
        let result = event.data;
        return {
            params: result.params,
            _event: event
        };
    }
    chainRegistry: {
        (): Promise<string>;
    }
    execute: {
        (params:string[]): Promise<TransactionReceipt>;
        call: (params:string[]) => Promise<void>;
    }
    initAddress: {
        (chainRegistry:string): Promise<TransactionReceipt>;
        call: (chainRegistry:string) => Promise<void>;
    }
    trollRegistry: {
        (): Promise<string>;
    }
    votingManager: {
        (): Promise<string>;
    }
    private assign(){
        let chainRegistry_call = async (): Promise<string> => {
            let result = await this.call('chainRegistry');
            return result;
        }
        this.chainRegistry = chainRegistry_call
        let trollRegistry_call = async (): Promise<string> => {
            let result = await this.call('trollRegistry');
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let votingManager_call = async (): Promise<string> => {
            let result = await this.call('votingManager');
            return result;
        }
        this.votingManager = votingManager_call
        let execute_send = async (params:string[]): Promise<TransactionReceipt> => {
            let result = await this.send('execute',[this.wallet.utils.stringToBytes32(params)]);
            return result;
        }
        let execute_call = async (params:string[]): Promise<void> => {
            let result = await this.call('execute',[this.wallet.utils.stringToBytes32(params)]);
            return;
        }
        this.execute = Object.assign(execute_send, {
            call:execute_call
        });
        let initAddress_send = async (chainRegistry:string): Promise<TransactionReceipt> => {
            let result = await this.send('initAddress',[chainRegistry]);
            return result;
        }
        let initAddress_call = async (chainRegistry:string): Promise<void> => {
            let result = await this.call('initAddress',[chainRegistry]);
            return;
        }
        this.initAddress = Object.assign(initAddress_send, {
            call:initAddress_call
        });
    }
}
export module OSWAP_MainChainVotingExecutor{
    export interface ExecuteEvent {params:string[],_event:Event}
}