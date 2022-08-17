import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IAddTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    troll: string;
    isSuperTroll: boolean;
    nonce: number | BigNumber;
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
export declare class MOCK_TrollRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(govToken: string): Promise<string>;
    parseAddTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.AddTrollEvent[];
    decodeAddTrollEvent(event: Event): MOCK_TrollRegistry.AddTrollEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): MOCK_TrollRegistry.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): MOCK_TrollRegistry.DeauthorizeEvent;
    parseDelistTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.DelistTrollEvent[];
    decodeDelistTrollEvent(event: Event): MOCK_TrollRegistry.DelistTrollEvent;
    parseLockGeneralTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.LockGeneralTrollEvent[];
    decodeLockGeneralTrollEvent(event: Event): MOCK_TrollRegistry.LockGeneralTrollEvent;
    parseLockSuperTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.LockSuperTrollEvent[];
    decodeLockSuperTrollEvent(event: Event): MOCK_TrollRegistry.LockSuperTrollEvent;
    parseParamSetEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ParamSetEvent[];
    decodeParamSetEvent(event: Event): MOCK_TrollRegistry.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): MOCK_TrollRegistry.ParamSet2Event[];
    decodeParamSet2Event(event: Event): MOCK_TrollRegistry.ParamSet2Event;
    parseRemoveTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.RemoveTrollEvent[];
    decodeRemoveTrollEvent(event: Event): MOCK_TrollRegistry.RemoveTrollEvent;
    parseResumeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ResumeEvent[];
    decodeResumeEvent(event: Event): MOCK_TrollRegistry.ResumeEvent;
    parseSetVotingExecutorEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.SetVotingExecutorEvent[];
    decodeSetVotingExecutorEvent(event: Event): MOCK_TrollRegistry.SetVotingExecutorEvent;
    parseShutdownEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ShutdownEvent[];
    decodeShutdownEvent(event: Event): MOCK_TrollRegistry.ShutdownEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): MOCK_TrollRegistry.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): MOCK_TrollRegistry.TransferOwnershipEvent;
    parseUnlockGeneralTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UnlockGeneralTrollEvent[];
    decodeUnlockGeneralTrollEvent(event: Event): MOCK_TrollRegistry.UnlockGeneralTrollEvent;
    parseUnlockSuperTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UnlockSuperTrollEvent[];
    decodeUnlockSuperTrollEvent(event: Event): MOCK_TrollRegistry.UnlockSuperTrollEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): MOCK_TrollRegistry.UpdateConfigStoreEvent;
    parseUpdateTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpdateTrollEvent[];
    decodeUpdateTrollEvent(event: Event): MOCK_TrollRegistry.UpdateTrollEvent;
    parseUpgradeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpgradeEvent[];
    decodeUpgradeEvent(event: Event): MOCK_TrollRegistry.UpgradeEvent;
    parseUpgradeVotingManagerEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpgradeVotingManagerEvent[];
    decodeUpgradeVotingManagerEvent(event: Event): MOCK_TrollRegistry.UpgradeVotingManagerEvent;
    addTroll: {
        (params: IAddTrollParams): Promise<TransactionReceipt>;
        call: (params: IAddTrollParams) => Promise<void>;
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
    initAddress: {
        (configStore: string): Promise<TransactionReceipt>;
        call: (configStore: string) => Promise<void>;
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
    newVotingManager: {
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
    upgradeTrollRegistry: {
        (trollRegistry: string): Promise<TransactionReceipt>;
        call: (trollRegistry: string) => Promise<void>;
    };
    upgradeTrollRegistryByAdmin: {
        (trollRegistry: string): Promise<TransactionReceipt>;
        call: (trollRegistry: string) => Promise<void>;
    };
    upgradeVotingManager: {
        (votingManager: string): Promise<TransactionReceipt>;
        call: (votingManager: string) => Promise<void>;
    };
    upgradeVotingManagerByAdmin: {
        (votingManager: string): Promise<TransactionReceipt>;
        call: (votingManager: string) => Promise<void>;
    };
    usedNonce: {
        (param1: number | BigNumber): Promise<boolean>;
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
export declare module MOCK_TrollRegistry {
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
    interface ParamSetEvent {
        name: string;
        value: string;
        _event: Event;
    }
    interface ParamSet2Event {
        name: string;
        value1: string;
        value2: string;
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
        oldTroll: string;
        newTroll: string;
        _event: Event;
    }
    interface UpgradeEvent {
        newTrollRegistry: string;
        _event: Event;
    }
    interface UpgradeVotingManagerEvent {
        newVotingManager: string;
        _event: Event;
    }
}
