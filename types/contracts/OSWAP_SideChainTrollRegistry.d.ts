import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IAddTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    troll: string;
    isSuperTroll: boolean;
    nonce: number | BigNumber;
}
export interface IHashAddTrollParams {
    trollProfileIndex: number | BigNumber;
    troll: string;
    isSuperTroll: boolean;
    nonce: number | BigNumber;
}
export interface IHashRegisterVaultParams {
    token: string;
    vault: string;
    nonce: number | BigNumber;
}
export interface IHashRemoveTrollParams {
    trollProfileIndex: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IHashUnlockTrollParams {
    trollProfileIndex: number | BigNumber;
    unlock: boolean;
    vaultRegistry: string[];
    penalty: (number | BigNumber)[];
    nonce: number | BigNumber;
}
export interface IHashUpdateTrollParams {
    trollProfileIndex: number | BigNumber;
    newTroll: string;
    nonce: number | BigNumber;
}
export interface IInitAddressParams {
    votingExecutor: string;
    tokens: string[];
    vaults: string[];
}
export interface IIsGeneralTrollParams {
    troll: string;
    returnFalseIfBlocked: boolean;
}
export interface IIsGeneralTrollByIndexParams {
    trollProfileIndex: number | BigNumber;
    returnFalseIfBlocked: boolean;
}
export interface IIsSuperTrollParams {
    troll: string;
    returnFalseIfBlocked: boolean;
}
export interface IIsSuperTrollByIndexParams {
    trollProfileIndex: number | BigNumber;
    returnFalseIfBlocked: boolean;
}
export interface IRegisterVaultParams {
    signatures: string[];
    token: string;
    vault: string;
    nonce: number | BigNumber;
}
export interface IRemoveTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    nonce: number | BigNumber;
}
export interface ISetVotingExecutorParams {
    votingExecutor: string;
    bool: boolean;
}
export interface IUnlockGeneralTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IUnlockSuperTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    unlock: boolean;
    vaultRegistry: string[];
    penalty: (number | BigNumber)[];
    nonce: number | BigNumber;
}
export interface IUpdateTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    newTroll: string;
    nonce: number | BigNumber;
}
export interface IVerifySignaturesParams {
    msgSender: string;
    signatures: string[];
    paramsHash: string;
    nonce: number | BigNumber;
}
export declare class OSWAP_SideChainTrollRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(configStore: string): Promise<string>;
    parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.AddTrollEvent[];
    decodeAddTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.AddTrollEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): OSWAP_SideChainTrollRegistry.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): OSWAP_SideChainTrollRegistry.DeauthorizeEvent;
    parseDelistTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.DelistTrollEvent[];
    decodeDelistTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.DelistTrollEvent;
    parseLockGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.LockGeneralTrollEvent[];
    decodeLockGeneralTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.LockGeneralTrollEvent;
    parseLockSuperTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.LockSuperTrollEvent[];
    decodeLockSuperTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.LockSuperTrollEvent;
    parseNewVaultEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.NewVaultEvent[];
    decodeNewVaultEvent(event: Event): OSWAP_SideChainTrollRegistry.NewVaultEvent;
    parseRemoveTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.RemoveTrollEvent[];
    decodeRemoveTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.RemoveTrollEvent;
    parseResumeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.ResumeEvent[];
    decodeResumeEvent(event: Event): OSWAP_SideChainTrollRegistry.ResumeEvent;
    parseSetVotingExecutorEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.SetVotingExecutorEvent[];
    decodeSetVotingExecutorEvent(event: Event): OSWAP_SideChainTrollRegistry.SetVotingExecutorEvent;
    parseShutdownEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.ShutdownEvent[];
    decodeShutdownEvent(event: Event): OSWAP_SideChainTrollRegistry.ShutdownEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_SideChainTrollRegistry.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): OSWAP_SideChainTrollRegistry.TransferOwnershipEvent;
    parseUnlockGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UnlockGeneralTrollEvent[];
    decodeUnlockGeneralTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UnlockGeneralTrollEvent;
    parseUnlockSuperTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UnlockSuperTrollEvent[];
    decodeUnlockSuperTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UnlockSuperTrollEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_SideChainTrollRegistry.UpdateConfigStoreEvent;
    parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpdateTrollEvent[];
    decodeUpdateTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UpdateTrollEvent;
    parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpgradeEvent[];
    decodeUpgradeEvent(event: Event): OSWAP_SideChainTrollRegistry.UpgradeEvent;
    addTroll: {
        (params: IAddTrollParams): Promise<TransactionReceipt>;
        call: (params: IAddTrollParams) => Promise<void>;
    };
    allVaultToken: {
        (): Promise<string[]>;
    };
    configStore: {
        (): Promise<string>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    generalTrollCount: {
        (): Promise<BigNumber>;
    };
    govToken: {
        (): Promise<string>;
    };
    hashAddTroll: {
        (params: IHashAddTrollParams): Promise<string>;
    };
    hashRegisterVault: {
        (params: IHashRegisterVaultParams): Promise<string>;
    };
    hashRemoveTroll: {
        (params: IHashRemoveTrollParams): Promise<string>;
    };
    hashUnlockTroll: {
        (params: IHashUnlockTrollParams): Promise<string>;
    };
    hashUpdateTroll: {
        (params: IHashUpdateTrollParams): Promise<string>;
    };
    initAddress: {
        (params: IInitAddressParams): Promise<TransactionReceipt>;
        call: (params: IInitAddressParams) => Promise<void>;
    };
    isGeneralTroll: {
        (params: IIsGeneralTrollParams): Promise<boolean>;
    };
    isGeneralTrollByIndex: {
        (params: IIsGeneralTrollByIndexParams): Promise<boolean>;
    };
    isPermitted: {
        (param1: string): Promise<boolean>;
    };
    isSuperTroll: {
        (params: IIsSuperTrollParams): Promise<boolean>;
    };
    isSuperTrollByIndex: {
        (params: IIsSuperTrollByIndexParams): Promise<boolean>;
    };
    isVotingExecutor: {
        (param1: string): Promise<boolean>;
    };
    lastTrollTxCount: {
        (param1: string): Promise<BigNumber>;
    };
    lockGeneralTroll: {
        (trollProfileIndex: number | BigNumber): Promise<TransactionReceipt>;
        call: (trollProfileIndex: number | BigNumber) => Promise<void>;
    };
    lockSuperTroll: {
        (trollProfileIndex: number | BigNumber): Promise<TransactionReceipt>;
        call: (trollProfileIndex: number | BigNumber) => Promise<void>;
    };
    newOwner: {
        (): Promise<string>;
    };
    newTrollRegistry: {
        (): Promise<string>;
    };
    newVotingExecutorManager: {
        (): Promise<string>;
    };
    owner: {
        (): Promise<string>;
    };
    paused: {
        (): Promise<boolean>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    registerVault: {
        (params: IRegisterVaultParams): Promise<TransactionReceipt>;
        call: (params: IRegisterVaultParams) => Promise<void>;
    };
    removeTroll: {
        (params: IRemoveTrollParams): Promise<TransactionReceipt>;
        call: (params: IRemoveTrollParams) => Promise<void>;
    };
    resume: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    setVotingExecutor: {
        (params: ISetVotingExecutorParams): Promise<TransactionReceipt>;
        call: (params: ISetVotingExecutorParams) => Promise<void>;
    };
    shutdownByAdmin: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    shutdownByVoting: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    superTrollCount: {
        (): Promise<BigNumber>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    transactionsCount: {
        (): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    trollProfileInv: {
        (param1: string): Promise<BigNumber>;
    };
    trollProfiles: {
        (param1: number | BigNumber): Promise<{
            troll: string;
            trollType: BigNumber;
        }>;
    };
    trollRegistry: {
        (): Promise<string>;
    };
    unlockGeneralTroll: {
        (params: IUnlockGeneralTrollParams): Promise<TransactionReceipt>;
        call: (params: IUnlockGeneralTrollParams) => Promise<void>;
    };
    unlockSuperTroll: {
        (params: IUnlockSuperTrollParams): Promise<TransactionReceipt>;
        call: (params: IUnlockSuperTrollParams) => Promise<void>;
    };
    updateConfigStore: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    updateTroll: {
        (params: IUpdateTrollParams): Promise<TransactionReceipt>;
        call: (params: IUpdateTrollParams) => Promise<void>;
    };
    upgrade: {
        (trollRegistry: string): Promise<TransactionReceipt>;
        call: (trollRegistry: string) => Promise<void>;
    };
    upgradeByAdmin: {
        (trollRegistry: string): Promise<TransactionReceipt>;
        call: (trollRegistry: string) => Promise<void>;
    };
    usedNonce: {
        (param1: number | BigNumber): Promise<boolean>;
    };
    vaultToken: {
        (param1: number | BigNumber): Promise<string>;
    };
    vaultTokenLength: {
        (): Promise<BigNumber>;
    };
    vaults: {
        (param1: string): Promise<string>;
    };
    verifySignatures: {
        (params: IVerifySignaturesParams): Promise<TransactionReceipt>;
        call: (params: IVerifySignaturesParams) => Promise<void>;
    };
    votingExecutor: {
        (param1: number | BigNumber): Promise<string>;
    };
    votingExecutorInv: {
        (param1: string): Promise<BigNumber>;
    };
    votingExecutorLength: {
        (): Promise<BigNumber>;
    };
    private assign;
}
export declare module OSWAP_SideChainTrollRegistry {
    interface AddTrollEvent {
        troll: string;
        trollProfileIndex: BigNumber;
        isSuperTroll: boolean;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DelistTrollEvent {
        trollProfileIndex: BigNumber;
        _event: Event;
    }
    interface LockGeneralTrollEvent {
        trollProfileIndex: BigNumber;
        lockedBy: string;
        _event: Event;
    }
    interface LockSuperTrollEvent {
        trollProfileIndex: BigNumber;
        lockedBy: string;
        _event: Event;
    }
    interface NewVaultEvent {
        token: string;
        vault: string;
        _event: Event;
    }
    interface RemoveTrollEvent {
        trollProfileIndex: BigNumber;
        _event: Event;
    }
    interface ResumeEvent {
        _event: Event;
    }
    interface SetVotingExecutorEvent {
        newVotingExecutor: string;
        isActive: boolean;
        _event: Event;
    }
    interface ShutdownEvent {
        account: string;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
    interface UnlockGeneralTrollEvent {
        trollProfileIndex: BigNumber;
        _event: Event;
    }
    interface UnlockSuperTrollEvent {
        trollProfileIndex: BigNumber;
        unlock: boolean;
        bridgeVault: string;
        penalty: BigNumber;
        _event: Event;
    }
    interface UpdateConfigStoreEvent {
        newConfigStore: string;
        _event: Event;
    }
    interface UpdateTrollEvent {
        trollProfileIndex: BigNumber;
        troll: string;
        _event: Event;
    }
    interface UpgradeEvent {
        newTrollRegistry: string;
        _event: Event;
    }
}
