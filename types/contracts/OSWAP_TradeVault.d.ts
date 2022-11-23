import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_TradeVault extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        govToken: string;
        configStore: string;
    }): Promise<string>;
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_TradeVault.AddLiquidityEvent[];
    decodeAddLiquidityEvent(event: Event): OSWAP_TradeVault.AddLiquidityEvent;
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_TradeVault.RemoveLiquidityEvent[];
    decodeRemoveLiquidityEvent(event: Event): OSWAP_TradeVault.RemoveLiquidityEvent;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_TradeVault.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_TradeVault.SwapEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_TradeVault.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_TradeVault.UpdateConfigStoreEvent;
    parseVoidOrderEvent(receipt: TransactionReceipt): OSWAP_TradeVault.VoidOrderEvent[];
    decodeVoidOrderEvent(event: Event): OSWAP_TradeVault.VoidOrderEvent;
    EIP712_TYPEHASH(): Promise<string>;
    NAME_HASH(): Promise<string>;
    ORDER_TYPEHASH(): Promise<string>;
    VERSION_HASH(): Promise<string>;
    addLiquidity(params: {
        srcToken: string;
        amount: number | BigNumber;
        fee: number | BigNumber;
    }): Promise<TransactionReceipt>;
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
    lpBalances(params: {
        param1: string;
        param2: string;
    }): Promise<BigNumber>;
    lpFeeBalances(param1: string): Promise<BigNumber>;
    redeemFund(token: string): Promise<TransactionReceipt>;
    removeLiquidity(params: {
        srcToken: string;
        amount: number | BigNumber;
        fee: number | BigNumber;
    }): Promise<TransactionReceipt>;
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
    tokenBalances(param1: string): Promise<BigNumber>;
    totalLpFeeBalance(): Promise<BigNumber>;
    updateConfigStore(): Promise<TransactionReceipt>;
    voidOrder(params: {
        signatures: string;
        nonceToVoid: number | BigNumber;
    }): Promise<TransactionReceipt>;
    voidedNonce(param1: string): Promise<BigNumber>;
}
export declare module OSWAP_TradeVault {
    interface AddLiquidityEvent {
        owner: string;
        srcToken: string;
        amount: BigNumber;
        balance: BigNumber;
        _event: Event;
    }
    interface RemoveLiquidityEvent {
        provider: string;
        srcToken: string;
        amount: BigNumber;
        balance: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        provider: string;
        troll: string;
        id: string;
        inAmount: BigNumber;
        outAmount: BigNumber;
        srcTokenBalance: BigNumber;
        outTokenBalance: BigNumber;
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
}
