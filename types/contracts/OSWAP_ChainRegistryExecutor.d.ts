import { IWallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    votingManager: string;
    chainRegistry: string;
}
export declare class OSWAP_ChainRegistryExecutor extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_ChainRegistryExecutor.ExecuteEvent[];
    decodeExecuteEvent(event: Event): OSWAP_ChainRegistryExecutor.ExecuteEvent;
    chainRegistry: {
        (): Promise<string>;
    };
    execute: {
        (params: string[]): Promise<TransactionReceipt>;
        call: (params: string[]) => Promise<void>;
    };
    votingManager: {
        (): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_ChainRegistryExecutor {
    interface ExecuteEvent {
        params: string[];
        _event: Event;
    }
}
