import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
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
export declare class OSWAP_ConfigStoreTradeVault extends Contract {
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
export declare module OSWAP_ConfigStoreTradeVault {
    interface ParamSet1Event {
        name: string;
        value1: string;
        _event: Event;
    }
}
