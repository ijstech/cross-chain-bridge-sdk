import { Wallet, TransactionReceipt, BigNumber, Erc20, Event } from "@ijstech/eth-wallet";
import { OSWAP_BridgeVaultTrollRegistry } from '../contracts';
export declare class BridgeVaultTrollRegistry {
    address: string;
    _bridgeVaultTrollRegistry: OSWAP_BridgeVaultTrollRegistry;
    __govToken: Erc20;
    constructor(wallet: Wallet, address?: string);
    deploy(trollRegistry: string): Promise<string>;
    decodeStakeEvent(event: Event): Promise<OSWAP_BridgeVaultTrollRegistry.StakeEvent>;
    parseUnstakeRequestEvent(receipt: TransactionReceipt): Promise<OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent>;
    decodeUnstakeRequestEvent(event: Event): Promise<OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent>;
    parseUnstakeApprovalEvent(receipt: TransactionReceipt): Promise<OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent>;
    decodeUnstakeApprovalEvent(event: Event): Promise<OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent>;
    backerStakes(backer: string): Promise<{
        trollProfileIndex: BigNumber;
        shares: BigNumber;
        pendingWithdrawal: BigNumber;
        approvedWithdrawal: BigNumber;
    }>;
    get configStore(): Promise<string>;
    getBackers(trollProfileIndex: number | BigNumber): Promise<string[]>;
    get govToken(): Promise<Erc20>;
    hashUnstakeRequest(params: {
        backer: string;
        trollProfileIndex: number | BigNumber;
        shares: number | BigNumber;
        nonce: number | BigNumber;
    }): Promise<string>;
    lastTrollTxCount(troll: string): Promise<number>;
    maxWithdrawal(backer: string): Promise<BigNumber>;
    penalizeSuperTroll(params: {
        trollProfileIndex: number | BigNumber;
        amount: number | BigNumber;
    }): Promise<OSWAP_BridgeVaultTrollRegistry.PenaltyEvent>;
    stake(params: {
        trollProfileIndex: number | BigNumber;
        amount: number | BigNumber;
    }): Promise<{
        stakeEvent: OSWAP_BridgeVaultTrollRegistry.StakeEvent;
        transferEvent: Erc20.TransferEvent;
    }>;
    stakedBy(params: {
        trollProfileIndex: number | BigNumber;
        index: number | BigNumber;
    }): Promise<string>;
    stakedByInv(params: {
        trollProfileIndex: number | BigNumber;
        backer: string;
    }): Promise<number>;
    stakedByLength(trollProfileIndex: number | BigNumber): Promise<number>;
    get transactionsCount(): Promise<number>;
    get trollRegistry(): Promise<string>;
    trollStakesBalances(trollProfileIndex: number | BigNumber): Promise<BigNumber>;
    trollStakesTotalShares(trollProfileIndex: number | BigNumber): Promise<BigNumber>;
    unstake(params: {
        backer: string;
        shares: number | BigNumber;
    }): Promise<{
        unstakeEvent: OSWAP_BridgeVaultTrollRegistry.UnstakeEvent;
        transferEvent: Erc20.TransferEvent;
    }>;
    unstakeApprove(params: {
        signatures: string[];
        backer: string;
        trollProfileIndex: number | BigNumber;
        shares: number | BigNumber;
        nonce: number | BigNumber;
    }): Promise<OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent>;
    unstakeRequest(shares: number | BigNumber): Promise<OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent>;
    updateConfigStore(): Promise<OSWAP_BridgeVaultTrollRegistry.UpdateConfigStoreEvent>;
    updateTrollRegistry(): Promise<OSWAP_BridgeVaultTrollRegistry.UpdateTrollRegistryEvent>;
    usedNonce(nonce: string): Promise<boolean>;
    verifyStakedValue(params: {
        msgSender: string;
        signatures: string[];
        paramsHash: string;
    }): Promise<TransactionReceipt>;
}
