import { IWallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_MainChainVotingExecutor extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(votingManager: string): Promise<string>;
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_MainChainVotingExecutor.ExecuteEvent[];
    decodeExecuteEvent(event: Event): OSWAP_MainChainVotingExecutor.ExecuteEvent;
    chainRegistry: {
        (): Promise<string>;
    };
    execute: {
        (params: string[]): Promise<TransactionReceipt>;
        call: (params: string[]) => Promise<void>;
    };
    initAddress: {
        (chainRegistry: string): Promise<TransactionReceipt>;
        call: (chainRegistry: string) => Promise<void>;
    };
    trollRegistry: {
        (): Promise<string>;
    };
    votingManager: {
        (): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_MainChainVotingExecutor {
    interface ExecuteEvent {
        params: string[];
        _event: Event;
    }
}
