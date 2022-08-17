import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
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
export declare class OSWAP_RouterVaultWrapper extends Contract {
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
export declare module OSWAP_RouterVaultWrapper {
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
