import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IAddChainParams {
    chainId: number | BigNumber;
    status: number | BigNumber;
    govToken: string;
    configStore: string;
    contractNames: string[];
    address: string[];
}
export interface IGetChainParams {
    chainId: number | BigNumber;
    contractnames: string[];
}
export interface IInitParams {
    chainId: (number | BigNumber)[];
    status: (number | BigNumber)[];
    govToken: string[];
    configStore: string[];
    mainChainContractNames: string[];
    mainChainContractAddress: string[];
    contractNames: string[];
    address: string[][];
    tokenNames: string[];
    vault: {
        token: string;
        vaultRegistry: string;
        bridgeVault: string;
    }[][];
}
export interface INewVaultParams {
    name: string;
    chainId: (number | BigNumber)[];
    vault: {
        token: string;
        vaultRegistry: string;
        bridgeVault: string;
    }[];
}
export interface ISideChainContractAddressParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IUpdateAddressParams {
    chainId: number | BigNumber;
    contractName: string;
    address: string;
}
export interface IUpdateAddressesParams {
    chainId: number | BigNumber;
    contractNames: string[];
    addresses: string[];
}
export interface IUpdateConfigStoreParams {
    chainId: number | BigNumber;
    address: string;
}
export interface IUpdateMainChainAddressParams {
    contractName: string;
    address: string;
}
export interface IUpdateStatusParams {
    chainId: number | BigNumber;
    status: number | BigNumber;
}
export interface IUpdateVaultParams {
    index: number | BigNumber;
    chainId: number | BigNumber;
    vault: {
        token: string;
        vaultRegistry: string;
        bridgeVault: string;
    };
}
export interface IVaultsParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export declare class OSWAP_ChainRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(votingExecutorManager: string): Promise<string>;
    parseNewChainEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.NewChainEvent[];
    decodeNewChainEvent(event: Event): OSWAP_ChainRegistry.NewChainEvent;
    parseUpdateAddressEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateAddressEvent[];
    decodeUpdateAddressEvent(event: Event): OSWAP_ChainRegistry.UpdateAddressEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_ChainRegistry.UpdateConfigStoreEvent;
    parseUpdateMainChainAddressEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateMainChainAddressEvent[];
    decodeUpdateMainChainAddressEvent(event: Event): OSWAP_ChainRegistry.UpdateMainChainAddressEvent;
    parseUpdateStatusEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateStatusEvent[];
    decodeUpdateStatusEvent(event: Event): OSWAP_ChainRegistry.UpdateStatusEvent;
    parseUpdateVaultEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateVaultEvent[];
    decodeUpdateVaultEvent(event: Event): OSWAP_ChainRegistry.UpdateVaultEvent;
    addChain: {
        (params: IAddChainParams): Promise<TransactionReceipt>;
        call: (params: IAddChainParams) => Promise<void>;
    };
    allChains: {
        (): Promise<BigNumber[]>;
    };
    chains: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    chainsLength: {
        (): Promise<BigNumber>;
    };
    configStore: {
        (param1: number | BigNumber): Promise<string>;
    };
    getChain: {
        (params: IGetChainParams): Promise<{
            _status: BigNumber;
            _govToken: string;
            _configStore: string;
            _contracts: string[];
            _vaults: {
                token: string;
                vaultRegistry: string;
                bridgeVault: string;
            }[];
        }>;
    };
    govToken: {
        (param1: number | BigNumber): Promise<string>;
    };
    init: {
        (params: IInitParams): Promise<TransactionReceipt>;
        call: (params: IInitParams) => Promise<void>;
    };
    mainChainContractAddress: {
        (param1: string): Promise<string>;
    };
    newVault: {
        (params: INewVaultParams): Promise<TransactionReceipt>;
        call: (params: INewVaultParams) => Promise<BigNumber>;
    };
    sideChainContractAddress: {
        (params: ISideChainContractAddressParams): Promise<string>;
    };
    status: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    tokenNames: {
        (param1: number | BigNumber): Promise<string>;
    };
    tokenNamesLength: {
        (): Promise<BigNumber>;
    };
    updateAddress: {
        (params: IUpdateAddressParams): Promise<TransactionReceipt>;
        call: (params: IUpdateAddressParams) => Promise<void>;
    };
    updateAddresses: {
        (params: IUpdateAddressesParams): Promise<TransactionReceipt>;
        call: (params: IUpdateAddressesParams) => Promise<void>;
    };
    updateConfigStore: {
        (params: IUpdateConfigStoreParams): Promise<TransactionReceipt>;
        call: (params: IUpdateConfigStoreParams) => Promise<void>;
    };
    updateMainChainAddress: {
        (params: IUpdateMainChainAddressParams): Promise<TransactionReceipt>;
        call: (params: IUpdateMainChainAddressParams) => Promise<void>;
    };
    updateStatus: {
        (params: IUpdateStatusParams): Promise<TransactionReceipt>;
        call: (params: IUpdateStatusParams) => Promise<void>;
    };
    updateVault: {
        (params: IUpdateVaultParams): Promise<TransactionReceipt>;
        call: (params: IUpdateVaultParams) => Promise<void>;
    };
    vaults: {
        (params: IVaultsParams): Promise<{
            token: string;
            vaultRegistry: string;
            bridgeVault: string;
        }>;
    };
    vaultsLength: {
        (): Promise<BigNumber>;
    };
    votingExecutorManager: {
        (): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_ChainRegistry {
    interface NewChainEvent {
        chainId: BigNumber;
        status: BigNumber;
        govToken: string;
        _event: Event;
    }
    interface UpdateAddressEvent {
        chainId: BigNumber;
        contractName: string;
        _address: string;
        _event: Event;
    }
    interface UpdateConfigStoreEvent {
        chainId: BigNumber;
        _address: string;
        _event: Event;
    }
    interface UpdateMainChainAddressEvent {
        contractName: string;
        _address: string;
        _event: Event;
    }
    interface UpdateStatusEvent {
        chainId: BigNumber;
        status: BigNumber;
        _event: Event;
    }
    interface UpdateVaultEvent {
        index: BigNumber;
        chainId: BigNumber;
        vault: {
            token: string;
            vaultRegistry: string;
            bridgeVault: string;
        };
        _event: Event;
    }
}
