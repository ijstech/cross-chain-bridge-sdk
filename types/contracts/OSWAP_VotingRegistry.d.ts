import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export interface INewVoteParams {
    executor: string;
    name: string;
    options: string[];
    quorum: number | BigNumber;
    threshold: number | BigNumber;
    voteEndTime: number | BigNumber;
    executeDelay: number | BigNumber;
    executeParam: string[];
}
export declare class OSWAP_VotingRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(votingManager: string): Promise<string>;
    newVote: {
        (params: INewVoteParams): Promise<TransactionReceipt>;
        call: (params: INewVoteParams) => Promise<void>;
    };
    trollRegistry: {
        (): Promise<string>;
    };
    votingManager: {
        (): Promise<string>;
    };
    private assign;
}
