import { Wallet, BigNumber } from '@ijstech/eth-wallet';
import * as Contracts from './contracts';
export declare class MainChainVoting {
    private wallet;
    private votingManager;
    private votingRegistry;
    private votingExecutor;
    constructor(wallet: Wallet, votingManager: Contracts.OSWAP_VotingManager, votingRegistry: Contracts.OSWAP_VotingRegistry, votingExecutor: Contracts.OSWAP_MainChainVotingExecutor);
    setTransactionsGap(params: {
        chainId: number[];
        count: number;
        delay: number;
        quorum?: BigNumber;
    }): Promise<Contracts.OSWAP_VotingContract>;
    setSuperTrollMinCount(params: {
        chainId: number[];
        count: number;
        delay: number;
        quorum?: BigNumber;
    }): Promise<Contracts.OSWAP_VotingContract>;
    setGeneralTrollMinCount(params: {
        chainId: number[];
        count: number;
        delay: number;
        quorum?: BigNumber;
    }): Promise<Contracts.OSWAP_VotingContract>;
    setRouter(params: {
        chainId: number;
        router: string;
        delay: number;
        quorum?: BigNumber;
    }): Promise<Contracts.OSWAP_VotingContract>;
    shutdown(params: {
        delay: number;
        quorum?: BigNumber;
    }): Promise<Contracts.OSWAP_VotingContract>;
    resume(params: {
        delay: number;
        quorum?: BigNumber;
    }): Promise<Contracts.OSWAP_VotingContract>;
    newVote(delay: number, type: string, quorum: BigNumber, param: string[], executor?: string): Promise<Contracts.OSWAP_VotingContract>;
}
