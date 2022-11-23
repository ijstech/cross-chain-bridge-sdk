import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_SideChainVotingExecutor.json";

export interface IExecuteParams {signatures:string[];params:string[];nonce:number|BigNumber}
export interface IExecuteHashParams {params:string[];nonce:number|BigNumber}
export class OSWAP_SideChainVotingExecutor extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(trollRegistry:string): Promise<string>{
        return this.__deploy([trollRegistry]);
    }
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_SideChainVotingExecutor.ExecuteEvent[]{
        return this.parseEvents(receipt, "Execute").map(e=>this.decodeExecuteEvent(e));
    }
    decodeExecuteEvent(event: Event): OSWAP_SideChainVotingExecutor.ExecuteEvent{
        let result = event.data;
        return {
            params: result.params,
            _event: event
        };
    }
    configStore: {
        (): Promise<string>;
    }
    execute: {
        (params: IExecuteParams): Promise<TransactionReceipt>;
        call: (params: IExecuteParams) => Promise<void>;
    }
    executeHash: {
        (params: IExecuteHashParams): Promise<string>;
    }
    govToken: {
        (): Promise<string>;
    }
    trollRegistry: {
        (): Promise<string>;
    }
    private assign(){
        let configStore_call = async (): Promise<string> => {
            let result = await this.call('configStore');
            return result;
        }
        this.configStore = configStore_call
        let executeHashParams = (params: IExecuteHashParams) => [this.wallet.utils.stringToBytes32(params.params),this.wallet.utils.toString(params.nonce)];
        let executeHash_call = async (params: IExecuteHashParams): Promise<string> => {
            let result = await this.call('executeHash',executeHashParams(params));
            return result;
        }
        this.executeHash = executeHash_call
        let govToken_call = async (): Promise<string> => {
            let result = await this.call('govToken');
            return result;
        }
        this.govToken = govToken_call
        let trollRegistry_call = async (): Promise<string> => {
            let result = await this.call('trollRegistry');
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let executeParams = (params: IExecuteParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.stringToBytes32(params.params),this.wallet.utils.toString(params.nonce)];
        let execute_send = async (params: IExecuteParams): Promise<TransactionReceipt> => {
            let result = await this.send('execute',executeParams(params));
            return result;
        }
        let execute_call = async (params: IExecuteParams): Promise<void> => {
            let result = await this.call('execute',executeParams(params));
            return;
        }
        this.execute = Object.assign(execute_send, {
            call:execute_call
        });
    }
}
export module OSWAP_SideChainVotingExecutor{
    export interface ExecuteEvent {params:string[],_event:Event}
}