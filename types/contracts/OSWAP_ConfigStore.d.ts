import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
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
export declare class OSWAP_ConfigStore extends Contract {
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
export declare module OSWAP_ConfigStore {
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
