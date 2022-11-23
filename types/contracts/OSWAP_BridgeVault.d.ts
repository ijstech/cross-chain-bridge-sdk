import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
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
    recipient: string;
    amount: number | BigNumber;
}
export interface ITransferFromParams {
    sender: string;
    recipient: string;
    amount: number | BigNumber;
}
export interface IVoidOrderParams {
    signatures: string[];
    orderId: string;
}
export declare class OSWAP_BridgeVault extends Contract {
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
export declare module OSWAP_BridgeVault {
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
