import { Wallet, TransactionReceipt, BigNumber } from '@ijstech/eth-wallet';
import { OSWAP_SideChainVotingExecutor } from './contracts';
export declare class SideChainVoting {
    wallet: Wallet;
    private votingExecutor;
    constructor(wallet: Wallet, votingExecutor: OSWAP_SideChainVotingExecutor);
    setRouter(address: string): string[];
    setRebalancer(address: string): string[];
    setFeeTo(address: string): string[];
    setTransactionsGap(value: number | BigNumber): string[];
    setTransactionFee(value: number | BigNumber): string[];
    setLpWithdrawlDelay(value: number | BigNumber): string[];
    setGeneralTrollMinCount(count: number | BigNumber): string[];
    setSuperTrollMinCount(count: number | BigNumber): string[];
    setOracle(params: {
        asset: string;
        oracle: string;
    }): string[];
    setConfigStore(address: string): string[];
    setIsApprovedProxy(wrapper: string, isApprovedProxy: boolean): string[];
    setBaseFee(asset: string, baseFee: number | BigNumber): string[];
    getHash(params: {
        params: string[];
        nonce: number | BigNumber;
    }): Promise<string>;
    static parseExecuteEventParams(params: string[]): {
        chains: number[];
        params: string[];
    };
    execute(params: {
        signatures: string[];
        params: string[];
        nonce: number | BigNumber;
    }): Promise<TransactionReceipt>;
}
