import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IExecuteParams {
    signatures: string[];
    params: string[];
    nonce: number | BigNumber;
}
export interface IExecuteHashParams {
    params: string[];
    nonce: number | BigNumber;
}
export declare class OSWAP_SideChainVotingExecutor extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(trollRegistry: string): Promise<string>;
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_SideChainVotingExecutor.ExecuteEvent[];
    decodeExecuteEvent(event: Event): OSWAP_SideChainVotingExecutor.ExecuteEvent;
    configStore: {
        (): Promise<string>;
    };
    execute: {
        (params: IExecuteParams): Promise<TransactionReceipt>;
        call: (params: IExecuteParams) => Promise<void>;
    };
    executeHash: {
        (params: IExecuteHashParams): Promise<string>;
    };
    govToken: {
        (): Promise<string>;
    };
    trollRegistry: {
        (): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_SideChainVotingExecutor {
    interface ExecuteEvent {
        params: string[];
        _event: Event;
    }
}
