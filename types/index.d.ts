/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        logic: string;
        data: string;
    }
    export class ERC1967Proxy extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, _value: number | BigNumber): Promise<string>;
        parseAdminChangedEvent(receipt: TransactionReceipt): ERC1967Proxy.AdminChangedEvent[];
        decodeAdminChangedEvent(event: Event): ERC1967Proxy.AdminChangedEvent;
        parseBeaconUpgradedEvent(receipt: TransactionReceipt): ERC1967Proxy.BeaconUpgradedEvent[];
        decodeBeaconUpgradedEvent(event: Event): ERC1967Proxy.BeaconUpgradedEvent;
        parseUpgradedEvent(receipt: TransactionReceipt): ERC1967Proxy.UpgradedEvent[];
        decodeUpgradedEvent(event: Event): ERC1967Proxy.UpgradedEvent;
        private assign;
    }
    export module ERC1967Proxy {
        interface AdminChangedEvent {
            previousAdmin: string;
            newAdmin: string;
            _event: Event;
        }
        interface BeaconUpgradedEvent {
            beacon: string;
            _event: Event;
        }
        interface UpgradedEvent {
            implementation: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class ERC20 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): ERC20.TransferEvent;
        allowance: {
            (params: IAllowanceParams): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams): Promise<TransactionReceipt>;
            call: (params: IApproveParams) => Promise<boolean>;
        };
        balanceOf: {
            (account: string): Promise<BigNumber>;
        };
        decimals: {
            (): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
        };
        name: {
            (): Promise<string>;
        };
        symbol: {
            (): Promise<string>;
        };
        totalSupply: {
            (): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams): Promise<TransactionReceipt>;
            call: (params: ITransferParams) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams) => Promise<boolean>;
        };
        private assign;
    }
    export module ERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.json.ts" {
    const _default_2: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface IOnERC721ReceivedParams {
        param1: string;
        param2: string;
        param3: number | BigNumber;
        param4: string;
    }
    export class ERC721Holder extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        onERC721Received: {
            (params: IOnERC721ReceivedParams): Promise<TransactionReceipt>;
            call: (params: IOnERC721ReceivedParams) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/Authorization.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/Authorization.json.ts" {
    const _default_3: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/Authorization.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/Authorization.ts" {
    import { IWallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-contract";
    export class Authorization extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseAuthorizeEvent(receipt: TransactionReceipt): Authorization.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): Authorization.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): Authorization.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): Authorization.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Authorization.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): Authorization.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): Authorization.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): Authorization.TransferOwnershipEvent;
        deny: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
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
        private assign;
    }
    export module Authorization {
        interface AuthorizeEvent {
            user: string;
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
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/MOCK_TrollRegistry.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/MOCK_TrollRegistry.json.ts" {
    const _default_4: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/MOCK_TrollRegistry.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/MOCK_TrollRegistry.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
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
    export class MOCK_TrollRegistry extends Contract {
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
    export module MOCK_TrollRegistry {
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
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/MintableToken.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/MintableToken.json.ts" {
    const _default_5: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/MintableToken.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/MintableToken.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IBurnFromParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class MintableToken extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): MintableToken.ApprovalEvent[];
        decodeApprovalEvent(event: Event): MintableToken.ApprovalEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): MintableToken.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): MintableToken.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): MintableToken.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): MintableToken.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): MintableToken.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): MintableToken.StartOwnershipTransferEvent;
        parseTransferEvent(receipt: TransactionReceipt): MintableToken.TransferEvent[];
        decodeTransferEvent(event: Event): MintableToken.TransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): MintableToken.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): MintableToken.TransferOwnershipEvent;
        allowance: {
            (params: IAllowanceParams): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams): Promise<TransactionReceipt>;
            call: (params: IApproveParams) => Promise<boolean>;
        };
        balanceOf: {
            (account: string): Promise<BigNumber>;
        };
        burn: {
            (amount: number | BigNumber): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber) => Promise<void>;
        };
        burnFrom: {
            (params: IBurnFromParams): Promise<TransactionReceipt>;
            call: (params: IBurnFromParams) => Promise<void>;
        };
        decimals: {
            (): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
        };
        deny: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
        };
        isPermitted: {
            (param1: string): Promise<boolean>;
        };
        mint: {
            (params: IMintParams): Promise<TransactionReceipt>;
            call: (params: IMintParams) => Promise<boolean>;
        };
        name: {
            (): Promise<string>;
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
        symbol: {
            (): Promise<string>;
        };
        takeOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        totalSupply: {
            (): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams): Promise<TransactionReceipt>;
            call: (params: ITransferParams) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams) => Promise<boolean>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        private assign;
    }
    export module MintableToken {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
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
        interface StartOwnershipTransferEvent {
            user: string;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferOwnershipEvent {
            user: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVault.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVault.json.ts" {
    const _default_6: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_6;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVault.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVault.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        vaultRegistry: string;
        configStore: string;
        asset: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IAssetPriceAgainstGovTokenParams {
        govTokenOracle: string;
        assetTokenOracle: string;
    }
    export interface ICancelOrderParams {
        signatures: string[];
        orderId: number | BigNumber;
        canceledByOrderOwner: boolean;
        protocolFee: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IGetOrdersParams {
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IHashCancelOrderParamsParams {
        orderId: number | BigNumber;
        canceledByOrderOwner: boolean;
        protocolFee: number | BigNumber;
    }
    export interface IHashOrderParams {
        owner: string;
        sourceChainId: number | BigNumber;
        orderId: number | BigNumber;
    }
    export interface IHashSwapParamsParams {
        orderId: string;
        amendment: number | BigNumber;
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
        protocolFee: number | BigNumber;
        pair: string[];
    }
    export interface IHashWithdrawParamsParams {
        owner: string;
        amount: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface INewOrderFromRouterParams {
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
        trader: string;
    }
    export interface IOrderAmendmentsParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IRebalancerWithdrawParams {
        signatures: string[];
        assetAmount: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        assetAmount: number | BigNumber;
    }
    export interface IRequestAmendOrderParams {
        orderId: number | BigNumber;
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
    }
    export interface IRequestCancelOrderParams {
        sourceChainId: number | BigNumber;
        orderId: number | BigNumber;
    }
    export interface ISwapParams {
        signatures: string[];
        owner: string;
        orderId: number | BigNumber;
        amendment: number | BigNumber;
        protocolFee: number | BigNumber;
        pair: string[];
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export interface IVoidOrderParams {
        signatures: string[];
        orderId: string;
    }
    export class OSWAP_BridgeVault extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_BridgeVault.AddLiquidityEvent;
        parseAmendOrderRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.AmendOrderRequestEvent[];
        decodeAmendOrderRequestEvent(event: Event): OSWAP_BridgeVault.AmendOrderRequestEvent;
        parseApprovalEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.ApprovalEvent[];
        decodeApprovalEvent(event: Event): OSWAP_BridgeVault.ApprovalEvent;
        parseNewOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.NewOrderEvent[];
        decodeNewOrderEvent(event: Event): OSWAP_BridgeVault.NewOrderEvent;
        parseOrderCanceledEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.OrderCanceledEvent[];
        decodeOrderCanceledEvent(event: Event): OSWAP_BridgeVault.OrderCanceledEvent;
        parseRebalanceEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RebalanceEvent[];
        decodeRebalanceEvent(event: Event): OSWAP_BridgeVault.RebalanceEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_BridgeVault.RemoveLiquidityEvent;
        parseRemoveLiquidityRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RemoveLiquidityRequestEvent[];
        decodeRemoveLiquidityRequestEvent(event: Event): OSWAP_BridgeVault.RemoveLiquidityRequestEvent;
        parseRequestCancelOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RequestCancelOrderEvent[];
        decodeRequestCancelOrderEvent(event: Event): OSWAP_BridgeVault.RequestCancelOrderEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_BridgeVault.SwapEvent;
        parseSyncEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.SyncEvent[];
        decodeSyncEvent(event: Event): OSWAP_BridgeVault.SyncEvent;
        parseTransferEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.TransferEvent[];
        decodeTransferEvent(event: Event): OSWAP_BridgeVault.TransferEvent;
        parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.UpdateConfigStoreEvent[];
        decodeUpdateConfigStoreEvent(event: Event): OSWAP_BridgeVault.UpdateConfigStoreEvent;
        parseUpdateTrollRegistryEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.UpdateTrollRegistryEvent[];
        decodeUpdateTrollRegistryEvent(event: Event): OSWAP_BridgeVault.UpdateTrollRegistryEvent;
        parseVoidOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.VoidOrderEvent[];
        decodeVoidOrderEvent(event: Event): OSWAP_BridgeVault.VoidOrderEvent;
        parseWithdrawUnexecutedOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.WithdrawUnexecutedOrderEvent[];
        decodeWithdrawUnexecutedOrderEvent(event: Event): OSWAP_BridgeVault.WithdrawUnexecutedOrderEvent;
        parseWithdrawlTrollFeeEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.WithdrawlTrollFeeEvent[];
        decodeWithdrawlTrollFeeEvent(event: Event): OSWAP_BridgeVault.WithdrawlTrollFeeEvent;
        addLiquidity: {
            (amount: number | BigNumber): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber) => Promise<void>;
        };
        allowance: {
            (params: IAllowanceParams): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams): Promise<TransactionReceipt>;
            call: (params: IApproveParams) => Promise<boolean>;
        };
        asset: {
            (): Promise<string>;
        };
        assetDecimalsScale: {
            (): Promise<BigNumber>;
        };
        assetPriceAgainstGovToken: {
            (params: IAssetPriceAgainstGovTokenParams): Promise<BigNumber>;
        };
        balanceOf: {
            (account: string): Promise<BigNumber>;
        };
        cancelOrder: {
            (params: ICancelOrderParams): Promise<TransactionReceipt>;
            call: (params: ICancelOrderParams) => Promise<void>;
        };
        configStore: {
            (): Promise<string>;
        };
        decimals: {
            (): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
        };
        getChainId: {
            (): Promise<BigNumber>;
        };
        getOrders: {
            (params: IGetOrdersParams): Promise<{
                peerChain: BigNumber;
                inAmount: BigNumber;
                outToken: string;
                minOutAmount: BigNumber;
                to: string;
                expire: BigNumber;
            }[]>;
        };
        govToken: {
            (): Promise<string>;
        };
        hashCancelOrderParams: {
            (params: IHashCancelOrderParamsParams): Promise<string>;
        };
        hashOrder: {
            (params: IHashOrderParams): Promise<string>;
        };
        hashSwapParams: {
            (params: IHashSwapParamsParams): Promise<string>;
        };
        hashVoidOrderParams: {
            (orderId: string): Promise<string>;
        };
        hashWithdrawParams: {
            (params: IHashWithdrawParamsParams): Promise<string>;
        };
        imbalance: {
            (): Promise<BigNumber>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
        };
        initAddress: {
            (vaultRegistry: string): Promise<TransactionReceipt>;
            call: (vaultRegistry: string) => Promise<void>;
        };
        lastKnownBalance: {
            (): Promise<BigNumber>;
        };
        lpAssetBalance: {
            (): Promise<BigNumber>;
        };
        name: {
            (): Promise<string>;
        };
        newOrder: {
            (order: {
                peerChain: number | BigNumber;
                inAmount: number | BigNumber;
                outToken: string;
                minOutAmount: number | BigNumber;
                to: string;
                expire: number | BigNumber;
            }): Promise<TransactionReceipt>;
            call: (order: {
                peerChain: number | BigNumber;
                inAmount: number | BigNumber;
                outToken: string;
                minOutAmount: number | BigNumber;
                to: string;
                expire: number | BigNumber;
            }) => Promise<BigNumber>;
        };
        newOrderFromRouter: {
            (params: INewOrderFromRouterParams): Promise<TransactionReceipt>;
            call: (params: INewOrderFromRouterParams) => Promise<BigNumber>;
        };
        orderAmendments: {
            (params: IOrderAmendmentsParams): Promise<{
                peerChain: BigNumber;
                inAmount: BigNumber;
                outToken: string;
                minOutAmount: BigNumber;
                to: string;
                expire: BigNumber;
            }>;
        };
        orderAmendmentsLength: {
            (orderId: number | BigNumber): Promise<BigNumber>;
        };
        orderOwner: {
            (param1: number | BigNumber): Promise<string>;
        };
        orderRefunds: {
            (param1: number | BigNumber): Promise<BigNumber>;
        };
        orderStatus: {
            (param1: number | BigNumber): Promise<BigNumber>;
        };
        orders: {
            (param1: number | BigNumber): Promise<{
                peerChain: BigNumber;
                inAmount: BigNumber;
                outToken: string;
                minOutAmount: BigNumber;
                to: string;
                expire: BigNumber;
            }>;
        };
        ordersLength: {
            (): Promise<BigNumber>;
        };
        pendingWithdrawalAmount: {
            (param1: string): Promise<BigNumber>;
        };
        pendingWithdrawalTimeout: {
            (param1: string): Promise<BigNumber>;
        };
        protocolFeeBalance: {
            (): Promise<BigNumber>;
        };
        rebalancerDeposit: {
            (assetAmount: number | BigNumber): Promise<TransactionReceipt>;
            call: (assetAmount: number | BigNumber) => Promise<void>;
        };
        rebalancerWithdraw: {
            (params: IRebalancerWithdrawParams): Promise<TransactionReceipt>;
            call: (params: IRebalancerWithdrawParams) => Promise<void>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<void>;
        };
        removeLiquidityRequest: {
            (lpTokenAmount: number | BigNumber): Promise<TransactionReceipt>;
            call: (lpTokenAmount: number | BigNumber) => Promise<void>;
        };
        requestAmendOrder: {
            (params: IRequestAmendOrderParams): Promise<TransactionReceipt>;
            call: (params: IRequestAmendOrderParams) => Promise<void>;
        };
        requestCancelOrder: {
            (params: IRequestCancelOrderParams): Promise<TransactionReceipt>;
            call: (params: IRequestCancelOrderParams) => Promise<void>;
        };
        swap: {
            (params: ISwapParams): Promise<TransactionReceipt>;
            call: (params: ISwapParams) => Promise<BigNumber>;
        };
        swapOrderStatus: {
            (param1: string): Promise<BigNumber>;
        };
        symbol: {
            (): Promise<string>;
        };
        sync: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        totalPendingWithdrawal: {
            (): Promise<BigNumber>;
        };
        totalSupply: {
            (): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams): Promise<TransactionReceipt>;
            call: (params: ITransferParams) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams) => Promise<boolean>;
        };
        trollRegistry: {
            (): Promise<string>;
        };
        updateConfigStore: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        updateTrollRegistry: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        vaultRegistry: {
            (): Promise<string>;
        };
        voidOrder: {
            (params: IVoidOrderParams): Promise<TransactionReceipt>;
            call: (params: IVoidOrderParams) => Promise<void>;
        };
        withdrawUnexecutedOrder: {
            (orderId: number | BigNumber): Promise<TransactionReceipt>;
            call: (orderId: number | BigNumber) => Promise<void>;
        };
        withdrawlTrollFee: {
            (amount: number | BigNumber): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber) => Promise<void>;
        };
        private assign;
    }
    export module OSWAP_BridgeVault {
        interface AddLiquidityEvent {
            provider: string;
            amount: BigNumber;
            mintAmount: BigNumber;
            newBalance: BigNumber;
            newLpAssetBalance: BigNumber;
            _event: Event;
        }
        interface AmendOrderRequestEvent {
            orderId: BigNumber;
            amendment: BigNumber;
            order: {
                peerChain: BigNumber;
                inAmount: BigNumber;
                outToken: string;
                minOutAmount: BigNumber;
                to: string;
                expire: BigNumber;
            };
            _event: Event;
        }
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface NewOrderEvent {
            orderId: BigNumber;
            owner: string;
            order: {
                peerChain: BigNumber;
                inAmount: BigNumber;
                outToken: string;
                minOutAmount: BigNumber;
                to: string;
                expire: BigNumber;
            };
            newImbalance: BigNumber;
            _event: Event;
        }
        interface OrderCanceledEvent {
            orderId: BigNumber;
            sender: string;
            signers: BigNumber[];
            canceledByOrderOwner: boolean;
            newImbalance: BigNumber;
            newProtocolFeeBalance: BigNumber;
            _event: Event;
        }
        interface RebalanceEvent {
            rebalancer: string;
            amount: BigNumber;
            newImbalance: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            amount: BigNumber;
            newPendingWithdrawal: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityRequestEvent {
            provider: string;
            amount: BigNumber;
            burnAmount: BigNumber;
            newBalance: BigNumber;
            newLpAssetBalance: BigNumber;
            newPendingWithdrawal: BigNumber;
            _event: Event;
        }
        interface RequestCancelOrderEvent {
            owner: string;
            sourceChainId: BigNumber;
            orderId: BigNumber;
            hashedOrderId: string;
            _event: Event;
        }
        interface SwapEvent {
            orderId: BigNumber;
            sender: string;
            signers: BigNumber[];
            owner: string;
            amendment: BigNumber;
            order: {
                peerChain: BigNumber;
                inAmount: BigNumber;
                outToken: string;
                minOutAmount: BigNumber;
                to: string;
                expire: BigNumber;
            };
            outAmount: BigNumber;
            newImbalance: BigNumber;
            newLpAssetBalance: BigNumber;
            newProtocolFeeBalance: BigNumber;
            _event: Event;
        }
        interface SyncEvent {
            excess: BigNumber;
            newProtocolFeeBalance: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
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
        interface VoidOrderEvent {
            orderId: string;
            sender: string;
            signers: BigNumber[];
            _event: Event;
        }
        interface WithdrawUnexecutedOrderEvent {
            owner: string;
            orderId: BigNumber;
            newImbalance: BigNumber;
            _event: Event;
        }
        interface WithdrawlTrollFeeEvent {
            feeTo: string;
            amount: BigNumber;
            newProtocolFeeBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVaultTrollRegistry.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVaultTrollRegistry.json.ts" {
    const _default_7: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_7;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVaultTrollRegistry.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVaultTrollRegistry.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
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
    export class OSWAP_BridgeVaultTrollRegistry extends Contract {
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
    export module OSWAP_BridgeVaultTrollRegistry {
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
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistry.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistry.json.ts" {
    const _default_8: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_8;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistry.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistry.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
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
    export class OSWAP_ChainRegistry extends Contract {
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
    export module OSWAP_ChainRegistry {
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
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistryExecutor.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistryExecutor.json.ts" {
    const _default_9: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_9;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistryExecutor.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistryExecutor.ts" {
    import { IWallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        votingManager: string;
        chainRegistry: string;
    }
    export class OSWAP_ChainRegistryExecutor extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseExecuteEvent(receipt: TransactionReceipt): OSWAP_ChainRegistryExecutor.ExecuteEvent[];
        decodeExecuteEvent(event: Event): OSWAP_ChainRegistryExecutor.ExecuteEvent;
        chainRegistry: {
            (): Promise<string>;
        };
        execute: {
            (params: string[]): Promise<TransactionReceipt>;
            call: (params: string[]) => Promise<void>;
        };
        votingManager: {
            (): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_ChainRegistryExecutor {
        interface ExecuteEvent {
            params: string[];
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStore.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStore.json.ts" {
    const _default_10: {
        abi: ({
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_10;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStore.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStore.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface ISetConfigParams {
        name: string;
        value: string;
    }
    export interface ISetConfig2Params {
        name: string;
        value1: string;
        value2: string;
    }
    export interface ISetConfigAddressParams {
        name: string;
        value: string;
    }
    export interface ISetOracleParams {
        asset: string;
        oracle: string;
    }
    export class OSWAP_ConfigStore extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: {
            govToken: string;
            swapPolicy: string;
            lpWithdrawlDelay: number | BigNumber;
            transactionsGap: number | BigNumber;
            superTrollMinCount: number | BigNumber;
            generalTrollMinCount: number | BigNumber;
            transactionFee: number | BigNumber;
            router: string;
            rebalancer: string;
            feeTo: string;
            wrapper: string;
            asset: string[];
            baseFee: (number | BigNumber)[];
        }): Promise<string>;
        parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): OSWAP_ConfigStore.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): OSWAP_ConfigStore.DeauthorizeEvent;
        parseParamSet1Event(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSet1Event[];
        decodeParamSet1Event(event: Event): OSWAP_ConfigStore.ParamSet1Event;
        parseParamSet2Event(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OSWAP_ConfigStore.ParamSet2Event;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): OSWAP_ConfigStore.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): OSWAP_ConfigStore.TransferOwnershipEvent;
        parseUpdateVotingExecutorManagerEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.UpdateVotingExecutorManagerEvent[];
        decodeUpdateVotingExecutorManagerEvent(event: Event): OSWAP_ConfigStore.UpdateVotingExecutorManagerEvent;
        parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.UpgradeEvent[];
        decodeUpgradeEvent(event: Event): OSWAP_ConfigStore.UpgradeEvent;
        baseFee: {
            (param1: string): Promise<BigNumber>;
        };
        deny: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        feeTo: {
            (): Promise<string>;
        };
        generalTrollMinCount: {
            (): Promise<BigNumber>;
        };
        getBridgeParams: {
            (asset: string): Promise<{
                param1: string;
                param2: string;
                param3: string;
                param4: string;
                param5: BigNumber;
                param6: BigNumber;
            }>;
        };
        getRebalanceParams: {
            (asset: string): Promise<{
                param1: string;
                param2: string;
                param3: string;
            }>;
        };
        getSignatureVerificationParams: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        govToken: {
            (): Promise<string>;
        };
        initAddress: {
            (votingExecutorManager: string): Promise<TransactionReceipt>;
            call: (votingExecutorManager: string) => Promise<void>;
        };
        isApprovedProxy: {
            (param1: string): Promise<boolean>;
        };
        isPermitted: {
            (param1: string): Promise<boolean>;
        };
        lpWithdrawlDelay: {
            (): Promise<BigNumber>;
        };
        newConfigStore: {
            (): Promise<string>;
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
        priceOracle: {
            (param1: string): Promise<string>;
        };
        rebalancer: {
            (): Promise<string>;
        };
        router: {
            (): Promise<string>;
        };
        setConfig: {
            (params: ISetConfigParams): Promise<TransactionReceipt>;
            call: (params: ISetConfigParams) => Promise<void>;
        };
        setConfig2: {
            (params: ISetConfig2Params): Promise<TransactionReceipt>;
            call: (params: ISetConfig2Params) => Promise<void>;
        };
        setConfigAddress: {
            (params: ISetConfigAddressParams): Promise<TransactionReceipt>;
            call: (params: ISetConfigAddressParams) => Promise<void>;
        };
        setOracle: {
            (params: ISetOracleParams): Promise<TransactionReceipt>;
            call: (params: ISetOracleParams) => Promise<void>;
        };
        setSwapPolicy: {
            (swapPolicy: string): Promise<TransactionReceipt>;
            call: (swapPolicy: string) => Promise<void>;
        };
        superTrollMinCount: {
            (): Promise<BigNumber>;
        };
        swapPolicy: {
            (): Promise<string>;
        };
        takeOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        transactionFee: {
            (): Promise<BigNumber>;
        };
        transactionsGap: {
            (): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        updateVotingExecutorManager: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        upgrade: {
            (configStore: string): Promise<TransactionReceipt>;
            call: (configStore: string) => Promise<void>;
        };
        votingExecutorManager: {
            (): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_ConfigStore {
        interface AuthorizeEvent {
            user: string;
            _event: Event;
        }
        interface DeauthorizeEvent {
            user: string;
            _event: Event;
        }
        interface ParamSet1Event {
            name: string;
            value1: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
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
        interface UpdateVotingExecutorManagerEvent {
            newVotingExecutorManager: string;
            _event: Event;
        }
        interface UpgradeEvent {
            newConfigStore: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStoreTradeVault.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStoreTradeVault.json.ts" {
    const _default_11: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_11;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStoreTradeVault.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStoreTradeVault.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        arbitrageFee: number | BigNumber;
        router: string;
    }
    export interface ISetConfigParams {
        name: string;
        value: string;
    }
    export interface ISetConfigAddressParams {
        name: string;
        value: string;
    }
    export class OSWAP_ConfigStoreTradeVault extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseParamSet1Event(receipt: TransactionReceipt): OSWAP_ConfigStoreTradeVault.ParamSet1Event[];
        decodeParamSet1Event(event: Event): OSWAP_ConfigStoreTradeVault.ParamSet1Event;
        arbitrageFee: {
            (): Promise<BigNumber>;
        };
        feeTo: {
            (): Promise<string>;
        };
        getTradeParam: {
            (): Promise<{
                param1: string;
                param2: BigNumber;
            }>;
        };
        newConfigStore: {
            (): Promise<string>;
        };
        router: {
            (): Promise<string>;
        };
        setConfig: {
            (params: ISetConfigParams): Promise<TransactionReceipt>;
            call: (params: ISetConfigParams) => Promise<void>;
        };
        setConfigAddress: {
            (params: ISetConfigAddressParams): Promise<TransactionReceipt>;
            call: (params: ISetConfigAddressParams) => Promise<void>;
        };
        private assign;
    }
    export module OSWAP_ConfigStoreTradeVault {
        interface ParamSet1Event {
            name: string;
            value1: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ContractProxy.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ContractProxy.json.ts" {
    const _default_12: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_12;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ContractProxy.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ContractProxy.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
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
    export class OSWAP_ContractProxy extends Contract {
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
    export module OSWAP_ContractProxy {
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
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainTrollRegistry.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainTrollRegistry.json.ts" {
    const _default_13: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_13;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainTrollRegistry.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainTrollRegistry.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        govToken: string;
        superTrollNft: string[];
        generalTrollNft: string[];
    }
    export interface IAddStakesGeneralTrollParams {
        nft: string;
        tokenId: number | BigNumber;
        amount: number | BigNumber;
    }
    export interface IAddStakesSuperTrollParams {
        nft: string;
        tokenId: number | BigNumber;
        amount: number | BigNumber;
    }
    export interface IAddTrollParams {
        troll: string;
        isSuperTroll: boolean;
        signature: string;
    }
    export interface IBackerStakingParams {
        backer: string;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetTrollByNftParams {
        nft: string;
        tokenId: number | BigNumber;
    }
    export interface IGetTrollsParams {
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IOnERC721ReceivedParams {
        param1: string;
        param2: string;
        param3: number | BigNumber;
        param4: string;
    }
    export interface IOwnerTrollsParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IStakeGeneralTrollParams {
        trollProfileIndex: number | BigNumber;
        nft: string;
        tokenId: number | BigNumber;
    }
    export interface IStakeSuperTrollParams {
        trollProfileIndex: number | BigNumber;
        nft: string;
        tokenId: number | BigNumber;
    }
    export interface IStakeToParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IStakeToInvParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IStakedByParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IStakedByInvParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IUnstakeGeneralTrollParams {
        nft: string;
        tokenId: number | BigNumber;
    }
    export interface IUnstakeSuperTrollParams {
        nft: string;
        tokenId: number | BigNumber;
    }
    export interface IUpdateNftParams {
        nft: string;
        trolltype: number | BigNumber;
    }
    export interface IUpdateTrollParams {
        trollProfileIndex: number | BigNumber;
        newTroll: string;
        signature: string;
    }
    export class OSWAP_MainChainTrollRegistry extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.AddTrollEvent[];
        decodeAddTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.AddTrollEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): OSWAP_MainChainTrollRegistry.AuthorizeEvent;
        parseBlockNftTokenIdEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.BlockNftTokenIdEvent[];
        decodeBlockNftTokenIdEvent(event: Event): OSWAP_MainChainTrollRegistry.BlockNftTokenIdEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): OSWAP_MainChainTrollRegistry.DeauthorizeEvent;
        parseResumeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.ResumeEvent[];
        decodeResumeEvent(event: Event): OSWAP_MainChainTrollRegistry.ResumeEvent;
        parseShutdownEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.ShutdownEvent[];
        decodeShutdownEvent(event: Event): OSWAP_MainChainTrollRegistry.ShutdownEvent;
        parseStakeGeneralTollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StakeGeneralTollEvent[];
        decodeStakeGeneralTollEvent(event: Event): OSWAP_MainChainTrollRegistry.StakeGeneralTollEvent;
        parseStakeSuperTollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StakeSuperTollEvent[];
        decodeStakeSuperTollEvent(event: Event): OSWAP_MainChainTrollRegistry.StakeSuperTollEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): OSWAP_MainChainTrollRegistry.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): OSWAP_MainChainTrollRegistry.TransferOwnershipEvent;
        parseUnstakeGeneralTollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UnstakeGeneralTollEvent[];
        decodeUnstakeGeneralTollEvent(event: Event): OSWAP_MainChainTrollRegistry.UnstakeGeneralTollEvent;
        parseUnstakeSuperTollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UnstakeSuperTollEvent[];
        decodeUnstakeSuperTollEvent(event: Event): OSWAP_MainChainTrollRegistry.UnstakeSuperTollEvent;
        parseUpdateNFTEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateNFTEvent[];
        decodeUpdateNFTEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateNFTEvent;
        parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateTrollEvent[];
        decodeUpdateTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateTrollEvent;
        parseUpdateVotingManagerEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateVotingManagerEvent[];
        decodeUpdateVotingManagerEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateVotingManagerEvent;
        parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpgradeEvent[];
        decodeUpgradeEvent(event: Event): OSWAP_MainChainTrollRegistry.UpgradeEvent;
        addStakesGeneralTroll: {
            (params: IAddStakesGeneralTrollParams): Promise<TransactionReceipt>;
            call: (params: IAddStakesGeneralTrollParams) => Promise<void>;
        };
        addStakesSuperTroll: {
            (params: IAddStakesSuperTrollParams): Promise<TransactionReceipt>;
            call: (params: IAddStakesSuperTrollParams) => Promise<void>;
        };
        addTroll: {
            (params: IAddTrollParams): Promise<TransactionReceipt>;
            call: (params: IAddTrollParams) => Promise<void>;
        };
        backerStaking: {
            (params: IBackerStakingParams): Promise<{
                nft: string;
                tokenId: BigNumber;
                trollProfileIndex: BigNumber;
                timestamp: BigNumber;
            }[]>;
        };
        deny: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        getStakeTo: {
            (backer: string): Promise<{
                nft: string;
                tokenId: BigNumber;
                trollProfileIndex: BigNumber;
                timestamp: BigNumber;
            }[]>;
        };
        getStakedBy: {
            (trollProfileIndex: number | BigNumber): Promise<{
                nft: string;
                tokenId: BigNumber;
            }[]>;
        };
        getStakes: {
            (troll: string): Promise<BigNumber>;
        };
        getStakesByTrollProfile: {
            (trollProfileIndex: number | BigNumber): Promise<BigNumber>;
        };
        getTrollByNft: {
            (params: IGetTrollByNftParams): Promise<string>;
        };
        getTrollProperties: {
            (trollProfileIndex: number | BigNumber): Promise<{
                troll: {
                    owner: string;
                    troll: string;
                    trollType: BigNumber;
                    nftCount: BigNumber;
                };
                nfts: {
                    nft: string;
                    tokenId: BigNumber;
                }[];
                backers: string[];
            }>;
        };
        getTrollPropertiesByAddress: {
            (trollAddress: string): Promise<{
                troll: {
                    owner: string;
                    troll: string;
                    trollType: BigNumber;
                    nftCount: BigNumber;
                };
                nfts: {
                    nft: string;
                    tokenId: BigNumber;
                }[];
                backers: string[];
            }>;
        };
        getTrolls: {
            (params: IGetTrollsParams): Promise<{
                owner: string;
                troll: string;
                trollType: BigNumber;
                nftCount: BigNumber;
            }[]>;
        };
        govToken: {
            (): Promise<string>;
        };
        initAddress: {
            (votingManager: string): Promise<TransactionReceipt>;
            call: (votingManager: string) => Promise<void>;
        };
        isPermitted: {
            (param1: string): Promise<boolean>;
        };
        newOwner: {
            (): Promise<string>;
        };
        newTrollRegistry: {
            (): Promise<string>;
        };
        nftType: {
            (param1: string): Promise<BigNumber>;
        };
        onERC721Received: {
            (params: IOnERC721ReceivedParams): Promise<TransactionReceipt>;
            call: (params: IOnERC721ReceivedParams) => Promise<string>;
        };
        owner: {
            (): Promise<string>;
        };
        ownerTrolls: {
            (params: IOwnerTrollsParams): Promise<BigNumber>;
        };
        ownerTrollsLength: {
            (owner: string): Promise<BigNumber>;
        };
        paused: {
            (): Promise<boolean>;
        };
        permit: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        resume: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        shutdownByAdmin: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        shutdownByVoting: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        stakeGeneralTroll: {
            (params: IStakeGeneralTrollParams): Promise<TransactionReceipt>;
            call: (params: IStakeGeneralTrollParams) => Promise<void>;
        };
        stakeOf: {
            (param1: string): Promise<BigNumber>;
        };
        stakeSuperTroll: {
            (params: IStakeSuperTrollParams): Promise<TransactionReceipt>;
            call: (params: IStakeSuperTrollParams) => Promise<void>;
        };
        stakeTo: {
            (params: IStakeToParams): Promise<{
                nft: string;
                tokenId: BigNumber;
                trollProfileIndex: BigNumber;
                timestamp: BigNumber;
            }>;
        };
        stakeToInv: {
            (params: IStakeToInvParams): Promise<{
                backer: string;
                index: BigNumber;
            }>;
        };
        stakeToLength: {
            (backer: string): Promise<BigNumber>;
        };
        stakedBy: {
            (params: IStakedByParams): Promise<{
                nft: string;
                tokenId: BigNumber;
            }>;
        };
        stakedByInv: {
            (params: IStakedByInvParams): Promise<{
                trollProfileIndex: BigNumber;
                index: BigNumber;
            }>;
        };
        stakedByLength: {
            (trollProfileIndex: number | BigNumber): Promise<BigNumber>;
        };
        takeOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        totalStake: {
            (): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        trollNft: {
            (param1: number | BigNumber): Promise<string>;
        };
        trollNftInv: {
            (param1: string): Promise<BigNumber>;
        };
        trollNftLength: {
            (): Promise<BigNumber>;
        };
        trollProfileInv: {
            (param1: string): Promise<BigNumber>;
        };
        trollProfiles: {
            (param1: number | BigNumber): Promise<{
                owner: string;
                troll: string;
                trollType: BigNumber;
                nftCount: BigNumber;
            }>;
        };
        trollProfilesLength: {
            (): Promise<BigNumber>;
        };
        unstakeGeneralTroll: {
            (params: IUnstakeGeneralTrollParams): Promise<TransactionReceipt>;
            call: (params: IUnstakeGeneralTrollParams) => Promise<BigNumber>;
        };
        unstakeSuperTroll: {
            (params: IUnstakeSuperTrollParams): Promise<TransactionReceipt>;
            call: (params: IUnstakeSuperTrollParams) => Promise<BigNumber>;
        };
        updateNft: {
            (params: IUpdateNftParams): Promise<TransactionReceipt>;
            call: (params: IUpdateNftParams) => Promise<void>;
        };
        updateTroll: {
            (params: IUpdateTrollParams): Promise<TransactionReceipt>;
            call: (params: IUpdateTrollParams) => Promise<void>;
        };
        updateVotingManager: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        upgrade: {
            (trollRegistry: string): Promise<TransactionReceipt>;
            call: (trollRegistry: string) => Promise<void>;
        };
        upgradeByAdmin: {
            (trollRegistry: string): Promise<TransactionReceipt>;
            call: (trollRegistry: string) => Promise<void>;
        };
        votingManager: {
            (): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_MainChainTrollRegistry {
        interface AddTrollEvent {
            owner: string;
            troll: string;
            trollProfileIndex: BigNumber;
            isSuperTroll: boolean;
            _event: Event;
        }
        interface AuthorizeEvent {
            user: string;
            _event: Event;
        }
        interface BlockNftTokenIdEvent {
            nft: string;
            tokenId: BigNumber;
            blocked: boolean;
            _event: Event;
        }
        interface DeauthorizeEvent {
            user: string;
            _event: Event;
        }
        interface ResumeEvent {
            _event: Event;
        }
        interface ShutdownEvent {
            account: string;
            _event: Event;
        }
        interface StakeGeneralTollEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            nft: string;
            tokenId: BigNumber;
            stakesChange: BigNumber;
            stakesBalance: BigNumber;
            _event: Event;
        }
        interface StakeSuperTollEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            nft: string;
            tokenId: BigNumber;
            stakesChange: BigNumber;
            stakesBalance: BigNumber;
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
        interface UnstakeGeneralTollEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            nft: string;
            tokenId: BigNumber;
            stakesChange: BigNumber;
            stakesBalance: BigNumber;
            _event: Event;
        }
        interface UnstakeSuperTollEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            nft: string;
            tokenId: BigNumber;
            stakesChange: BigNumber;
            stakesBalance: BigNumber;
            _event: Event;
        }
        interface UpdateNFTEvent {
            nft: string;
            trollType: BigNumber;
            _event: Event;
        }
        interface UpdateTrollEvent {
            trollProfileIndex: BigNumber;
            oldTroll: string;
            newTroll: string;
            _event: Event;
        }
        interface UpdateVotingManagerEvent {
            newVotingManager: string;
            _event: Event;
        }
        interface UpgradeEvent {
            newTrollRegistry: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainVotingExecutor.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainVotingExecutor.json.ts" {
    const _default_14: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_14;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainVotingExecutor.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainVotingExecutor.ts" {
    import { IWallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-contract";
    export class OSWAP_MainChainVotingExecutor extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(votingManager: string): Promise<string>;
        parseExecuteEvent(receipt: TransactionReceipt): OSWAP_MainChainVotingExecutor.ExecuteEvent[];
        decodeExecuteEvent(event: Event): OSWAP_MainChainVotingExecutor.ExecuteEvent;
        chainRegistry: {
            (): Promise<string>;
        };
        execute: {
            (params: string[]): Promise<TransactionReceipt>;
            call: (params: string[]) => Promise<void>;
        };
        initAddress: {
            (chainRegistry: string): Promise<TransactionReceipt>;
            call: (chainRegistry: string) => Promise<void>;
        };
        trollRegistry: {
            (): Promise<string>;
        };
        votingManager: {
            (): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_MainChainVotingExecutor {
        interface ExecuteEvent {
            params: string[];
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_RouterVaultWrapper.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_RouterVaultWrapper.json.ts" {
    const _default_15: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_15;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_RouterVaultWrapper.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_RouterVaultWrapper.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface ISwapETHForExactTokensParams {
        pair: string[];
        vault: string;
        deadline: number | BigNumber;
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
    }
    export interface ISwapExactETHForTokensParams {
        pair: string[];
        vault: string;
        deadline: number | BigNumber;
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
    }
    export interface ISwapExactTokensForTokensParams {
        pair: string[];
        vault: string;
        amountIn: number | BigNumber;
        deadline: number | BigNumber;
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
    }
    export interface ISwapTokensForExactTokensParams {
        pair: string[];
        vault: string;
        amountIn: number | BigNumber;
        deadline: number | BigNumber;
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
    }
    export class OSWAP_RouterVaultWrapper extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RouterVaultWrapper.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RouterVaultWrapper.SwapEvent;
        parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_RouterVaultWrapper.UpdateConfigStoreEvent[];
        decodeUpdateConfigStoreEvent(event: Event): OSWAP_RouterVaultWrapper.UpdateConfigStoreEvent;
        configStore: {
            (): Promise<string>;
        };
        initAddress: {
            (configStore: string): Promise<TransactionReceipt>;
            call: (configStore: string) => Promise<void>;
        };
        owner: {
            (): Promise<string>;
        };
        swapETHForExactTokens: {
            (params: ISwapETHForExactTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapETHForExactTokensParams, _value: number | BigNumber) => Promise<BigNumber>;
        };
        swapExactETHForTokens: {
            (params: ISwapExactETHForTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensParams, _value: number | BigNumber) => Promise<BigNumber>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber>;
        };
        updateConfigStore: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        private assign;
    }
    export module OSWAP_RouterVaultWrapper {
        interface SwapEvent {
            vault: string;
            orderId: BigNumber;
            sender: string;
            inToken: string;
            inAmount: BigNumber;
            _event: Event;
        }
        interface UpdateConfigStoreEvent {
            newConfigStore: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainTrollRegistry.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainTrollRegistry.json.ts" {
    const _default_16: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_16;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainTrollRegistry.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainTrollRegistry.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
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
    export class OSWAP_SideChainTrollRegistry extends Contract {
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
    export module OSWAP_SideChainTrollRegistry {
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
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainVotingExecutor.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainVotingExecutor.json.ts" {
    const _default_17: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_17;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainVotingExecutor.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainVotingExecutor.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IExecuteParams {
        signatures: string[];
        params: string[];
        nonce: number | BigNumber;
    }
    export interface IExecuteHashParams {
        params: string[];
        nonce: number | BigNumber;
    }
    export class OSWAP_SideChainVotingExecutor extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(trollRegistry: string): Promise<string>;
        parseExecuteEvent(receipt: TransactionReceipt): OSWAP_SideChainVotingExecutor.ExecuteEvent[];
        decodeExecuteEvent(event: Event): OSWAP_SideChainVotingExecutor.ExecuteEvent;
        configStore: {
            (): Promise<string>;
        };
        execute: {
            (params: IExecuteParams): Promise<TransactionReceipt>;
            call: (params: IExecuteParams) => Promise<void>;
        };
        executeHash: {
            (params: IExecuteHashParams): Promise<string>;
        };
        govToken: {
            (): Promise<string>;
        };
        trollRegistry: {
            (): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_SideChainVotingExecutor {
        interface ExecuteEvent {
            params: string[];
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingContract.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingContract.json.ts" {
    const _default_18: {
        abi: ({
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_18;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingContract.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingContract.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export class OSWAP_VotingContract extends Contract {
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
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingManager.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingManager.json.ts" {
    const _default_19: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_19;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingManager.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingManager.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        trollRegistry: string;
        names: string[];
        minExeDelay: (number | BigNumber)[];
        minVoteDuration: (number | BigNumber)[];
        maxVoteDuration: (number | BigNumber)[];
        minGovTokenToCreateVote: (number | BigNumber)[];
        minQuorum: (number | BigNumber)[];
    }
    export interface IAddVotingConfigParams {
        name: string;
        minExeDelay: number | BigNumber;
        minVoteDuration: number | BigNumber;
        maxVoteDuration: number | BigNumber;
        minGovTokenToCreateVote: number | BigNumber;
        minQuorum: number | BigNumber;
    }
    export interface IGetVotingConfigProfilesParams {
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetVotingsParams {
        start: number | BigNumber;
        count: number | BigNumber;
    }
    export interface INewVoteParams {
        vote: string;
        isExecutiveVote: boolean;
    }
    export interface ISetVotingConfigParams {
        configName: string;
        paramName: string;
        paramValue: number | BigNumber;
    }
    export interface ISetVotingExecutorParams {
        votingExecutor: string;
        bool: boolean;
    }
    export interface IVotedParams {
        poll: boolean;
        account: string;
        option: number | BigNumber;
    }
    export class OSWAP_VotingManager extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseAddVotingConfigEvent(receipt: TransactionReceipt): OSWAP_VotingManager.AddVotingConfigEvent[];
        decodeAddVotingConfigEvent(event: Event): OSWAP_VotingManager.AddVotingConfigEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): OSWAP_VotingManager.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): OSWAP_VotingManager.DeauthorizeEvent;
        parseExecutedEvent(receipt: TransactionReceipt): OSWAP_VotingManager.ExecutedEvent[];
        decodeExecutedEvent(event: Event): OSWAP_VotingManager.ExecutedEvent;
        parseNewPollEvent(receipt: TransactionReceipt): OSWAP_VotingManager.NewPollEvent[];
        decodeNewPollEvent(event: Event): OSWAP_VotingManager.NewPollEvent;
        parseNewVoteEvent(receipt: TransactionReceipt): OSWAP_VotingManager.NewVoteEvent[];
        decodeNewVoteEvent(event: Event): OSWAP_VotingManager.NewVoteEvent;
        parseParamSetEvent(receipt: TransactionReceipt): OSWAP_VotingManager.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OSWAP_VotingManager.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): OSWAP_VotingManager.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OSWAP_VotingManager.ParamSet2Event;
        parsePollEvent(receipt: TransactionReceipt): OSWAP_VotingManager.PollEvent[];
        decodePollEvent(event: Event): OSWAP_VotingManager.PollEvent;
        parseSetVotingConfigEvent(receipt: TransactionReceipt): OSWAP_VotingManager.SetVotingConfigEvent[];
        decodeSetVotingConfigEvent(event: Event): OSWAP_VotingManager.SetVotingConfigEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_VotingManager.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): OSWAP_VotingManager.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_VotingManager.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): OSWAP_VotingManager.TransferOwnershipEvent;
        parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.UpgradeEvent[];
        decodeUpgradeEvent(event: Event): OSWAP_VotingManager.UpgradeEvent;
        parseVetoEvent(receipt: TransactionReceipt): OSWAP_VotingManager.VetoEvent[];
        decodeVetoEvent(event: Event): OSWAP_VotingManager.VetoEvent;
        parseVoteEvent(receipt: TransactionReceipt): OSWAP_VotingManager.VoteEvent[];
        decodeVoteEvent(event: Event): OSWAP_VotingManager.VoteEvent;
        addVotingConfig: {
            (params: IAddVotingConfigParams): Promise<TransactionReceipt>;
            call: (params: IAddVotingConfigParams) => Promise<void>;
        };
        admin: {
            (): Promise<string>;
        };
        allVotings: {
            (): Promise<string[]>;
        };
        closeVote: {
            (vote: string): Promise<TransactionReceipt>;
            call: (vote: string) => Promise<void>;
        };
        deny: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        executed: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        getNewVoteId: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<BigNumber>;
        };
        getVotingConfigProfiles: {
            (params: IGetVotingConfigProfilesParams): Promise<string[]>;
        };
        getVotingCount: {
            (): Promise<BigNumber>;
        };
        getVotingParams: {
            (name: string): Promise<{
                _minExeDelay: BigNumber;
                _minVoteDuration: BigNumber;
                _maxVoteDuration: BigNumber;
                _minGovTokenToCreateVote: BigNumber;
                _minQuorum: BigNumber;
            }>;
        };
        getVotings: {
            (params: IGetVotingsParams): Promise<string[]>;
        };
        govToken: {
            (): Promise<string>;
        };
        initAdmin: {
            (admin: string): Promise<TransactionReceipt>;
            call: (admin: string) => Promise<void>;
        };
        initVotingExecutor: {
            (votingExecutor: string[]): Promise<TransactionReceipt>;
            call: (votingExecutor: string[]) => Promise<void>;
        };
        isPermitted: {
            (param1: string): Promise<boolean>;
        };
        isVotingContract: {
            (votingContract: string): Promise<boolean>;
        };
        isVotingExecutor: {
            (param1: string): Promise<boolean>;
        };
        newOwner: {
            (): Promise<string>;
        };
        newVote: {
            (params: INewVoteParams): Promise<TransactionReceipt>;
            call: (params: INewVoteParams) => Promise<void>;
        };
        newVotingExecutorManager: {
            (): Promise<string>;
        };
        newVotingManager: {
            (): Promise<string>;
        };
        owner: {
            (): Promise<string>;
        };
        permit: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        setAdmin: {
            (admin: string): Promise<TransactionReceipt>;
            call: (admin: string) => Promise<void>;
        };
        setVotingConfig: {
            (params: ISetVotingConfigParams): Promise<TransactionReceipt>;
            call: (params: ISetVotingConfigParams) => Promise<void>;
        };
        setVotingExecutor: {
            (params: ISetVotingExecutorParams): Promise<TransactionReceipt>;
            call: (params: ISetVotingExecutorParams) => Promise<void>;
        };
        setVotingRegister: {
            (votingRegister: string): Promise<TransactionReceipt>;
            call: (votingRegister: string) => Promise<void>;
        };
        takeOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        trollRegistry: {
            (): Promise<string>;
        };
        updateWeight: {
            (account: string): Promise<TransactionReceipt>;
            call: (account: string) => Promise<void>;
        };
        upgrade: {
            (votingManager: string): Promise<TransactionReceipt>;
            call: (votingManager: string) => Promise<void>;
        };
        upgradeByAdmin: {
            (votingManager: string): Promise<TransactionReceipt>;
            call: (votingManager: string) => Promise<void>;
        };
        veto: {
            (voting: string): Promise<TransactionReceipt>;
            call: (voting: string) => Promise<void>;
        };
        voteCount: {
            (): Promise<BigNumber>;
        };
        voted: {
            (params: IVotedParams): Promise<TransactionReceipt>;
            call: (params: IVotedParams) => Promise<void>;
        };
        votingConfigProfiles: {
            (param1: number | BigNumber): Promise<string>;
        };
        votingConfigProfilesLength: {
            (): Promise<BigNumber>;
        };
        votingConfigs: {
            (param1: string): Promise<{
                minExeDelay: BigNumber;
                minVoteDuration: BigNumber;
                maxVoteDuration: BigNumber;
                minGovTokenToCreateVote: BigNumber;
                minQuorum: BigNumber;
            }>;
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
        votingIdx: {
            (param1: string): Promise<BigNumber>;
        };
        votingRegister: {
            (): Promise<string>;
        };
        votings: {
            (param1: number | BigNumber): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_VotingManager {
        interface AddVotingConfigEvent {
            name: string;
            minExeDelay: BigNumber;
            minVoteDuration: BigNumber;
            maxVoteDuration: BigNumber;
            minGovTokenToCreateVote: BigNumber;
            minQuorum: BigNumber;
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
        interface ExecutedEvent {
            vote: string;
            _event: Event;
        }
        interface NewPollEvent {
            poll: string;
            _event: Event;
        }
        interface NewVoteEvent {
            vote: string;
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
        interface PollEvent {
            account: string;
            poll: string;
            option: BigNumber;
            _event: Event;
        }
        interface SetVotingConfigEvent {
            configName: string;
            paramName: string;
            minExeDelay: BigNumber;
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
        interface UpgradeEvent {
            newVotingManager: string;
            _event: Event;
        }
        interface VetoEvent {
            vote: string;
            _event: Event;
        }
        interface VoteEvent {
            account: string;
            vote: string;
            option: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingRegistry.json.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingRegistry.json.ts" {
    const _default_20: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_20;
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingRegistry.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingRegistry.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
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
    export class OSWAP_VotingRegistry extends Contract {
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
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk/contracts/index.ts" />
declare module "@openswap/cross-chain-bridge-sdk/contracts/index.ts" {
    export { ERC1967Proxy } from "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.ts";
    export { ERC20 } from "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts";
    export { ERC721Holder } from "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.ts";
    export { Authorization } from "@openswap/cross-chain-bridge-sdk/contracts/Authorization.ts";
    export { MOCK_TrollRegistry } from "@openswap/cross-chain-bridge-sdk/contracts/MOCK_TrollRegistry.ts";
    export { MintableToken } from "@openswap/cross-chain-bridge-sdk/contracts/MintableToken.ts";
    export { OSWAP_BridgeVault } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVault.ts";
    export { OSWAP_BridgeVaultTrollRegistry } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVaultTrollRegistry.ts";
    export { OSWAP_ChainRegistry } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistry.ts";
    export { OSWAP_ChainRegistryExecutor } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistryExecutor.ts";
    export { OSWAP_ConfigStore } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStore.ts";
    export { OSWAP_ConfigStoreTradeVault } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStoreTradeVault.ts";
    export { OSWAP_ContractProxy } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ContractProxy.ts";
    export { OSWAP_MainChainTrollRegistry } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainTrollRegistry.ts";
    export { OSWAP_MainChainVotingExecutor } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainVotingExecutor.ts";
    export { OSWAP_RouterVaultWrapper } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_RouterVaultWrapper.ts";
    export { OSWAP_SideChainTrollRegistry } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainTrollRegistry.ts";
    export { OSWAP_SideChainVotingExecutor } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainVotingExecutor.ts";
    export { OSWAP_VotingContract } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingContract.ts";
    export { OSWAP_VotingManager } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingManager.ts";
    export { OSWAP_VotingRegistry } from "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingRegistry.ts";
}
/// <amd-module name="@openswap/cross-chain-bridge-sdk" />
declare module "@openswap/cross-chain-bridge-sdk" {
    export * as Contracts from "@openswap/cross-chain-bridge-sdk/contracts/index.ts";
}
