import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_ChainRegistryExecutor.json";

export interface IDeployParams {votingManager:string;chainRegistry:string}
export class OSWAP_ChainRegistryExecutor extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.votingManager,params.chainRegistry]);
    }
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_ChainRegistryExecutor.ExecuteEvent[]{
        return this.parseEvents(receipt, "Execute").map(e=>this.decodeExecuteEvent(e));
    }
    decodeExecuteEvent(event: Event): OSWAP_ChainRegistryExecutor.ExecuteEvent{
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
    votingManager: {
        (): Promise<string>;
    }
    private assign(){
        let chainRegistry_call = async (): Promise<string> => {
            let result = await this.call('chainRegistry');
            return result;
        }
        this.chainRegistry = chainRegistry_call
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
    }
}
export module OSWAP_ChainRegistryExecutor{
    export interface ExecuteEvent {params:string[],_event:Event}
}