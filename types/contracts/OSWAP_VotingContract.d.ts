import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_VotingContract extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        executor: string;
        id: number | BigNumber;
        name: string;
        options: string[];
        quorum: number | BigNumber;
        threshold: number | BigNumber;
        voteEndTime: number | BigNumber;
        executeDelay: number | BigNumber;
        executeParam: string[];
    }): Promise<string>;
    accountVoteOption: {
        (param1: string): Promise<BigNumber>;
    };
    accountVoteWeight: {
        (param1: string): Promise<BigNumber>;
    };
    allExecuteParam: {
        (): Promise<string[]>;
    };
    allOptions: {
        (): Promise<string[]>;
    };
    allOptionsWeight: {
        (): Promise<BigNumber[]>;
    };
    execute: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    executeDelay: {
        (): Promise<BigNumber>;
    };
    executeParam: {
        (param1: number | BigNumber): Promise<string>;
    };
    executeParamLength: {
        (): Promise<BigNumber>;
    };
    executed: {
        (): Promise<boolean>;
    };
    executor: {
        (): Promise<string>;
    };
    getParams: {
        (): Promise<{
            executor_: string;
            id_: BigNumber;
            name_: string;
            options_: string[];
            voteStartTime_: BigNumber;
            voteEndTime_: BigNumber;
            executeDelay_: BigNumber;
            status_: boolean[];
            optionsWeight_: BigNumber[];
            quorum_: BigNumber[];
            executeParam_: string[];
        }>;
    };
    id: {
        (): Promise<BigNumber>;
    };
    name: {
        (): Promise<string>;
    };
    options: {
        (param1: number | BigNumber): Promise<string>;
    };
    optionsLength: {
        (): Promise<BigNumber>;
    };
    optionsWeight: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    quorum: {
        (): Promise<BigNumber>;
    };
    threshold: {
        (): Promise<BigNumber>;
    };
    totalVoteWeight: {
        (): Promise<BigNumber>;
    };
    totalWeight: {
        (): Promise<BigNumber>;
    };
    trollRegistry: {
        (): Promise<string>;
    };
    updateWeight: {
        (account: string): Promise<TransactionReceipt>;
        call: (account: string) => Promise<void>;
    };
    veto: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    vetoed: {
        (): Promise<boolean>;
    };
    vote: {
        (option: number | BigNumber): Promise<TransactionReceipt>;
        call: (option: number | BigNumber) => Promise<void>;
    };
    voteEndTime: {
        (): Promise<BigNumber>;
    };
    voteStartTime: {
        (): Promise<BigNumber>;
    };
    votingManager: {
        (): Promise<string>;
    };
    private assign;
}
