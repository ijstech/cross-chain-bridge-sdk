import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_TradeVault2 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        govToken: string;
        configStore: string;
    }): Promise<string>;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_TradeVault2.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_TradeVault2.SwapEvent;
    parseTopupFeeEvent(receipt: TransactionReceipt): OSWAP_TradeVault2.TopupFeeEvent[];
    decodeTopupFeeEvent(event: Event): OSWAP_TradeVault2.TopupFeeEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_TradeVault2.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_TradeVault2.UpdateConfigStoreEvent;
    parseVoidOrderEvent(receipt: TransactionReceipt): OSWAP_TradeVault2.VoidOrderEvent[];
    decodeVoidOrderEvent(event: Event): OSWAP_TradeVault2.VoidOrderEvent;
    parseWithdrawFeeEvent(receipt: TransactionReceipt): OSWAP_TradeVault2.WithdrawFeeEvent[];
    decodeWithdrawFeeEvent(event: Event): OSWAP_TradeVault2.WithdrawFeeEvent;
    EIP712_TYPEHASH(): Promise<string>;
    NAME_HASH(): Promise<string>;
    ORDER_TYPEHASH(): Promise<string>;
    VERSION_HASH(): Promise<string>;
    configStore(): Promise<string>;
    counts(param1: string): Promise<BigNumber>;
    govToken(): Promise<string>;
    hashOrder(order: {
        nonce: number | BigNumber;
        srcToken: string;
        outToken: string;
        price: number | BigNumber;
        tradeLotSize: number | BigNumber;
        maxCount: number | BigNumber;
        startDate: number | BigNumber;
        endDate: number | BigNumber;
    }): Promise<string>;
    hashVoidOrder(nonce: number | BigNumber): Promise<string>;
    lpFeeBalances(param1: string): Promise<BigNumber>;
    recover(params: {
        paramHash: string;
        signature: string;
    }): Promise<string>;
    redeemFund(token: string): Promise<TransactionReceipt>;
    swapExactTokensForTokens(params: {
        signatures: string;
        inAmount: number | BigNumber;
        pair: string[];
        deadline: number | BigNumber;
        order: {
            nonce: number | BigNumber;
            srcToken: string;
            outToken: string;
            price: number | BigNumber;
            tradeLotSize: number | BigNumber;
            maxCount: number | BigNumber;
            startDate: number | BigNumber;
            endDate: number | BigNumber;
        };
    }): Promise<TransactionReceipt>;
    topupFee(fee: number | BigNumber): Promise<TransactionReceipt>;
    totalLpFeeBalance(): Promise<BigNumber>;
    updateConfigStore(): Promise<TransactionReceipt>;
    voidOrder(params: {
        signatures: string;
        nonceToVoid: number | BigNumber;
    }): Promise<TransactionReceipt>;
    voidedNonce(param1: string): Promise<BigNumber>;
    withdrawFee(fee: number | BigNumber): Promise<TransactionReceipt>;
}
export declare module OSWAP_TradeVault2 {
    interface SwapEvent {
        provider: string;
        troll: string;
        id: string;
        inAmount: BigNumber;
        outAmount: BigNumber;
        _event: Event;
    }
    interface TopupFeeEvent {
        owner: string;
        amount: BigNumber;
        balance: BigNumber;
        _event: Event;
    }
    interface UpdateConfigStoreEvent {
        newConfigStore: string;
        _event: Event;
    }
    interface VoidOrderEvent {
        owner: string;
        troll: string;
        nonce: BigNumber;
        _event: Event;
    }
    interface WithdrawFeeEvent {
        provider: string;
        amount: BigNumber;
        balance: BigNumber;
        _event: Event;
    }
}
