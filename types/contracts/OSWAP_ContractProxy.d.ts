import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    logic: string;
    votingManager: string;
    data: string;
}
export interface IUpgradeToParams {
    oldImplementation: string;
    newImplementation: string;
    finalize: boolean;
}
export interface IUpgradeToAndCallParams {
    oldImplementation: string;
    newImplementation: string;
    data: string;
    finalize: boolean;
}
export declare class OSWAP_ContractProxy extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, _value: number | BigNumber): Promise<string>;
    parseAdminChangedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.AdminChangedEvent[];
    decodeAdminChangedEvent(event: Event): OSWAP_ContractProxy.AdminChangedEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): OSWAP_ContractProxy.AuthorizeEvent;
    parseBeaconUpgradedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.BeaconUpgradedEvent[];
    decodeBeaconUpgradedEvent(event: Event): OSWAP_ContractProxy.BeaconUpgradedEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): OSWAP_ContractProxy.DeauthorizeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_ContractProxy.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): OSWAP_ContractProxy.TransferOwnershipEvent;
    parseUpgradedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.UpgradedEvent[];
    decodeUpgradedEvent(event: Event): OSWAP_ContractProxy.UpgradedEvent;
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    implementation: {
        (): Promise<string>;
    };
    isPermitted: {
        (param1: string): Promise<boolean>;
    };
    newOwner: {
        (): Promise<string>;
    };
    owner: {
        (): Promise<string>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    upgradeTo: {
        (params: IUpgradeToParams): Promise<TransactionReceipt>;
        call: (params: IUpgradeToParams) => Promise<void>;
    };
    upgradeToAndCall: {
        (params: IUpgradeToAndCallParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: IUpgradeToAndCallParams, _value: number | BigNumber) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_ContractProxy {
    interface AdminChangedEvent {
        previousAdmin: string;
        newAdmin: string;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface BeaconUpgradedEvent {
        beacon: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
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
    interface UpgradedEvent {
        implementation: string;
        _event: Event;
    }
}
