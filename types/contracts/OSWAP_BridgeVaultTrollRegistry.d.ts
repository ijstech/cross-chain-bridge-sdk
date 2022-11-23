import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IHashUnstakeRequestParams {
    backer: string;
    trollProfileIndex: number | BigNumber;
    shares: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IPenalizeSuperTrollParams {
    trollProfileIndex: number | BigNumber;
    amount: number | BigNumber;
}
export interface IStakeParams {
    trollProfileIndex: number | BigNumber;
    amount: number | BigNumber;
}
export interface IStakedByParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IStakedByInvParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IUnstakeParams {
    backer: string;
    shares: number | BigNumber;
}
export interface IUnstakeApproveParams {
    signatures: string[];
    backer: string;
    trollProfileIndex: number | BigNumber;
    shares: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IVerifyStakedValueParams {
    msgSender: string;
    signatures: string[];
    paramsHash: string;
}
export declare class OSWAP_BridgeVaultTrollRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(trollRegistry: string): Promise<string>;
    parsePenaltyEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.PenaltyEvent[];
    decodePenaltyEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.PenaltyEvent;
    parseStakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.StakeEvent[];
    decodeStakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.StakeEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeEvent;
    parseUnstakeApprovalEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent[];
    decodeUnstakeApprovalEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent;
    parseUnstakeRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent[];
    decodeUnstakeRequestEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UpdateConfigStoreEvent;
    parseUpdateTrollRegistryEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UpdateTrollRegistryEvent[];
    decodeUpdateTrollRegistryEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UpdateTrollRegistryEvent;
    backerStakes: {
        (param1: string): Promise<{
            trollProfileIndex: BigNumber;
            shares: BigNumber;
            pendingWithdrawal: BigNumber;
            approvedWithdrawal: BigNumber;
        }>;
    };
    bridgeVault: {
        (): Promise<string>;
    };
    configStore: {
        (): Promise<string>;
    };
    getBackers: {
        (trollProfileIndex: number | BigNumber): Promise<string[]>;
    };
    govToken: {
        (): Promise<string>;
    };
    hashUnstakeRequest: {
        (params: IHashUnstakeRequestParams): Promise<string>;
    };
    initAddress: {
        (bridgeVault: string): Promise<TransactionReceipt>;
        call: (bridgeVault: string) => Promise<void>;
    };
    lastTrollTxCount: {
        (param1: string): Promise<BigNumber>;
    };
    maxWithdrawal: {
        (backer: string): Promise<BigNumber>;
    };
    penalizeSuperTroll: {
        (params: IPenalizeSuperTrollParams): Promise<TransactionReceipt>;
        call: (params: IPenalizeSuperTrollParams) => Promise<void>;
    };
    stake: {
        (params: IStakeParams): Promise<TransactionReceipt>;
        call: (params: IStakeParams) => Promise<BigNumber>;
    };
    stakedBy: {
        (params: IStakedByParams): Promise<string>;
    };
    stakedByInv: {
        (params: IStakedByInvParams): Promise<BigNumber>;
    };
    stakedByLength: {
        (trollProfileIndex: number | BigNumber): Promise<BigNumber>;
    };
    transactionsCount: {
        (): Promise<BigNumber>;
    };
    trollRegistry: {
        (): Promise<string>;
    };
    trollStakesBalances: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    trollStakesTotalShares: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    unstake: {
        (params: IUnstakeParams): Promise<TransactionReceipt>;
        call: (params: IUnstakeParams) => Promise<void>;
    };
    unstakeApprove: {
        (params: IUnstakeApproveParams): Promise<TransactionReceipt>;
        call: (params: IUnstakeApproveParams) => Promise<void>;
    };
    unstakeRequest: {
        (shares: number | BigNumber): Promise<TransactionReceipt>;
        call: (shares: number | BigNumber) => Promise<void>;
    };
    updateConfigStore: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    updateTrollRegistry: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    usedNonce: {
        (param1: string): Promise<boolean>;
    };
    verifyStakedValue: {
        (params: IVerifyStakedValueParams): Promise<TransactionReceipt>;
        call: (params: IVerifyStakedValueParams) => Promise<{
            superTrollCount: BigNumber;
            totalStake: BigNumber;
            signers: BigNumber[];
        }>;
    };
    private assign;
}
export declare module OSWAP_BridgeVaultTrollRegistry {
    interface PenaltyEvent {
        trollProfileIndex: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface StakeEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        amount: BigNumber;
        shares: BigNumber;
        backerBalance: BigNumber;
        trollBalance: BigNumber;
        totalShares: BigNumber;
        _event: Event;
    }
    interface UnstakeEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        amount: BigNumber;
        shares: BigNumber;
        approvalDecrement: BigNumber;
        trollBalance: BigNumber;
        totalShares: BigNumber;
        _event: Event;
    }
    interface UnstakeApprovalEvent {
        backer: string;
        msgSender: string;
        signers: BigNumber[];
        shares: BigNumber;
        _event: Event;
    }
    interface UnstakeRequestEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        shares: BigNumber;
        backerBalance: BigNumber;
        _event: Event;
    }
    interface UpdateConfigStoreEvent {
        newConfigStore: string;
        _event: Event;
    }
    interface UpdateTrollRegistryEvent {
        newTrollRegistry: string;
        _event: Event;
    }
}
